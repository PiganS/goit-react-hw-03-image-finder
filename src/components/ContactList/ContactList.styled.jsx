import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #6966668d;
  margin-top: 5px;
`;

export const ContactText = styled.p`
  overflow: hidden;
`;

export const ButtonDel = styled.button`
  border-radius: 5px;
  border: none;

  background-color: #e49797;
  font-weight: bold;

  &:hover {
    background: #911313;
    /* background: -webkit-linear-gradient(to bottom, #434343, #000000);
    background: linear-gradient(to bottom, #434343, #000000); */
    color: white;
    box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.75);
  }
`;
