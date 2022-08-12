import styled from "styled-components";

const ListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.75rem;
  column-gap: 1.25rem;
  max-width: 58.75rem;

  @media (max-width: 700px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    align-items: center;
    max-width: 100%;
    height: 22rem;
  }
`
export default ListContainer