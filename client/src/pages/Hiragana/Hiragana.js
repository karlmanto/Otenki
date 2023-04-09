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
                <h1 className='hiragana__header'>What is Hiragana?</h1>
                <p className='hiragana__text'>Hiragana is one of the basic Japanese writing systems. Its literal meaning translates to "flowing" and it is used primarily to write native Japanese words and grammatical elements.</p>
            </section>
            <section className='hiragana__charts'>
                <BasicChart type='hiragana' visible={visible} />
                <CombinationChart type='hiragana' visible={visible} />
                <ModifiedChart type='hiragana' visible={visible} />
            </section>
        </main>
    )
}