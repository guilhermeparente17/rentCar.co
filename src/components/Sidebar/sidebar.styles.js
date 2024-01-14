import styled from "styled-components";

export const SidebarContainer = styled.section`
    position: relative;
    width: 100%;
    z-index: 999;
    height: 100vh;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;

export const SidebarContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: #291315;

    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const SidebarClose = styled.button`
    background-color: transparent;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    color: #fff;

    &:hover {
        cursor: pointer;
    }
`;

export const SidebarWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
`;

export const SidebarTitle = styled.h1`
    margin: 50px 0px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;

export const SidebarNav = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SidebarLink = styled.li`
    margin-bottom: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #fff;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const SidebarButton = styled.button`
    width: 130px;
    height: 40px;
    padding: 5px;
    border: 0;
    background-color: red;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 500;
    color: #fff;
`;