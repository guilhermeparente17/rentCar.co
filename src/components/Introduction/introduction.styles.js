import styled from "styled-components";

export const IntroductionContainer = styled.section`
    width: 100%;
    height: 100%;
`;

export const IntroImage = styled.img`
    width: 100%;
    height: 800px;
    background-size: cover;
    background-position: center;

    position: absolute;

    display:flex;
    justify-content: center;
    align-items: center;
`;

export const IntroContent = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    padding: 20px;

    margin: 120px 0px 0px 60px;
    height: 280px;
    width: 360px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const IntroTitle = styled.h1`
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const IntroSubTitle = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
`;

export const IntroSearchContainer = styled.div`
    position: absolute;
    top: 550px;
    width: 100%;
    height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IntroSearch = styled.section`
    width: 600px;
    height: 100%;
    background-color: #F6ECEB;
    border-radius: 10px;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.5);
    padding: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const IntroSearchOption = styled.div`
    display: flex;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 15px;


    &:hover {
        border: ${props => props?.withBorder ? '1px solid black' : ''};
        border-radius: 10px;
        cursor: pointer;
    }
`;

export const IntroSearchOpContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

export const IntroSearchOpTitle = styled.div`
    margin-bottom: 5px;
    font-weight: bold;
`;

export const IntroSubtitle = styled.p`
    font-size: 14px;
    text-align: center;
`;

export const IntroSearchButton = styled.button`
    width: 150px;
    height: 40px;
    font-weight: bold;
    color: #fff;
    background-color: #3C2C2D;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: rgba(61,45,46, 0.8);
        transition: 0.2s ease-in-out;
    }
`;

export const IntroInputDate = styled.input`
    width: 130px;
    height: 20px;
    padding: 5px;
`;
