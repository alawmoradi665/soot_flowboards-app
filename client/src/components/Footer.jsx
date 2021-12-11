import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
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
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <div className="flex bg-black">
      <div className="flex-1 flex-col p-5">
        <h1 className="text-white">Soot Flowcraft</h1>
        <p className="my-8 text-white">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex">
          <div className="w-10 h10 rounded-full bg-black text-white flex items-center justify-center mr-10" color="3B5999">
            <Facebook />
          </div>
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-10" color="E4405F">
            <Instagram />
          </div>
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-10" color="55ACEE">
            <Twitter />
          </div>
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-10" color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-6 text-white">Useful Links</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          <li className=" w-1/2 mb-2 text-white">Home</li>
          <li className=" w-1/2 mb-2 text-white">Cart</li>
          <li className=" w-1/2 mb-2 text-white">Products</li>
          <li className=" w-1/2 mb-2 text-white">Accessories</li>
          <li className=" w-1/2 mb-2 text-white">My Account</li>
          <li className=" w-1/2 mb-2 text-white">Order Tracking</li>
          <li className=" w-1/2 mb-2 text-white">Wishlist</li>
          <li className=" w-1/2 mb-2 text-white">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-6 text-white">Contact</h3>
        <div className="mb-5 flex items-center text-white">
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="mb-5 flex items-center text-white">
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </div>
        <div className="mb-5 flex items-center text-white">
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </div>
        <img className="w-1/2" src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
