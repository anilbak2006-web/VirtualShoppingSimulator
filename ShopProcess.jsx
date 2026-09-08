import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ShopProcess.css'

function ShopProcess() {

    useEffect(() => {
        document.body.style.background = "linear-gradient(to right, purple, blue)"
    }, [])
    const location = useLocation();
    const navigate = useNavigate();


    // The product and balance are received from the shop route through navigation state.
    const { product, total } = location.state || {
        product: null,
        total: 0


    };


    const [errorProduct, setErrorProduct] = useState("");
    const [succesfulProduct, setSuccesfulProduct] = useState("");
    const [remainingTotal, setRemainingTotal] = useState(total);


    if (!product) {
        return <h3>There Is No Any Product !</h3>
    }

    function BuyProduct() {
        // Prevent the purchase when the current balance is too low.
        if (product.cost > total) {
            setErrorProduct("We're sorry but you don't have enough total to buy this the prodcut !");
            setSuccesfulProduct("");
            return;
        }

        // Store the balance after a successful purchase.
        const result = total - product.cost;
        setRemainingTotal(result);
        setSuccesfulProduct("The Your Process Is Succesfuly !");
        setErrorProduct("");
    }

    function GoBack() {
        // Return to the shop with the latest remaining balance.
        navigate('/Shop', {
            state: {
                total: remainingTotal
            }
        });
    }
    return (
        <div>
            <div className='product_container'>
                <div >
                    <img src={product.image} alt={product.name}></img>
                    <h3 >{product.name}</h3>
                    <h3>{product.category}</h3>
                    <h3>Thıs product cost is: {product.cost}</h3>
                    <div>
                        <button className="BuyBtn" onClick={BuyProduct}>NOW PURCHASE !
                            <h3 className='errorProduct'>{errorProduct}</h3>
                            <h3 className='succesfulProduct'>{succesfulProduct}</h3>
                            <h3 className='userTotal'>Your Remaining Total Is: {remainingTotal}</h3>
                        </button>
                        <button className="BackBtn" onClick={GoBack}>Back To Previous Page </button>











                    </div>














                </div>



            </div>




        </div>

    );
}

export default ShopProcess;
