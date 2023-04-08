import './Hiragana.scss';
import Back from '../../components/Back/Back';
import BasicChart from '../../components/BasicChart/BasicChart';
import CombinationChart from '../../components/CombinationChart/CombinationChart';
import ModifiedChart from '../../components/ModifiedChart/ModifiedChart';
import Button from '../../components/Button/Button';
import { useState } from 'react';

export default function Hiragana() {
    const [visible, setVisible] = useState(true);

    const clickHandler = () => {
        setVisible(!visible);
    }

    return (
        <main className='hiragana'>
            <div className='hiragana__top'>
                <Back />
                <Button buttonClass='hiragana__button' onClick={clickHandler} text='Toggle romaji' />
            </div>
            <section className='hiragana__description'>
                <h1>What is Hiragana?</h1>
            </section>
            <section className='hiragana__charts'>
                <BasicChart type='hiragana' visible={visible} />
                <CombinationChart type='hiragana' visible={visible} />
                <ModifiedChart type='hiragana' visible={visible} />
            </section>
        </main>
    )
}