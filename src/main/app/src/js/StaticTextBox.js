import '../css/StaticTextBox.css';

function StaticTextBox({text}) {

    return (
        <div className='container fade-in'>
            <text>{text}</text>
        </div>
    );
}

export default StaticTextBox;
