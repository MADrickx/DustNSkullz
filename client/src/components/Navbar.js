import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import Badge from "@mui/material/Badge";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../redux/apiCalls";
import {useDispatch} from "react-redux";
const Container = styled.div`
    padding-bottom: 2.5rem;
    background-color: #111110;
`;

const Wrapper = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "1rem 0"})};
`;

const Left = styled.div`
    flex: 3;
    margin: 0 1rem;
    padding: 1rem 0 1rem 1rem;
    border-bottom: 1px solid #8b0000;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    color: white;
    ${mobile({display: "none"})};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.img`
    width: 150px;
    min-width: 50px;
    filter: grayscale(1) invert(1);
`;

const Right = styled.div`
    flex: 3;
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #8b0000;
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
    color: white;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: white;
    }
`;

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    let user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogOut = () => {
        logout(dispatch, logout);
        navigate("/");
    };
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>{"EN"}</Language>
                </Left>
                <Center>
                    <StyledLink to="/">
                        <Logo src={logo} />
                    </StyledLink>
                </Center>
                <Right>
                    {user ? (
                        ""
                    ) : (
                        <StyledLink to={"/register"}>
                            <MenuItem>{"REGISTER"}</MenuItem>
                        </StyledLink>
                    )}
                    {user ? (
                        <StyledLink to={"/"}>
                            <MenuItem onClick={handleLogOut}>
                                {"LOG OUT"}
                            </MenuItem>
                        </StyledLink>
                    ) : (
                        <StyledLink to={"/login"}>
                            <MenuItem>{"LOG IN"}</MenuItem>
                        </StyledLink>
                    )}
                    <StyledLink to={"/cart"}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color={"secondary"}>
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
