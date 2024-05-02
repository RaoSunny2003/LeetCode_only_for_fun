import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
          <div key={que._id}>
            <NavLink to={`/prob/${que.title}`}>{que.title}</NavLink>
            <div>{que.accptance}</div>
            <div>{que.difficulty}</div>
          </div>
        ))}
      </div>
    </>
  );
}
