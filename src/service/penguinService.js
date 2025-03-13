const URL_API = "https://api.thecatapi.com/v1/images/search?limit=10";


export async function getPenguins() {
    const response = await fetch(URL_API);
    const data = await response.json();
    console.log(data);
    return data;
}