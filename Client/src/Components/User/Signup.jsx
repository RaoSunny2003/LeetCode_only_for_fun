import React, { useState } from "react";

export default function Signup() {
  const [user, setUser] = React.useState("USER");

  const handleAdminChange = () => {
    setUser("ADMIN");
  };

  const handleUserChange = () => {
    setUser("USER");
  };

  return (
    <>
      <div className="signup">
        <form method="post" action="http://localhost:3000/signup">
          {/* Username */}

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
            />
          </div>

          {/* Email */}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>

          {/* Password */}

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>

          {/* Radio Button */}

          <div className="radio">
            <RadioButton
              label={"User"}
              value={user === "USER"}
              onChange={handleUserChange}
            />

            <RadioButton
              label={"Admin"}
              value={user === "ADMIN"}
              onChange={handleAdminChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label className="radio-element">
      <input type="radio" checked={value} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
};
