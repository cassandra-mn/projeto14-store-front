import {useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { BsFillPersonFill, BsCart4, BsSearch } from "react-icons/bs";

export default function Header(){
    const navigate = useNavigate();
    return(
        <Container>
            <Logo>
                <LogoImg onClick={() => navigate('/')} src={logo}/>
            </Logo>
            <SearchProducts>
                <Input type='text' placeholder='Pesquise por produtos ou coleções'/>
                <Button><icon><BsSearch/></icon></Button>
            </SearchProducts>
            <ContainerOp>
                <Cart>
                    <Button onClick={() => navigate('/cart')}><BsCart4/></Button>
                </Cart>
                <UserArea>
                    <UserName onClick={() => navigate('/signin')}>Sign In/Sign Up</UserName>
                    <Button onClick={() => navigate('/signin')}><BsFillPersonFill/></Button>
                </UserArea>
            </ContainerOp>
        </Container>
    );
}

const Container = styled.header`
    top: 0;
    min-width: 375px;
    height: 90px;
    z-index: 1;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e5e5e5;
`;
const Logo = styled.div`
    width: 190px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogoImg = styled.img`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    :hover {
        cursor: pointer;
    }
`;
const SearchProducts = styled.div`
    width: 500px;
    height: 50px;
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Input = styled.input `
    width: 303px;
    height: 45px;
    padding: 10px;
    margin-bottom: 6px;
    border-radius: 5px;
    border: 1px solid #DAA520;
    ::placeholder {
        color: #DBDBDB;
    }
`;
const Button = styled.button `
    width: 45px;
    height: 45px;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    background-color: #DAA520;
    
    icon {
        font-size: 20px;
    }
    :hover {
        cursor: pointer;
    }
`
const ContainerOp = styled.div`
    width: 300px;
    height: 50px;
    gap: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`
const Cart = styled.div`
    width: 50px;
    height: 50px;
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const UserArea = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
`
const UserName = styled.p`
    font-size: 20px;

    :hover {
        cursor: pointer;
    }
`