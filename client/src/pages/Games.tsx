import React, { useState } from 'react'
import Loader from '../components/common/Loader'
import { Gallery } from '../components/GameGallery/Gallery'
import Categories from '../components/common/Categories'

const Games = () => {
    return (
        <>
            <Categories />
            <Gallery />
        </>
    )
}

export default Games