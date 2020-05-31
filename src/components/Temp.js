import React from 'react'
import './Temp.css'

export default function Temp (props){
    return (

        <div className="Temp">
            <span className="min">{props.minTemp}</span>
            <span className="max">{props.maxTemp}</span>
        </div>
    ) 
}
