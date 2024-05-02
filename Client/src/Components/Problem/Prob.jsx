import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Prob() {
  const params = useParams();

  const [probData, setProbData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/questions/${params.probId}`)
      .then((response) => response.json())
      .then((json) => setProbData(json));
  }, []);

  if (probData.length === 0) return <p>Loading...</p>;
  return (
    <div className="prob">
      {probData.map((prob) => (
        <div className="problemListed" key={prob._id}>
          <h1>{prob.title}</h1>
          <p>{prob.description}</p>
        </div>
      ))}
    </div>
  );
}
