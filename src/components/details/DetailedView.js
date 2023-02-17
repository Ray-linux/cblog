import { useEffect, useState, useContext} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom'
import {API} from '../../service/api'
import './details.css'
import {MdDelete, MdEdit} from 'react-icons/md'
import {DataContext} from '../../context/DataProvider'
import Comments from './comment/Comments';
import Nav from '../nav/Nav';

export default function DetailedView({isAuthenticated}) {
  const [post, setPost]  = useState({})
  const {id} = useParams();
  const {account} = useContext(DataContext)
  const navigate = useNavigate()


  const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  useEffect(() => {
      const fetchData = async() => {
        const res = await API.getPostById(id)
        if(res.isSuccess){
          setPost(res.data);
        }
      }
      fetchData()
  }, [])


  const deleteBlog =  async () => {
    const res = await API.deletePost(post._id);
    if(res.isSuccess){
      navigate('/');
    }
  }

  return (
  <>
  <Nav isAuthenticated={isAuthenticated}/>
    <div className='detailed_container'>
      <div className="detailed_image">
        <img src={url} alt="img"/>
        <div className="category_date">
            <span id='category'>{post.categories}</span>
            <span id='date'>{new Date(post.createdDate).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="functions">
        {
          account.username === post.username && isAuthenticated? 
          <>
          <Link to={`/update/${post._id}`}><button id='edit'><MdEdit/></button></Link>
          <button id='delete' onClick={() => deleteBlog()}><MdDelete/></button>
          </>: ''
        }
        
        
      </div>
      <div className="detailed_content">
        <div className="detailed_content_title">
          <span>{post.title}</span>
        </div>
        <div className="detailed_content_description">
          <span dangerouslySetInnerHTML = {{__html: post.description}}></span>
        </div>
        <div className="detailed_content_author">
          <span>Author : {post.username}</span>
        </div>
      </div>

      <div className="comments">
        <Comments post = {post}/>
      </div>
    </div>
    </>
    )
}