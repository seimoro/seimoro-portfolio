import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../app/likesSlice";
import { logOut } from "../../app/userDataSlice";


const UserCard = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {id} = useParams()

    const { data, isLoading } = useQuery({queryKey: ['users', id], queryFn: () => fetch(`https://reqres.in/api/users/${id}`).then(x => x.json())})

    const like = useSelector(state => state.likes.likes[data?.data.id])
    
    const cumBack = () => {
        navigate('/home')
    }

    const toggleLiked = () => {
        dispatch(toggleLike(data.data.id)) 
    }

    const redirectBack = () => {
        
        dispatch(logOut())
        navigate("/", { replace: true });
           
    }


    if(!isLoading){
        return ( 
            <main className="usercard">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

                <div className="usercard-header-container container">

                    <img src={data.data.avatar} alt="" className="userdata-img" />
                    <div className="userdata-textblock">
                        <h1>{data.data.first_name}</h1>
                        <span className={`material-symbols-outlined ${like ? 'liked' : ''}`} onClick={toggleLiked}>
                            favorite
                        </span>
                    </div>
                    <div className="btns">
                        
                        <button className="logOutBtn cum-back" onClick={cumBack}>
                            Назад
                        </button>
                        
                        <button className="logOutBtn" onClick={redirectBack}> 
                            Выход 
                        </button>
                    </div>
                </div>

                <div className="usercard-container container">

                    <div className="userdata-textblock">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="userdata-textblock">
                        <p>{data.data.email}</p>
                        <p>+7 (927) 123-45-67</p>
                    </div>
                    
                    
                </div>
            </main>
        );
    }
}
export default UserCard;