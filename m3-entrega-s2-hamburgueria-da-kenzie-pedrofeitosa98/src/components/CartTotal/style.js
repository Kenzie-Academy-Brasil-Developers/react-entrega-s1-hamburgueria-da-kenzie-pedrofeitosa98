import styled from "styled-components";

const CartBottom = styled.div`
  width: 100%;
  height: 8.75rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.375rem;
  border-radius: 0 0 5px 5px;
  background-color: var(--gray-0);
  border-top: 2px solid var(--gray-20);
`

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { CartBottom, PriceContainer }