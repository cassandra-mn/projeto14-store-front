import shield from '../assets/shield.png';
import styled from 'styled-components';

export default function Header(){
    return(
        <Container>
            <Logo>
                <LogoImg src={shield}/>
            </Logo>
            <SearchProducts>
                <Input type='text' placeholder='Pesquise por produtos ou coleções'/>
                <Button><Img src={shield}/></Button>
            </SearchProducts>
            <ContainerOp>
                <Cart>
                    <Button><Img src={shield}/></Button>
                </Cart>
                <UserArea>
                    <p>Sign In/Sign Up</p>
                    <Button><Img src={shield}/></Button>
                </UserArea>
            </ContainerOp>
        </Container>
    );
}

const Container = styled.header`
    top: 0;
    min-width: 375px;
    height: 70px;
    z-index: 1;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e5e5e5;
`;
const Logo = styled.div`
    width: 75px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogoImg = styled.img`
    width: 51px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`;
const Img = styled.img`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
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
    border: 1px solid #D5D5D5;
    ::placeholder {
        color: #DBDBDB;
    }
`;
const Button = styled.button `
    width: 45px;
    height: 45px;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    
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
    font-size: 25px;
`