import React from "react";

function Bottom({ mood }) {
  return (
    <div className={mood ? "" : "bg-dark"}>
      <div className="container">
        <div className="row"></div>
        <div
          className={
            mood
              ? "d-flex justify-content-center mt-5"
              : "d-flex justify-content-center mt-5 text-white"
          }
        >
          <h5>Made with ❤️ by Bharathiraja</h5>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
