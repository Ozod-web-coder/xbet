import style from "./style.module.css";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate();

    return (
    <div className={style.container}>
        <div className={style.title}>
            <p>
                Welcome to My Online Casino
            </p>
        </div>
        <div className={style.payment}>
            <div className={style.payment_form_container}>
                <form className={style.payment_form}>
                    <h2>Payment</h2>
                    <label htmlFor="card-number">Card Number</label>
                    <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        placeholder="1234 5678 9012 3456"
                    />

                    <label htmlFor="amount">Amount</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="$0.00"
                    />

                    <button type="submit">Pay</button>
                </form>
            </div>
        </div>
        <div onClick={()=>{navigate('/mines')}} className={style.button}>
            <p>Play Now!</p>
        </div>
    </div>
  )
}