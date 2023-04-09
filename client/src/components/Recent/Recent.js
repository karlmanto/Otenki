import './Recent.scss';

export default function Recent() {
    const recentScores = JSON.parse(localStorage.getItem('scores'));

    const formattedDate = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = date.toDateString();
        return formattedDate;
    }

    if (recentScores.length === 0) {
        return (
            <section>
                <h1 className='recent__header'>Recent Scores</h1>
                <p className='recent__score'>No scores to display!</p>
            </section>
        )
    }

    return (
        <section className='recent'>
            <h1 className='recent__header'>Recent Scores</h1>
            {recentScores.map((item) => {
                return <div className='recent__row' key={recentScores.indexOf(item)}>
                    <p className='recent__score'>{`${item.score}/20`}</p>
                    <p className='recent__timestamp'>{formattedDate(item.date)}</p>
                </div>
            })}
        </section>
    )
}