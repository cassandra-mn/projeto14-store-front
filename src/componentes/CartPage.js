import {TailSpin} from 'react-loader-spinner';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function CheckoutPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState();
    
    useEffect(() => getProduct(), []);

    async function getProduct() {
        const products = await axios.get(`http://localhost:5000/cart`);
        setCart(products.data);
    }

    async function exclude(product) {
        await axios.delete(`http://localhost:5000/cart/${product.code}`);
        getProduct();
    }

    return cart ? (
        cart.length > 0 ? (
            <Container>
            {cart.map(product => {
                return (
                    <p>
                    <Image src={product.image} />
                    <Name>{product.name}</Name>
                    <Price>R${product.price}</Price>
                    <Cont>{product.amount}</Cont>
                    <Del onClick={() => exclude(product)}>Deletar</Del>
                    </p>
                );
            })} 
            </Container>
        ) : (
            <Container>
                <Text>Seu carrinho está vazio</Text>
                <Back onClick={() => navigate('/')}>Adicionar produtos</Back>
            </Container>
        )) : 
        <Loading><TailSpin color='#D2691E'/></Loading>;
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`;

const Image = styled.img`

`;

const Name = styled.h1`

`;

const Price = styled.p`

`;

const Cont = styled.div`

`;

const Del = styled.button`

    :hover {
        cursor: pointer;
    }
`;

const Text = styled.p`

`;

const Back = styled.button`

    :hover {
        cursor: pointer;
    }
`;

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;