import React from 'react'
import { MovieResult } from '../utils/types'
import Card from './Card'
import { useNumberStore } from '../hooks/useNumberStore'

function MovieList(results: MovieResult[]) {
  return (
    <div>
    <h2>Min liste</h2>
        {/* Box that maps each restult to a Card */}
        <div className="cardHolder">
            {results.map(movie => {
              return <Card
                href={"/movies/" + movie.id}
                size="small"
                result={movie}
                showStar={false}
                />
            })}
        </div>
    </div>
  )
}

export default MovieList