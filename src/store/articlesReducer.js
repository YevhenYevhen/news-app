const SET_ARTICLES = 'articlesReducer/SET_ARTICLES';
const SET_FILTERED_ARTICLES = 'articlesReducer/SET_FILTERED_ARTICLES';
const SET_FULL_ARTICLE = 'articlesReducer/SET_FULL_ARTICLE';
const SET_QUERY = 'articlesReducer/SET_QUERY';

const initialState = {
    articles: [],
    filteredArticles: [],
    fullArticle: {},
    query: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return { ...state, articles: [...action.articles] }
        case SET_FILTERED_ARTICLES:
            return { ...state, filteredArticles: [...action.filteredArticles] }
        case SET_FULL_ARTICLE:
            return { ...state, fullArticle: action.fullArticle }
        case SET_QUERY:
            return { ...state, query: action.query }
        default: return state
    }
}

export const setArticles = (articles) => ({ type: SET_ARTICLES, articles })
export const setFilteredArticles = (filteredArticles) => ({ type: SET_FILTERED_ARTICLES, filteredArticles })
export const setFullArticle = (fullArticle) => ({ type: SET_FULL_ARTICLE, fullArticle })
export const setQuery = (query) => ({ type: SET_QUERY, query })



export default reducer;