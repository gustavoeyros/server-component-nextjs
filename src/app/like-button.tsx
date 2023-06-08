"use client";

import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}
