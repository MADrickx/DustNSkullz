import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
`;

const Annoucement = () => (
    <Container>{"Super Deal! Free Shipping on orders over 50€"}</Container>
);

export default Annoucement;
