import React from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import ThemeContext from "../contexts/ThemeContext/ThemeContext";

function App({ contacts }) {
  return (
    <ThemeContext>
      <div>
        <ThemeSelector />

        <ContactForm />

        {contacts.length >= 2 && <Filter />}

        <ContactList />
      </div>
    </ThemeContext>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items
});

export default connect(mapStateToProps)(App);
