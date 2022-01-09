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
    border-radius: 5px;
    filter: contrast(200%);
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
    justify-content: flex-end;
    border-radius: 15px;
`;

const StyledLink = styled(Link)`
    height: 100%;
    display: flex;
    &:hover ${Image} {
        filter: contrast(100%);
    }
`;

const Title = styled.button`
    color: white;
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: center;
    background-color: #8b0000;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
`;

const EffectWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 5px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 10%,
        rgba(142, 40, 40, 0) 50%
    );
`;

const CategoryItem = ({item}) => (
    <Container>
        <StyledLink to={`/products/${item.author}`}>
            <Image src={item.img.src} />
            <EffectWrapper />
            <Info>
                <Title>{item.title}</Title>
            </Info>
        </StyledLink>
    </Container>
);

export default CategoryItem;
