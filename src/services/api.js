// Base URL backend (Cloudflare Worker yang sudah di-deploy)
const BASE_URL = "https://backend.nimajuice.workers.dev";

/**
 * Login user
 * @param {string} username
 * @param {string} password
 * @returns {Promise<string>} response text dari backend
 */
export async function loginUser(username, password) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return await res.text();
}

/**
 * Register user baru
 * @param {string} username
 * @param {string} password
 * @param {string} role
 * @returns {Promise<string>} response text dari backend
 */
export async function registerUser(username, password, role) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, role })
  });
  return await res.text();
}

/**
 * Ambil daftar produk
 * @returns {Promise<object>} JSON list produk dari backend
 */
export async function listProducts() {
  const res = await fetch(`${BASE_URL}/list-products`);
  return await res.json();
}
