import React, {useState} from "react";
import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {sliderItems} from "../data";
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 15px 0px #111111;
    ${mobile({display: "none"})};
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 0.5s ease-in-out;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    justify-content: center;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 5px;
    mix-blend-mode: darken;
`;

const InfoContainer = styled.div`
    width: 50%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 4rem;
    color: white;
`;

const Desc = styled.p`
    margin: 2.5rem 0;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #8b0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
`;

const ImgCanvas = styled.div`
    width: 70%;
    height: 500px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoCanvas = styled.div`
    width: 70%;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(
                slideIndex < sliderItems.length && slideIndex > 0
                    ? slideIndex - 1
                    : sliderItems.length - 1,
            );
        } else {
            setSlideIndex(
                slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0,
            );
        }
    };

    return (
        <Container>
            <Arrow direction={"left"} onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <ImgCanvas>
                                <Img src={item.img} />
                            </ImgCanvas>
                        </ImgContainer>
                        <InfoContainer>
                            <InfoCanvas>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>{"Shop Now"}</Button>
                            </InfoCanvas>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction={"right"} onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};
export default Slider;
