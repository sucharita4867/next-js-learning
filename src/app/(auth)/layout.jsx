import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2">{children}</div>
      <div className="flex-1 bg-sky-200 p-6 rounded">
        <h3 className="text-5xl font-bold">Welcome for Authentication</h3>
      </div>
    </div>
  );
};

export default AuthLayout;
