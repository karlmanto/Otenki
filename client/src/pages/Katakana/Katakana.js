import './Katakana.scss';
import Back from '../../components/Back/Back';
import BasicChart from '../../components/BasicChart/BasicChart';
import CombinationChart from '../../components/CombinationChart/CombinationChart';
import ModifiedChart from '../../components/ModifiedChart/ModifiedChart';
import Button from '../../components/Button/Button';
import { useState } from 'react';

export default function Katakana() {
    const [visible, setVisible] = useState(true);

    const clickHandler = () => {
        setVisible(!visible);
    }

    return (
        <main className='katakana'>
            <div className='katakana__top'>
                <Back />
                <Button buttonClass='katakana__button' onClick={clickHandler} text='Toggle romaji' />
            </div>
            <section className='katakana__description'>
                <h1>What is Katakana?</h1>
            </section>
            <section className='katakana__charts'>
                <BasicChart type='katakana' visible={visible} />
                <CombinationChart type='katakana' visible={visible} />
                <ModifiedChart type='katakana' visible={visible} />
            </section>
        </main>
    )
}