import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterByName = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  const deletingContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filterByName().map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => deletingContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
