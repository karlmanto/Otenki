import './Home.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import Button from '../../components/Button/Button';

export default function Home() {
    const [scoreList, setScoreList] = useState([]);

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
                <Button
                    buttonClass='home__button'
                    onClick={navigateLearn}
                    text='Learn' />
                <Button
                    buttonClass='home__button'
                    onClick={navigateQuiz}
                    text='Quiz' />
            </div>
        </main>
    )
}