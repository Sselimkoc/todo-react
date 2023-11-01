# main.py
from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)


@app.route('/api/route/<int:id>', methods=['GET'])
def get_mission_by_id(id):
    try:
        conn = sqlite3.connect(
            "C:\\Users\\selim\\Desktop\\react\\todos\\db\\user.db")
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM missions WHERE id={id}")
        mission = cursor.fetchall()
        conn.close()
        return jsonify(mission)
    except sqlite3.Error as e:
        print("SQLite hatası:", e)
        return jsonify(error="Database error"), 500


if __name__ == '__main__':
    app.run(debug=True)
