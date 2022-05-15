import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {TailSpin} from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';

import AmountContext from '../context/AmountContext';

export default function CheckoutPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState();
    const {amount, setAmount} = useContext(AmountContext);
    
    useEffect(() => getProduct(), []);

    async function getProduct() {
        const products = await axios.get(`http://localhost:5000/cart`);
        setCart(products.data);
    }

    async function exclude(product) {
        await axios.delete(`http://localhost:5000/cart/${product.code}`);
        getProduct();
    }

    async function less(product) {
        setAmount(amount - 1);
        await axios.put(`http://localhost:5000/cart/${product.code}`, {...product, amount: amount - 1});
    }

    async function more(product) {
        setAmount(amount + 1);
        await axios.put(`http://localhost:5000/cart/${product.code}`, {...product, amount: amount + 1});
    }

    return cart ? (
        cart.length > 0 ? (
            <Container>
            {cart.map(product => {
                const {image, name, price} = product;

                return (
                    <p>
                    <Image src={image} />
                    <Name>{name}</Name>
                    <Price>R${price}</Price>
                    <Cont>
                        <button className='less' onClick={() => less(product)}>-</button>
                        {amount}
                        <button className='more' onClick={() => more(product)}>+</button>
                    </Cont>
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


    button:hover {
        cursor: pointer;
    }
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