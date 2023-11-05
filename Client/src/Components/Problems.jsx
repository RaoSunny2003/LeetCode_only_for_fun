import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setProblems(json));
  }, []);

  console.log("Problems", problems);

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
      <tbody>
        {problems.map((problem) => (
          <tr key={problem.id}>
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
