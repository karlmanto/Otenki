import './Home.scss';
import { useState, useEffect } from 'react';

export default function Home() {
    const [displayMessageJP, setdisplayMessageJP] = useState("Morning");
    const [displayMessageENG, setdisplayMessageENG] = useState("Morning");

    const timestamp = new Date();
    const hours = timestamp.getHours();

    useEffect(() => {
        if (hours > 18) {
            setdisplayMessageJP('こんばんは');
            setdisplayMessageENG('Good Evening');
            return;
        }
        if (hours >= 12) {
            setdisplayMessageJP('こんにちは');
            setdisplayMessageENG("Good Afternoon");
            return;
        }
        setdisplayMessageJP('おはようございます');
        setdisplayMessageENG('Good Morning');
    }, [])


    return (
        <main className='home'>
            <h1 className='home__jp'>{displayMessageJP}</h1>
            <h1 className='home__eng'>{displayMessageENG}</h1>
        </main>
    )
}