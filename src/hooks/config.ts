export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
export const RAPIDAPI_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

if (!BASE_URL) {
    throw new Error('Missing BASE_URL environment variable');
}

if (!RAPIDAPI_KEY) {
    throw new Error('Missing RAPIDAPI_KEY environment variable');
}

if (!RAPIDAPI_HOST) {
    throw new Error('Missing RAPIDAPI_HOST environment variable');
}