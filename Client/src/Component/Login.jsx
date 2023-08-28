import React from "react";

export function Login() {
  return (
    <>
      <div>
      <h1>Log-in</h1>
        <form>
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
 