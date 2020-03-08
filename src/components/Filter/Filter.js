import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contactsAction";
import withTheme from "../../hoc/withTheme";
import styles from "./Filter.module.css";

function Filter({ value, onChangeFilter, theme }) {
  const { themeConfig, type } = theme;

  return (
    <div
      style={{
        color: themeConfig[type].fontColor,
        background: themeConfig[type].bodybg
      }}
    >
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: state.contacts.filter
});

const mapDispatchToProps = {
  onChangeFilter: contactsAction.changeFilter
};

export default withTheme(
  connect(mapStateToProps, mapDispatchToProps)(Filter)
);
