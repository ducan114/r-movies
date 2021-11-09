import { useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import './CommentList.css';

const comments = [{
    username:'QuangNV',
    image:'http://image.tmdb.org/t/p/w780/tUfrp4WSN8xkUzAx18APG05mR8h.jpg',
    content:'Xa cách đã lâu, rủ hội bạn thân, rủ gấu, rủ cờ-rớt…  săn ưu đãi vé máy bay, khách sạn, vé vui chơi Xperience giá cực hời rồi lên đường ngay thôi!Xa cách đã lâu, rủ hội bạn thân, rủ gấu, rủ cờ-rớt…  săn ưu đãi vé máy bay, khách sạn, vé vui chơi Xperience giá cực hời rồi lên đường ngay thôi!',
    time:'3 ngày'

}]
const CommentList = (props) =>{ 
    const user = {
        image:'http://image.tmdb.org/t/p/w780/tUfrp4WSN8xkUzAx18APG05mR8h.jpg',
        username:'QuangNV'
    }

    const [commentList, setCommentList] = useState(comments);
    const handleComment = (content) => {
        const newComment = {
            username: user.username,
            image: user.image,
            content: content,
            time: '3 ngày'
        }
        const newCommentList = [...commentList, newComment]
        setCommentList(newCommentList);
    }
    return(
        <div className="comments">
            <div className="add__comment">
                <img src={user.image} className="user__img"/>
                <CommentForm handleComment={handleComment}/>
            </div>
            {commentList.map((comment, item) => {
                return(
                    <CommentItem key={item} comment={comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;