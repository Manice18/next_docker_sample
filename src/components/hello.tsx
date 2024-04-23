"use client";

import { useEffect, useState } from "react";

export default function Hello() {
  const [resultFromRouteHandler, setResultFromRouteHandler] = useState("");

  useEffect(() => {
    const getResult = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();

      setResultFromRouteHandler(data.message);
    };

    getResult();
  }, []);
  return (
    <div>
      <p>Hello from client component!</p>

      <p>Result from route handler: {resultFromRouteHandler}</p>
    </div>
  );
}
