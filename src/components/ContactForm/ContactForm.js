import React, { Component } from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contactsAction";
import withTheme from "../../hoc/withTheme";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.addContact({ name, number });

    this.setState({ name: "", number: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { themeConfig, type } = this.props.theme;

    return (
      <div
        style={{
          color: themeConfig[type].fontColor,
          background: themeConfig[type].bodybg
        }}
      >
        <h2>Phonebook</h2>

        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <label className={styles.contactLabel}>
            Name
            <input
              className={styles.contactInput}
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.contactLabel}>
            Number
            <input
              className={styles.contactInput}
              type="number"
              value={this.state.number}
              name="number"
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.contactSubmit} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addContact: contactsAction.addContact
}

export default withTheme(connect(null, mapDispatchToProps)(ContactForm));
