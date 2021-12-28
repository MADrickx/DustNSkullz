import React, {useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";

const Container = styled.div`
    padding: 0rem;
    background-color: #111110;
`;

const Title = styled.h1`
    padding: 0rem;
    color: white;
    margin: 1rem;
`;

const FilterContainter = styled.div`
    padding: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    color: white;
`;

const Filter = styled.div`
    padding: 0rem;
    margin: 1rem;
    ${mobile({
        margin: "0 0.5rem",
        display: "flex",
        flexDirection: "column",
    })};
`;

const FilterText = styled.span`
    font-size: 1rem;
    font-weight: 700;
`;

const Select = styled.select`
    padding: 0.5rem;
    margin: 0 1rem 0 0;
    ${mobile({margin: "0.5rem 0"})};
`;

const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const author = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (ev) => {
        const value = ev.target.value;
        setFilters({
            ...filters,
            [ev.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <Title>{author ? `${author}'s T-shirts` : `All T-shirts`}</Title>
            <FilterContainter>
                <Filter>
                    <FilterText>{"Filter Products : "}</FilterText>
                    <Select name={"color"} onChange={handleFilters}>
                        <Option disabled>{"Couleur"}</Option>
                        <Option>{"black"}</Option>
                    </Select>
                    <Select name={"size"} onChange={handleFilters}>
                        <Option disabled>{"Taille"}</Option>
                        <Option>{"xs"}</Option>
                        <Option>{"s"}</Option>
                        <Option>{"m"}</Option>
                        <Option>{"l"}</Option>
                        <Option>{"xl"}</Option>
                        <Option>{"xxl"}</Option>
                        <Option>{"xxxl"}</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>{"Sort Products : "}</FilterText>
                    <Select onChange={(ev) => setSort(ev.target.value)}>
                        <Option value="newest">{"Récents"}</Option>
                        <Option value="asc">{"Prix (ascendant)"}</Option>
                        <Option value="desc">{"Prix (descendant)"}</Option>
                    </Select>
                </Filter>
            </FilterContainter>
            <Products author={author} filters={filters} sort={sort} />
            <Footer />
        </Container>
    );
};

export default ProductList;
