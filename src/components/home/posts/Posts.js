import React, { useEffect, useState } from 'react'
import {API } from '../../../service/api'
import Post_card from './Post_card';
import {useSearchParams} from 'react-router-dom';


export default function Posts() {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]);

  return (
    <>
    <div className="all_posts">
    {
        posts && posts.length > 0 ? posts.map(post => (
            <Post_card post={post}/>
        )) : <div className='notfound'>No Blog found related to {category}</div>
    }
    </div>
    </>
  )
}
