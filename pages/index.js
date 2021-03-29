import React, {useContext, useState} from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import StageOne from "../component/StageOne";
import Stepper from 'react-stepper-horizontal';
import {FaArrowLeft} from "react-icons/fa";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getFormValues} from "../redux/actions/data-action";
import YourPlan from "../component/Plan";

const Home = (props) => {

    const {getFormValues} = props

    const [currentPage, setCurrentPage] = useState(1);
    const sections = [
        {title: '', onClick: () => setCurrentPage(1)},
        {title: '', onClick: () => setCurrentPage(2)},
        {title: '', onClick: () => setCurrentPage(3)},
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const next = () => setCurrentPage((prev) => prev + 1);
    const prev = () => setCurrentPage((prev) => prev - 1);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <main className={styles.approval}>
                <div className={styles.banner}>
                    <div className={styles.overLayWrap}>
                        <div className={styles.overLay}>

                        </div>
                        <img src='/assets/shopper.jpg' alt='shopper'/>
                    </div>
                    <div className={styles.orderSummary}>

                        <section className={styles.cartWrap}>
                            <div className={styles.title}>
                                Order summary
                            </div>

                            <div className={styles.cart}>
                                <div className={styles.cartItem}>
                                    <div className={styles.cartItemImg}>

                                        <img src='/assets/phone.jpg'/>
                                    </div>
                                    <div className={styles.cartDescription}>
                                        <div className={styles.cartItemTitle}>
                                            Meeysoo P45 Pro
                                        </div>
                                        <div className={styles.cost}>
                                            ₦43,900
                                        </div>
                                        <div className={styles.qty}>
                                            Qty: 1
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.cartItem}>
                                    <div className={styles.cartItemImg}>
                                        <img src='/assets/shirt.jpg'/>
                                    </div>
                                    <div className={styles.cartDescription}>
                                        <div className={styles.cartItemTitle}>
                                            Men's long sleeve shirt
                                        </div>
                                        <div className={styles.cost}>
                                            ₦6,800
                                        </div>
                                        <div className={styles.qty}>
                                            Qty: 1
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.total}>
<span className={styles.text}>
Total cart value:
</span>

                                <div className={styles.totalMoney}>
                                    ₦80,500
                                </div>
                            </div>
                        </section>

                    </div>

                </div>

                <div className={styles.approvalSection}>
                    {currentPage === 2 && (

                        <button className={styles.backBtn} onClick={prev}>
                            <FaArrowLeft/> Back
                        </button>
                    )
                    }
                    <div className={styles.container}>
                        <Stepper
                            steps={sections}
                            activeStep={currentPage - 1}
                            activeColor="red"
                            activeBorderColor="#fc3131"
                            completeColor="#fc3131"
                            completeBarColor="#fc3131"
                            barStyle="solid"
                            circleFontSize={16}
                        />


                        {currentPage === 1 && (
                            <>
                                <StageOne next={next} cartValue='80,500'/>
                            </>
                        )}

                        {currentPage === 2 && (
                            <>
                               <YourPlan/>

                            </>
                        )}
                    </div>

                </div>
            </main>


        </div>
    )
}

Home.propTypes = {
    getFormValues: PropTypes.func.isRequired
}

const mapActionsToDispatch = {
    getFormValues
}

export default connect(null, mapActionsToDispatch)(Home)
