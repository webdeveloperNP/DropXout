import React, { useState, useMemo } from 'react';
import './bmi.css';
const Bmi = () => {
    const [weight, setWeight] = useState(50);
    const [height, setHeight] = useState(190);
    const handleWeight = (e) => {
        setWeight(e.target.value);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);
    }
    const output = useMemo(() => {
        const h = height / 100;
        return (weight / (h ** 2)).toFixed(1);
        //to fixed method to display upto one decimal digit
    }, [weight, height])

    return (
        <div>
            <main>
                <h2>BMI Calculator</h2>
                <div className='input-section'>

                    <label for='weight' className='slider-output'>Weight : {weight}</label>
                    <br />
                    <input type='range' id='weight' className='input-slider' step='1' min='40' max='200' onChange={handleWeight}></input>
                    <br />


                    <label for='height' className='slider-output'>Height : {height}</label>
                    <br />
                    <input type='range' id='height'
                        className='input-slider'
                        step='1' min="140" max='220' onChange={handleHeight}></input>
                    <br />

                    <div className='output-section'>
                        <p>Your BMI</p>
                        <p className='output'>{output}</p>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Bmi