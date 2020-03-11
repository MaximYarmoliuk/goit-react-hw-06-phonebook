import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./contactsAction";

const onAddAction = (state, { type, payload }) => {
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
