import styled from 'styled-components';

export const ContainerExample = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  padding: 15px;
`;

export const ChildExample = styled.span`
  max-width: 200px;
  padding: 15px;

  border: 1px solid var(--border70);
  border-radius: 5px;

  background-color: var(--block16);

  font-weight: bold;
`;
