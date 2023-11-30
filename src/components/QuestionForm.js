import { useState } from 'react'

function QuestionForm() {

    function checkValue(value) {
        if (!value.includes('@')) {
            setInputValue(value)
        }
    }
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}



export default QuestionForm