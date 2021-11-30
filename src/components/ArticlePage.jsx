import React, { useEffect } from 'react'
import { Typography, Button, Paper } from '@material-ui/core';
import useStyles from '../useStyles';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from '../assets/ArrowLeft.svg'

const ArticlePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    const fullArticle = useSelector(state => state.fullArticle)

    return (
        <div className={classes.fullSreen}>
            <header className={classes.fullScreenHeader} style={{ backgroundImage: `url(${fullArticle.imageUrl})` }}>
            </header>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant='h5' align='center' gutterBottom className={classes.fullArticleTitle}>
                    {fullArticle.title}
                </Typography>
                <Typography component='div' gutterBottom variant='body1' className={classes.summary}>
                    <p>{fullArticle.summary}</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam numquam exercitationem deleniti a est unde cupiditate vel atque consectetur, dolor neque accusantium voluptatem optio sapiente delectus, et nulla iure excepturi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi praesentium suscipit dignissimos! Voluptate architecto voluptates, ipsum incidunt velit id voluptatem at quisquam placeat repellendus, harum dolorem quaerat nulla magni!
                        Sunt sed ab mollitia esse voluptatum, quibusdam doloribus itaque nihil distinctio dicta consequuntur in tempora facere odit delectus odio unde explicabo a cupiditate velit, accusamus eaque! Minima impedit velit repellat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam numquam exercitationem deleniti a est unde cupiditate vel atque consectetur, dolor neque accusantium voluptatem optio sapiente delectus, et nulla iure excepturi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam numquam exercitationem deleniti a est unde cupiditate vel atque consectetur, dolor neque accusantium voluptatem optio sapiente delectus, et nulla iure excepturi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis nisi culpa nobis molestiae! Temporibus excepturi error nostrum dicta quas consequatur atque veritatis, magnam dolor ex nobis rem, unde vero!
                        Eius assumenda maxime in veritatis? Fugit cum, exercitationem minima voluptatem dolore ipsa eveniet quod quam qui, sunt vel quos ipsam voluptates. Quos.
                        Sapiente magni eligendi velit nihil sunt accusamus cumque modi rerum pariatur illum odit obcaecati corrupti unde officiis voluptate aspernatur cum qui veritatis, voluptatibus aliquam doloribus. Maiores repellat consequuntur aliquid corporis.
                        Nam sapiente quod placeat necessitatibus quas dolore repellendus a saepe possimus eaque. Reiciendis et ex molestiae quod vero tenetur hic soluta amet molestias ipsum? Veniam labore non reiciendis ab voluptate.
                        Consequuntur eligendi explicabo illo similique. Sit modi non in nisi dolorem voluptatum eligendi beatae optio officia, corporis autem iusto reiciendis repellat veritatis laborum, ratione vel, recusandae excepturi fuga dolorum dicta?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi praesentium suscipit dignissimos! Voluptate architecto voluptates, ipsum incidunt velit id voluptatem at quisquam placeat repellendus, harum dolorem quaerat nulla magni!
                        Sunt sed ab mollitia esse voluptatum, quibusdam doloribus itaque nihil distinctio dicta consequuntur in tempora facere odit delectus odio unde explicabo a cupiditate velit, accusamus eaque! Minima impedit velit repellat.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi praesentium suscipit dignissimos! Voluptate architecto voluptates, ipsum incidunt velit id voluptatem at quisquam placeat repellendus, harum dolorem quaerat nulla magni!
                        Sunt sed ab mollitia esse voluptatum, quibusdam doloribus itaque nihil distinctio dicta consequuntur in tempora facere odit delectus odio unde explicabo a cupiditate velit, accusamus eaque! Minima impedit velit repellat.</p>
                </Typography>
            </Paper>
            <Button className={classes.backButton}>
                <Arrow styles={{ padding: '100px' }} />
                <NavLink className={classes.buttonLink} to='/homepage'>Back to homepage</NavLink>
            </Button>
        </div>
    )
}

export default ArticlePage