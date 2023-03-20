import React from 'react';
import {connect} from 'react-redux';
import Editable from "./Editable";

function mapStateToProps(state) {
    return {
        role: state.user.user.role,
    };
}

const EditableContainer = (props) => {
  return <Editable {...props}/>
}


export default connect(
    mapStateToProps, {

    }
)(EditableContainer);