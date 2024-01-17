import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './product.css'

function ProductPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            console.log(data.products);
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        
        <div>
            <h1>Product Page</h1>
            <div
                style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            >
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    );
}

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <>
            
        <div onClick={() => navigate(`/productdetail/${product.id}`)}
                className="card m-2 " style={{ width: '300px' }}>
                <img className="card-img-top" style={{ height: "200px" }} src={product.thumbnail} alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">Price: ${product.price}</h5>
                    <p className="discount">Discount : ${product.discountPercentage}%</p>
                    <p className="card-text">{product.description}</p>
                    <div className="card-last">
                        <h6>{product.category}</h6>
                        <h6>Rating. {product.rating}</h6>
                    </div>
                </div>

            </div>


        </>


    );
};

export default ProductPage;