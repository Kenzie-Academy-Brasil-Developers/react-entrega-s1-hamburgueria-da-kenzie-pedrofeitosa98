import styled from "styled-components";

const CartContainer = styled.section`
  width: 23rem;
  min-height: 14rem;
  height: fit-content;
  border-radius: 5px;
`

const CartHeader = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1.25rem;
  background-color: var(--color-primary);
  border-radius: 5px 5px 0 0;

  h2{
    color: var(--gray-0);
    font-size: 1.125rem;
    font-weight: 700;
  }
`
const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 14rem;
  background-color: var(--gray-0);
  border-radius: 0px 0px 5px 5px;
`

const CartList = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  overflow-y: scroll;
  background-color: var(--gray-0);
`

export { CartContainer, CartHeader, CartEmpty, CartList }