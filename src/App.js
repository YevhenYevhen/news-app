import { CssBaseline } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { setArticles, setFilteredArticles } from './store/articlesReducer';
import './App.css'
import { getArticles } from './api';
import ArticlePageWrapper from './components/ArticlePage/ArticlePageWrapper';

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
        <Route exact path='/' element={<HomePage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticlePageWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
