import React from "react";
import {
  CatalogueContainer,
  CatalogueContent,
  CatalogueSubTitle,
  CatalogueTab,
  CatalogueTabs,
  CatalogueTitle,
} from "./catalogue.styles";
import CarData from "../../utils/CarData";
import CardCar from "../CardCar/cardcar.component";

const Catalogue = () => {
  return (
    <CatalogueContainer>
      <CatalogueTitle>Find the luxury car of your choice</CatalogueTitle>

      <CatalogueSubTitle>
        Find your car in all our categories and make sure you are selecting the
        car that suits you best.
      </CatalogueSubTitle>

      <CatalogueTabs>
        <CatalogueTab>ALL</CatalogueTab>
        <CatalogueTab>SUV</CatalogueTab>
        <CatalogueTab>SPORT</CatalogueTab>
        <CatalogueTab>WAGON</CatalogueTab>
        <CatalogueTab>OFF-ROAD</CatalogueTab>
      </CatalogueTabs>

      <CatalogueContent>
        {
            CarData.map((car, id) => {
                return <CardCar key={id} car={car} />
            })
        }
      </CatalogueContent>
    </CatalogueContainer>
  );
};

export default Catalogue;
