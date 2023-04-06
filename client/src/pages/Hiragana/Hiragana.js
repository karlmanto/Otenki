import './Hiragana.scss';
import Back from '../../components/Back/Back';
import BasicChart from '../../components/BasicChart/BasicChart';

export default function Hiragana() {

    return (
        <main className='hiragana'>
            <Back />
            <h1>What is Hiragana?</h1>
            <BasicChart type='hiragana' />
        </main>
    )
}