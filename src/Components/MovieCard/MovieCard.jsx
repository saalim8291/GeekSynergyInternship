import React from 'react'
import './MovieCard.css'

const MovieCard = ({ title, genre, director, stars, poster, language, releasedDate, pageViews, voting, totalVoted }) => {
    return (
        <div className="main">
            <div className="card-conatiner">
                <div className="voting">
                    <div className="up-down">
                        <div className="arrow-up">
                        </div>
                        <div className="count">
                            <span>{voting}</span>
                        </div>
                        <div className="arrow-down">
                        </div>
                    </div>
                    Votes
                </div>
                <div className="movie-container">
                    <img src={poster} alt="" />
                    <div className="name-and-description">
                        <h2 className="heading">{title}</h2>
                        <div>genre: {genre}</div>
                        <div>director: {director[0]}</div>
                        <div>starring: {stars}</div>
                        <div>Mins | {language} | {releasedDate}</div>
                        <div className="veiw-vote">{pageViews} views | voted by {totalVoted} people</div>
                    </div>
                </div>
            </div>
            <button className="trailer">Watch Trailer</button>
        </div>
    )
}

export default MovieCard