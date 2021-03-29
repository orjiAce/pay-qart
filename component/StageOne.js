import React, {useState} from 'react';
import styles from '../styles/Home.module.scss'
import Application from "./RadioSelect";
import {Radio, RadioGroup} from "react-custom-radio-buttons";
import {FaRegCalendar, FaRegCalendarAlt} from "react-icons/fa";
import PropTypes from "prop-types";
import {getFormValues} from "../redux/actions/data-action";
import {connect} from "react-redux";


const employmentOptions =
    [
        {
            name: "Paid employment",
            image: "/assets/4565.jpg"
        },
        {
            name: "Self employed / freelance",
            image: "/assets/8401.jpg"
        },
        {
            name: "Corporate organization",
            image: "/assets/4760012.jpg"
        },];


const options = [
    {
        label: "Yes",
        value: "yes"
    },
    {
        label: "No",
        value: "no"
    },

]
const StageOne = (props) => {


    const {getFormValues, cartValue, next} = props
    const [loan, setLoan] = useState(null);
    const [payDate, setPayDate] = useState('');
    const [income, setIncome] = useState('');

    const onChange = option => {
        setLoan(option);
    };


    const radioChange = e => {
        console.log(e.target.value);
    };

    const goNext = (e) => {
        e.preventDefault()

        //const totalInterestPayable = interest * numberOfMonths ;
        //const monthlyRepayable = (shoppingCredit + totalInterestPayable) / numberOfMonths

        next()
    }
    return (
        <div className={styles.stageOneWrap}>
            <div className={styles.title}>
                What do you do?

            </div>
            <form className="formWrap" onSubmit={goNext}>

                <RadioGroup containerStyle="optionsContainer" onChange={onChange}>
                    {employmentOptions.map((({name, image}, index) => (
                        <Radio
                            key={index}
                            className='radio'
                            value={name}
                            render={({isSelected}) => (
                                <div
                                    className="option"
                                    style={{
                                        border: ` ${isSelected ? "2px solid #760186" : "#fff"} `
                                    }}
                                >
                                    <div className='selectionImg'>
                                        <img src={image} alt='employee or others'/>
                                    </div>


                                    <div
                                        style={{
                                            color: ` ${isSelected ? "#3a0162" : "#131313"} `
                                        }}
                                        className='optionTitle'>{name}</div>
                                </div>
                            )}
                        />
                    )))}
                </RadioGroup>

                <div className='customWrap'>
                    <div className='label'>
                        How much do you get paid monthly?
                    </div>
                    <div className='inputWrap'>
                        <div className='icon'>
                            ₦
                        </div>
                        <input type='text' placeholder='Income' name='income'
                               onChange={(e) => setIncome(e.target.value)} value={income} required/>
                    </div>
                </div>
                <div className='customWrap'>
                    <div className='label'>
                        When is yor next salary date?
                    </div>
                    <div className='inputWrap'>
                        <div className='icon'>
                            <FaRegCalendarAlt/>
                        </div>
                        <input type='date' placeholder='nex payday' name='salaryDate'
                               onChange={(e) => setPayDate(e.target.value)} value={payDate} required/>
                    </div>
                </div>
                <span className='title'>
Do you have an existing loan(s)?
                    </span>
                <div className='radioWrap'>

                    {options.map(option => (
                        <div className='radio'>
                            <label style={{display: "block"}}>
                                {
                                    option.label
                                }
                            </label>
                            <input type='radio'    onChange={radioChange} style={{display: "block"}} name="loan" value={option.value}  />


                        </div>
                    ))}

                </div>

                <button className='continueBtn' type='submit'>
                    Continue
                </button>
            </form>
        </div>
    );
};

StageOne.propTypes = {
    getFormValues: PropTypes.func.isRequired
}

const mapActionsToDispatch = {
    getFormValues
}

export default connect(null, mapActionsToDispatch)(StageOne)


