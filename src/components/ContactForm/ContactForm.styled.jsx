import styled from 'styled-components';

export const Input = styled.input`
  width: 280px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: 'Arial', sans-serif;
  margin: 10px auto;
  background: #e9e3e3;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;

  background-color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background: -webkit-linear-gradient(to bottom, #434343, #000000);
    background: linear-gradient(to bottom, #434343, #000000);
    color: white;
    box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
  }
`;
