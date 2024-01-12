import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Prob() {
  const params = useParams();

  const [probData, setProbData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.probId}`)
      .then((response) => response.json())
      .then((json) => setProbData(json));
  }, []);
  console.log("Problem Data", probData);

  if (probData === null) return <p>Loading...</p>;
  return (
    <div>
      <h2>
        {probData.id}. {probData.title}
      </h2>
      <p>{probData.body}</p>
    </div>
  );
}
