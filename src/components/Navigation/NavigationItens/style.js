import styled from 'styled-components';

export const Itens = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-flow: row;
   align-items: center;
   height: 100%;

   @media(max-width: 500px){
       flex-flow: column;
   }
`;

export const NavigationItem = styled.li`

    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    align-items: center;

    a{
        color: #113f4a;
        text-decoration: none;
        width: 100%;
        padding: 16px 10px;
        box-sizing: border-box;
        display: block;
    }

    a:hover,
    a:active,
    a.active{
        color: #1e6d80;
    }

    
    @media(min-width: 500px){
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;

        a{
            color: white;
            text-decoration: none;
            height: 100%;
            width: auto;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
        }

        a:hover,
        a:active,
        a.active{
            background-color: #113f4a;
            border-bottom: 4px solid #1e6d80;
            color: white;
        }
    }
   
`;
