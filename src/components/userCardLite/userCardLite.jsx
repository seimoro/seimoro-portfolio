import { useNavigate } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import {  toggleLike } from '../../app/likesSlice';

const UserCardLite = (props) => {

    const dispatch = useDispatch()

    const likes = useSelector(state => state.likes.likes[props.id])

    const navigate = useNavigate()

    const viewDetails = () => {
        navigate(`/user/${props.id}`);
    }


    const toggleLiked = () => {
        dispatch(toggleLike(props.id)) 
    }


    return (

        <div className="user" key = {props.id}>
            
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <img src={props.avatar} alt="" className="user-img" />
            <div className="user-textblock">
                <h1 className="user-name">{props.name}</h1>
                <p className="user-email"> {props.email} </p>
            </div>
            <button className="user-details" onClick={viewDetails}>Подробнее</button>
            <span className={`material-symbols-outlined ${likes ? 'liked' : ''}`} onClick={toggleLiked}>
                favorite
            </span>
        </div>
     );
}
 
export default UserCardLite;