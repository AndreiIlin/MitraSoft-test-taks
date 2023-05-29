import { SortOrder } from 'shared/types.ts';

export const pathRoutes = {
  main: () => '/',
  me: () => '/me',
  user: () => '/users/:userId',
  userById: (id: number) => `/users/${id}`,
};
export const apiRoutes = {
  main: () => 'https://jsonplaceholder.typicode.com',
  posts: (page: number, sortOrder: SortOrder, searchQuery: string) => `/posts?_page=${page}&_limit=10&_sort=title&_order=${sortOrder}&title_like=${searchQuery}`,
  comments: (postId: number) => `/posts/${postId}/comments`,
  user: (userId: number) => `/users/${userId}`,
  userPosts: (userId: number, sortOrder: SortOrder, searchQuery: string) => `/users/${userId}/posts?_sort=title&_order=${sortOrder}&title_like=${searchQuery}`,
};
