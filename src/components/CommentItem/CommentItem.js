import './CommentItem.css';

const CommentItem = ({ comment }) => {
  return (
    <div className='commment'>
      <div className='user__img'>
        <img src={comment.photoURL} alt='user-avatar' />
      </div>
      <div className='comment__info'>
        <div className='username'>{comment.displayName}</div>
        <div className='comment__content'>{comment.content}</div>
        <div className='time'>
          {new Date(comment.createdAt).toLocaleString('en-GB')}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
