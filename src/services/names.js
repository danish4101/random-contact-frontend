import api from "./apiConfig";

export const getNames = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  }
  catch (error) {
    console.error(`Failed to get names - error: ${error}`);
    throw error;
  }
};



// export const getImage = async (_id) => {
//   try {
//     const response = await axios.get(`/names${_id}`);
//     return response.data;
//   }
//   catch (error) {
//     console.error(`Failed to get names - error: ${error}`);
//     throw error;
//   }
// };


export const getName = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createName = async (data) => {
  try {
    const response = await api.post("/", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateName = async (id, data) => {
  try {
    const response = await api.put(`/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteName = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};



