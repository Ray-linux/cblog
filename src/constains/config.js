export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading.........",
    message: "Data is being loaded, please wait",
  },
  success: {
    title: "success",
    message: "Data successfully loaded",
  },
  responceFailure: {
    title: "Error",
    message:
      "An error occured while fetching responce from the server. Plese try again",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message: "Unable to connect whit the server",
  },
};

///API SERVICE CALLS

export const SERVICE_URLS = {
  userSignup: {
    url: "/signup",
    method: "POST",
  },
  userLogin: {
    url: "/login",
    method: "POST",
  },
  uploadFile: {
    url: "/file/upload",
    method: "POST",
  },
  createPost: {
    url: "create",
    method: "POST",
  },
  getAllPosts: {
    url: "/posts",
    method: "GET",
    params: true,
  },
  getPostById: {
    url: "post",
    method: "GET",
    query: true,
  },
  updatePost: { url: "update", method: "PUT", query: true },
  deletePost: { url: "delete", method: "DELETE", query: true },
  newComment: { url: "/comment/new", method: "POST" },
  getAllComments: { url: 'comments', method: 'GET', query: true },
  sendMessage: {url: 'message', method: 'POST'}
};
