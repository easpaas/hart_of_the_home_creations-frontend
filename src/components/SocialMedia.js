import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

const SocialBar = styled.div`
  display: flex;

  justify-content: space-between;
  width: 25%;
  margin: 0 auto;
  padding: 1%;
`;

const StyledLink = styled('a')`
  color: lightpink;
`;


function SocialMedia() {
  return (
    <>
    <div style={{ maxWidth: '45%' }}>
      <img style={{ width: '100%' }} src="./assets/" alt="vicki" />
    </div>
    <SocialBar>
      <StyledLink
        href="https://www.facebook.com/chalkcouturewithvickihunter/"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </StyledLink>
      <StyledLink
        href="https://www.instagram.com/iamvickihunter"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </StyledLink>
      <StyledLink
        href="https://www.pinterest.com/vickisscrapper"
      >
        <FontAwesomeIcon icon={faPinterest} size="2x" />
      </StyledLink>
    </SocialBar>
    </>
  );
}

export default SocialMedia;
