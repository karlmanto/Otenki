import './BasicChart.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import aSound from '../../assets/audio/a.wav'
import eSound from '../../assets/audio/e.wav'
import iSound from '../../assets/audio/i.wav'
import oSound from '../../assets/audio/o.wav'
import uSound from '../../assets/audio/u.wav'

export default function BasicChart({ type }) {
    const [vowels, setVowels] = useState('');
    const [k, setK] = useState('');
    const [s, setS] = useState('');
    const [t, setT] = useState('');
    const [n, setN] = useState('');
    const [h, setH] = useState('');
    const [m, setM] = useState('');
    const [y, setY] = useState('');
    const [r, setR] = useState('');
    const [w, setW] = useState('');
    const [nm, setNm] = useState('');

    const a = new Audio(aSound);
    const e = new Audio(eSound);
    const i = new Audio(iSound);
    const o = new Audio(oSound);
    const u = new Audio(uSound);

    const playSound = (char) => {
        if (char === 'a') {
            a.play();
        }
        if (char === 'e') {
            e.play();
        }
        if (char === 'i') {
            i.play();
        }
        if (char === 'o') {
            o.play();
        }
        if (char === 'u') {
            u.play();
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/characters/${type}`)
            .then(res => {
                const characters = res.data;
                setVowels(characters.filter(character => character.consonant === 'none'));
                setK(characters.filter(character => character.consonant === 'k'));
                setS(characters.filter(character => character.consonant === 's'));
                setT(characters.filter(character => character.consonant === 't'));
                setN(characters.filter(character => character.consonant === 'n'));
                setH(characters.filter(character => character.consonant === 'h'));
                setM(characters.filter(character => character.consonant === 'm'));
                setY(characters.filter(character => character.consonant === 'y'));
                setR(characters.filter(character => character.consonant === 'r'));
                setW(characters.filter(character => character.consonant === 'w'));
                setNm(characters.filter(character => character.consonant === 'n/m'));
            })
            .catch(err => console.log(err.message));
    }, [])


    if (!vowels || !k || !s || !t || !n || !h || !m || !y || !r || !w || !nm) {
        return <Loading />
    }

    return (
        <section className='chart'>
            <h2 className='chart__header'>Basic</h2>
            <div className='chart__row'>
                {vowels.map(char => {
                    return (
                        <div className='chart__item' key={char.id} onClick={() => playSound(char.romaji)}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {k.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {s.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {t.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {n.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {h.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {m.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {r.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {y.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {w.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='chart__row'>
                {nm.map(char => {
                    return (
                        <div className='chart__item' key={char.id}>
                            <p className='chart__japanese'>{char.japanese}</p>
                            <p className='chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}