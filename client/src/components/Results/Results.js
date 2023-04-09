import './Results.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export default function Results({ correct, setCorrect, setIncorrect, setCurrentRound }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (correct === 20) {
            setMessage('Perfect!');
            return;
        }
        if (correct >= 18) {
            setMessage('Excellent work!');
            return;
        }
        if (correct >= 10 && correct < 18) {
            setMessage('Good work!');
            return;
        }

        if (correct < 10) {
            setMessage('Maybe you need more practice...');
            return;
        }
    }, [])

    useEffect(() => {
        const scores = localStorage.getItem('scores');
        const scoresJSON = JSON.parse(scores);
        const recentQuiz = {
            date: Date.now(),
            score: correct
        }
        const newScores = [recentQuiz, ...scoresJSON];
        localStorage.setItem('scores', JSON.stringify(newScores));
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
            <div className='results__buttons'>
                <Button buttonClass='results__button' text='Retry' onClick={navigateQuiz} />
                <Button buttonClass='results__button' text='Home' onClick={navigateHome} />
            </div>
        </section>
    )

}