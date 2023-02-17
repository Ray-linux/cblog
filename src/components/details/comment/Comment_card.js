import React from 'react'

export default function Comment_card({comment}) {
  return (
    <div className="coment_con">
      <div className="main_comment">
        <span id='main_comment'>{comment.comments}</span>
      </div>
      <div className="user">
        <span id='comment_user'>{comment.name}</span>
        <span id='comment_date'>{new Date(comment.commentDate).toLocaleDateString()}</span>
      </div>
    </div>
  )
}
