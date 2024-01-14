import { FaUsers } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import styled from "styled-components";
import { BiBrightness } from "react-icons/bi";

export const CardCarContainer = styled.div`
    width: 300px;
    height: 370px;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const CardCarImage = styled.img`
    width: 300px;
    height: 200px;
    margin-top: 0px;
`;

export const CardCarTitle = styled.h3`
    margin-bottom: 20px;
`;

export const CardCarAdditionals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const CardCarAddional = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`;

export const IconPeople = styled(FaUsers)`
    width: 30px;
    height: 30px;
    color: #3C2C2D;
`;

export const IconWater = styled(IoWater)`
    width: 30px;
    height: 30px;
    color: #3C2C2D;
`;

export const IconBrigtness = styled(BiBrightness)`
    width: 30px;
    height: 30px;
    color: #3C2C2D;
`;

export const CardCarLegend = styled.span`
    text-align: center;
    font-size: 12px;
    color: #3C2C2D;
    font-weight: 500;
    margin-top: 5px;
`;

export const AdditionalWrap = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border: 2px solid #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 30px 2px rgba(0,0,0,0.2);
`;

export const CardCarRent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardCarPriceAndStars = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
`;

export const CardCarPrice = styled.span`
    font-weight: bold;
`;

export const CardCarButton = styled.button`
    margin-right: 20px;
    width: 100px;
    height: 30px;
    background-color: #3C2C2D;
    border: 0;
    cursor: pointer;
    color: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: rgba(0,0,0,.5);
        transition: 0.2s ease-in-out;
    }
`;

export const StarsWrap = styled.div`
    display: flex;
    flex-direction: row;
`;
