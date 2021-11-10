import { useState, useRef, useEffect } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import './CommentList.css';

const CommentList = props => {
  const user = {
    image: 'http://image.tmdb.org/t/p/w780/tUfrp4WSN8xkUzAx18APG05mR8h.jpg',
    username: 'QuangNV'
  };

  const [commentList, setCommentList] = useState([]);

  const containerRef = useRef();
  const initialRender = useRef(true);

  // TODO: Create useEffect to fetch comments;
  // useEffect(() => {
  //   setCommentList(fetch(endpoint).then(res => res.json()))
  //   initalRender.current = false
  // }, [])

  useEffect(() => {
    if (initialRender.current) return (initialRender.current = false);
    containerRef.current.scrollIntoView();
  }, [commentList]);

  const handleComment = content => {
    const newComment = {
      username: user.username,
      image: user.image,
      content: content,
      time: '3 ngày'
    };
    // TODO: const newComment =  await fetch(endpoint, body)
    const newCommentList = [...commentList, newComment];
    setCommentList(newCommentList);
  };
  return (
    <div className='container' ref={containerRef}>
      <div className='inner-container'>
        <h1>Comments</h1>
        <div className='comments'>
          {commentList.map((comment, item) => (
            <CommentItem key={item} comment={comment} />
          ))}
          <div className='add__comment'>
            <div className='user__img'>
              <img src={user.image} alt='user-avatar' />
            </div>
            <CommentForm handleComment={handleComment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;