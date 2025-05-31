import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {axios} from 'axios'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';


const LoginPage ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[FormData,SetformData]=useState[{username:"",password:""}];
    const REACT_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

    const changeHandler (event){
        const {name , type , value , isChecked} = event.target;
        SetformData(
            prevFormData =>{
                return {
                    [name]: (type === "checkbox") ? isChecked : value,
                }
            }
        )
    }

}
