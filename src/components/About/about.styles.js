import { FaCalendarAlt, FaLocationArrow, FaRegFolderOpen } from "react-icons/fa";
import styled from "styled-components";

export const AboutContainer = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
     flex-direction: column;

     margin-top: 50px;
`;

export const AboutTitle = styled.h1`
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 25px;
    color: #3E434C;

    @media screen and (max-width: 650px) {
        text-align: center;
        font-size: 20px;
    }
`;

export const AboutSubTitle = styled.p`
    text-align: center;
    font-weight: 500;
    color: #3E434C;
    margin-bottom: 20px;

    @media screen and (max-width: 650px) {
        text-align: center;
        font-size: 14px;
        margin-bottom: 50px;
    }
`;

export const AboutContent = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-bottom: 20px;

    @media screen and (max-width: 650px) {
        flex-wrap: wrap;
    }
`;

export const AboutCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 650px) {
        margin-bottom: 40px;
    }
`;

export const AboutWrapIcon = styled.div`
    width: 130px;
    height: 130px;
    background-color: #E9ECF0;
    display:flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.5);
    border-radius: 20px;

    margin-bottom: 20px;
    transition: 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #3C2C2D;
        transition: 0.2s ease-in-out;
    }
`;

export const AboutCardTitle = styled.h3`
    text-align: center;
    margin-bottom: 5px;
    font-size: 16px;
`;

export const AboutCardSubTitle = styled.p`
    text-align: center;
`;

export const IconPosition = styled(FaLocationArrow)`
    color: #3C2C2D;

    &:hover {
        color: #fff;
    }
`;

export const IconCalendar = styled(FaCalendarAlt)`
    color: #3C2C2D;
    &:hover {
        color: #fff;
    }
`;

export const IconFolder = styled(FaRegFolderOpen)`
color: #3C2C2D;
    &:hover {
            color: #fff;
        }
`;