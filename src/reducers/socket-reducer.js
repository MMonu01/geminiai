import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
  socket_id: null,
  socket_list: [],
  messages: [],
};

export const ChatSlice = createSlice({
  name: "SocketSlice",
  initialState,
  reducers: {
    SOCKET_SET_CONNECTION_DATA: (state, { payload }) => {
      state.socket = payload.socket;
      state.socket_id = payload.socket_id;

      return state;
    },

    RESET_SOCKET: (state) => {
      return initialState;
    },

    SOCKET_SET_LIVE_USER: (state, { payload }) => {
      state.socket_list = payload;

      return state;
    },

    SOCKET_GET_MESSAGES: (state, { payload }) => {
      state.messages = payload;

      return state;
    },
  },
});

export const { SOCKET_SET_CONNECTION_DATA, RESET_SOCKET, SOCKET_SET_LIVE_USER, SOCKET_GET_MESSAGES } = ChatSlice.actions;

export default ChatSlice.reducer;
