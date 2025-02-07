// src/api/endPoint.js
export const BACKEND_URL = `http://localhost:4000`

export const API_BASE_URL = `${BACKEND_URL}/api/user`; // Your backend URL

// Registration Endpoint
export const REGISTER_URL = `${API_BASE_URL}/register`;

// Login Endpoint
export const LOGIN_URL = `${API_BASE_URL}/login`;

// Reset Password Endpoint
export const RESET_PASSWORD_URL = `${API_BASE_URL}/resetpassword`;


export const API_PROUDCT_URL = `${BACKEND_URL}/api/businesses`;

export const API_PROUDCTID_URL = `${BACKEND_URL}/api/businesses`;


export const API_IMAGE_UPLOAD_URL =`${BACKEND_URL}/api/img/upload`;

export const API_URL =`${BACKEND_URL}/api/login`