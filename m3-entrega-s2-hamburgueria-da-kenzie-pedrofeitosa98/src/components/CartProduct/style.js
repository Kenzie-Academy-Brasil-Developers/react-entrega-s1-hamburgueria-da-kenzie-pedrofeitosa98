import styled from "styled-components";

const CartCard = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`

const CartCardInfos = styled.div`
  width: 11rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  .heading4 {
    width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const CartCardImage = styled.img`
  width: 5rem;
  height: 5rem;
  border: 5px solid var(--gray-20);
  background-color: var(--gray-20);
  border-radius: 5px;
  object-fit: cover;
`

export { CartCard, CartCardInfos, CartCardImage }