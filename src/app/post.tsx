import LikeButton from "./like-button";

export default function Post({ data }: IPost) {
  let { title, body, id } = data;

  return (
    <div className="p-3">
      <h2 className="text-2xl">{title}</h2>
      <p>{body}</p>
      <LikeButton />
    </div>
  );
}
