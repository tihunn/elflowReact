import React from 'react';
import {createFlower} from "../../../../store/flowersReducer";
import {connect} from "react-redux";
import SendFlower from "./SendFlower";
import {clearState} from "../../../../store/FilterReduser";
import {compose} from "redux";
import withCreatorStrLightSensitivity from "../../../hoc/withCreatorStrLightSensitivity";
import withCreatorStrBloomTime from "../../../hoc/withCreatorStrBloomTime";

let mapStateToProps = (state) => {
    return {
        state: state.filter,
        isHiddenLightSensitivity: state.filter.isHiddenLightSensitivity,
        sunOrShadow: state.filter.sunOrShadow,
        isSunAndShadow: state.filter.isSunAndShadow,
        bloomTime: state.filter.bloomTime,
        file: state.filter.file
    }
}

export default compose(
    connect(mapStateToProps, {
        createFlower,
        clearState}),
    withCreatorStrLightSensitivity,
    withCreatorStrBloomTime,
)(SendFlower)