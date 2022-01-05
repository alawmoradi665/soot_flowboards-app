import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black">
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
          <Room className="mr-3"/> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="mb-5 flex items-center text-white">
          <Phone className="mr-3"/> +1 234 56 78
        </div>
        <div className="mb-5 flex items-center text-white">
          <MailOutline className="mr-3" /> contact@lama.dev
        </div>
        <img className="w-1/2" src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
