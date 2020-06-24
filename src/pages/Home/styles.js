import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  video::cue {
    background-image: linear-gradient(to bottom, dimgray, lightgray);
    color: papayawhip;
  }
  video::cue(b) {
    color: peachpuff;
  }
`;
