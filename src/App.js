import { CssBaseline } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';
import HomePage from './components/HomePage';
import { setArticles, setFilteredArticles } from './store/articlesReducer';
import './App.css'
import { getArticles } from './api';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const wrapper = async () => {
      const articles = await getArticles();
      dispatch(setArticles(articles))
      dispatch(setFilteredArticles(articles))
    }
    wrapper();
  }, [])

  return (
    <div className='app'>
      <CssBaseline />
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
