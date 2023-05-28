import axios from 'axios';
import { apiRoutes } from 'shared/routes.ts';

export const api = axios.create({
  baseURL: apiRoutes.main(),
});


export const getAllPosts = async (page: number) => {
  const response = await api.get(apiRoutes.posts(page));
  return response.data;
};

export const getPostComments = async (id: number) => {
  const response = await api.get(apiRoutes.comments(id));
  return response.data;
};

export const getUserPosts = async (userId: number) => {
  const response = await api.get(apiRoutes.userPosts(userId));
  return response.data;
};

export const getUserInfo = async (userId: number) => {
  const response = await api.get(apiRoutes.user(userId));
  return response.data;
};
