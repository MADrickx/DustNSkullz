import React from "react";
import styled from "styled-components";
import {SearchOutlined} from "@material-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import {mobile} from "../responsive";

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
    transform: translate(50%);
    ${mobile({width: "40%", transform: "none"})};
`;

const SpecContainer = styled.div`
    width: 50%;
    opacity: 0;
    transition: 0.5s ease-in-out;
    margin: 1rem 0;
    ${mobile({
        opacity: "1",
        boxSize: "border-box",
        paddingLeft: "1rem",
        width: "40%",
    })};
`;

const Container = styled.div`
    flex: 1;
    margin: 1rem;
    min-width: 280px;
    flex-basis: 40%;
    max-width: 47%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 15px 15px 46px #181818, -15px -15px 46px #202020;
    &:first-child {
        margin-top: -1rem;
        ${mobile({
            margin: "1rem 0",
        })};
    }

    &:nth-child(2) {
        margin-top: -1rem;
        ${mobile({
            margin: "1rem 0",
        })};
    }

    &:hover ${ImageContainer} {
        transform: translate(0%);
        transition: 0.5s ease-in-out;
        ${mobile({
            transform: "translate(10%)",
        })};
    }

    &:hover ${SpecContainer} {
        opacity: 1;
        transition: 0.5s ease-in-out;
    }

    ${mobile({
        maxWidth: "100%",
        justifyContent: "space-around",
        margin: "1rem 0",
    })};
`;

const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: 95%;
    z-index: 2;
`;

const Icons = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: #8b0000;
        color: white;
        transform: scale(1.1);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: white;
    }
`;

const GeneralInfo = styled.div`
    margin: 0.5rem 1rem 0.5rem 2rem;
    font-size: 1.1rem;
    ${mobile({margin: "0.5rem 1rem"})};
`;

const GeneralInfoPrice = styled.div`
    margin: 0.5rem 1rem 0.5rem 2rem;
    font-size: 1.3rem;
    ${mobile({margin: "0.5rem 1rem"})};
`;

const Button = styled.button`
    padding: 10px;
    background-color: #8b0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    margin: 0.5rem 1rem 0.5rem 2rem;
    ${mobile({margin: "0.5rem 1rem"})};
`;

const Product = ({item}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${item._id}`);
    };
    return (
        <>
            <Container>
                <ImageContainer>
                    <Image src={`data:image/jpg;base64,${item.img}`} />
                    <Info>
                        <Icons>
                            <StyledLink to={`/product/${item._id}`}>
                                <SearchOutlined />
                            </StyledLink>
                        </Icons>
                    </Info>
                </ImageContainer>
                <SpecContainer>
                    <GeneralInfo>
                        <h2>{item.title}</h2>
                    </GeneralInfo>
                    <GeneralInfoPrice>{`${item.price}€`}</GeneralInfoPrice>
                    <GeneralInfo>{`${item.desc}`}</GeneralInfo>
                    <GeneralInfo>{`By ${item.author}`}</GeneralInfo>
                    <Button onClick={handleClick}>Look at me</Button>
                </SpecContainer>
            </Container>
        </>
    );
};
export default Product;
