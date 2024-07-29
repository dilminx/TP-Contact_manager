import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { id, name, tp, email } = props.contact;

  return (
    <div className="contact-item">
      <div className="contact">
        <div className="con-details">
          <div>{name}</div>
          <div>{email}</div>
          <div>{tp}</div>
        </div>
        <div>
          <FontAwesomeIcon 
            icon={faTrashAlt} 
            onClick={() => props.clickHandler(id)} 
            style={{ cursor: "pointer", color: "red" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
