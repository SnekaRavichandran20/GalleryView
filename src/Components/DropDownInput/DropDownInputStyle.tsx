import styled from 'styled-components';

// for dropdown button
export const Button = styled.button`
  border: 1px solid #ccc;
  width: 10rem;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);

  :hover {
    background-color: #ccc;
  }
`;

//  for styling the options field
export const Option = styled.button`
  padding: 0.5rem;
  display: block;
  width: 10rem;
  border: 0.1rem solid #ccc;
  background-color: #f1f1f1;
  text-align: left;
  cursor: pointer;
  font-size: 0.7rem;
  z-index: 1000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);

  :hover {
    background-color: #ddd;
  }
`;

export const OptionField = styled.div`
  position: relative;
  z-index: 1;
`;

export const Span = styled.span`
  display: inline-block;
`;

export const OptionBlock = styled.span`
  position: absolute;
`;
