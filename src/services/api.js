const BASE_URL = "https://backend.nimajuice.workers.dev";

/**
 * Login user
 */
export async function loginUser(username, password) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return await res.json(); // backend kirim JSON
}

/**
 * Register user baru
 */
export async function registerUser(username, password, role = "user") {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, role })
  });
  return await res.json();
}

/**
 * Ambil daftar produk
 */
export async function listProducts() {
  const res = await fetch(`${BASE_URL}/list-products`);
  return await res.json();
}
