import './CommentItem.css';

const CommentItem = ({comment}) => {
    return(
    <div className="commment">
       <img src={comment.image} className="user__img"/>
        <div className="comment__info">
            <div className="username">
                {comment.username}
            </div>
            <div className="comment__content">
                {comment.content}
            </div>
            <div className="time">
                {comment.time}
            </div> 
        </div>
    </div>
    )
}

export default CommentItem;