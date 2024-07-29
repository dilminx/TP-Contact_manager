import { useState, useEffect } from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import Contactlist from "./Components/Contactlist";
import Header from "./Components/Header";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const addContactHandler = (contact) => {
    const newContacts = [...contacts, { ...contact, id: contacts.length + 1 }];
    setContacts(newContacts);
  };

  const removeContactHandler = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <Contactlist contact={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
