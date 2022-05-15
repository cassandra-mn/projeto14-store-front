import {TailSpin} from 'react-loader-spinner';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function ProductPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [amount, setAmount] = useState(0);
    
    useEffect(() => {
        async function getProduct() {
            const product = await axios.get(`http://localhost:5000/product/${id}`);
            setProduct(product.data);
        }
        getProduct();
    }, []);

    return product ? (
        <Container>
            <Image src={product.image} />
            <Name>{product.name}</Name>
            <Price>R${product.price}</Price>
            <Cont>
                <button className='less' onClick={() => setAmount(amount - 1)}>-</button>
                {amount}
                <button className='more' onClick={() => setAmount(amount + 1)}>+</button>
            </Cont>
            <Cart onClick={() => navigate('/cart')}>Adicionar ao carrinho</Cart>
            <Buy onClick={() => navigate('/checkout')}>Comprar agora</Buy>
        </Container>
    ) : <Loading><TailSpin color='#D2691E'/></Loading>;
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

const Cart = styled.button`


    :hover {
        cursor: pointer;
    }
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