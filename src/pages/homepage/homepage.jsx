
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../app/userDataSlice'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import UserCardLite from '../../components/userCardLite/userCardLite'
import { useQuery } from '@tanstack/react-query'

const HomePage = () => {
    const dispatch = useDispatch()

    const userData = useSelector((state) => state.userData.userData)

    const navigate = useNavigate()



    const redirectBack = () => {
        
        dispatch(logOut())
        navigate("/", { replace: true });
           
    }


    useEffect(() => {
        if(!userData){
            navigate('/', {replace: true})
        }
    }, [userData, navigate])



    const { data, isLoading } = useQuery({queryKey: ['users'], queryFn: () => fetch('https://reqres.in/api/users/').then(x => x.json())})


    return ( 
        <main className="homepage">
            <div className="homepage-header-container container">
                <h1>Наша команда</h1>
                
                <button className="logOutBtn" onClick={redirectBack}> выход </button>
            </div>
            <div className="homepage-container container">
                {isLoading ? <div style={{fontSize: '2vw'}}> Мы читаем ваши переписки, подождите </div> : data.data.map((user) => {
                    return <UserCardLite 
                        id = {user.id}
                        name = {user.first_name}
                        email = {user.email}
                        avatar = {user.avatar}
                        key = {user.id}
                    />
                })}
            </div>
        </main>
     );
}
 
export default HomePage;