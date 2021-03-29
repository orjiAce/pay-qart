import React, {useState} from 'react';
import styles from "../styles/Home.module.scss";

import {Radio, RadioGroup} from "react-custom-radio-buttons";
import PropTypes from "prop-types";
import {getFormValues, updateBreakDown} from "../redux/actions/data-action";
import {connect} from "react-redux";


const plans =
    [
        {
            name: "Aggresive",
            number: "1"
        },
        {
            name: "Stretching",
            number: "2"
        },
        {
            name: "Focused",
            number: "3"
        }, {
        name: "Casual",
        number: "4"
    }, {
        name: "Mild",
        number: "5"
    }, {
        name: "Gentle",
        number: "6"
    },

    ];


const YourPlan = (props) => {

    const {updateBreakDown} = props


    const [monthPlan, setMonthPlan] = useState('1');
    const [pay, setMonthPay] = useState(0);
    const cartValue = "80500"

    const onChange = option => {
        setMonthPlan(option);

//total cart value

        //down payment minimum
        const miniMumDownPayment = (cartValue / 100) * 30;
        //shopping credit
        const shoppingCredit = cartValue - miniMumDownPayment;
        //interest rate
        const interest = (shoppingCredit * monthPlan) / 100

        //
        const totalInterestPayable = interest * monthPlan;
        const monthlyRepayable = (shoppingCredit + totalInterestPayable) / monthPlan
        console.log(monthlyRepayable)
        setMonthPay(monthlyRepayable)
    };


    const planChange = e => {
        console.log(e.target.value);
        alert(e.target.value);
    };

    const miniMumPayment = (cartValue / 100) * 30;
    const shoppingCredit = cartValue - miniMumPayment;
    const interest = (shoppingCredit * 4) / 100

    const updatePlan = () => {
        const data = new FormData()
        data.append("cartValue", cartValue)
        data.append("monthPlan", monthPlan)
        updateBreakDown(data)
    }

    return (
        <div className={styles.stageOneWrap}>
            <div className={styles.title}>
                Choose your plan

            </div>
            <div className="formWrap">
                <RadioGroup containerStyle="planContainer" onChange={onChange}>
                    {plans.map((({name, number}, index) => (
                        <Radio

                            key={index}
                            className='radio'
                            value={number}
                            render={({isSelected}) => (
                                <div
                                    className="plans"
                                >
                                    <div className='roof'>

                                    </div>
                                    <div className='wrap'
                                         style={{
                                             backgroundColor: ` ${isSelected ? "#3a0162" : "#ffffff"} `,
                                             color: ` ${isSelected ? "#ffffff" : "#131313"} `
                                         }}>
                                        <div className='planTitle'>
                                            {name}
                                        </div>

                                        <div className='number'>
                                            {number}
                                        </div>

                                        <div className='month'>Month</div>
                                    </div>

                                </div>
                            )}
                        />
                    )))}
                </RadioGroup>

                <div className='planTitle'>
                    Payment breakdown
                </div>

                <div className='breakDownBox'>
                    <div>
                        <ul>
                            <li>Shopping credit</li>
                            <li>Down payment</li>
                            <li>Monthly installment</li>
                            <li>Tenure</li>
                        </ul>
                    </div>
                    <div className='numbers'>
                        <ul>
                            <li>{shoppingCredit}</li>
                            <li>{miniMumPayment}</li>
                            <li>{pay}</li>
                            <li>{monthPlan}</li>
                        </ul>
                    </div>

                    <div>

                    </div>


                </div>
                <button className='continueBtn' onClick={updatePlan}>
                    Continue
                </button>

            </div>


        </div>
    );
};

YourPlan.propTypes = {
    updateBreakDown: PropTypes.func.isRequired
}

const mapActionsToDispatch = {
    updateBreakDown
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, mapActionsToDispatch)(YourPlan)



