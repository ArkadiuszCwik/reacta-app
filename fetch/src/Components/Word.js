import React from 'react'
import './Word.css'

const Word = props => (
<li>Słowo w języku angielskim: <strong>{props.english}</strong> <br/>
Tłumaczenie: {props.polish}</li>
)

export default Word;