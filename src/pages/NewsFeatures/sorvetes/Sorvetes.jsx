import React from 'react'
import { useParams } from 'react-router-dom'

import categories from '../../../assets/data/category'

const Sorvetes = () => {

    const {id} = useParams()

    const sorvetes = categories.filter(item => item.id === parseInt(id))
    const { img, title } = sorvetes

    console.log(sorvetes)

  return (
    <div>
        <h1>Sorvetes pages Rendering </h1>
        <h3>{title}</h3>
        <img src={img} alt="img" />
        <h2>Hello Ice Cream</h2>

        <h1>{`Page ${id}  --   ${title}`} </h1>
    </div>
  )
}

export default Sorvetes

