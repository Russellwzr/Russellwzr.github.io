import React from "react"
import { SocialList } from "../common"
import { StyledFooter } from "./styles"

const Footer = () => {
  return (
    <StyledFooter>
      <p className="title">Keep eating codes!</p>
      <SocialList />
      <p className="author">
        Created by Gatsby & React & Tailwind CSS & Emotion
      </p>
      <p className="author">
        Thanks{" "}
        <a
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrism Williams
        </a>{" "}
        for the starter.
      </p>
    </StyledFooter>
  )
}

export default Footer
