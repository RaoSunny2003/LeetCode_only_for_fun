import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setProblems(json));
  }, []);

  if (problems.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody className="allProblem">
        {problems.map((problem) => (
          <tr key={problem.id} className="singleProblem">
            <td>{problem.id}</td>
            <td>
              <NavLink to={`/prob/${problem.id}`}>{problem.title}</NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
