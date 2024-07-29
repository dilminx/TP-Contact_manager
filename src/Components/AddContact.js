import React, { useState } from 'react';

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    tp: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.tp === "" || contact.email === "") {
      alert("Please enter all information");
      return;
    }
    addContactHandler(contact);
    setContact({ name: "", email: "", tp: "" }); // Clear the form after submission
  };

  return (
    <div className='Add-contact'>
      <h3>ADD CONTACTS</h3>
      <form onSubmit={add}>
        <label>Name :</label>
        <input
          type="text"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        /><br />
        <label>Contact Number :</label>
        <input
          type="text"
          value={contact.tp}
          onChange={(e) => setContact({ ...contact, tp: e.target.value })}
        /><br />
        <label>Email :</label>
        <input
          type="text"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        /><br />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default AddContact;
