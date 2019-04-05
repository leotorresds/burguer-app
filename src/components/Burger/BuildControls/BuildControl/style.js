import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 5px 0;
`;

const Button = styled.button`
    display:block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #002b36;
    cursor: pointer;
    outline: none;
    &:disabled{
        background-color: #CCC;
        border: 1px solid #CCC;
        color: white;
        cursor: default;
    }
    &:hover:disabled{
        background-color: #CCC;
        color: white;
        cursor: not-allowed;
    }
`;

export const MoreButton = styled(Button)`
    background-color: #1e6d80;
    color: white;
    &:hover{
        background-color: #0f586b;
        color: white;
    }
`;

export const LessButton = styled(Button)`
    background-color: #1e6d80;
    color: white;
    &:hover{
        background-color: #0f586b;
        color: white;
    }
`;

export const Label = styled.div`
   padding: 10px;
   font-weight: bold;
   width: 80px;
`;