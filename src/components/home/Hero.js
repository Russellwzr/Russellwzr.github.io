import React from "react"
import StyledHero from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import { SocialList } from "../common"

const Hero = () => {
  return (
    <StyledHero>
      <section>
        <div className="hero-welcome">
          <h1 className="flex flex-col justify-center space-y-10">
            <div>
              <span className="greeting">
                Hi there
                <span role="img" aria-label="Hand wave emoji">
                  👋
                </span>{" "}
              </span>
              I'm <span className="gatsby">Russell</span>
            </div>
            <div className="flex">
              <SocialList />
            </div>
          </h1>
          <div className="my-img-wrapper ">
            <StaticImage src="../../images/me.jpg" alt="Profile picture" />
          </div>
        </div>
        <p>
          I am currently a postgraduate of computer science and technology at{" "}
          <a
            href="http://www.ict.ac.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICT, Chinese Academy of Sciences
          </a>{" "}
          . Before that, I received my bachelor's degree from{" "}
          <a
            href="https://www.cs.sdu.edu.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shandong University
          </a>{" "}
          . My recent interests are Front-end Development, Visualization, Human
          Computer Interaction and Artificial Intelligence. <span>{"😎"}</span>
        </p>
      </section>
    </StyledHero>
  )
}

export default Hero
