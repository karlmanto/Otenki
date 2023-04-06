import './Back.scss';
import backArrow from '../../assets/icons/back-arrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Back() {
    const navigate = useNavigate();

    const clickHandler = () => navigate(-1);

    return (
        <div className='back' onClick={clickHandler}>
            <img className='back__arrow' src={backArrow} alt='' />
            <p className='back__text'>Back</p>
        </div>
    )
}