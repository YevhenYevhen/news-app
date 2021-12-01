import { Container } from '@mui/material'
import CardsWrapper from './Cards/CardsWrapper'
import FilterWrapper from './Filter/FilterWrapper'

const HomePage = () => {
    return (
        <Container maxWidth='xl' style={{padding: '0 5%'}}>
            <FilterWrapper />
            <CardsWrapper />
        </Container>
    )
}

export default HomePage
