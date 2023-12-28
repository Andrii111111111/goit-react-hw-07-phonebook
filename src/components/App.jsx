import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { StyledDiv, ContactsTitle, HeaderTitle } from './Header.style';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledDiv>
      <HeaderTitle>Phonebook</HeaderTitle>
      <ContactForm  />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter  />
      <ContactList/>
    </StyledDiv>
  );
};