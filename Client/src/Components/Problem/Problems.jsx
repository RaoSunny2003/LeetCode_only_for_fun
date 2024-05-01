import React, { useEffect, useState } from "react";

export default function Problems() {
  const [questionsList, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions/all")
      .then((response) => response.json())
      .then(({ allQuestions }) => {
        setQuestions(allQuestions);
      });
  }, []);
  return (
    <>
      <div>
        {questionsList.map((que) => (
          <div key={que._id}>{que.title}</div>
        ))}
      </div>
    </>
  );
}
