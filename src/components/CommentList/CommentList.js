import { useRef, useEffect } from 'react';
// Components
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
// Contexts
import { useAuth } from '../../contexts/AuthContext';
// Styles
import './Commentscomments.css';
// API
import { API } from '../../API';

const Commentscomments = ({
  comments,
  loading,
  movieId,
  setError,
  setComments
}) => {
  const containerRef = useRef();
  const initialRender = useRef(true);
  const { currentUser, logIn } = useAuth();

  useEffect(() => {
    if (initialRender.current) return (initialRender.current = false);
    containerRef.current.scrollIntoView();
  }, [comments]);

  const createComment = async content => {
    try {
      const newComment = {
        uid: currentUser.uid,
        content: content,
        movie_id: movieId
      };

      await API.createComment(newComment);

      setComments(...comments, newComment);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <section className='container' ref={containerRef}>
      <div className='inner-container'>
        <h1>Comments</h1>
        {loading || (
          <div className='comments'>
            {comments.map((comment, item) => (
              <CommentItem key={item} comment={comment} />
            ))}
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
        )}
      </div>
    </section>
  );
};

export default Commentscomments;
