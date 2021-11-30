import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        minWidth: '400px',
        minHeight: '217px',
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    cardTitle: {
        textAlign: 'left',
        fontFamily: 'Montserrat, sans-serif',
        fonStyle: 'normal',
        fontWeight: 'normal',
        fonSize: '24px',
        lineHeight: '29px',
        color: '#363636',
        flexGrow: 1,
    },
    searchFieldTitle: {
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#363636',
        marginBottom: '10px'
    },
    resultsCount: {
        fontFamily: 'Montserrat, sans-serif',
        fonStyle: 'normal',
        fontWeight: '600',
        fonSize: '16px',
        lineHeight: '20px',
        color: '#363636',
    },
    cardDate: {
        display: 'flex',
        justifyContent: 'left',
        lineHeight: 1.5,
        fontSize: 'medium',
        color: 'rgb(189, 189, 189)',
    },
    paper: {
        margin: 'auto',
        marginTop: '-90px',
        maxWidth: '1290px',
        minHeight: '1001px',
        padding: '20px',
    },
    summary: {
        margin: '5% 10%',
        
    },
    description: {
        fontFamily: 'Montserrat, sans-serif',
        fonStyle: 'normal',
        fontWeight: 'normal',
        fonSize: '16px',
        lineHeight: '150%',
        flexGrow: 1,
        maxHeight: '96px',
        overflow: 'hidden'
    },
    fullArticleTitle: {
        padding: '30px 0'
    },
    fullScreen: {
        position: 'absolute',
        minHeight: '1186px'
    },
    backButton: {
        marginTop: '5%',
        marginLeft: '10%', 
        marginBottom: '38px',
        fontFamily: 'Montserrat, sans-serif',
        fonStyle: 'normal',
        fontWeight: 'bold',
        fonSize: '16px',
    },
    readMoreButton: {
        fontFamily: 'Montserrat, sans-serif',
        fonStyle: 'normal',
        fontWeight: 'bold',
        fonSize: '16px',
    },
    buttonLink: {
        color: '#363636',
        textDecoration: 'none'
    },
    fullScreenHeader: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '245px',
        marginLeft: '-50px',
        marginTop: '-75px'
    },
    highlighted: {
        backgroundColor: 'yellow'
    },
    searchField: {
        marginBottom: '40px' 
    },
    line: {
        width: '100%',
        border: '1px solid #EAEAEA',
        marginBottom: '45px'
    },
    searchInput: {
        maxWidth: '600px',
        margin: '25px',
        background: '#FFFFFF',
        border: '1px solid #EAEAEA',
        boxSizing: 'border-box',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        bordeRadius: '5px'
    }
})
)

export default useStyles;