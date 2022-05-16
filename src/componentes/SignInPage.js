import styled from 'styled-components';

export default function SignInPage(){
    return(
        <Container>
            <Input type='email' required placeholder='Email'/>
            <Input type='password' required placeholder='Senha'/>
            <Button>Entrar</Button>
            <Cadastro>Ainda não tem conta? Clique aqui e cadastre-se</Cadastro>
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
    border: 1px solid #D5D5D5;
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
    background: #52B6FF;
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
    color: #52B6FF;
    :hover {
        cursor: pointer;
    }
` 