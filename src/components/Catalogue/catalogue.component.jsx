import React, { useState } from "react";
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
  const [category, setCategory] = useState('');

  const carrosFiltrados = CarData.filter((car) => {
    return category === '' || car.category === category || category === 'ALL';
  });

  return (
    <CatalogueContainer>
      <CatalogueTitle>Find the luxury car of your choice</CatalogueTitle>

      <CatalogueSubTitle>
        Find your car in all our categories and make sure you are selecting the
        car that suits you best.
      </CatalogueSubTitle>

      <CatalogueTabs>
        <CatalogueTab category={category === 'ALL'} onClick={() => setCategory('ALL')}>ALL</CatalogueTab>
        <CatalogueTab category={category === 'SUV'} onClick={() => setCategory('SUV')}>SUV</CatalogueTab>
        <CatalogueTab category={category === 'SPORT'} onClick={() => setCategory('SPORT')}>SPORT</CatalogueTab>
        <CatalogueTab category={category === 'WAGON'} onClick={() => setCategory('WAGON')}>WAGON</CatalogueTab>
        <CatalogueTab category={category === 'OFFROAD'} onClick={() => setCategory('OFFROAD')}>OFF-ROAD</CatalogueTab>
      </CatalogueTabs>

      <CatalogueContent>
        {
            carrosFiltrados.map((car, id) => {
                return <CardCar key={id} car={car} />
            })
        }
      </CatalogueContent>
    </CatalogueContainer>
  );
};

export default Catalogue;
