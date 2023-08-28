import React from "react";
import "./Problems.css";

const problems = [
  {
    id: "1",
    title: "Two Sum",
    Accptance: "59.8%",
    Diffculty: "Easy",
  },
  {
    id: "2",
    title: "Two Sum",
    Accptance: "59.8%",
    Diffculty: "Easy",
  },
  {
    id: "3",
    title: "Two Sum",
    Accptance: "59.8%",
    Diffculty: "Easy",
  },
  {
    id: "4",
    title: "Two Sum",
    Accptance: "59.8%",
    Diffculty: "Easy",
  },
  {
    id: "5",
    title: "Two Sum",
    Accptance: "59.8%",
    Diffculty: "Easy",
  },
];

export function Problems() {
  return (
    <>
      <div>
        <nav className="probnav">
          <span>LeetCode</span>
          <span>Problems</span>
          <span className="premium">Premium</span>
        </nav>
        <div>
          <div className="problems-discription">
            <p>Number</p>
            <h4>Title</h4>
            <p>Accptance</p>
            <p>Diffculty</p>
          </div>
          {problems.map((problem) => (
            <div className="problems-list">
              <p>{problem.id}</p>
              <h4>{problem.title}</h4>
              <p>{problem.Accptance}</p>
              <p>{problem.Diffculty}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
