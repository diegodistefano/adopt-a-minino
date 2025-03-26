const API_KEY = "live_kg452T34tBZDb4oN4wyKXi6QA8VukzL4WhepLyeQB0srFoRbz1XIPi9oHSE6UNcI";
const URL_API = "https://api.thecatapi.com/v1/images/search?limit=10&include_breeds=true";



export async function getPenguins() {
    const response = await fetch(URL_API, {
      method: "GET",
      headers: {
       'x-api-key':API_KEY,
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    return data;
}

