import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  text-transform: uppercase;
`;

const FilterSizeOption = styled.option`
  text-transform: uppercase;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="container mx-auto items-center h-screen">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <img className="w-full" src={product.img} alt={product.title} />
          </div>

          <div>
            <p className="text-teal font-bold">{product.brand}</p>
            <h1 className="text-5xl font-semibold">{product.title}</h1>
            <p className="py-8">{product.description}</p>
            <p className="text-3xl font-semibold">$ {product.price}</p>

            <div className="grid grid-cols-3 py-8 items-center justify-center">
              <div className="flex items-center justify-center">
                <p className="text-xl font-medium">Color</p>
                {product.color?.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} className="w-4 h-4" />
                ))}
              </div>

              <div className="flex items-center justify-center">
                <p className="text-xl font-medium">Size</p>
                <FilterSize onChange={(e) => setSize(e.target.value)} className="text-uppercase">
                  {product.size?.map((s) => (
                    <FilterSizeOption className="text-uppercase" key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </div>

              <div className="flex items-center justify-center">
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
              </div>
            </div>

            <div className="">
              <button className="w-full rounded-lg bg-teal h-12 text-white font-semibold duration-300 hover:opacity-75" onClick={handleClick}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
