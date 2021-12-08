import "./newProduct.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {useEffect, useRef, useState} from "react";
import {addProduct} from "../../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

const Modal = styled.div`
    opacity: 0;
    width: 150px;
    height: 75px;
    z-index: 999999;
    background-color: rgba(50, 205, 50, 0.25);
    position: absolute;
    top: 3rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
`;

export default function NewProduct() {
    const [inputs, setInputs] = useState({});
    const [img, setImg] = useState(null);
    const dispatch = useDispatch();
    const modalRef = useRef(null);

    const product = useSelector((state) => state.product);
    const handleImg = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
            setImg(reader.result.split(",")[1]);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e) => {
        setInputs((prev) => {
            return {...prev, [e.target.name]: e.target.value};
        });
    };

    useEffect(() => {
        if (product.message) {
            if (product.error) {
                modalRef.current.style.background = "rgba(255, 0, 51, 0.25)";
            } else {
                modalRef.current.style.background = "rgba(50, 205, 50, 0.25);";
            }
            modalRef.current.style.opacity = 1;
        }
        const timer = setTimeout(() => {
            modalRef.current.style.opacity = 0;
        }, 2000);

        return () => clearTimeout(timer);
    }, [product]);

    const handleClick = (e) => {
        e.preventDefault();
        const newProduct = {...inputs, img: img};
        addProduct(newProduct, dispatch);
    };

    return (
        <>
            <Topbar />
            <div className="containerNewProduct">
                <Sidebar />
                <div className="newProduct">
                    <h1 className="addProductTitle">{"New Product"}</h1>
                    <form className="addProductForm">
                        <div className="addProductItem">
                            <label>{"Image"}</label>
                            <div className="imageItem">
                                <img
                                    src={
                                        img
                                            ? `data:image/png;base64,${img}`
                                            : ""
                                    }
                                    alt=""
                                />
                                <input
                                    name="file"
                                    type="file"
                                    id="file"
                                    onChange={handleImg}
                                />
                            </div>
                        </div>
                        <div className="addProductItem">
                            <label>{"Title"}</label>
                            <input
                                type="text"
                                placeholder="t-shirt name"
                                name="title"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>{"Description"}</label>
                            <input
                                type="text"
                                name="desc"
                                placeholder="t-shirt description"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addProductItem">
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
                        </div>
                        <div className="addProductItem">
                            <label>{"Price"}</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="price"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="addProductItem">
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
                        <button
                            onClick={handleClick}
                            className="addProductButton">
                            Create
                        </button>
                    </form>
                </div>
            </div>
            <Modal ref={modalRef}>
                <h4>{inputs.title}</h4>
                <p>{product.messageBody}</p>
            </Modal>
        </>
    );
}
