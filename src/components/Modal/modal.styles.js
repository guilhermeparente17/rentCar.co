import styled from "styled-components";

export const ModalContainer = styled.div`
    position: absolute;
    top: 0px;
    z-index: 1000;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
`;

export const ModalContent = styled.div`
    width: 700px;
    height: 500px;
    background-color: #fff;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.7);
    border-radius: 10px;
`;

export const ModalTitle = styled.h1`
    text-align: center;
    margin-top: 20px;
`;

export const ModalHeader = styled.header`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    margin-bottom: 30px;
`;

export const ModalClose = styled.button`
    width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border: 0cap;
    background-color: red;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const ModalData = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1;
`;