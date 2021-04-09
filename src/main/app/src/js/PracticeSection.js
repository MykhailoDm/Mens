import '../css/PracticeSection.css';
import '../css/FadeIn.css';
import '../js/StaticTextBox';
import StaticTextBox from "./StaticTextBox";
import InputTextBox from "./InputTextBox";
import {useEffect, useState} from "react";
import Button from "./Button";

function PracticeSection() {

    const [typeText,setTypeText] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/text')
            .then(response => response.json())
            .then(data => {
                setTypeText(data.text);
            });
    },[]);

    function reload() {

        fetch('http://localhost:8080/api/text')
            .then(response => response.json())
            .then(data => {
                setTypeText(data.text);
            });
    }

    return (
        <div className='fade-in'>
            <StaticTextBox text={typeText}/>
            <InputTextBox letters={typeText
                .replaceAll('\r','')
                .replaceAll('\n','')
                .replace(/\s\s+/g,' ')}
            />
            <div style={{ fontSize: '20px' }}>
                <Button text={'Next snippet'} functionPassed={reload}/>
            </div>
        </div>
    );
}

export default PracticeSection;
