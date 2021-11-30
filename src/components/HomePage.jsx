import { Container } from '@mui/material'
import React, { useState } from 'react'
import CardsWrapper from './Cards/CardsWrapper'
import FilterWrapper from './Filter/FilterWrapper'

const HomePage = () => {
    return (
        <Container maxWidth='xl'>
            <FilterWrapper />
            <CardsWrapper />
        </Container>
    )
}

export default HomePage
