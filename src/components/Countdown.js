import React, { useEffect, useState } from "react";

export function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>Sayaç: {count} saniye</div>;
}
