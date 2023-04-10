import './CombinationChart.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';

export default function CombinationChart({ type, visible }) {
    const API_URL = process.env.REACT_APP_API_URL;

    const [ky, setKy] = useState('');
    const [gy, setGy] = useState('');
    const [sh, setSh] = useState('');
    const [j, setJ] = useState('');
    const [ch, setCh] = useState('');
    const [ny, setNy] = useState('');
    const [hy, setHy] = useState('');
    const [by, setBy] = useState('');
    const [my, setMy] = useState('');
    const [py, setPy] = useState('');
    const [ry, setRy] = useState('');

    const [romajiClass, setRomajiClass] = useState('combination-chart__romaji');

    useEffect(() => {
        if (!visible) {
            setRomajiClass('combination-chart__romaji--hidden');
            return;
        }
        setRomajiClass('combination-chart__romaji');
    }, [visible])

    useEffect(() => {
        axios.get(`${API_URL}characters/${type}`)
            .then(res => {
                const characters = res.data
                setKy(characters.filter(character => character.consonant === 'ky'));
                setGy(characters.filter(character => character.consonant === 'gy'));
                setSh(characters.filter(character => character.consonant === 'sh'));
                setJ(characters.filter(character => character.consonant === 'j'));
                setCh(characters.filter(character => character.consonant === 'ch'));
                setNy(characters.filter(character => character.consonant === 'ny'));
                setHy(characters.filter(character => character.consonant === 'hy'));
                setBy(characters.filter(character => character.consonant === 'by'));
                setMy(characters.filter(character => character.consonant === 'my'));
                setPy(characters.filter(character => character.consonant === 'py'));
                setRy(characters.filter(character => character.consonant === 'ry'));
            })
            .catch(err => console.log(err.message));
    }, [])

    if (!ky || !gy || !sh || !j || !ch || !ny || !hy || !by || !my || !py || !ry) {
        return <Loading />
    }

    return (
        <section className='combination-chart'>
            <h2 className='combination-chart__header'>Combination</h2>
            <div className='combination-chart__row'>
                {ky.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {gy.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {sh.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {j.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {ch.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {ny.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {hy.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {by.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {my.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {py.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='combination-chart__row'>
                {ry.map(char => {
                    return (
                        <div className='combination-chart__item' key={char.id}>
                            <p className='combination-chart__japanese'>{char.japanese}</p>
                            <p className={romajiClass}>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}