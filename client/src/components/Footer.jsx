import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  CopyrightOutlined
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom"

const Container = styled.div`
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  /* list-style: none; */
  /* display: flex; */
  /* flex-wrap: wrap; */
`;

const ListItem = styled.li`
  /* width: 50%; */
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction: row;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

// const Payment = styled.img`
//     width: 50%;
// `;

const Top = styled.div`
`;

const Bottom = styled.div`
  align-self: flex-start;
  flex-direction: row;
`;

const SocialLink = styled.a`
`;

const Footer = () => {
  return (
    <Container className="">
      <Top className="flex flex-col sm:flex-row">
      <Left className="">
        <Logo><strong>Follow us on Instagram</strong></Logo>
        <SocialContainer className="mt-2">
          {/* <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon> */}
          <SocialIcon className="hover:bg-black" color="E4405F">
            <SocialLink href="https://www.instagram.com/soot_flowcrafts/" rel="external" target="_blank">
              <Instagram />
            </SocialLink>
          </SocialIcon>
          {/* <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon> */}
        </SocialContainer>
      </Left>
        <Center>
          {/* <Title>Useful Links</Title> */}
          <List>
            <Link to="/">
              <ListItem>Home</ListItem>
            </Link>
            <Link to="/cart">
              <ListItem>Cart</ListItem>
            </Link>
            <Link to="/products">
              <ListItem>Products</ListItem>
            </Link>
            <Link to="/vision">
              <ListItem>Vision</ListItem>
            </Link>
            <Link to="/login">
            <ListItem>Sign in</ListItem>
            </Link>
            <Link to="/register">
              <ListItem>Create an Account</ListItem>
            </Link>
          </List>
        </Center>
      <Right>
        <Title><strong>Contact Us</strong></Title>
        {/* <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem> */}
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> sootflowcrafts@test.com
        </ContactItem>
        {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        <Bottom className="flex  mb-5 mt-10">
          <CopyrightOutlined className= "mr-3"/> Søøt Flowcrafts
        </Bottom>
      </Right>
      </Top>
    </Container>
  );
};

export default Footer;
