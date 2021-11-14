import React from "react";
import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    ${mobile({padding: "0", flexDirection: "column"})};
`;

const Categories = () => (
    <Container>
        {categories.map(item => (
            <CategoryItem key={item.id} item={item} />
        ))}
    </Container>
);

export default Categories;
