import React, { Component } from 'react'
import {Container} from './StyleCookBook'

import Swipers from './Swipers'
import Search from '@/components/search/Search'

export default class Cookbook extends Component {
    render() {
        return (
            <Container>
                <header>美食大全</header>
                <Swipers />
                <Search />
            </Container>
        )
    }
}
