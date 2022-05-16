import {TailSpin} from 'react-loader-spinner';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function CollectionPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    const [hidden, setHidden] = useState('none'); 

    useEffect(() => {
        async function getCollection() {
            const response = await axios.get(`http://localhost:5000/collection/${id}`);
            setProducts(response.data);
        }
        getCollection();
    }, []);

    async function checkout(product) {
        try {
            const body = {...product, price: parseFloat(product.price.replace(',', '.')), amount: 1};
            await axios.post('http://localhost:5000/cart', body);
            navigate('/cart');
        } catch(e) {
            if (e.response.status === 403) navigate('/cart');
        }
    }

    return products ? (
        products.length > 0 ? (
            <Container>
                {products.map(product => {
                    const {_id, code, image, name, price} = product;
                    
                    return (  
                        <Product key={_id} 
                        onMouseOver={() => setHidden('block')} 
                        onMouseOut={() => setHidden('none')}
                        onClick={() => navigate(`/product/${code}`)}>
                            <img src={image}/>
                            <h1>{name}</h1>
                            <p>R${price}</p>
                            <Hidden display={hidden} className='see' onClick={() => navigate(`/product/${code}`)}>Ver Produto</Hidden>
                            <Hidden display={hidden} className='buy' onClick={() => checkout()}>Comprar Agora</Hidden>
                        </Product>
                    );
                })}
            </Container>
        ) : 
        <Container>
            <h1>Esta coleção ainda não tem nenhum produto</h1>
        </Container>
    ) : 
    <Loading><TailSpin color='#D2691E'/></Loading>;
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 50px;
    overflow-x: hidden;

    h1 {
        font-size: 23px;
        color: #CD853F;
    }
`;

const Product = styled.div`
    width: 330px;
    height: 330px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    img {
        width: 200px;
        height: 200px;
    }

    h1 {
        width: 220px;
        margin: 12px 0;
        font-size: 23px;
        border-radius: 50px;
        color: #CD853F;
    }

    p {
        font-size: 22px;
        font-weight: 700;
        color: #8B4513;
    }

    .see {
        bottom: 80px;
    }

    .buy {
        bottom: 10px;
    }

    :hover {
        cursor: pointer;
    }
`;

const Hidden = styled.button`
    width: 200px;
    height: 60px;
    font-size: 16px;
    border-radius: 50px;
    font-weight: 700;
    border: none;
    position: absolute;
    color: #FFFFFF;
    background-color: #CD853F;
    display: ${props => props.display};
    
    :hover {
        cursor: pointer;
        background-color: #8B4513;
    }
`;

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;