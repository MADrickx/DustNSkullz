import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
    background-color: #1f1f1f;
`;

const Home = () => (
    <Container>
        <Navbar />
        {/* <Slider /> */}
        <Categories />
        <Products />
        <Footer />
    </Container>
);

export default Home;
