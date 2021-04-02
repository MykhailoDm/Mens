import '../css/LearnSection.css';
import StaticTextBox from "./StaticTextBox";
import { useState, useEffect } from 'react';

function LearnSection() {

    const [letters, setLetters] = useState('');

    useEffect(() => {
        let string = '';

        for (let i = 0; i < 100; i++) {
            let char = String.fromCharCode(Math.floor(Math.random()*92.0 + 33));
            string += char;
            string += ' ';
        }

        setLetters(string);
    },[]);

    return (
        <div>
            <StaticTextBox text={letters} />
        </div>
    );
}

export default LearnSection;
