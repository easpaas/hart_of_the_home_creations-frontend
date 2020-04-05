import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

const SocialBar = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  padding: 1%;
`;

function SocialMedia() {
  return (
    <SocialBar>
      <a
        href="https://www.facebook.com"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.pinterest.com"
      >
        <FontAwesomeIcon icon={faPinterest} size="2x" />
      </a>
    </SocialBar>
  );
}

export default SocialMedia;
