import './Quiz.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import Results from '../../components/Results/Results';

export default function Quiz() {
    const [currentChar, setCurrentChar] = useState('');
    const [currentRound, setCurrentRound] = useState(1);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [input, setInput] = useState('');


    useEffect(() => {
        fetchCharacter();
    }, [])


    const fetchCharacter = () => {
        axios.get('http://localhost:8080/characters/all')
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
        if (e.target.input.value === currentChar.romaji) {
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
            <section className='quiz__game'>
                <h1 className='quiz__header'>Quiz</h1>
                <div className='quiz__character'>{currentChar.japanese}</div>
                <form className='quiz__form' onSubmit={handleSubmit}>
                    <input className='quiz__input' name='input' value={input} onChange={handleInputChange} placeholder='Type your guess here'></input>
                    <button className='quiz__enter'>Enter</button>
                </form>
            </section>
            <section className='quiz__stats'>
                <div className='quiz__progress'>
                    <p className='quiz__progress-text'>Progress: {currentRound}/20</p>
                </div>
                <div className='quiz__accuracy'>
                    <div className='quiz__correct'>
                        <p className='quiz__accuracy-text'>Correct</p>
                        <p className='quiz__correct-count'>{correct}</p>
                    </div>
                    <div className='quiz__incorrect'>
                        <p className='quiz__accuracy-text'>Incorrect</p>
                        <p className='quiz__incorrect-count'>{incorrect}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}