import React, { useContext, useState } from "react";
import AlertContext from "../context/alert/AlertContext";
import GithubContext from "../context/github/GithubContext";

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    if (keyword === "") {
      setAlert("Lütlen Bir Kullanıcı Adı Giriniz.", "danger");
    } else {
      searchUsers(keyword);
      setKeyword("");
    }

    e.preventDefault();
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            onChange={onChange}
            type="text"
            value={keyword}
            className="form-control shadow-none"
          />
          <div className="input-group-append">
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="d-grid mt-2">
        {users.length > 0 && (
          <button onClick={clearUsers} className="btn btn-dark">
            Clear Results
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
