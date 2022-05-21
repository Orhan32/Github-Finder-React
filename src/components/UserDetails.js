import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";
import Repos from "./Repos";
import GithubContext from "../context/github/GithubContext";

const UserDetails = () => {
  const { user, getUser, loading, getUserRepo, repos } =
    useContext(GithubContext);

  let { login } = useParams();

  useEffect(() => {
    getUser(login);
    getUserRepo(login);
  }, []);

  const {
    name,
    avatar_url,
    html_url,
    location,
    bio,
    blog,
    followers,
    following,
    public_repos,
  } = user;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={avatar_url} alt={name} className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{name}</p>
                <p>
                  <i className="fa-solid fa-location-dot">
                    {" "}
                    {location ? location : "Bilinmiyor"}
                  </i>
                </p>
                <p className="d-grid">
                  <a
                    className="btn btn-block btn-dark"
                    target="_blank"
                    href={html_url}
                  >
                    Github Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                {bio && (
                  <>
                    <h3>About</h3>
                    <p>{bio}</p>
                  </>
                )}
                {blog && (
                  <>
                    <h3>Blog</h3>
                    <p>{blog}</p>
                  </>
                )}
                <div>
                  <span className="badge bg-primary m-1">
                    Followers: {followers}
                  </span>
                  <span className="badge bg-danger m-1">
                    Following: {following}
                  </span>
                  <span className="badge bg-success m-1">
                    Repo: {public_repos}
                  </span>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <Repos repos={repos} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserDetails;
