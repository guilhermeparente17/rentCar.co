import React from "react";
import {
  AdditionalWrap,
  CardCarAddional,
  CardCarAdditionals,
  CardCarButton,
  CardCarContainer,
  CardCarImage,
  CardCarLegend,
  CardCarPrice,
  CardCarPriceAndStars,
  CardCarRent,
  CardCarTitle,
  IconBrigtness,
  IconPeople,
  IconWater,
  StarsWrap,
} from "./cardcar.styles";
import { FaStar } from "react-icons/fa";

const CardCar = ({ car }) => {
  const starsArray = new Array(car.stars).fill(null);
  return (
    <CardCarContainer>
      <CardCarImage src={car.imageUrl} />

      <CardCarTitle>{car.name}</CardCarTitle>

      <CardCarAdditionals>
        <CardCarAddional>
          <AdditionalWrap>
            <IconPeople />
          </AdditionalWrap>
          <CardCarLegend>8 people</CardCarLegend>
        </CardCarAddional>
        <CardCarAddional>
          <AdditionalWrap>
            <IconWater />
          </AdditionalWrap>
          <CardCarLegend>Ar Condicionado</CardCarLegend>
        </CardCarAddional>
        <CardCarAddional>
          <AdditionalWrap>
            <IconBrigtness />
          </AdditionalWrap>
          <CardCarLegend>Automatic</CardCarLegend>
        </CardCarAddional>
      </CardCarAdditionals>

      <CardCarRent>
        <CardCarPriceAndStars>
            <StarsWrap>
                {starsArray.map((_) => (
                        <FaStar size='15' color='orange' style={{margin: '3px'}} />
                ))}
            </StarsWrap>

          <CardCarPrice>
            {car.value.currency}
            {car.value.amount}/Day
          </CardCarPrice>
        </CardCarPriceAndStars>

        <CardCarButton>Rent Now</CardCarButton>
      </CardCarRent>
    </CardCarContainer>
  );
};

export default CardCar;
