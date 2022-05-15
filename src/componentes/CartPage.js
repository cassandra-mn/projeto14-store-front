import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {TailSpin} from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';

export default function CheckoutPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState();
    let totalAmount = 0;
    
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
        const {code, amount} = product;
        if (amount > 1) await axios.put(`http://localhost:5000/cart/${code}`, {...product, amount: amount - 1});
    }

    async function more(product) {
        const {code, amount} = product;
        await axios.put(`http://localhost:5000/cart/${code}`, {...product, amount: amount + 1});
    }

    return cart ? (
        cart.length > 0 ? (
        <Container>
            {cart.map(product => {
                const {image, name, price, amount} = product;
                const total = (product.price * amount).toFixed(2).replace('.', ',');
                totalAmount += (product.price * amount);

                return (
                    <Product>
                        <Image src={image} />
                        <Name>{name}</Name>
                        <Price>R${price}</Price>
                        <Cont>
                            <button className='less' onClick={() => {less(product); window.location.reload()}}>-</button>
                            {amount}
                            <button className='more' onClick={() => {more(product); window.location.reload()}}>+</button>
                        </Cont>
                        <Del onClick={() => exclude(product)}>Deletar</Del>
                        <Total>{total}</Total>
                    </Product>
                );
            })} 
            <TotalAmount>Total da compra: {totalAmount.toFixed(2).replace('.', ',')}</TotalAmount>
            <Back onClick={() => navigate('/')}>Continuar comprando</Back>
            <Buy onClick={() => navigate('/checkout')}>Finalizar comprar</Buy>
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

const Product = styled.p`

`;

const Image = styled.img`
    width: 200px;
    height: 200px;
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

const Total = styled.p`

`;

const TotalAmount = styled.p`

`;

const Buy = styled.button`


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