import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { connect } from "react-redux";
import withTheme from "../../hoc/withTheme";
import propTypes from "prop-types";

const ContactList = ({ contacts, theme }) => {
  const { themeConfig, type } = theme;

  return (
    <div
      style={{
        color: themeConfig[type].fontColor,
        background: themeConfig[type].bodybg
      }}
    >
      <h2>Contacts</h2>
      <ul className="Contact">
        {contacts.map(({ id }) => (
          <ContactListItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return {
    contacts: filteredContacts
  };
};

export default withTheme(connect(mapStateToProps)(ContactList));
