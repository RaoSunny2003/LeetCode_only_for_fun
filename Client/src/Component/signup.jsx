import React from "react";

export function Signup() {
  return (
    <>
      <div>
      <h1>Sign-Up</h1>
        <form>
            <input type="text" placeholder="Username"/>
            <br />
            <input type="email" placeholder="Email"/>
            <br />
            <input type="password" placeholder="Password"/>
            <br />
            <button>Submit</button>
        </form>
      </div>
    </>
  );
}
