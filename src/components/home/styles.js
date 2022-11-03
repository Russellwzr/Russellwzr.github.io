import tw, { styled } from "twin.macro"

const StyledHero = styled.article`
  ${tw`mt-16`};

  .hero-welcome {
    ${tw`grid grid-template-areas["hero"] items-center`};
    > * {
      grid-area: hero;
    }
    h1 {
      ${tw`w-1/2 pr-2 text-4xl font-extrabold light:text-dark md:text-6xl`};
      .greeting {
        ${tw`block mb-8 text-3xl md:text-4xl`};
      }
      span[role="img"] {
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
