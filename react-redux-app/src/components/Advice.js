import React from 'react';
import { connect } from "react-redux";

const Advice = props => {
    console.log(props);
    return(
        <div>
        {props.advice.slip ? <p>{props.advice.slip.advice}</p> : <p>Nothing</p>}
        </div>
        
    )
    }

    export default Advice;