import './Home.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'

export default function Home() {
    const [displayMessageJP, setdisplayMessageJP] = useState('');
    const [displayMessageENG, setdisplayMessageENG] = useState('');

    const navigate = useNavigate();

    const timestamp = new Date();
    const hours = timestamp.getHours();

    useEffect(() => {
        if (hours > 18) {
            setdisplayMessageJP('こんばんは');
            setdisplayMessageENG('Good Evening');
            return;
        }
        if (hours >= 12) {
            setdisplayMessageJP('こんにちは');
            setdisplayMessageENG("Good Afternoon");
            return;
        }
        setdisplayMessageJP('おはようございます');
        setdisplayMessageENG('Good Morning');
    }, [])


    const navigateLearn = () => navigate('/learn');
    const navigateQuiz = () => navigate('/quiz');


    return (
        <main className='home'>
            <div className='home__hero'>
                <div className='home__message'>
                    <h2 className='home__jp'>{displayMessageJP}</h2>
                    <h2 className='home__eng'>{displayMessageENG}</h2>
                </div>
                <img className='home__logo' src={logo} alt='Otenki logo'></img>
            </div>
            <div className='home__links'>
                <button className='home__button' onClick={navigateLearn}>Learn</button>
                <button className='home__button' onClick={navigateQuiz}>Quiz</button>
            </div>
        </main>
    )
}