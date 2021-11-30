import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { ReactComponent as SearchIcon } from '../../assets/Vector.svg'
import useStyles from '../../useStyles'

const FilterInput = ({handleQueryChange, query}) => {
    const classes = useStyles()
    return (
        <div className={classes.searchField}>
            <h2 className={classes.searchFieldTitle} variant='h5'>Filter by keywords</h2>
            <TextField
                onChange={(e) => handleQueryChange(e)}
                value={query}
                id="input-with-icon-textfield"
                fullWidth
                margin='dense'
                variant='outlined'
                className={classes.searchInput}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}

export default FilterInput
