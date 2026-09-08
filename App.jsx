import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


    const navigate = useNavigate(); // Navigates to the shop after the starting balance is validated.
    const [mainInfo, MainInfoSet] = useState("Welcome this is just a simple virutally shopping simulation !"); // Stores the welcome heading shown on the main page.
    const [total, totalSet] = useState(0); // Stores the user's starting balance.
    const [errorInfo, ErrorInfoSet] = useState(""); // Stores validation feedback for an invalid balance.
    const [moreInfo, MoreInfoSet] = useState(""); // Stores the optional information message.


    function CtnBtn() {
        // Validate the starting balance before opening the product list.
        if (total === 0) {
            ErrorInfoSet('please firstly you enter a total value before click to "next" button');
            return;
        } else if (total >= 9000) {
            ErrorInfoSet('your total cannot be higher to 9000');
            return;


        }
        else {
            navigate("/Shop", { state: { total } });
            ErrorInfoSet("");
        }
    }

    function InfBtn() {
        // Show additional information when the user selects the info button.
        MoreInfoSet("This web site is any user can to discover shopping experince live virutally shopping demo, you gonna shop how many you have total but it's sure firslty you can enter a total")
    }

    function MainButtons(props) {
        // Reuse the same button layout while keeping each action configurable.
        return (
            <div>
                <div className='ButtonsContainer'>
                    <button className='CtnBtn' onClick={props.onCtnClick}>{props.CtnBtn}</button>
                    <button className='InfBtn' onClick={props.onInfClick}>{props.InfBtn}</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='main_container'>
                <div className='main_style'>
                    <h1 className='INFO_H1'>{mainInfo}</h1>
                    <div>
                        <h1 className='ctnInfo'>please enter a total value and click to next button to continue !</h1>
                        <MainButtons
                            CtnBtn="next"
                            onCtnClick={CtnBtn}
                            InfBtn="Get A More Information About The Web Page !"
                            onInfClick={InfBtn}
                        ></MainButtons>
                        <div>
                            <input type="number" className='totalcost' onChange={(event) => totalSet(Number(event.target.value))}></input>
                            <h1 className='eror'>{errorInfo}</h1>
                            <h1 className='total'>{total}</h1>
                            <p className='info'>{moreInfo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App