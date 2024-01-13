import styled from "styled-components";

export const CardCityContainer = styled.div`
    width: 200px;
    height: 80px;
    padding: 10px;

    display: flex;

    background-color: #ccc;
    margin: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        border: 1px solid black;
    }
`;
export const CCFlag = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
`;
export const CCCity = styled.h1`
    font-size: 16px;
`;