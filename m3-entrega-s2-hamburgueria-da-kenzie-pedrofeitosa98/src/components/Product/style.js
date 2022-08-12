import styled from "styled-components";

const Card = styled.div`
  width: 18.75rem;
  height: 21.625rem;
  background-color: white;
  border: 2px solid var(--gray-20);
  border-radius: 5px;
  transition: 0.3s;

  :hover {
    border: 2px solid var(--gray-100);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  img {transition: 0.3s}

  :hover img {
    transform: scale(1.1);
  }
`

const CardImage = styled.div`
  width: 100%;
  height: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-0);
  border-radius: 2px 2px 0 0;
  object-fit: cover;

  img {
    max-height: 100%;
    object-fit: cover;
  }
`
const CardPrice = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`

const CardInfos = styled.div`
  padding: 1.25rem;
  width: 100%;
  height: 12.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

export { Card, CardImage, CardPrice, CardInfos }