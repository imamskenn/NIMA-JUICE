const baseUrl = "https://backend.nimajuice.workers.dev";

export async function registerUser(username, password, role) {
  const res = await fetch(baseUrl + "/register", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({username, password, role})
  });
  return res.text();
}

export async function loginUser(username, password) {
  const res = await fetch(baseUrl + "/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({username, password})
  });
  return res.text();
}

export async function listProducts() {
  const res = await fetch(baseUrl + "/list-products");
  return res.json();
}

export async function addProduct(name, stock, seller_id) {
  const res = await fetch(baseUrl + "/add-product", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({name, stock, seller_id})
  });
  return res.text();
}
