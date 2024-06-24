import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {z} from 'zod'

import { saveUserData } from '../../app/userDataSlice'
import { useEffect } from 'react'

import './style.css'

const userSchema = z.object({
    name: z.string().min(1, {message: 'Введите имя'}),
    email: z.string().min(1, {message: 'Введите почту'}).email({message: 'Некорректный Email'}),
    password: z.string().min(1, {message: 'Введите пароль'}),
    attempt_password: z.string().min(1, { message: 'Подтверждение пароля обязательно' }),
}).refine((data) => data.password === data.attempt_password, {message: 'Пароли должны совпадать', path: ['attempt_password'],})


const SignUp = () => {

    const dispatch = useDispatch()

    const userData = useSelector((state) => state.userData.userData)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: { },
        mode: "onChange",
        resolver: zodResolver(userSchema)
    })

    

    const navigate = useNavigate()

    useEffect(() => {
        if(userData){
            navigate('/home', {replace: true})
        }
    }, [userData])

    const onSubmit  = (data) => {
        
        dispatch(saveUserData(data))
        navigate("/home", { replace: true });

    }
     
    
    return ( 
        <div className="registration">
            <form className="reg-container" onSubmit={handleSubmit(onSubmit)}>
                <h1>Регистрация</h1>
                <div className="form-container">
                    <span>Имя</span>
                    <input  name='name' type='text' placeholder='seimoro' 
                        {...register("name", {required: true})} 
                        style={errors.name ? {border : '.1vw solid red'} : {}} 
                       
                        />
                    {errors.name && <div style={{color: 'red'}}>{errors.name.message}</div>}
                </div>
                <div className="form-container">
                    <span>Электронная почта</span>
                    <input  name='email' type='text' placeholder='example@mail.ru' {...register('email', {required: true})} style={errors.email ? {border : '.1vw solid red'} : {}}/>
                    {errors.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
                </div>
                <div className="form-container">
                    <span>Пароль</span>
                    <input  name='password' type='password' placeholder='******' {...register('password', {required: true})} style={errors.password ? {border : '.1vw solid red'} : {} }/>
                    {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
                </div>
                <div className="form-container">
                    <span>Подтвердите пароль</span>
                    <input name='attempt_password' type='password' placeholder='******'{...register('attempt_password', {required: true})} style={errors.attempt_password ? {border : '.1vw solid red'} : {} } />
                    {errors.attempt_password && <div style={{color: 'red'}}>{errors.attempt_password.message}</div>}
                </div>

                <button className="signUpBtn" type='submit'>
                    Зарегистрироваться
                </button>
            </form>

            
        </div>
     );
}
 
export default SignUp;