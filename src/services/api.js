// api/index.js
import axios from 'axios';

const baseURL = '  https://cerulean-marlin-wig.cyclic.app/';

const instance = axios.create({
  baseURL,
});

export const fetchCalls = async (data) => {
  try {
    const response = await instance.get("activities");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCalls = async (data) => {
  let {id, status} = data
  try {
    const response = await instance.patch(`activities/${id}`,{ is_archived:status });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCallDetail = async (data) => {
  let {id} = data
  try {
    const response = await instance.get(`activities/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
