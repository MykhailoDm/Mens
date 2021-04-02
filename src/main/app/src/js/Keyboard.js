import '../css/Keyboard.css';
import {useEffect, useState} from "react";

function Keyboard({ pressedKey, correct }) {

    const [list, setList] = useState(['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+',
            'Delete', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Return', 'ShiftL',
            'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ShiftR', 'Ctrl', 'Alt', 'Command', 'Space', 'command',
            'Alt', 'Ctrl', 'Fn']);

    const [previousKey, setPreviousKey] = useState('');

    function findInList(string) {
            return list.find((element) =>{
                    return element === string;
            });
    }

    useEffect(() =>{
        let previousKeyFind = convertSymbol(previousKey);
        let previousKeyID = findInList(previousKeyFind);
        if (typeof previousKeyID !== 'undefined') {
                const previousElement = document.getElementById(previousKeyID);
                previousElement.classList.remove('correct');
                previousElement.classList.remove('not-correct');
        }

        let pressedKeyFind = convertSymbol(pressedKey);
        let currentKeyId = findInList(pressedKeyFind);
        if (typeof currentKeyId !== 'undefined') {
                const currentElement = document.getElementById(currentKeyId);
                if (correct)
                        currentElement.classList.add('correct');
                else
                        currentElement.classList.add('not-correct')
        }

        setPreviousKey(pressedKey);
    },[pressedKey,correct])

    function convertSymbol(string) {
        switch (string) {
            case '!':
                return '1';
            case '@':
                return '2';
            case '#':
                return '3';
            case '$':
                return '4';
            case '%':
                return '5';
            case '^':
                return '6';
            case '&':
                return '7';
            case '*':
                return '8';
            case '(':
                return '9';
            case ')':
                return '0';
            case '<':
                return ',';
            case '>':
                return '.';
            case '?':
                return '/';
            case '|':
                return '\\';
            case ':':
                return ';';
            case '{':
                return '[';
            case '}':
                return ']';
            case '~':
                return '`';
            case '=':
                return '+';
            case '-':
                return '_';
            case '"':
                return '\'';
            default:
                return string;
        }
    }

    return (
        <div className="keyboard-base fade-in">
                {list.map((string) => {
                        let classNameVar = 'key';
                        const idString = string;

                        switch (string) {
                                case 'Delete':
                                        classNameVar += ' delete'
                                        break;
                                case 'Tab':
                                        classNameVar += ' tab'
                                        break;
                                case '\\':
                                        classNameVar += ' backslash'
                                        break;
                                case 'CapsLock':
                                        classNameVar += ' capslock'
                                        break;
                                case 'A':
                                case 'S':
                                case 'D':
                                case 'F':
                                case 'J':
                                case 'K':
                                case 'L':
                                case ';':
                                        classNameVar += ' touch-type'
                                        break;
                                case 'Return':
                                        classNameVar += ' return'
                                        break;
                                case 'Ctrl':
                                        classNameVar += ' leftctrl'
                                        break;
                                case 'Command':
                                        classNameVar += ' command'
                                        break;
                                case 'Space':
                                        classNameVar += ' space'
                                        break;
                                case 'command':
                                        classNameVar += ' command'
                                        break;
                                case 'ShiftL':
                                        classNameVar += ' leftshift'
                                        string = string.slice(0,-1);
                                        break;
                                case 'ShiftR':
                                        classNameVar += ' rightshift';
                                        string = string.slice(0,-1);
                                        break;
                        }
                        return <div id={idString} className={classNameVar}>{string}</div>;
                })}
        </div>
    );
}

export default Keyboard;