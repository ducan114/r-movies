import { useState } from 'react';
import './CommentForm.css';

const CommentForm = (props) => {
    const { handleComment} = props;
    const [content, setContent] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setContent('');
        if(handleComment){
            handleComment(content);
        }
    }
    return(
        <form className="form" onSubmit={(e) => {handleFormSubmit(e)}}>
            <input type="text" placeholder="Viết bình luận..." className="form__input" value={content} onChange={(e) => {setContent(e.target.value)}}/>
        </form>
    )
}

export default CommentForm;