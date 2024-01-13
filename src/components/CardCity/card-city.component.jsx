import React from 'react'

import {
    CardCityContainer,
    CCFlag,
    CCCity
} from './card-city.styles'
import useStore from '../../useStore';

const CardCity = (citys) => {
  const {flag, city} = citys.citys;

  const {chooseLocation, setOpenModal } = useStore();

  const handleOption = (city) => {
    chooseLocation(city);
    setOpenModal(false);
  }

  return (
    <CardCityContainer onClick={() => handleOption(city)}>
        <CCFlag src={flag} />
        <CCCity>{city}</CCCity>
    </CardCityContainer>
  )
}

export default CardCity