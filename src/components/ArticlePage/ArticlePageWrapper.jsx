import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import ArticlePage from './ArticlePage';

const ArticlePageWrapper = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const fullArticle = useSelector(state => state.fullArticle)
    return (
        <>
            {fullArticle.title ? <ArticlePage fullArticle={fullArticle}/> : <Navigate to='/homepage' />}
        </>
    )
}

export default ArticlePageWrapper