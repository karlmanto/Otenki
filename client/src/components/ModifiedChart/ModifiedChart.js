import './ModifiedChart.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

export default function ModifiedChart({ type }) {
    const [g, setG] = useState('');
    const [z, setZ] = useState('');
    const [d, setD] = useState('');
    const [b, setB] = useState('');
    const [p, setP] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/characters/${type}`)
            .then(res => {
                const characters = res.data;
                setG(characters.filter(character => character.consonant === 'g'));
                setZ(characters.filter(character => character.consonant === 'z'));
                setD(characters.filter(character => character.consonant === 'd'));
                setB(characters.filter(character => character.consonant === 'b'));
                setP(characters.filter(character => character.consonant === 'p'));
            })
    }, []);

    if (!g || !z || !d || !b || !p) {
        return <Loading />
    }

    return (
        <section className='modified-chart'>
            <h2 className='modified-chart__header'>Dakuten/Handakuten</h2>
            <div className='modified-chart__row'>
                {g.map(char => {
                    return (
                        <div className='modified-chart__item' key={char.id}>
                            <p className='modified-chart__japanese'>{char.japanese}</p>
                            <p className='modified-chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='modified-chart__row'>
                {z.map(char => {
                    return (
                        <div className='modified-chart__item' key={char.id}>
                            <p className='modified-chart__japanese'>{char.japanese}</p>
                            <p className='modified-chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='modified-chart__row'>
                {d.map(char => {
                    return (
                        <div className='modified-chart__item' key={char.id}>
                            <p className='modified-chart__japanese'>{char.japanese}</p>
                            <p className='modified-chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='modified-chart__row'>
                {b.map(char => {
                    return (
                        <div className='modified-chart__item' key={char.id}>
                            <p className='modified-chart__japanese'>{char.japanese}</p>
                            <p className='modified-chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
            <div className='modified-chart__row'>
                {p.map(char => {
                    return (
                        <div className='modified-chart__item' key={char.id}>
                            <p className='modified-chart__japanese'>{char.japanese}</p>
                            <p className='modified-chart__romaji'>{char.romaji}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}