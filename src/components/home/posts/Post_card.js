import './post.css'
import {addElipsis} from '../../../utils/common-utils'
import {Link} from 'react-router-dom'

export default function Post_card({post}) {

  const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  return (
    <>
      <div className="post_container">
        <div className="post_image">
          <img
            src={url}
            alt="img"
          />
        <span>{post.categories}</span>
        </div>
        <div className="post_content">
          <h2>{addElipsis(post.title, 26)}</h2>
          <div className="description" dangerouslySetInnerHTML = {{__html: addElipsis(post.description, 100)}}>
          </div>
          <div id="author">
            <span>{post.username}</span>
            <br />
            <Link to={`details/${post._id}`}>
            <button>Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
