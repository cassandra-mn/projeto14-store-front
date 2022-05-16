import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function SignInPage(){
    const navigate = useNavigate();
    const [date, setDate] = useState({
        email: '',
        password: ''
    });

    async function login(){
        try{
            await axios.post(`https://projeto-store.herokuapp.com/sign-in`, date);    
            alert('Sucesso');
        }catch(e){
            alert(e.response.data)
        }
    }
    return(
        <Container>
            <Input type='email' placeholder='Email' value={date.email} onChange={e => setDate({...date, email: e.target.value})}/>
            <Input type='password' placeholder='Senha' value={date.password} onChange={e => setDate({...date, password: e.target.value})}/>
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