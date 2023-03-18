import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getFlowers} from "../../store/flowersReducer";
import ListFlowersContainer from "../../Components/ListFlowers/ListFlowersContainer";


const FlowersContainer = (props) => {
    useEffect( () => {
        props.getFlowers(props.activePage)
    }, [])

    return <ListFlowersContainer/>
}


function mapStateToProps(state) {
    return {
        activePage: state.flowers.activePage
    }
}

export default connect(
    mapStateToProps, {
        getFlowers
    }
)(FlowersContainer);