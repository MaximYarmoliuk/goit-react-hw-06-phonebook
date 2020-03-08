import React from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contactsAction";
import propTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={styles.item}>
      <p className="TaskList-text">
        {name}: {number}
      </p>
      <button className={styles.button} type="button" onClick={onRemoveContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onRemoveContact: propTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);

  return {
    ...item
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactsAction.removeContact(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
