import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
    ${mobile({width: "75%"})};
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 1rem 0.5rem 0 0;
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 0.5rem;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1rem 0;
    border-radius: 5px;
    margin: 1rem 0 1rem 0;
`;

const Link = styled.a`
    margin: 0.5rem 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => (
    <Container>
        <Wrapper>
            <Title>{"Sign in"}</Title>
            <Form>
                <Input placeholder={"Username"} />
                <Input placeholder={"Password"} />
                <Button>{"LOGIN"}</Button>
                <Link>{"FORGOT PASSWORD?"}</Link>
                <Link>{"CREATE ACCOUNT !"}</Link>
            </Form>
        </Wrapper>
    </Container>
);

export default Login;
