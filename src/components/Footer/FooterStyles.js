import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2vh;
  margin-bottom: 0;
  padding-top: 15pt;
  padding-bottom: 15pt;
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  background: radial-gradient(circle, rgba(13, 34, 64, 1) 0%, rgba(19, 46, 84,1) 100%);
  

  @media (max-width: 1060px) {
    padding: 7vh 3vh;
    position: inherit;
  }
`;

export const Wrapper = styled.div`
    display: block;
    justify-content: center;
    max-width: 1000px;
    margin-bottom: 2%;
    background: red; 
`

export const Column = styled.div`
  display: block;
  flex-direction: column;
  text-align: center;
  margin-left: auto;
`;

export const Row = styled.div`
  display: block;
  grid-gap: 20x;
  background: red;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    display: flex;
  }
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.90);
  margin-bottom: 0px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  display: block;
  flex-direction: column;
  text-align: center;
  margin-left: auto;

  &:hover {
    color: rgba(255, 255, 255, 0.90);
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;