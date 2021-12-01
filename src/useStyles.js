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
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#363636',
        flexGrow: 1,
    },
    cardDate: {
        display: 'flex',
        justifyContent: 'left',
        lineHeight: 1.5,
        fontSize: 'medium',
        color: 'rgb(189, 189, 189)',
    },
    cardDescription: {
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '150%',
        flexGrow: 1,
        maxHeight: '96px',
        overflow: 'hidden'
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
    searchFieldWrapper: {
        marginBottom: '40px' 
    },
    searchFieldLine: {
        width: '100%',
        border: '1px solid #EAEAEA',
        marginBottom: '45px'
    },
    searchFieldInput: {
        maxWidth: '600px',
        margin: '25px',
        background: '#FFFFFF',
        border: '1px solid #EAEAEA',
        boxSizing: 'border-box',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        bordeRadius: '5px'
    },
    resultsCount: {
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#363636',
    },
    fullArticlePaper: {
        margin: '-90px 8% 50px',
        maxWidth: '1290px',
        minHeight: '1001px'
    },
    fullArticleSummary: {
        margin: '5% 10%',
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '150%',
        color: '#000000',
        paddingBottom: '50px'
        
    },
    fullArticleTitle: {
        padding: '30px 5px',
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#363636'
        
    },
    fullArticleWrapper: {
        position: 'absolute',
        minHeight: '1186px',
    },
    fullArticleHeader: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '245px',
    },
    backButton: {
        position: 'relative',
        marginTop: '35px',
        left: '10%',
        bottom: '45px',
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    readMoreButton: {
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        marginLeft: '-19px'
    },
    buttonLink: {
        color: '#363636',
        textDecoration: 'none',
        padding: '0 6px',
        
    },
    highlighted: {
        backgroundColor: 'yellow'
    }
})
)

export default useStyles;