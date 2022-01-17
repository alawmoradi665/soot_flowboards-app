import "./newProduct.css";
import { Publish } from "@material-ui/icons";


export default function NewProduct() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="surfboard" />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="" alt="" className="productUploadImg"/>
                            <label for="file" className="label">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
