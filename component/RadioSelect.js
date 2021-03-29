import React, { useState } from "react";
import { Radio, RadioGroup } from "react-custom-radio-buttons";


const options = ["Paid employment", "Self employed / freelance", "Corporate organization", ];

const SelectBox = () => {
    const [size, setSize] = useState(null);
    const onChange = option => {
        setSize(option);
    };
    return (
        <div className="formWrap">

            <RadioGroup containerStyle="optionsContainer" onChange={onChange}>
                {options.map(option => (
                    <Radio

                        className='radio'
                        value={option}
                        render={({ isSelected }) => (
                            <div
                                className="option"
                                style={{
                                    border: ` ${isSelected ? "1px solid #39ab31" : "#f9d10a"} `
                                }}
                            >
                                <div className='selectionImg'>

                                </div>



                                <div
                                    style={{
                                        color: ` ${isSelected ? "#3a0162" : "#131313"} `
                                    }}
                                    className='optionTitle'>{option}</div>
                            </div>
                        )}
                    />
                ))}
            </RadioGroup>



        </div>
    );
}

export default SelectBox