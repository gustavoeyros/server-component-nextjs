"use client";

import { useRouter } from "next/navigation";
import LikeButton from "./like-button";

export default function Post({ data }: IPost) {
  /*   const router = useRouter();
  router.refresh(); */

  let { title, body, id } = data;

  return (
    <div className="p-3">
      <h2 className="text-2xl">{title}</h2>
      <p>{body}</p>
      <LikeButton />
    </div>
  );
}
