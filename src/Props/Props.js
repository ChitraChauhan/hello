import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Props extends Component {
    render(){
        return(
            <div>
            <h1> Hello, {this.props.name} </h1>
            <h3>Array: {this.props.propArray}</h3>			
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
         </div>
        );
    }
}
Props.propTypes = {
    name: PropTypes.string,
    propArray : PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
};
Props.defaultProps = {
    name: 'World',
    propArray: [1, 2, 3, 4, 5],
    
    propFunc: function(e) {
       return e
    },
    propNumber: 1,
 }
export default Props;