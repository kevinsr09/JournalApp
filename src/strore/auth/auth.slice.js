import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'not-authenticated', // 'authenticated', 'not-authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: undefined
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, { payload } ) => {
 
    },
    logout: ( state, { payload } ) => {
 
    },
    checkingCredentials: ( state ) => {
      state.status = 'checking'
    }
   
  },
})

// Action creators are generated for each case reducer function

export const { login, logout, checkingCredentials } = counterSlice.actions