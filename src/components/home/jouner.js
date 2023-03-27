import React from 'react';
import RangoNumerico from './range';
import arrow_gold from '../../../static/assets/img/arrow/arrow_gold.svg'
const JounerSection = () => {
    return (
        <div className='jouney_container'>
            <div className='jouney_content'>
                <h1>Start Your Journey</h1>
                <p>Enter your child’s date of birth to discover the key steps to joining us </p>
                <form>
                    <RangoNumerico rango={[1, 31]} date="DD"/>
                    <RangoNumerico rango={[1, 12]} date="MM"/>
                    <RangoNumerico rango={[2023, 2006]} date="YY"/>
                    <div className='button_arrow'>
                        <img src={arrow_gold}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JounerSection;