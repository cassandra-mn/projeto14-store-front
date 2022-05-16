import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function SignUpPage(){
    const navigate = useNavigate();
    const [date, setDate] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });


    console.log(date);

    async function register(){
        try{
            await axios.post(`http://localhost:5000/sign-up`, date);    
            alert('Cadastro realizado com sucesso!');
            navigate('/signin');
        }catch(e){
            alert('Falha no cadastro, tente novamente!');
            alert(e.response.data);
        }
    }
    return(
        <Container>
            <Input type='text' placeholder='Name' value={date.name} onChange={e => setDate({...date, name: e.target.value})}/>
            <Input type='text' placeholder='Sobrenome' value={date.surname} onChange={e => setDate({...date, surname: e.target.value})}/>
            <Input type='email' placeholder='Email' value={date.email} onChange={e => setDate({...date, email: e.target.value})}/>
            <Input type='password' placeholder='Senha' value={date.password} onChange={e => setDate({...date, password: e.target.value})}/>
            <Button onClick={register}>Cadastrar</Button>
            <Entrar onClick={() => navigate('/signin')}>Já possue uma conta? Clique aqui e faça o login</Entrar>
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

const Entrar = styled.div `
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