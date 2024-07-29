import React from "react";
import Card from "./Card";

const Contactlist = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContacts = props.contact.map((contact) => {
    return (
      <Card 
        key={contact.id} 
        contact={contact} 
        clickHandler={deleteContactHandler} 
      />
    );
  });

  return (
    <div className="Contact-list">
      <h2>Contact List</h2>
      <div className="cont">{renderContacts}</div>
    </div>
  );
};

export default Contactlist;
