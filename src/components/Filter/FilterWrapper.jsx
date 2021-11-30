import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredArticles } from '../../store/articlesReducer'
import { filterArrayBy } from '../../utilities/filterArrayBy'
import FilterInput from './FilterInput'
import { setQuery } from '../../store/articlesReducer'

const FilterWrapper = () => {
    const articles = useSelector(state => state.articles)
    const query = useSelector(state => state.query)
    const dispatch = useDispatch()
    const handleQueryChange = (e) => {
        dispatch(setQuery(e.target.value))
    }
    useEffect(() => {
        const queryArray = query.toLowerCase().split(' ')
        const filteredByTitle = filterArrayBy(articles, 'title', queryArray)
        const filteredBySummary = filterArrayBy(articles, 'summary', queryArray)
        const filteredArticles = [...new Set([...filteredByTitle, ...filteredBySummary])]
        dispatch(setFilteredArticles(filteredArticles))
    }, [query])
    return <FilterInput handleQueryChange={handleQueryChange} query={query} />
}

export default FilterWrapper





