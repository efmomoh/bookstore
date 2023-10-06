import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/brP8qnqWTkVVuPtnhwZy/books';

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await axios.post(baseURL, newBook);
    return newBook;
  } catch (error) {
    throw new Error('Error posting book:', error.response.data);
  }
});

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (itemId) => {
    try {
      await axios.delete(`${baseURL}/${itemId}`);
      return itemId;
    } catch (error) {
      throw new Error('Error removing book:', error);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksData = action.payload;
        const booksArray = Object.keys(booksData).map((itemId) => ({
          itemId,
          ...booksData[itemId][0],
        }));
        state.isLoading = false;
        state.books = booksArray;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const newBook = action.payload;
        state.books.push(newBook);
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const itemIdToRemove = action.payload;
        state.isLoading = false;
        state.books = state.books.filter(
          (book) => book.itemId !== itemIdToRemove,
        );
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default booksSlice.reducer;
