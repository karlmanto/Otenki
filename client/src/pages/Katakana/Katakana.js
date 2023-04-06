import './Katakana.scss';
import Back from '../../components/Back/Back';
import BasicChart from '../../components/BasicChart/BasicChart';
import CombinationChart from '../../components/CombinationChart/CombinationChart';
import ModifiedChart from '../../components/ModifiedChart/ModifiedChart';

export default function Katakana() {

    return (
        <main className='katakana'>
            <div className='katakana__top'>
                <Back />
            </div>
            <section className='katakana__description'>
                <h1>What is Katakana?</h1>
            </section>
            <section className='katakana__charts'>
                <BasicChart type='katakana' />
                <CombinationChart type='katakana' />
                <ModifiedChart type='hiragana' />
            </section>
        </main>
    )
}