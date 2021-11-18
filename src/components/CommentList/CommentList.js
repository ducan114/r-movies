import { useState, useRef, useEffect } from 'react';
// Components
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
// Contexts
import { useAuth } from '../../contexts/AuthContext';
// Styles
import './CommentList.css';
// API
import API from '../../API';

const CommentList = ({ comments, loading, movieId, setComments }) => {
  const { currentUser, logIn } = useAuth();
  const [error, setError] = useState();
  const commentsRef = useRef();

  const createComment = async content => {
    try {
      const newComment = {
        uid: currentUser.uid,
        content: content,
        movie_id: movieId
      };

      await API.createComment(newComment);

      setComments(await API.fetchComments(movieId));
      commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!loading)
      commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
  }, [loading]);

  return (
    <section className='container'>
      <div className='inner-container'>
        <h1>Comments</h1>
        <div className='comments' ref={commentsRef}>
          {loading ||
            (error ? (
              <div className='comments-error'>{error}</div>
            ) : (
              comments.comments.map(({ _id, uid, ...rest }) => (
                <CommentItem
                  key={_id}
                  comment={{
                    ...rest,
                    ...comments.profiles[uid],
                    displayName:
                      currentUser && currentUser.uid === uid
                        ? 'You'
                        : comments.profiles[uid].displayName
                  }}
                />
              ))
            ))}
        </div>
        <div className='add__comment'>
          {currentUser ? (
            <>
              <div className='user__img'>
                <img src={currentUser.photoURL} alt='user-avatar' />
              </div>
              <CommentForm handleComment={createComment} />
            </>
          ) : (
            <div className='sign-in-first' onClick={logIn}>
              Sign in to comment
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentList;
