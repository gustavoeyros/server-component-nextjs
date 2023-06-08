import Post from "./post";

const getData = async () => {
  let req = await fetch("https://jsonplaceholder.typicode.com/posts");
  return req.json();
};

export default async function Posts() {
  let posts = await getData();
  return (
    <div>
      {posts.map((item: IPost) => (
        <Post key={item.id} data={item} />
      ))}
    </div>
  );
}
