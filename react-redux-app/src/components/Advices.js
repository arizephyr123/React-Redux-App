import React, { useEffect } from "react";
//import react-redux connect (bridge)
import { connect } from "react-redux";
import Advice from "./Advice";

import { fetchAdvices } from "../actions";

const Advices = props => {
  console.log("Advices", props.adviceData.slip);
  //console.log(props.adviceData.slip.advice);
  useEffect(() => {
    props.fetchAdvices();
  }, []);
  if (props.isFetching) {
    //loading state set-up
    return <h2>Advice is loading...</h2>;
  } else
    return (
      <div>
        {/* error state set up*/}
        {props.error && <p>{props.error}</p>}
        {/* success state set up*/}
         <Advice advice={props.adviceData} />
      </div>
    );
};

const mapStateToProps = state => {
  console.log("mstp state", state);
  return {
    adviceData: state.adviceData,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchAdvices }
)(Advices);
