import React from 'react'
import StyledHero from './styles'
import { StaticImage } from 'gatsby-plugin-image'
import { SocialList } from '../common'
import TypeIt from 'typeit-react'

const Hero = () => {
  return (
    <StyledHero>
      <section>
        <div className="hero-welcome">
          <h1 className="h-48 md:h-96 lg:h-full">
            <div className="w-full h-full">
              <TypeIt
                options={{
                  cursor: false,
                  speed: 60,
                }}
              >
                <span className="greeting">
                  <span>Hi there !</span>
                  <span role="img" aria-label="Hand wave emoji" className="hand-emoji">
                    👋
                  </span>
                </span>
                I'm <span className="gatsby">Russell</span>
                <span className="greeting md:mt-8">
                  <span>Feel free to look around</span>
                  <span role="img" aria-label="hello emoji" className="md:text-5xl">
                    🎊
                  </span>
                </span>
                <div className="flex md:mt-10">
                  <SocialList size="lg" />
                </div>
              </TypeIt>
            </div>
          </h1>
          <div className="my-img-wrapper">
            <StaticImage
              className="rounded-lg shadow-xl shadow-indigo-300/60"
              src="../../images/me.jpg"
              alt="Profile picture"
            />
          </div>
        </div>
        <div className="md:mt-8">
          <p>
            I am currently a postgraduate of computer science and technology at{' '}
            <a href="http://www.ict.ac.cn/" target="_blank" rel="noopener noreferrer">
              ICT, Chinese Academy of Sciences
            </a>{' '}
            . Before that, I received my bachelor's degree from{' '}
            <a href="https://www.cs.sdu.edu.cn/" target="_blank" rel="noopener noreferrer">
              Shandong University
            </a>{' '}
            . My recent interests are Front-end Development, AI+HCI and some funny AIGC applications. I am also a crazy
            fan of the LA Lakers 💜💛 and Kobe Bryant 🐍🏆 ! In my spare time, I love 🎤 singing, 🎵 dancing, 🏀 playing
            basketball, and 🎮 gaming <span>{'😎'}</span>
          </p>
        </div>
      </section>
    </StyledHero>
  )
}

export default Hero
