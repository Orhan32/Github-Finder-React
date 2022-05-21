import React from "react";

const Repo = ({ repo }) => {
  return (
    <li className="list-group-item">
      <i className="fa-solid fa-book"></i>{" "}
      <a target={"_blank"} href={repo.html_url}>
        {" "}
        {repo.name}
      </a>
    </li>
  );
};

export default Repo;
