export const pathRoutes = {
  main: () => '/',
  me: () => '/me',
  user: () => '/users/:userId',
  userById: (id: number) => `/users/${id}`,
};
export const apiRoutes = {
  main: () => 'https://jsonplaceholder.typicode.com',
  posts: (page: number) => `/posts?_page=${page}&_limit=10`,
  comments: (postId: number) => `/posts/${postId}/comments`,
  user: (userId: number) => `/users/${userId}`,
  userPosts: (userId: number) => `/users/${userId}/posts`,
};
