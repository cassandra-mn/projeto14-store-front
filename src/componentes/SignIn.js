import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function SignIn(){
    const navigate = useNavigate();
    const [data, setData] = useState({
        email:'',
        passaword:''
    });
}