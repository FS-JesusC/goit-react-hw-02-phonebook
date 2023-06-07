import styled from 'styled-components';


export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 760px;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[3]}px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  `;
