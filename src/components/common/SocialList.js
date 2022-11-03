import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faWeixin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { StyledSocialList, StyledButton } from "./styles/socialList"

export default function SocialList(props) {
  return (
    <StyledSocialList {...props}>
      <li>
        <StyledButton
          as="a"
          href="https://github.com/Russellwzr"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="mailto:russellwzrr@gmail.com"
          aria-label="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="WZR28262401"
          aria-label="wechat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWeixin} />
        </StyledButton>
      </li>
    </StyledSocialList>
  )
}
