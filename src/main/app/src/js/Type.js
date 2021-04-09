import '../css/Type.css';
import logo from '../components/logo.svg';
import Button from "./Button";
import { useState } from 'react';
import LearnSection from "./LearnSection";
import PracticeSection from "./PracticeSection";

function Type() {

    const [showContentLearn, setShowContentLearn] = useState(false);
    const [showContentPractice, setShowContentPractice] = useState(false);

    function showLearn() {
        setShowContentLearn(!showContentLearn);
        setShowContentPractice(false);
    }

    function log() {
        setShowContentPractice(!showContentPractice);
        setShowContentLearn(false);
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
            { showContentPractice && <PracticeSection />}

        </div>
    );
}

export default Type;
