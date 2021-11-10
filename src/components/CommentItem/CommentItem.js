import './CommentItem.css';

const CommentItem = ({ comment }) => {
  return (
    <div className='commment'>
      <div className='user__img'>
        <img src={comment.image} alt='user-avatar' />
      </div>
      <div className='comment__info'>
        <div className='username'>{comment.username}</div>
        <div className='comment__content'>{comment.content}</div>
        <div className='time'>{comment.time}</div>
      </div>
    </div>
  );
};

export default CommentItem;
