import styled from 'styled-components';

type StickyProps = {
  top?: string,
  zIndex?: number,
  bgColor?: string,
  padding?: string,
  margin?: string,
}

export const Sticky = styled.div<StickyProps>`
  position: sticky;
  top: ${({ top }) => top ? top : 0};
  z-index: ${({ zIndex }) => zIndex ? zIndex : 2};
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};
  padding: ${({ padding }) => padding ? padding : 0};
  margin: ${({ margin }) => margin ? margin : 0};
`;