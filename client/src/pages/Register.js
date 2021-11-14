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
    width: 40%;
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
    ${mobile({width: "75%"})};
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
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
const Agreement = styled.span`
    font-size: 0.8rem;
    margin: 1rem 0;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1rem 0;
    border-radius: 5px;
`;

const Register = () => (
    <Container>
        <Wrapper>
            <Title>{"Create an Account"}</Title>
            <Form>
                <Input placeholder={"Name"} />
                <Input placeholder={"Last Name"} />
                <Input placeholder={"Username"} />
                <Input placeholder={"eMail"} />
                <Input placeholder={"Password"} />
                <Input placeholder={"Confirm Password"} />
                <Agreement>
                    {
                        "By creating an account, I consent to the processing of my data in accordance with the PRIVACY POLICY"
                    }
                </Agreement>
                <Button>{"SEND"}</Button>
            </Form>
        </Wrapper>
    </Container>
);

export default Register;
