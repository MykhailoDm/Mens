import '../css/InputTextBox.css';
import {useEffect, useState} from 'react';
import Keyboard from "./Keyboard";
import '../css/FadeIn.css';

function InputTextBox({ letters }) {

    const [inputText, setInputText] = useState('');
    const [pressedKey,setPressedKey] = useState('');
    const [correct,setCorrect] = useState(true);

    useEffect(() => {
        document.getElementById('form').value = '';
    },[letters]);

    function checkInput(event) {

        let newInput = event.target.value;

        const key = newInput.slice(newInput.length-1).toUpperCase();
        setPressedKey(key);

        if (letters.startsWith(newInput)) {
            setInputText(newInput);
            setCorrect(true);
        } else {
            event.target.value = inputText;
            setCorrect(false);
        }
    }


    return (
        <div>
            <form autoComplete='off'>
                <input id='form' onChange={ event => checkInput(event)
                    } type='text' name='inputText' className='box-style fade-in'/>
            </form>
            <Keyboard pressedKey={pressedKey} correct={correct}/>

        </div>
    );
}

export default InputTextBox;
