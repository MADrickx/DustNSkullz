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

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const Center = styled.div`
    flex: 1;
    padding: 1rem;
    ${mobile({display: "none"})};
`;

const Right = styled.div`
    flex: 1;
    padding: 1rem;
    ${mobile({backgroundColor: "lightgrey"})};
`;

const Title = styled.h3`
    margin-bottom: 2rem;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 30%;
    margin: 0.5rem;
`;

const Logo = styled.h1`
    position: static;
`;

const Description = styled.p`
    position: static;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcons = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > * {
        margin-right: 1rem;
    }
    & > svg {
        width: 1rem;
        height: 1rem;
    }
`;

const PaymentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PaymentItem = styled.div`
    margin: 0.5rem 0.5rem 0 0;
`;

const Footer = () => (
    <Container>
        <Left>
            <Logo>{"DustNskullZ"}</Logo>
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
        </Right>
    </Container>
);

export default Footer;
