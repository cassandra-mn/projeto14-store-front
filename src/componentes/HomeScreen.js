import styled from 'styled-components';
import {useRef} from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import image1 from '../assets/image1.png';
import card from '../assets/credit-card.png';
import phone from '../assets/24-hours.png';
import secure from '../assets/shield.png';
import box from '../assets/giftbox.png';

export default function HomeScreen() {
    const slogan = [image1, image1, image1, image1];
    const carousel = useRef(null);
    const informations = useRef(null);
    const products = useRef(null);
    const releases = useRef(null);
    const favorites = useRef(null);

    setInterval(() => {
        rightClick(carousel);
        rightClick(informations);
    }, 5000);

    function leftClick(ref) {
        ref.current.scrollLeft -= ref.current.offsetWidth;
    }

    function rightClick(ref) {
        if (ref.current.scrollLeft > ref.current.offsetWidth) ref.current.scrollLeft = 0;
        ref.current.scrollLeft += ref.current.offsetWidth;
    }

    return (
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
            <Informations ref={informations}>
                <Tags>
                    <Img src={card} />
                    <Text>
                        <H1>PARCELAMENTO</H1>
                        <P>Em até 12X nos cartões</P>
                    </Text>
                </Tags>
                <Tags>
                    <Img src={secure} />
                    <Text>
                        <H1>LOJA PROTEGIDA</H1>
                        <P>Compre com segurança</P>
                    </Text>
                </Tags>
                <Tags>
                    <Img src={phone} />
                    <Text>
                        <H1>ATENDIMENTO</H1>
                        <P>24h por dia</P>
                    </Text>
                </Tags>
                <Tags>
                    <Img src={box} />
                    <Text>
                        <H1>ENVIO ESPECIAL</H1>
                        <P>Caixa personalizada</P>
                    </Text>
                </Tags>
            </Informations>
            <Line></Line>
            <Block>
                <Title>--- Lançamentos ---</Title>
                <Products ref={releases}>
                    <button className='left' onClick={() => leftClick(releases)}><FaAngleLeft/></button>
                    <button className='right' onClick={() => rightClick(releases)}><FaAngleRight/></button>
                    <Product>
                        <img src='https://images.tcdn.com.br/img/img_prod/749108/caneta_luxo_borboleta_listras_1000951_1_d65cb6addf28fd3dc8eea5fc6ad70d60.jpg'/>
                        <h1>Caneta Borboleta</h1>
                        <p>R$69,90</p>
                    </Product>
                    <Product>
                        <img src='https://images.tcdn.com.br/img/img_prod/749108/caneta_luxo_borboleta_listras_1000951_1_d65cb6addf28fd3dc8eea5fc6ad70d60.jpg'/>
                        <h1>Caneta Borboleta</h1>
                        <p>R$69,90</p>
                    </Product>
                </Products>
                <View>Ver mais</View>
            </Block>
            <Line></Line>
            <Block>
                <Title>--- Favoritos ---</Title>
                <Products ref={favorites}>
                    <button className='left' onClick={() => leftClick(favorites)}><FaAngleLeft/></button>
                    <button className='right' onClick={() => rightClick(favorites)}><FaAngleRight/></button>
                    <Product>
                        <img src='https://m.media-amazon.com/images/I/61fzNgsJBxL._AC_SY355_.jpg'/>
                        <h1>Planner Semanal</h1>
                        <p>R$89,90</p>
                    </Product>
                    <Product>
                        <img src='https://m.media-amazon.com/images/I/61fzNgsJBxL._AC_SY355_.jpg'/>
                        <h1>Planner Semanal</h1>
                        <p>R$89,90</p>
                    </Product>
                </Products>
                <View>Ver mais</View>
            </Block>
            <Line></Line>
            <Categories>
                <Category>
                    <img src='http://d3ugyf2ht6aenh.cloudfront.net/stores/001/770/845/products/planner-2022-minimalista-terrazzo1-94c37c5bcc0a949f4016370139487276-640-0.jpeg'/>
                    <h1>Planners</h1>
                </Category>
                <Category>
                    <img src='https://ae01.alicdn.com/kf/HTB1hQgUJpXXXXXCXFXXq6xXFXXXH/10-pe-as-lote-atacado-estudantes-papelaria-gel-caneta-criativa-material-escolar-acess-rio-de.jpg'/>
                    <h1>Canetas</h1>
                </Category>
                <Category>
                    <img src='https://cdn.awsli.com.br/600x450/765/765263/produto/43542300/bf4d8d8d18.jpg'/>
                    <h1>Clips</h1>
                </Category>
                <Category>
                    <img src='https://28902.cdn.simplo7.net/static/28902/sku/papelaria-planners-adesivos-para-planners--p-1576254316563.jpg'/>
                    <h1>Adesivos</h1>
                </Category>
            </Categories>
            <Line></Line>
        </Container>
    );
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