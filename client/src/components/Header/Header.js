import './Header.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg'

export default function Header() {
    const [homeClassName, setHomeClassName] = useState('navbar__link navbar__link--active');
    const [learnClassName, setLearnClassName] = useState('navbar__link');
    const [quizClassName, setQuizClassName] = useState('navbar__link');
    const [homeActive, setHomeActive] = useState(true);
    const [learnActive, setLearnActive] = useState(false);
    const [quizActive, setQuizActive] = useState(false);

    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        if (path === '/') {
            setHomeActive(true);
            setLearnActive(false);
            setQuizActive(false);
        }
        if (path === '/learn') {
            setHomeActive(false);
            setLearnActive(true);
            setQuizActive(false);
        }
        if (path === '/quiz') {
            setHomeActive(false);
            setLearnActive(false);
            setQuizActive(true);
        }
    }, [path])

    useEffect(() => {
        if (homeActive) {
            setHomeClassName('navbar__link navbar__link--active');
            setLearnClassName('navbar__link');
            setQuizClassName('navbar__link');
        }
        if (learnActive) {
            setHomeClassName('navbar__link');
            setLearnClassName('navbar__link navbar__link--active');
            setQuizClassName('navbar__link');
        }
        if (quizActive) {
            setHomeClassName('navbar__link');
            setLearnClassName('navbar__link');
            setQuizClassName('navbar__link navbar__link--active');
        }
    }, [homeActive, learnActive, quizActive])

    return (
        <nav className='navbar'>
            <NavLink to='/'>
                <div className='navbar__logo'>
                    <img src={logo} className='navbar__image' alt='Otenki logo'></img>
                    <h2 className='navbar__wordmark'>Otenki</h2>
                </div>
            </NavLink>
            <ul className='navbar__items'>
                <NavLink to='/' className={homeClassName}>Home</NavLink>
                <NavLink to='/learn' className={learnClassName}>Learn</NavLink>
                <NavLink to='/quiz' className={quizClassName}>Quiz</NavLink>
            </ul>
        </nav>
    )
}