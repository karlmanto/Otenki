import './Quiz.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Results from '../../components/Results/Results';
import Button from '../../components/Button/Button';

export default function Quiz() {
    const API_URL = process.env.REACT_APP_API_URL;

    const [currentChar, setCurrentChar] = useState('');
    const [currentRound, setCurrentRound] = useState(1);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [input, setInput] = useState('');

    const { characters } = useParams();

    useEffect(() => {
        fetchCharacter();
    }, [])

    const fetchCharacter = () => {
        axios.get(`${API_URL}characters/${characters}`)
            .then(res => {
                const charArray = res.data;
                const randomNum = Math.floor(Math.random() * res.data.length)
                setCurrentChar(charArray[randomNum]);
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.input.value;

        if (input.toLowerCase() === currentChar.romaji) {
            fetchCharacter();
            setCorrect(correct + 1);
            setCurrentRound(currentRound + 1);
            setInput('');
            return;
        }
        fetchCharacter();
        setIncorrect(incorrect + 1);
        setCurrentRound(currentRound + 1);
        setInput('');
    }


    if (!currentChar) {
        return <Loading />
    }

    if (currentRound > 20) {
        return <Results
            correct={correct}
            setCorrect={setCorrect}
            setIncorrect={setIncorrect}
            setCurrentRound={setCurrentRound}
        />
    }

    return (
        <main className='quiz'>
            <section className='quiz__stats'>
                <div className='quiz__progress'>
                    <h1 className='quiz__progress-text'>Progress</h1>
                    <p className='quiz__progress-count'>{currentRound}/20</p>
                </div>
                <div className='quiz__accuracy'>
                    <div className='quiz__accuracy-card'>
                        <h3 className='quiz__accuracy-text'>Correct</h3>
                        <p className='quiz__correct-count'>{correct}</p>
                    </div>
                    <div className='quiz__accuracy-card'>
                        <h3 className='quiz__accuracy-text'>Incorrect</h3>
                        <p className='quiz__incorrect-count'>{incorrect}</p>
                    </div>
                </div>
            </section>
            <section className='quiz__game'>
                <div className='quiz__character'>{currentChar.japanese}</div>
                <form className='quiz__form' onSubmit={handleSubmit}>
                    <input autoFocus className='quiz__input' name='input' value={input} onChange={handleInputChange} placeholder='Type your guess here'></input>
                    <Button buttonClass='quiz__submit' text='Submit' />
                </form>
            </section>
        </main>
    )
}