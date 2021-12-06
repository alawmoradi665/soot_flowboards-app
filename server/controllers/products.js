import ProductMessage from "../models/productMessage.js";

export const getProducts = async (req, res) => {
  try {
    const productMessages = await ProductMessage.find();

    console.log(productMessages);

    res.status(200).json(productMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = (req, res) => {
  res.send("post creation");
};
