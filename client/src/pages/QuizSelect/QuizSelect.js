import './QuizSelect.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function QuizSelect() {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/quiz/${e.target.characters.value}`)
    }

    return (
        <form className='select' onSubmit={submitHandler}>
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

            {/* <div className='' */}
            <Button buttonClass='select__button' text='Start Quiz' />
        </form>
    )
}