export const pathRoutes = {
  main: () => '/',
  me: () => '/me',
  user: () => '/users/:userId',
};
export const apiRoutes = {
  main: () => 'https://jsonplaceholder.typicode.com',
  posts: () => '/posts',
  comments: (postId: number) => `/posts/${postId}/comments`,
  user: (userId: number) => `/users/${userId}`,
  userPosts: (userId: number) => `/users/${userId}/posts`,
};
