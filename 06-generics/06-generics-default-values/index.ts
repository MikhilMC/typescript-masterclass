/*
 * Generic Default Values
 */

async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchDefault() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
}

fetchDefault();

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPost() {
  const data = await fetchData<PostType>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(data);
}

fetchPost();

export {};
