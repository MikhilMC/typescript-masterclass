/*
 * Generic Default Values
 */
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchDefault() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
}
fetchDefault();
async function fetchPost() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
}
fetchPost();
export {};
