import tw, { styled } from 'twin.macro'

const StyledHero = styled.article`
  ${tw`mt-16 mb-14`};

  @keyframes shake {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    10% {
      -webkit-transform: rotate(-16deg);
      transform: rotate(-16deg);
    }

    20% {
      -webkit-transform: rotate(16deg);
      transform: rotate(16deg);
    }

    30% {
      -webkit-transform: rotate(-16deg);
      transform: rotate(-16deg);
    }

    40% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }

    50% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  .hero-welcome {
    ${tw`grid grid-template-areas["hero"] items-center`};
    > * {
      grid-area: hero;
    }
    h1 {
      ${tw`w-1/2 pr-2 text-xl font-extrabold sm:text-2xl light:text-dark md:text-4xl lg:text-6xl`};
      .greeting {
        ${tw`relative flex md:block text-xl sm:text-2xl md:text-4xl md:mb-8`};
        .hand-emoji {
          animation: shake 2.5s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
          width: 1.5em;
          position: relative;
          ${tw`md:text-5xl`};
        }
      }
      span[role='img'] {
        ${tw`ml-4`};
      }
      .gatsby {
        ${tw`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500`};
      }
    }
    .my-img-wrapper {
      ${tw`w-1/2 justify-self-end`};
    }
  }

  h2 {
    ${tw`mt-12 text-xl font-light leading-loose md:text-2xl`};
    a {
      ${tw`border-b-2 border-yellow-500 hover:text-yellow-500`};
    }
  }

  p {
    ${tw`mt-12 text-xl font-light leading-loose md:text-xl`};
    a {
      ${tw`border-b-2 border-yellow-500 hover:text-yellow-500`};
    }
  }

  .tech {
    ${tw`grid items-center grid-cols-3 mt-12 gap-x-2 md:(mt-24 gap-x-8)`};
    li {
      ${tw`w-full mx-auto light:text-dark md:mx-0 max-width[200px]`};
    }
  }
`

export default StyledHero
