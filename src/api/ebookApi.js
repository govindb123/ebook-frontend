import api from "./axios";

export const getEbooks = () => api.get("/ebooks");

export const getEbook = (id) => api.get(`/ebooks/${id}`);

export const searchEbooks = (query) =>
  api.get(`/ebooks/search?q=${query}`);

export const uploadEbook = (formData) =>
  api.post("/ebooks", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteEbook = (id) =>
  api.delete(`/ebooks/${id}`);