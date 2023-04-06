import './Katakana.scss';
import Back from '../../components/Back/Back';
import BasicChart from '../../components/BasicChart/BasicChart';

export default function Katakana() {

    return (
        <main className='katakana'>
            <Back />
            <h1>What is Katakana?</h1>
            <BasicChart type='katakana' />
        </main>
    )
}