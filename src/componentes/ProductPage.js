import {FaChevronRight, FaPlus, FaMinus} from 'react-icons/fa';
import {useNavigate, useParams} from 'react-router-dom';
import {TailSpin} from 'react-loader-spinner';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function ProductPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [amount, setAmount] = useState(1);
  
    useEffect(() => {
        async function getProduct() {
            const product = await axios.get(`http://localhost:5000/product/${id}`);
            setProduct(product.data);
        }
        getProduct();
    }, []);

    async function cart() {        
        try {
            const body = {...product, price: parseFloat(product.price.replace(',', '.')), amount};
            await axios.post('http://localhost:5000/cart', body);
            alert('Produto adicionado ao carrinho');
        } catch(e) {
            if (e.response.status === 403) alert('O produto já foi adicionado ao carrinho');
            console.log(e.response);
        }
    }

    async function checkout() {
        try {
            const body = {...product, price: parseFloat(product.price.replace(',', '.')), amount};
            await axios.post('http://localhost:5000/cart', body);
            navigate('/cart');
        } catch(e) {
            if (e.response.status === 403) navigate('/cart');
        }
    }

    return product ? (
        <Container>
            <Links>
                <p onClick={() => navigate('/')}>Home</p>
                <icon><FaChevronRight /></icon>
                <p onClick={() => window.location.reload()}>{product.name}</p>
            </Links>
            <Image src={product.image} />
            <Name>{product.name}</Name>
            <Group>
                <Price>R$ {((parseFloat(product.price.replace(',', '.')) * amount)).toFixed(2).replace('.', ',')}</Price>
                <Cont>
                    <button className='less' onClick={() => amount > 1 ? setAmount(amount - 1) : ''}><FaMinus /></button>
                    {amount}
                    <button className='more' onClick={() => setAmount(amount + 1)}><FaPlus /></button>
                </Cont>
            </Group>
            <Buy onClick={checkout}>COMPRAR AGORA</Buy>
            <Cart onClick={cart}>ADICIONAR AO CARRINHO</Cart>
            <Text>
                <h1>DESCRIÇÃO</h1>
                <p>{product.description}</p>
            </Text>
        </Container>
    ) : <Loading><TailSpin color='#D2691E'/></Loading>;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const Links = styled.div`
    width: 200px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    icon {
        font-size: 12px;
    }

    p:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const Image = styled.img`
    max-width: 330px;
    margin: 30px 0;
`;

const Group = styled.div`
    width: 250px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Name = styled.h1`
    font-size: 30px;
`;

const Price = styled.p`
    font-size: 25px;
    font-weight: 700;
`;

const Cont = styled.div`
    width: 105px;
    height: 35px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;

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

const Buy = styled.button`
    width: 250px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    background-color: #DAA520;

    :hover {
        cursor: pointer;
    }
`;

const Cart = styled.button`
    width: 250px;
    height: 50px;
    margin: 10px 0;
    font-size: 15px;
    font-weight: 600;
    border: none;
    background-color: #BDB76B;

    :hover {
        cursor: pointer;
    }
`;

const Text = styled.p`
    font-size: 15px;
    line-height: 18px;
    margin: 20px 50px 20px 0;

    h1 {
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;