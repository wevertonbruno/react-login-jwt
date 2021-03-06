import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  display: flex;
  flex-direction: column;

  & + div {
      border-left: 1px solid rgba(0,0,0,0.05);
  }

  header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
  }

  h2{
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
  }

  button{
      height:40px;
      width: 40px;
      border-radius: 5px;
      background-color: #a3a3a3;
      color: white;
      border: none;
      cursor: pointer;
  }

  ul{
      margin-top: 30px;
      flex-grow: 1;
  }
`;

