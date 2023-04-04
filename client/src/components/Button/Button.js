import './Button.scss';

export default function Button({ buttonClass, onClick, text }) {
    return (
        <button className={`button ${buttonClass}`} onClick={onClick}>{text}</button>
    )
}