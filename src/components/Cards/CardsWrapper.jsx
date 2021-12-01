import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import useStyles from '../../useStyles'
import Cards from './Cards'

const CardsWrapper = () => {
    const articles = useSelector(state => state.filteredArticles)
    const isFiltered = useSelector(state => !!state.query.length)
    const classes = useStyles()
    return (
        <>
            {isFiltered && <h2 className={classes.resultsCount} >Results: {articles.length}</h2>}
            <div className={classes.searchFieldLine}></div>
            <Grid container spacing={2}>
                {articles.map(article => {
                    let date = new Date(article.publishedAt).toDateString().substring(4).split('')
                    date.splice(6, 0, ',');
                    date = date.join('');
                    const title = article.title.length > 60 ? `${article.title.substring(0, 60)}...` : article.title
                    const description = article.summary.length > 100 ? `${article.summary.substring(0, 100)}...` : article.summary
                    return <Cards key={article.id}
                        article={article}
                        title={title}
                        description={description}
                        date={date} />
                })}
            </Grid>
        </>
    )
}

export default CardsWrapper
