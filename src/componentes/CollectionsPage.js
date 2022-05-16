import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {TailSpin} from 'react-loader-spinner';
import styled from 'styled-components';
import axios from 'axios';

export default function CollectionsPage() {
    const navigate = useNavigate();
    const [collections, setCollections] = useState();
    
    useEffect(() => {
        async function getCollections() {
            const response = await axios.get('http://localhost:5000/collections');
            setCollections(response.data);
        }
        getCollections();
    }, []);

    console.log(collections);

    return collections ? (
        <Categories>
            {collections.map(collection => {
                return (
                    <Category key={collection._id} onClick={() => navigate(`/collection/${collection.name}`)}>
                        <img src={collection.image}/>
                        <h1>{collection.name}</h1>
                    </Category>
                );
            })}
        </Categories>
    ) : <Loading><TailSpin color='#D2691E'/></Loading>;
}


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