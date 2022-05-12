import styled from 'styled-components';
import {useRef} from 'react';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';

import image1 from '../assets/image1.png';
import card from '../assets/credit-card.png';
import phone from '../assets/24-hours.png';
import secure from '../assets/shield.png';
import box from '../assets/giftbox.png';

export default function HomeScreen() {
    const slogan = [image1, image1, image1, image1];
    const carousel = useRef(null);
    const informations = useRef(null);

    setInterval(rightClick, 5000);
    setInterval(informationsPass, 5000);

    function leftClick() {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    
    function informationsPass() {
        if (informations.current.scrollLeft > informations.current.offsetWidth) informations.current.scrollLeft = 0;
        informations.current.scrollLeft += informations.current.offsetWidth;
    }

    function rightClick() {
        if (carousel.current.scrollLeft > carousel.current.offsetWidth) carousel.current.scrollLeft = 0;
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <Container>
            <Nav>aqui é o navbar</Nav>
            <Carousel ref={carousel}>
                <Buttons>
                    <Button onClick={leftClick}><FaAngleLeft/></Button>
                    <Button onClick={rightClick}><FaAngleRight/></Button>
                </Buttons>
                <Images>
                    {slogan.map(image => {
                        return <Slogan src={image}/>
                    })}
                </Images>
            </Carousel>
            <Informations ref={informations}>
                <Tags>
                    <Img src={card} />
                    <Text>
                        <H1>PARCELAMENTO</H1>
                        <P>Em até 12X</P>
                    </Text>
                </Tags>
                <Tags>
                    <Img src={secure} />
                    <Text>
                        <H1>LOJA PROTEGIDA</H1>
                        <P>Compra segura</P>
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
            <Footer>aqui é o footer</Footer>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
`;

const Carousel = styled.ul`
    width: 100vw;
    max-height: 500px;
    overflow: hidden;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;
`;

const Buttons = styled.div`
    width: 100vw;
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
    max-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-wrap: wrap;
`;

const Tags = styled.div`
    width: 300px;
    height: 100px;
    margin: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #FAFAD2;
`;

const Img = styled.img`
    width: auto;
    max-height: 50px;
    padding: 5px;
    background-color: #FFFACD;
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

// apagar daqui pra baixo

const Nav = styled.div`
    width: 100vw;
    height: 150px;
    background-color: aquamarine;
`;

const Footer = styled.div`
    width: 100vw;
    height: 150px;
    bottom: 0;
    position: relative;
    background-color: aquamarine;
`;