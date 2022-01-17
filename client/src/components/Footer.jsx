import {
  Instagram,
  MailOutline,
  CopyrightOutlined
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
`;

const Right = styled.div`
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

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction: row;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Top = styled.div`
`;

const Bottom = styled.div`
  align-self: flex-start;
  flex-direction: row;
`;

const SocialLink = styled.a`
`;

const Footer = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container className="">
      <Top className="flex flex-col sm:flex-row">
        <Left>
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
            {/* {user ? <Redirect to="/" /> : <Link to="/login">Login</Link>} */}
            <Link to="/register">
              <ListItem>Create an Account</ListItem>
            </Link>
          </List>
        </Left>
      <Center>
        <Title><strong>Contact Us</strong></Title>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> <a href="mailto:sootflowcraft@gmail.com" rel="noreferrer" target="_blank">sootflowcraft@gmail.com</a>
        </ContactItem>
      </Center>
      <Right>
        <Logo><strong>Follow us on Instagram</strong></Logo>
        <SocialContainer className="mt-2">
          <SocialIcon className="hover:bg-black" color="E4405F">
            <SocialLink href="https://www.instagram.com/soot_flowcrafts/" rel="external" target="_blank">
              <Instagram />
            </SocialLink>
          </SocialIcon>
        </SocialContainer>
      </Right>
      </Top>
          <Bottom className="flex  mb-5 mt-1 justify-start sm:justify-center">
            <CopyrightOutlined className= "ml-4 mr-3 sm:ml-0"/> Søøt Flowcrafts
          </Bottom>
    </Container>
  );
};

export default Footer;
