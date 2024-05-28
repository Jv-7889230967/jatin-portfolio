"use client"
import Accordian from '../../components/Accordian';

const Experience = () => {
    return (
        <main className='parent-container'>
            <h3 className='text-2xl font-semibold'>Qualifications</h3>
            <div className='accordian-container'>
            <Accordian tabName={'Education'} />
            <Accordian tabName={'Work'}/>
            </div>
        </main>
    );
};

export default Experience;
