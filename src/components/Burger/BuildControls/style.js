import styled from 'styled-components';

export const BuildControlsBox = styled.div`
    width: 100%;
    background-color: #002b36;
    color: white;
    display: flex;
    flex-flow: column; 
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    
`;

export const OrderButton = styled.button`
    background-color: #0f586b;
    outline: none;
    cursor: pointer;
    border: 1px solid #0f586b;
    color: white;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #0f586b;
    &:hover{
        background-color: #1e6d80;
        border: 1px solid #1e6d80;
        color: white;
    }

    &:disabled{
        background-color: #CCC;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: white;
    }

    &:note(:disabled){
        animation: enable 0.3s linear;
    }

    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
         }
    }
`;