import './Hiragana.scss';
import Back from '../../components/Back/Back';
import BasicChart from '../../components/BasicChart/BasicChart';
import CombinationChart from '../../components/CombinationChart/CombinationChart';
import ModifiedChart from '../../components/ModifiedChart/ModifiedChart';

export default function Hiragana() {

    return (
        <main className='hiragana'>
            <div className='hiragana__top'>
                <Back />
            </div>
            <section className='hiragana__description'>
                <h1>What is Hiragana?</h1>
            </section>
            <section className='hiragana__charts'>
                <BasicChart type='hiragana' />
                <CombinationChart type='hiragana' />
                <ModifiedChart type='hiragana' />
            </section>
        </main>
    )
}