import api from "./axios";

export const getEbooks = () => api.get("/ebooks");

export const uploadEbook = (data) =>
  api.post("/ebooks", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteEbook = (id) =>
  api.delete(`/ebooks/${id}`);

export const searchEbooks = (query) =>
  api.get(`/ebooks/search?q=${query}`);

export const getEbook = (id) =>
  api.get(`/ebooks/${id}`);