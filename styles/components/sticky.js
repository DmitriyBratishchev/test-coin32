import styled from 'styled-components'

export const Sticky = styled.div`
  position: sticky;
  top: ${({ top }) => top ? top + 'px' : 0};
  z-index: ${({ zIndex }) => zIndex ? zIndex : 2};
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};
  padding: ${({padding}) => padding ? padding : 0};
  margin: ${({margin}) => margin ? margin : 0};
`