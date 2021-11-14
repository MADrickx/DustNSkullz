import React from "react";
import {Send} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 4rem;
    margin: 1.5rem;
`;

const Description = styled.div`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    ${mobile({textAlign: "center"})};
`;

const InputContainer = styled.div`
    width: 33%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 5px;
    ${mobile({width: "80%"})};
`;

const Input = styled.input`
    border: none;
    flex: 9;
    padding-left: 0.5rem;
    border-radius: 5px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    border-radius: 5px;
`;

const Newsletter = () => (
    <Container>
        <Title>{"Newsletter"}</Title>
        <Description>{"Get updates from us !"}</Description>
        <InputContainer>
            <Input placeholder={"your email"} />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
);

export default Newsletter;
