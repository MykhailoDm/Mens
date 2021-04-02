import '../css/Button.css';


function Button(props) {

    return (
        <div>
            <p onClick={props.functionPassed} className='button'>{props.text}</p>
        </div>
    );
}

export default Button;
