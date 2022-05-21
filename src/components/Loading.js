import React from "react";
import loading from "./loading.gif";

export const Loading = () => {
  return (
    <React.Fragment>
      <img
        src={loading}
        alt="Loading.."
        style={{ display: "block", margin: "auto" }}
      />
    </React.Fragment>
  );
};
