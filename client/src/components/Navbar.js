import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Container = styled.div`
    height: 60px;
    padding: 1rem 0;
    ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "1rem 0"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    position: relative;
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "0"})};
    &:focus {
        ${mobile({
            position: "absolute",
            left: 0,
            transition: ".3s ease-in",
            width: "100px",
        })};
    }
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "1.5rem"})};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    ${mobile({flex: 3, justifyContent: "center"})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding-right: 1rem;
    ${mobile({fontSize: "12px", paddingRight: "0.5rem"})};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: black;
    }
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>{"EN"}</Language>
                    <SearchContainer>
                        <Input style={{color: "grey", fontSize: 16}} />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <StyledLink to="/">
                        <Logo>{"DustNskullz"}</Logo>
                    </StyledLink>
                </Center>
                <Right>
                    <StyledLink to={"/register"}>
                        <MenuItem>{"REGISTER"}</MenuItem>
                    </StyledLink>
                    <StyledLink to={"/login"}>
                        <MenuItem>{"LOG IN"}</MenuItem>
                    </StyledLink>
                    <StyledLink to={"/cart"}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color={"primary"}>
                                <ShoppingCartOutlined color={"action"} />
                            </Badge>
                        </MenuItem>
                    </StyledLink>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
