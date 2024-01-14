import { TiThMenu } from 'react-icons/ti';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: rgba(0,0,0,0.5);

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    position: absolute;
    z-index: 999;
`;

export const HeaderLogo = styled.span`
    margin-left: 50px;
    font-weight: 700;
    cursor: pointer;
`;

export const HeaderNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 50px;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

export const HeaderLink = styled.li`
    margin-right: 40px;
    font-weight: 500;

    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const HeaderButton = styled.button`
    width: 80px;
    height: 35px;
    border-radius: 6px;
    background-color: #3C2C2D;
    border: 0;
    color: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #C2322B;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }
`;

export const HeaderIconMenu = styled.div`
    display: none;

    @media screen and (max-width: 750px) {
        display: block;
    }
`;

export const Menu = styled(TiThMenu)`
    margin-right: 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #ccc;
        transition: 0.2s ease-in-out;
    }
`;
