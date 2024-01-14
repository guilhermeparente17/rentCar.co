import styled from "styled-components";

export const CatalogueContainer = styled.section`
    margin: 100px 0px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CatalogueTitle = styled.h1`
    margin-bottom: 20px;

    @media screen and (max-width: 750px) {
        text-align: center;
        word-break: break-all;
        margin: 0px 20px 20px;
    }
`;

export const CatalogueSubTitle = styled.p`
    @media screen and (max-width: 750px) {
        text-align: center;
        word-break: break-all;
        margin: 0px 20px;
    }
`;

export const CatalogueTabs = styled.div`
    margin: 50px 0px 100px;
    background-color: transparent;

    @media screen and (max-width: 750px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const CatalogueTab = styled.button`
    width: 100px;
    height: 30px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin:0px 20px;
    box-shadow: 1px 2px 30px 2px rgba(0,0,0,0.2);
    transition: 0.2s ease-in-out;
    font-weight: 700;
    background-color: ${props => props.category && '#3C2C2D'};
    color: ${props => props.category && '#fff'};

    &:hover {
        background-color: #3C2C2D;
        color: #fff;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 750px) {
        margin-bottom: 20px;
    }
`;

export const CatalogueContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;