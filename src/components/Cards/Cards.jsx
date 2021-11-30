import React, { useEffect }  from 'react'
import { Typography, Card, Button, Grid, CardMedia, CardActions, CardContent } from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import useStyles from '../../useStyles';
import Highlighter from "react-highlight-words";
import { NavLink } from 'react-router-dom';
import { setFullArticle } from '../../store/articlesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Arrow } from '../../assets/ArrowRight.svg'
import { handleScrollPosition } from '../../utilities/handleScrollPosition';

const Cards = ({ article, date, description, title }) => {
    const query = useSelector(state => state.query)
    const classes = useStyles();
    const queryArray = query.toLowerCase().split(' ')
    const dispatch = useDispatch();
    const handleFullArticle = (fullArticle) => {
        dispatch(setFullArticle(fullArticle))
        sessionStorage.setItem("scrollPosition", window.pageYOffset)
    }
    useEffect(() => {
        handleScrollPosition()
    }, [])
    
    return (
        <Grid item xs={12} sm={6} md={4} className={classes.cardGrid}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={article.imageUrl} title='Image Title' />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' className={classes.cardDate}>
                        <CalendarTodayOutlinedIcon fontSize='small' />
                        {date}
                    </Typography>
                    <Typography className={classes.cardTitle} gutterBottom variant='h5'>
                        <Highlighter highlightClassName={classes.highlighted}
                            searchWords={[...queryArray]}
                            autoEscape={true}
                            textToHighlight={title}>
                        </Highlighter>
                    </Typography>
                    <Typography className={classes.description} gutterBottom variant='subtitle1' align='left' paragraph>
                        <Highlighter highlightClassName={classes.highlighted}
                            searchWords={[...queryArray]}
                            autoEscape={true}
                            textToHighlight={description}>
                        </Highlighter>
                    </Typography>
                    <CardActions>
                        <Button className={classes.readMoreButton}
                            onClick={() => handleFullArticle(article)} size='small' color='primary'>
                            <NavLink className={classes.buttonLink} to={`/article/${article.id}`}>Read more</NavLink>
                            <Arrow />
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Cards
