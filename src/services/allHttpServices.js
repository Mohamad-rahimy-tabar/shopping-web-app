import http from "./httpServices";

//product action
export function getAllProducts() {
  return http.get("/products");
}

export function getAllUsers() {
  return http.get("/users");
}

export function getSingleProduct(id) {
  return http.get(`/products/${id}`);
}

//user data action
export function addNewUser(data) {
  return http.post("/users", data);
}

export function getSingleUser(id) {
  return http.get(`/users/${id}`);
}

export function updateSingleUser(id, data) {
  return http.put(`/users/${id}`, data);
}

//user login
export function userLogin(data) {
  return http.post("/auth/login", data);
}
