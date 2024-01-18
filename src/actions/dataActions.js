import axios from "axios";
import { FETCH_DATA, ADD_DATA, UPDATE_DATA, DELETE_DATA } from "./types";

const API_ENDPOINT = "http://localhost/api/";

export const fetchData = () => async (dispatch) => {
  const response = await axios.get(`${API_ENDPOINT}/data`);

  dispatch({
    type: FETCH_DATA,
    payload: response.data,
  });
};

export const addData = (newData) => async (dispatch) => {
  const response = await axios.post(`${API_ENDPOINT}/data`, newData);

  dispatch({
    type: ADD_DATA,
    payload: response.data,
  });
};

export const updateData = (id, updatedData) => async (dispatch) => {
  const response = await axios.put(`${API_ENDPOINT}/data/${id}`, updatedData);

  dispatch({
    type: UPDATE_DATA,
    payload: response.data,
  });
};

export const deleteData = (id) => async (dispatch) => {
  await axios.delete(`${API_ENDPOINT}/data/${id}`);

  dispatch({
    type: DELETE_DATA,
    payload: id,
  });
};
