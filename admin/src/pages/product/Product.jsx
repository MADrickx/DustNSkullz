import {Link} from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import {Publish} from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {updateProduct} from "../../redux/apiCalls";
import {useEffect, useMemo, useState} from "react";
import {userRequest} from "../../requestMethods";
import {useDispatch} from "react-redux";

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [pStats, setPStats] = useState([]);
    const [newImg, setNewImg] = useState();
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId),
    );

    const handleImg = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
            setNewImg(reader.result.split(",")[1]);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e) => {
        setInputs((prev) => {
            return {...prev, [e.target.name]: e.target.value};
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        const newProduct = {
            _id: productId,
            ...inputs,
            img: newImg ? newImg : product.img,
        };
        updateProduct(productId, newProduct, dispatch);
        console.log(newProduct);
    };

    const MONTHS = useMemo(
        () => [
            "JAN",
            "FEV",
            "MAR",
            "AVR",
            "MAI",
            "JUI",
            "JLT",
            "AOU",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ],
        [],
    );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get(
                    "/orders/income/?pid=" + productId,
                );
                const list = res.data.sort((a, b) => {
                    return a._id - b._id;
                });
                list.map((item) =>
                    setPStats((prev) => [
                        ...prev,
                        {name: MONTHS[item._id - 1], Sales: item.total},
                    ]),
                );
            } catch (err) {}
        };
        getStats();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [MONTHS]);

    return (
        <>
            <Topbar />
            <div className="containerProduct">
                <Sidebar />
                <div className="product">
                    <div className="productTitleContainer">
                        <h1 className="productTitle">Product</h1>
                        <Link to="/newproduct">
                            <button className="productAddButton">Create</button>
                        </Link>
                    </div>
                    <div className="productTop">
                        <div className="productTopLeft">
                            <Chart
                                data={pStats}
                                dataKey="Sales"
                                title="Sales Performance"
                            />
                        </div>
                        <div className="productTopRight">
                            <div className="productInfoTop">
                                <img
                                    src={`data:image/png;base64,${product.img}`}
                                    alt=""
                                    className="productInfoImg"
                                />
                                <span className="productName">
                                    {product.title}
                                </span>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">id:</span>
                                    <span className="productInfoValue">
                                        {product._id}
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        price:
                                    </span>
                                    <span className="productInfoValue">
                                        {product.price}€
                                    </span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">
                                        in stock:
                                    </span>
                                    <span className="productInfoValue">
                                        {product.inStock}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productBottom">
                        <form className="productForm">
                            <div className="productFormLeft">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    placeholder={product.title}
                                    onChange={handleChange}
                                    name="title"
                                />
                                <label>Product Description</label>
                                <input
                                    type="text"
                                    placeholder={product.desc}
                                    onChange={handleChange}
                                    name="desc"
                                />
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    placeholder={product.price}
                                    onChange={handleChange}
                                    name="price"
                                />
                                <label>{"Author"}</label>
                                <select
                                    name="author"
                                    id="author"
                                    onChange={handleChange}
                                    defaultValue={"DEFAULT"}>
                                    <option
                                        htmlFor="author"
                                        value="DEFAULT"
                                        disabled>
                                        {"author"}
                                    </option>
                                    <option htmlFor="author" value="alain">
                                        {"Alain"}
                                    </option>
                                    <option htmlFor="author" value="maan">
                                        {"Maan"}
                                    </option>
                                </select>
                                <label>{"Stock"}</label>
                                <select
                                    name="inStock"
                                    id="stock"
                                    onChange={handleChange}
                                    defaultValue={"DEFAULT"}>
                                    <option
                                        htmlFor="inStock"
                                        value="DEFAULT"
                                        disabled>
                                        {"in stock ?"}
                                    </option>
                                    <option htmlFor="inStock" value="true">
                                        {"Yes"}
                                    </option>
                                    <option htmlFor="inStock" value="false">
                                        {"No"}
                                    </option>
                                </select>
                            </div>
                            <div className="productFormRight">
                                <div className="productUpload">
                                    <img
                                        src={
                                            newImg
                                                ? `data:image/png;base64,${newImg}`
                                                : `data:image/png;base64,${product.img}`
                                        }
                                        alt=""
                                        className="productUploadImg"
                                    />
                                    <label htmlFor="file">
                                        <Publish cursor="pointer" />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        style={{display: "none"}}
                                        onChange={handleImg}
                                    />
                                </div>
                                <button
                                    onClick={handleClick}
                                    className="productButton">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
