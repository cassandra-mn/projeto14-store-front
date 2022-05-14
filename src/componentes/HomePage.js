import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState, useRef} from 'react';
import {TailSpin} from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';

import image1 from '../assets/image1.png';
import card from '../assets/credit-card.png';
import phone from '../assets/24-hours.png';
import secure from '../assets/shield.png';
import box from '../assets/giftbox.png';

export default function HomePage() {
    const [products, setProducts] = useState();
    const [collections, setCollections] = useState();
    const [releases, setReleases] = useState();
    const [favorites, setFavorites] = useState();
    const carousel = useRef(null);
    const information = useRef(null);
    const release = useRef(null);
    const favorite = useRef(null);
    const navigate = useNavigate();
    const slogan = [image1, image1, image1, image1];
    const ok = products && collections && releases && favorites;
    const informations = [
        {image: card, title: 'PARCELAMENTO', text: 'Em até 12X nos cartões'}, 
        {image: secure, title: 'LOJA PROTEGIDA', text: 'Compre com segurança'}, 
        {image: phone, title: 'ATENDIMENTO', text: '24h por dia'}, 
        {image: box, title: 'ENVIO ESPECIAL', text: 'Caixa personalizada'}
    ];

    useEffect(() => {
        async function getProducts() {
          try {
            const products = await axios.get('http://localhost:5000/products');
            const collections = await axios.get('http://localhost:5000/collections');
            setProducts(products.data);
            setCollections(collections.data);
            setReleases(products.data.filter(product => product.collection === 'releases'));
            setFavorites(products.data.filter(product => product.collection === 'favorites'));
          } catch (error) {
            alert("Ocorreu um erro, tente novamente!");
            console.log(error.response);
          }
        }
        getProducts();
    }, []);

    setInterval(() => {
        rightClick(carousel);
        rightClick(information);
    }, 5000);

    function leftClick(ref) {
        ref.current.scrollLeft -= ref.current.offsetWidth;
    }

    function rightClick(ref) {
        if (ref.current.scrollLeft > ref.current.offsetWidth) ref.current.scrollLeft = 0;
        ref.current.scrollLeft += ref.current.offsetWidth;
    }

    return ok ? (
        <Container>
            <Carousel ref={carousel}>
                <Buttons> 
                    <Button onClick={() => leftClick(carousel)}><FaAngleLeft/></Button>
                    <Button onClick={() => rightClick(carousel)}><FaAngleRight/></Button>
                </Buttons>
                <Images>
                    {slogan.map(image => <Slogan src={image}/>)}
                </Images>
            </Carousel>
            <Informations ref={information}>
                {informations.map(information => {
                    const {image, title, text} = information;
                    return (
                        <Tags>
                            <Img src={image} />
                            <Text>
                                <H1>{title}</H1>
                                <P>{text}</P>
                            </Text>
                        </Tags>
                    );
                })}
            </Informations>
            <Line></Line>
            <Block>
                <Title>--- Lançamentos ---</Title>
                <Products ref={release}>
                    <button className='left' onClick={() => leftClick(release)}><FaAngleLeft/></button>
                    <button className='right' onClick={() => rightClick(release)}><FaAngleRight/></button>
                    {releases.map(release => {
                        const {image, name, price} = release;
                        return (
                            <Product onClick={() => navigate(`/product/${release.code}`)}>
                                <img src={image}/>
                                <h1>{name}</h1>
                                <p>R${price}</p>
                            </Product>
                        );
                    })}
                </Products>
                <View>Ver mais</View>
            </Block>
            <Line></Line>
            <Block>
                <Title>--- Favoritos ---</Title>
                <Products ref={favorite}>
                    <button className='left' onClick={() => leftClick(favorite)}><FaAngleLeft/></button>
                    <button className='right' onClick={() => rightClick(favorite)}><FaAngleRight/></button>
                    {favorites.map(favorite => {
                        const {image, name, price} = favorite;
                        return (
                            <Product onClick={() => navigate(`/product/${favorite.code}`)}>
                                <img src={image}/>
                                <h1>{name}</h1>
                                <p>R${price}</p>
                            </Product>
                        );
                    })}
                </Products>
                <View>Ver mais</View>
            </Block>
            <Line></Line>
            <Categories>
                {collections.map(collection => {
                    return (
                        <Category>
                            <img src={collection.image}/>
                            <h1>{collection.name}</h1>
                        </Category>
                    );
                })}
            </Categories>
            <Line></Line>
        </Container>
    ) : <Loading><TailSpin color='#D2691E'/></Loading>;
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`;

const Carousel = styled.ul`
    width: 100vw;
    max-height: 600px;
    position: relative;
    overflow: hidden;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;
`;

const Buttons = styled.div`
    width: 100vw;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 60px;
    height: 60px;
    font-size: 40px;
    border: none;
    color: white;
    background-color: transparent;

    :hover {
        cursor: pointer;
    }
`;

const Images = styled.li`
    display: flex;
`;

const Slogan = styled.img`
    width: 100vw;
    height: 100%;
    object-fit: cover;
`;

const Informations = styled.div`
    width: 100vw;
    max-height: 300px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
    scroll-behavior: smooth;
`;

const Tags = styled.div`
    width: 300px;
    height: 100px;
    margin: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #F0E68C;
`;

const Img = styled.img`
    width: auto;
    max-height: 50px;
    padding: 5px;
`;

const Text = styled.div`
    line-height: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const H1 = styled.h1`
    font-size: 18px;
    font-weight: 700;
`;

const P = styled.p`
    font-size: 15px;
`;

const Line = styled.p`
    width: 100vw;
    border: 1px dotted black;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 100vw;
    height: 100px;
    margin-top: 10px;
    padding: 30px;
    font-size: 38px;
    text-align: center;
    font-family: 'Oleo Script Swash Caps', cursive;
`;

const Products = styled.div`
    width: 100vw;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
    scroll-behavior: smooth;

    button {
        width: 50px;
        height: 50px;
        margin: 15px;
        font-size: 35px;
        border-radius: 50px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: transparent;

        :hover {
            cursor: pointer;
            background-color: #BDB76B;
        }
    }

    button.left {
        left: 0;
    }

    button.right {
        right: 0;
    }
`;

const Product = styled.div`
    width: 100%;
    height: 80%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 300px;
        height: 300px;
        background-color: white;
    }

    h1 {
        font-size: 20px;
        margin: 18px;
    }

    p {
        font-size: 18px;
        font-weight: 700;
    }
`;

const View = styled.button`
    width: 120px;
    height: 60px;
    margin: 20px;
    margin-bottom: 35px;
    font-size: 16px;
    border: none;
    background-color: #00FF7F;

    :hover {
        cursor: pointer;
        color: #FFFFFF;
        background-color: #228B22;
    }
`;

const Categories = styled.div`
    width: 100vw;
    min-height: 600px;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Category = styled.div`
    width: 400px;
    max-height: 400px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #CD853F;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    h1 {
        width: 220px;
        height: 70px;
        font-size: 33px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        color: #CD853F;
        background-color: #FFFFFF;
        font-family: 'Oleo Script Swash Caps', cursive;
    }

    :hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;