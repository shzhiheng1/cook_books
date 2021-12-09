import React from 'react'
import {Container} from '../ui/StyleCookBook'

import Swipers from '../ui/Swipers'
import Search from '@/components/search/Search'
import Hotcate from '../ui/Hotcate'

export default function Cookbookui() {
    return (
        <Container>
                <header>美食大全</header>
                <Swipers />
                <Search />
                <Hotcate />
        </Container>
    )
}

