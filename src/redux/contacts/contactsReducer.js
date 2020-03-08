import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./contactsAction";

const onAddAction = (state, { type, payload }) => {
  const { name, number } = payload.contact;
  const checkLength = string => string.length < 1;
  const checkOnExist = state.find(contact => contact.name === name);

  if (checkLength(`${name}`) || checkLength(`${number}`)) {
    alert("Please, fill in all required entry fields");
    return state;
  }

  if (checkOnExist) {
    alert(`${name} is already in contacts`);
    return state;
  }

  return [...state, payload.contact];
};

const onRemoveAction = (state, { type, payload }) => {
  return state.filter(contact => contact.id !== payload);
};

const onChangeFilter = (state, { type, payload }) => {
  return payload;
};

const items = createReducer([], {
  [contactActions.addContact]: onAddAction,
  [contactActions.removeContact]: onRemoveAction
});

const filter = createReducer("", {
  [contactActions.changeFilter]: onChangeFilter
});

export default combineReducers({
  items,
  filter
});
