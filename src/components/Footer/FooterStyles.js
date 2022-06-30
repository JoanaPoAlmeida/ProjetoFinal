import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 10pt;
  padding-bottom: 10pt;
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  background: radial-gradient(circle, rgba(13, 34, 64, 1) 0%, rgba(19, 46, 84,1) 100%);

  @media (max-width: 1000px) {
    padding: 70px 30px;
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

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.90);;
  margin-bottom: 0px;
  font-size: 18px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;