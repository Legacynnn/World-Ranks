import React from 'react'
import SearchRounded from '@material-ui/icons/SearchRounded'
import { Container, BarInput } from './style'

const SearchInput = ({ ...rest }) => {
    return (
        <Container>
            <SearchRounded color="inherit"/>
            <BarInput {...rest} />
        </Container>
    )
}

export default SearchInput
