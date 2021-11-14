import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 1rem;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 1rem;
    text-align: center;
`;

const Button = styled.button`
    border: none;
    padding: 0.75rem;
    background-color: white;
    color: grey;
    cursor: pointer;
    border-radius: 5px;
`;

const CategoryItem = ({item}) => (
    <Container>
        <Link to={`/products/${item.author}`}>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>{"Shop Now"}</Button>
            </Info>
        </Link>
    </Container>
);

export default CategoryItem;
