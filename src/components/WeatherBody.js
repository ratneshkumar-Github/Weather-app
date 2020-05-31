import React from "react";
import "./WeatherBody.css";
import Days from "./Days";
// import Icon from "./Icon";
import Temp from "./Temp";

export default function WeaatherBody(props){
    return(
        <div className="WeatherBody card">
            <Days day={props.day} />
            {/* <Icon icon={props.icon} /> */}
            <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} />
        </div>
    );

};
