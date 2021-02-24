import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: #182b35;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    
    a{
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
        cursor: pointer;
        
        h1{
            font-size: 1.2rem;
        }
        img{
            width: 30px;
            margin-right: 10px;
        }
    }
    
`;

