import React from 'react';
import {connect} from "react-redux";
import {clearState} from "../../store/FilterReduser";
import {compose} from "redux";
import withCreatorStrLightSensitivity from "../../hoc/withCreatorStrLightSensitivity";
import withCreatorStrBloomTime from "../../hoc/withCreatorStrBloomTime";
import SendFlower from "../SendFlower/SendFlower";
import {updateFlower} from "../../store/oneFlowerReducer";

let mapStateToProps = (state) => {
    return {
        state: state.oneFlower,
        isHiddenLightSensitivity: state.filter.isHiddenLightSensitivity,
        sunOrShadow: state.filter.sunOrShadow,
        isSunAndShadow: state.filter.isSunAndShadow,
        bloomTime: state.filter.bloomTime,
        file: state.filter.file
    }
}

export default compose(
    connect(mapStateToProps, {
        updateFlower,
        clearState}),
    withCreatorStrLightSensitivity,
    withCreatorStrBloomTime,
)(SendFlower)