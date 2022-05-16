import {useState, useEffect} from 'react';
import {FaPlus, FaMinus, FaRegTrashAlt} from 'react-icons/fa';
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
        const products = await axios.get(`https://projeto-store.herokuapp.com/cart`);
        setCart(products.data);
    }

    async function exclude(product) {
        await axios.delete(`https://projeto-store.herokuapp.com/cart/${product.code}`);
        getProduct();
    }

    async function less(product) {
        const {code, amount} = product;
        if (amount > 1) await axios.put(`https://projeto-store.herokuapp.com/cart/${code}`, {...product, amount: amount - 1});
    }

    async function more(product) {
        const {code, amount} = product;
        await axios.put(`https://projeto-store.herokuapp.com/cart/${code}`, {...product, amount: amount + 1});
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
                        <Block>
                            <Image src={image} />
                            <Group>
                                <Name>{name}</Name>
                                <Total>{total}</Total>
                            </Group>
                            <Cont>
                                <button className='more' onClick={() => {more(product); window.location.reload()}}><FaPlus /></button>
                                {amount}
                                <button className='less' onClick={() => {less(product); window.location.reload()}}><FaMinus /></button>
                            </Cont>
                            <Del onClick={() => exclude(product)}><FaRegTrashAlt /></Del>
                        </Block>
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
    padding: 35px;
    overflow-x: hidden;
    position: relative;
`;

const Block = styled.div`
    width: 300px;
    height: 90px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Product = styled.p`
    display: flex;
`;

const Image = styled.img`
    width: 80px;
    height: 80px;
`;

const Group = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const Name = styled.h1`

`;

const Price = styled.p`

`;

const Cont = styled.div`
    width: 80px;

    button {
        width: 35px;
        height: 100%;
        border: none;
        background: none;
    }

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
    width: 250px;
    height: 50px;
    margin: 15px 0;
    font-size: 15px;
    font-weight: 600;
    border-radius: 10px;
    border: none;

    :hover {
        cursor: pointer;
    }
`;

const Total = styled.p`

`;

const TotalAmount = styled.p`
    margin: 20px 0;
`;

const Buy = styled.button`
    width: 250px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    background-color: #DAA520;

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