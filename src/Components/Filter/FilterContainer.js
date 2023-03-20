import React, {useState} from 'react';
import {connect} from 'react-redux';
import Filter from "./Filter";
import {
    setAvailable,
    setChangeCheckbox,
    setDescription,
    setHeight,
    setHeightMin,
    setIsSunAndShadow,
    setNameFlower,
    setPrice, setSearchData,
    setSunOrShadow,
    setWholesale
} from "../../store/FilterReduser";
import {getFlowers} from "../../store/flowersReducer";
import {compose} from "redux";
import withCreatorStrBloomTime from "../../hoc/withCreatorStrBloomTime";
import withCreatorStrLightSensitivity from "../../hoc/withCreatorStrLightSensitivity";
import {useLocation, useNavigate} from "react-router-dom";



const FilterContainer = (props) => {
    const [hide, setHide] = useState(true)
    const [isHeight, setIsHeight] = useState(true)
    const navigate = useNavigate();
    const onHide = () => {
        setHide(!hide)
    }

    const clickHeight = () => {
        setIsHeight(!isHeight)
    }

    const onSearch = () => {
        const isSearch = {}
        if (props.filter.nameFlower) {
            isSearch.nameFlower = props.filter.nameFlower
        }
        if (!props.filter.isHiddenLightSensitivity) {
            isSearch.lightSensitivity = props.creatorStrLightSensitivity(props.filter.sunOrShadow, props.filter.isSunAndShadow)
        }
        if (!isHeight) {
            isSearch.height = props.filter.height
            isSearch.heightMin = props.filter.heightMin
        }

        if (Object.keys(isSearch).length > 0) {
            props.setSearchData(isSearch)
            props.getFlowers(1, undefined, isSearch)
        }
    }


    return <Filter {...props} hide={hide} onHide={onHide} onSearch={onSearch} clickHeight={clickHeight} isHeight={isHeight}/>
}

function mapStateToProps(state) {
    return {
        role: state.user.user.role, filter: state.filter
    }
}


export default compose(connect(mapStateToProps, {
    setNameFlower,
    setHeight,
    setHeightMin,
    setPrice,
    setWholesale,
    setAvailable,
    setDescription,
    setIsSunAndShadow,
    setSunOrShadow,
    setChangeCheckbox,
    getFlowers,
    setSearchData
}), withCreatorStrBloomTime, withCreatorStrLightSensitivity)(FilterContainer)