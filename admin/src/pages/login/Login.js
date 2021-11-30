import React, {useState} from "react";
import styled from "styled-components";
import {login} from "../../redux/apiCalls";
import {useDispatch} from "react-redux";
import {mobile} from "../../responsive";
import {useNavigate} from "react-router-dom";

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
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});

        const timer = setTimeout(() => {
            navigate("/");
        }, 1000);
        return () => clearTimeout(timer);
    };

    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>{"Admin DashBoard"}</Title>
                    <Form>
                        <Input
                            placeholder={"Username"}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder={"Password"}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={handleClick}>{"LOGIN"}</Button>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Login;
