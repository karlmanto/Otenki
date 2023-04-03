import './Results.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Results({ correct, setCorrect, setIncorrect, setCurrentRound }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (correct >= 18) {
            setMessage('Excellent work!');
        }

        if (correct >= 10 && correct < 18) {
            setMessage('Good work!');
        }

        if (correct < 10) {
            setMessage('Maybe you need more practice...');
        }
    }, [])

    const navigateHome = () => navigate('/');
    const navigateQuiz = () => {
        navigate('/quiz');
        setCorrect(0);
        setIncorrect(0);
        setCurrentRound(1);
    }

    return (
        <section className='results'>
            <p className='results__message'>{message}</p>
            <p className='results__score'>Your score was {correct}/20.</p>

            <button onClick={navigateHome}>Home</button>
            <button onClick={navigateQuiz}>Retry</button>
        </section>
    )

}