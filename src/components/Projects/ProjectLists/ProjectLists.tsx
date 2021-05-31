import React from "react";
import { Link } from "react-router-dom";

const ProjectLists = () => {
  return (
    <div className="projectCard">
      <Link to="/project/podcast-app">
        <div className="card">Podcast-app</div>
      </Link>
      <Link to="/project/resto-app">
        <div className="card">Resto-app</div>
      </Link>
      <Link to="/project/getsion-fond">
        <div className="card">Gestion-fond</div>
      </Link>
      <Link to="/project/todo-app">
        <div className="card">Todo-app</div>
      </Link>
    </div>
  );
};

export default ProjectLists;
