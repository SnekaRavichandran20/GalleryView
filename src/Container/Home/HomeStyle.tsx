import styled from 'styled-components';

// to style the overall page
export const HomePage = styled.div`
  background-color: #ccc;
  height: 100vh;
`;

export const DropDownOption = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  background-color: #ccc;

  @media screen and (max-width: 545px) {
    flex-wrap: wrap;
  }
`;

export const SelectedCard = styled.span`
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  gap: 0.5rem;
  width: auto;
  font-size: 0.8rem;
  margin: 0 0.5rem;
  margin-top: .3rem;
`;

export const SelectedOptions = styled.span`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 545px) {
    flex-wrap: wrap;
  }
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ImageCard = styled.span`
  cursor: pointer;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const ImageDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 698px) {
    flex-wrap: wrap;
  }
`;

export const ImageScroll = styled.div`
  margin: 3rem;
  margin-top: 0;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 0.3rem;
  margin-left: 0;
  height: 20rem;
  padding: 1rem;
  width: 10rem;
  overflow-x: hidden;

  @media screen and (max-width: 698px) {
    flex-wrap: nowrap;
    height: 6rem;
    overflow-x: scroll;
    width: -webkit-fill-available;
    margin: 3rem;
    margin-top: 0;
    overflow-y: hidden;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 3rem;
  padding: 1rem;
  background-color: #fff;
  height: 20rem;
  margin-right: 0;
  min-width: 30rem;

  @media screen and (max-width: 698px) {
    margin: 0 3rem;
    min-width: -webkit-fill-available;
  }
`;
