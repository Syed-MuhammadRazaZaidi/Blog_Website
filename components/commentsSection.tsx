"use client";

import React, { useState } from "react";
import Comment from "./Comment";

const CommentsSection = () => {
  const [input, setInput] = useState("");
  const [comments, setComments]: any = useState([]);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const newComment = (text: any) => {
    return {
      id: new Date().getTime(),
      display: text,
      children: [],
    };
  };

  const handleNewComment = () => {      // e:any
    if (input) {
      setComments([...comments, newComment(input)]);
      setInput("");
    }
  };

  const addReply = (parentId: any, text: any) => {
    const copyComments = [...comments];
    addComments(copyComments, parentId, text);
  };

  const addComments = (comments: any, parentId: any, text: any) => {

    const parentComment = comments.find(
      (comment: any) => comment.id === parentId
    );

   
    if (parentComment) {
   
      parentComment.children.unshift(newComment(text));
      return;
    }

    comments.forEach((comment: any) =>
      addComments(comment.children, parentId, text)
    );
  };

  return (
    <div className="mt-10 border border-b text-xl font-semibold">
      <h1 className="text-3xl font-bold">Comments Section</h1>
   
      <div className="mt-5 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
        <input
          className="px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2  w-full sm:w-auto"
          value={input}
          type="text"
          placeholder="Enter your comment"
          onChange={handleInputChange}
        />
      </div>
   
      <div>
        <button
          onClick={handleNewComment}
          className="px-5 py-3 border bg-white text-black rounded-full mt-3 cursor-pointer border-black hover:bg-orange-500 transition-all duration-300 transform hover:scale-105"
        >
          Comment
        </button>
      </div>
  
      <div className="mt-10">
        {comments.map((item: any) => (
          <Comment key={item.id} comment={item} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
