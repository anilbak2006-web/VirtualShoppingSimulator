import { useLocation } from "react-router-dom";
import './Shop.css';
import { useEffect, useState } from "react";
import { products } from "./data/products";
import { useNavigate } from "react-router-dom";

function Shop() {
    useEffect(() => {
        // Apply the shop background only while this page is mounted.
        document.body.style.background = "linear-gradient(to right, blue, red)";

        return () => {
            document.body.style.background = "linear-gradient(to right, white, gray)";
        };
    },);


    const navigate = useNavigate();


    function BuyProduct(product) {
        // Pass the selected product and current balance to the purchase page.
        navigate("/process", {
            state: {
                product: product,
                total: total
            }

        });
    }

    const location = useLocation();
    const { total } = location.state || { total: 0 };
    const [selectedProduct, setSelectedProduct] = useState("all");

    // Display every product or limit the list to the selected category.
    const filteredProducts = selectedProduct === "all"
        ? products
        : products.filter((product) => {
            if (selectedProduct === "vehicle") {
                return product.category === "vehicle";
            }
            return product.category === selectedProduct;
        });

    return (
        <div>
            <h1 className="userTotal">Your Current Total Is: {total}</h1>

            <div>
                <header className="Header">
                    <h2 className="headertext">Welcome To Our Store ! You Can Shop In Here :)</h2>
                </header>
                <div className="nav_Contanier_Style">
                    <nav className="Categories">
                        <ul className="categoriesLıst">
                            <li><button className={`categoryBtn ${selectedProduct === "all" ? "activeCategory" : ""}`} type="button" onClick={() => setSelectedProduct("all")}>ENTIRE</button></li>
                            <li><button className={`categoryBtn ${selectedProduct === "technology" ? "activeCategory" : ""}`} type="button" onClick={() => setSelectedProduct("technology")}>TECHNOLOGY</button></li>
                            <li><button className={`categoryBtn ${selectedProduct === "food" ? "activeCategory" : ""}`} type="button" onClick={() => setSelectedProduct("food")}>FOODS</button></li>
                            <li><button className={`categoryBtn ${selectedProduct === "toy" ? "activeCategory" : ""}`} type="button" onClick={() => setSelectedProduct("toy")}>TOYS</button></li>
                            <li><button className={`categoryBtn ${selectedProduct === "vehicle" ? "activeCategory" : ""}`} type="button" onClick={() => setSelectedProduct("vehicle")}>VEHICLES</button></li>
                            <li><button className={`categoryBtn ${selectedProduct === "fruit" ? "activeCategory" : ""}`} type="button" onClick={() => setSelectedProduct("fruit")}>FRUITS</button></li>
                        </ul>
                    </nav>
                </div>

                <section className="section">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product" onClick={() => BuyProduct(product)}>
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="image" />
                            </div>
                            <h3 className="product_name">{product.name}</h3>
                            <p className="product_categorr">{product.category}</p>
                            <p className="product_cost">Cost: {product.cost}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Shop;



