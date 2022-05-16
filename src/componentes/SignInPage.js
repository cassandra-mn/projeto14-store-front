import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';

export default function SignInPage(){
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    async function login(){
        try{
            const response = await axios.post(`http://localhost:5000/sign-in`, data);    
            setUser(response.data);
            navigate('/');
            alert('Sucesso');
        }catch(e){
            alert(e.response.data)
        }
    }
    return(
        <Container>
            <Input type='email' placeholder='Email' value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
            <Input type='password' placeholder='Senha' value={data.password} onChange={e => setData({...data, password: e.target.value})}/>
            <Button onClick={login}>Entrar</Button>
            <Cadastro onClick={() => navigate('/signup')}>Ainda não tem conta? Clique aqui e cadastre-se</Cadastro>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Input = styled.input`
    width: 300px;
    heigth: 50px;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 4px;
    border: 1px solid #DAA520;
    background: #FFFFFF;
    ::placeholder {
        color: #DBDBDB;
    }
`;
const Button = styled.button `
    width: 303px;
    height: 45px;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    background: #DAA520;
    :hover {
        cursor: pointer;
    }
`

const Cadastro = styled.div `
    width: 232px;
    height: 17px;
    font-size: 13px;
    margin-top: 25px;
    text-align: center;
    font-family: 'Lexend Deca';
    text-decoration-line: underline;
    color: #DAA520;
    :hover {
        cursor: pointer;
    }
` 