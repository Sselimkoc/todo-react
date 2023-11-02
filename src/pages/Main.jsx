import Table from "../components/Table.js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Main() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/route/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Table data={data} />
    </div>
  );
  // return <div>{data ? <Table data={data} /> : <p>Loading data...</p>}</div>;
}

export default Main;
