import '../css/LearnSection.css';
import StaticTextBox from "./StaticTextBox";
import { useState, useEffect } from 'react';
import InputTextBox from "./InputTextBox";
import Button from "./Button";
import Keyboard from "./Keyboard";

function LearnSection() {

    const [letters, setLetters] = useState('');

    useEffect(() => {
        generateLetters(30)
    },[]);

    function generateLetters(number) {
        let string = '';

        for (let i = 0; i < number; i++) {
            let char = String.fromCharCode(Math.floor(Math.random()*92.0 + 33));
            string += char;
            string += ' ';
        }

        setLetters(string);
    }

    function small() {
        generateLetters(30);

    }

    function medium() {
        generateLetters(50);
    }

    function large() {
        generateLetters(100);
    }

    return (
        <div>
            <div className='practice-starts fade-in'>
                <Button text={'Small'} functionPassed={small}/>
                <Button text={'Medium'} functionPassed={medium}/>
                <Button text={'Large'} functionPassed={large}/>
            </div>
            <StaticTextBox text={letters}/>
            <InputTextBox letters={letters.replaceAll(' ','')}/>
        </div>
    );
}

export default LearnSection;
