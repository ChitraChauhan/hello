import React, { Component } from 'react';

class FormErrors extends Component {
    render() {
        const { formErrors } = this.props;
        return (
            <div>
                {Object.keys(formErrors).map((fieldName, i) => {
                    if (formErrors[fieldName].length > 0) {
                        return (
                            <p style={{ color: 'red' }} key={i}>{formErrors[fieldName]}</p>
                        )
                    }
                    else {
                        return '';
                    }
                })}

            </div>
        )
    }



}
export default FormErrors