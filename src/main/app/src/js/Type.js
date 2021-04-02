import '../css/Type.css';
import logo from '../components/logo.svg';
import Button from "./Button";
import { useState } from 'react';
import LearnSection from "./LearnSection";

function Type() {

    const [showContentLearn, setShowContentLearn] = useState(false);

    function showLearn() {
        setShowContentLearn(!showContentLearn);
    }

    function log() {
        console.log("hello")
    }

    return (
        <div className='text-style'>
            <img src={logo} className='logo-styling' alt='logo-element'/>
            <h1 className='site-name'>Mens</h1>
            <h2 className='promotion'>Your IT typing tutor</h2>
            <div className='practice-starts'>
                <Button text={'Learn'} functionPassed={showLearn}/>
                <Button text={'Practice'} functionPassed={log}/>
            </div>
            { showContentLearn && <LearnSection /> }

        </div>
    );
}

export default Type;
