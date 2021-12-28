import React from "react";
import styled from "styled-components";
import {
    Instagram,
    Twitter,
    Pinterest,
    Facebook,
    Map,
    PhoneIphone,
    AlternateEmail,
    Payment,
} from "@material-ui/icons";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
    border-top: 1px solid grey;
    display: flex;
    justify-content: space-between;
    background-color: #111111;
    ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
`;

const Center = styled.div`
    flex: 1;
    padding: 1rem;
    justify-content: center;
    ${mobile({display: "none"})};
`;

const Right = styled.div`
    flex: 1;
    padding: 1rem;
    justify-content: center;
    ${mobile({backgroundColor: "lightgrey"})};
`;

const Title = styled.h3`
    margin-bottom: 2rem;
    text-align: center;
    color: white;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    columns: 2;
    list-style-type: none;
    text-align: center;
`;

const ListItem = styled.li`
    margin: 0 0 0.5rem 0;
    padding: 0;
    color: white;
`;

const Logo = styled.h1`
    position: static;
    color: white;
`;

const Description = styled.p`
    position: static;
    color: white;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcons = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

const ContactItem = styled.div`
    width: 50%;
    display: flex;
    margin: 0 0.5rem 0.5rem 0.5rem;
    color: white;
    & > svg {
        width: 1rem;
        height: 1rem;
    }
`;

const PaymentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    color: white;
`;

const PaymentItem = styled.div`
    margin: 1rem 1rem 0 0;
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const Footer = () => (
    <Container>
        <Left>
            <StyledLink to="/">
                <Logo>{"DustNskullZ"}</Logo>
            </StyledLink>
            <Description>
                {
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda itaque animi qui quas mollitia corporis quaerat quam. Eaque, culpa repellat."
                }
            </Description>
            <SocialContainer>
                <SocialIcons color={"3B5998"}>
                    <Facebook />
                </SocialIcons>
                <SocialIcons color={"8134AF"}>
                    <Instagram />
                </SocialIcons>
                <SocialIcons color={"00ACEE"}>
                    <Twitter />
                </SocialIcons>
                <SocialIcons color={"BD081C"}>
                    <Pinterest />
                </SocialIcons>
            </SocialContainer>
        </Left>
        <Center>
            <Title>{"Useful links"}</Title>
            <List>
                <ListItem>{"Home"}</ListItem>
                <ListItem>{"Cart"}</ListItem>
                <ListItem>{"Alain's t'shirt"}</ListItem>
                <ListItem>{"Maan's t'shirt"}</ListItem>
                <ListItem>{"My Account"}</ListItem>
                <ListItem>{"Order Tracking"}</ListItem>
                <ListItem>{"WishList"}</ListItem>
                <ListItem>{"Terms"}</ListItem>
            </List>
        </Center>
        <Right>
            <Title>{"Contact"}</Title>
            <ContactContainer>
                <ContactItem>
                    <Map />
                    {"Adresse"}
                </ContactItem>
                <ContactItem>
                    <PhoneIphone />
                    {"Phone"}
                </ContactItem>
                <ContactItem>
                    <AlternateEmail />
                    {"MailAdresse"}
                </ContactItem>
                <PaymentContainer>
                    <PaymentItem>
                        <Payment />
                    </PaymentItem>
                    <PaymentItem>
                        <Payment />
                    </PaymentItem>
                    <PaymentItem>
                        <Payment />
                    </PaymentItem>
                    <PaymentItem>
                        <Payment />
                    </PaymentItem>
                </PaymentContainer>
            </ContactContainer>
        </Right>
    </Container>
);

export default Footer;
