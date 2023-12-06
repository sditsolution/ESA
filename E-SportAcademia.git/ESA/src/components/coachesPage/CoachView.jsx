import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const CoachView = ({ name, img }) => {
  return (
    <div>
      {/* <Link to={`coach/${name}`}> */}
      <img src={img} alt="coachpicture" />
      {/* </Link> */}
      <h3>{name}</h3>
      <p>Subscriber:</p>
    </div>
  );
};

export default CoachView;
