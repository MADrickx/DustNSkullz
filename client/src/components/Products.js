import React, {useEffect, useState} from "react";
import Product from "./Product";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({author, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    author
                        ? `http://localhost:5000/api/products?author=${author}`
                        : "http://localhost:5000/api/products",
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [author]);

    useEffect(() => {
        author &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value),
                    ),
                ),
            );
    }, [products, author, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt),
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price),
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price),
            );
        }
    }, [sort]);

    return (
        <Container key={products.id}>
            {author
                ? filteredProducts.map((item) => (
                      <Product key={item._id} item={item} />
                  ))
                : products
                      .slice(0, 8)
                      .map((item) => <Product key={item._id} item={item} />)}
        </Container>
    );
};

export default Products;
