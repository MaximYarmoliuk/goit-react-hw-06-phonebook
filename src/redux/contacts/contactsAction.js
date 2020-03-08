import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      number
    }
  }
}));

const removeContact = createAction("contacts/remove");

const changeFilter = createAction("contacts/changeFilter");

export default {
  addContact,
  removeContact,
  changeFilter
};
