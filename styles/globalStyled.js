import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  .customScroll {
    overflow-y: scroll;

    &::-webkit-scrollbar{
      margin-right: 0;
      width: 10px;
      background-color: #0C0E17;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background: linear-gradient(180deg, #8D929F 0%, #555A66 100%);
    }
  }
`