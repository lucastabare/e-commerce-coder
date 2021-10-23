import React, { Fragment } from 'react'
import Carrusel from '../Carrusel/Carrusel'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function home() {
    return (
        <Fragment>
            <Carrusel/>
            <ItemListContainer/>
        </Fragment>
    )
}

export default home
