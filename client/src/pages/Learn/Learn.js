import './Learn.scss';
import mountFuji from '../../assets/videos/mount-fuji.mp4';
import road from '../../assets/videos/road.mp4';
import { useNavigate } from 'react-router-dom';

export default function Learn() {
    const navigate = useNavigate();
    const navigateHiragana = () => navigate('/learn/hiragana');
    const navigateKatakana = () => navigate('/learn/katakana');

    return (
        <main className='learn'>
            <h1 className='learn__header'>What would you like to learn?</h1>
            <section className='learn__cards'>
                <div className='learn__card' onClick={navigateHiragana}>
                    <div className='learn__overlay'>Hiragana ひらがな</div>
                    <video className='learn__video' src={mountFuji} autoPlay loop muted playsInline />
                </div>
                <div className='learn__card' onClick={navigateKatakana}>
                    <div className='learn__overlay'>Katakana カタカナ</div>
                    <video className='learn__video' src={road} autoPlay loop muted playsInline />
                </div>
            </section>
        </main>
    )
}