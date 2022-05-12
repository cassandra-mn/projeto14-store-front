import styled from 'styled-components';
import {useRef} from 'react';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';

import image1 from '../assets/image1.png';

export default function HomeScreen() {
    const slogan = [image1, image1, image1, image1];
    const carousel = useRef(null);

    setInterval(rightClick, 5000);

    function leftClick() {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    function rightClick() {
        if (carousel.current.scrollLeft > carousel.current.offsetWidth) carousel.current.scrollLeft = 0;
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <Container>
            <Carousel ref={carousel}>
                <Buttons>
                    <Button onClick={leftClick}><FaAngleLeft/></Button>
                    <Button onClick={rightClick}><FaAngleRight/></Button>
                </Buttons>
                <Images>
                    {slogan.map(image => {
                        return <Img src={image}/>
                    })}
                </Images>
            </Carousel>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
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

const Img = styled.img`
    width: 100vw;
    height: 100%;
    object-fit: cover;
`;