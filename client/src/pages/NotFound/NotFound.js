import './NotFound.scss';
import boxCat from '../../assets/images/box-cat.svg';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    const navigateHome = () => navigate('/');

    return (
        <section className='not-found'>
            <img className='not-found__image' src={boxCat} alt='Cat in a box' />
            <div className='not-found__box'>
                <h1 className='not-found__header'>404</h1>
                <p className='not-found__text'>Uh oh! The page you were looking for does not exist.</p>
                <Button buttonClass='not-found__button' onClick={navigateHome} text='Return Home' />
            </div>
        </section>
    );
}