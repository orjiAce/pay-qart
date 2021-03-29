import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";


const indicatorSpread = [
    {
        name: 'stepOne'
    },
    {
        name: 'stepTwo'
    },
    {
        name: 'first'
    },
    {
        name: 'first'
    }
]
const Indicator = ({activeUrl}) => {


    useEffect(() =>{

    },[])
    return (
        <div className='indicator'>

            <div className={`${activeUrl === '' || activeUrl === 'stepTwo' ? 'active' : 'indicatorBar'} firstBar`}>
                <div className='circle'>

                </div>
            </div>

            <div className={`${activeUrl === 'stepTwo' ? 'active' : 'indicatorBar'}`}>
                <div className='circle'>

                </div>
            </div>

            <div className={`indicatorBar`}>
                <div className='circle'>

                </div>
            </div>

            <div className={`indicatorBar`}>
                <div className='circle'>

                </div>
            </div>


        </div>
    );
};

export default Indicator;
