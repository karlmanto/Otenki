import './QuizSelect.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Recent from '../../components/Recent/Recent';

export default function QuizSelect() {
    const [scoreList, setScoreList] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/quiz/${e.target.characters.value}`)
    }

    useEffect(() => {
        const scores = localStorage.getItem('scores');
        const scoresJSON = JSON.parse(scores);

        if (scores && scoresJSON.length > 5) {
            const recentScores = scoresJSON.slice(0, 5);
            localStorage.setItem('scores', JSON.stringify(recentScores));
            return;
        }
        if (scores) {
            setScoreList(JSON.parse(scores));
            return;
        }
        localStorage.setItem('scores', '[]');
    }, []);


    return (
        <main className='select'>
            <form className='select__form' onSubmit={submitHandler}>
                <h1 className='select__header'>Select your quiz</h1>
                <div className='select__characters'>
                    <div className='select__option'>
                        <input
                            className='select__characters-input'
                            id='all'
                            name='characters'
                            type='radio'
                            value='all'
                            defaultChecked
                        />
                        <label htmlFor='all' className='select__characters-type'>All Characters</label>
                    </div>

                    <div className='select__option'>
                        <input
                            className='select__characters-input'
                            id='hiragana'
                            name='characters'
                            type='radio'
                            value='hiragana' />
                        <label htmlFor='hiragana' className='select__characters-type'>Hiragana</label>
                    </div>

                    <div className='select__option'>
                        <input
                            className='select__characters-input'
                            id='Katakana'
                            name='characters'
                            type='radio'
                            value='katakana' />
                        <label htmlFor='Katakana' className='select__characters-type'>Katakana</label>
                    </div>
                </div>
                <Button buttonClass='select__button' text='Start Quiz' />
            </form>
            <Recent />
        </main>
    )
}