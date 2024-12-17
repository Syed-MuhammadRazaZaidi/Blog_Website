import React, { useRef, useState } from "react";

const Comment = ({ comment, addReply }: any) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleReply = () => {
    setShowReplyBox(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 1);
  };

  const handleCancelButton = () => {
    setShowReplyBox(false);
    setReplyText("");
  };

  const handleSaveReply = (commentId: any) => {
    addReply(commentId, replyText);
    setShowReplyBox(false);
    setReplyText("");
  };

  const handleKeyDown = (e: any, commentId: number) => {
    if (e.key === "Enter") {
      handleSaveReply(commentId);
    } else if (e.key === "Escape") {
      handleCancelButton();
    }
  };

  return (
    <li key={comment.id} className="ml-10">
      {comment.display}
      {!showReplyBox && (
        <button
          onClick={handleReply}
          className="m-3 py-1 px-2 text-sm rounded-lg bg-orange-500 text-gray-50 cursor cursor-pointer"
        >
          Reply
        </button>
      )}
      
      {showReplyBox ? (
        <>
          <br />
          <input
            type="text"
            value={replyText}
            className=" border border-black "
            ref={inputRef}
            onChange={(e: any) => setReplyText(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, comment.id)}
          />

          <br />

          <button
            className="m-3 py-1 px-2 text-sm rounded-lg bg-orange-500 text-gray-50 cursor cursor-pointer"
            onClick={() => handleSaveReply(comment.id)}
          >
            Save
          </button>
          <button
            className="m-3 py-1 px-2 text-sm rounded-lg bg-orange-500 text-gray-50 cursor cursor-pointer"
            onClick={handleCancelButton}
          >
            Cancel
          </button>
        </>
      ) : null}
      {comment.children.length ? (
        <ul>
          {comment.children.map((item: any) => (
            <Comment key={item.id} comment={item} addReply={addReply} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default Comment;
