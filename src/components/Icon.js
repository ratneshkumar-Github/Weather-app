import React from "react";
import "./Icon.css";
import Cloudy from "../assets/cloudy.png";
import Rain from "../assets/rain.svg";
import Snowing from "../assets/snowing.svg";
import Sun from "../assets/sun.svg";
import Thermometer from "../assets/thermometer.svg";

export default function Icon(props){
 switch(props.Icon){
     case 'Cloudy':
         return <img className="Icon" src={Cloudy} alt={Cloudy} />
         break;
         default:
         case 'Rain':
            return <img className="Icon" src={Rain} alt={Rain} />
            break;
            case 'Sun':
                return <img className="Icon" src={Sun} alt={Sun} />
                break;
                case 'Snowing':
                    return <img className="Icon" src={Snowing} alt={Snowing} />
                    break;
            default:
                        return <img className="Icon" src={Thermometer} alt={Thermometer} />
 }
}