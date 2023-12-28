import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './operations';
import { deleteContact } from './operations';
const handlePending = state => {
  state.error = false;
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = true;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
   
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const newObj = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.items = newObj;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

