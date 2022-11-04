import tw, { css, theme, styled } from "twin.macro"

export const LightBackground = theme`colors.white`
export const DarkBackground = theme`colors.gray.700`

export const baseStyles = css`
  .light {
    --bg-primary: ${LightBackground};
    --text-primary: ${theme`colors.gray.600`};
    --text-dark: ${theme`colors.gray.700`};
  }

  .dark {
    --bg-primary: ${DarkBackground};
    --text-primary: ${theme`colors.purple.50`};
  }

  body {
    ${tw`font-sans font-normal bg-primary text-primary before:(block w-full)`};
    &::before {
      ${tw`h-1 bg-gradient-to-r from-purple-800 via-yellow-400 to-turquoise`};
    }

    #___gatsby {
      ${tw`max-w-5xl min-h-screen mx-auto px-2 lg:px-0`};
    }

    a {
      ${tw`focus:(outline-none) focus-visible:(outline-none ring-2 ring-purple-300)`};
    }

    #skip-link {
      ${tw`sr-only focus:(not-sr-only fixed left-1 top-1.5 bg-primary)`};
    }
  }
`

export const StyledNav = styled.nav`
  ${tw`grid grid-template-columns[1fr repeat(2, minmax(min-content, max-content))] gap-x-2 text-center place-items-center`};

  .logo {
    ${tw`flex items-center py-2 justify-self-start md:justify-center`};
    svg {
      ${tw`block w-10 h-12 md:(w-14 h-16)`};
    }
  }

  a:not(.logo) {
    ${tw`flex items-center p-3 motion-safe:transition duration-200 tracking-wide border-b-2 border-transparent md:(ml-0 px-10 text-xl) hover:text-yellow-500`};

    &.add-line,
    &[aria-current="page"],
    &:hover {
      ${tw`border-yellow-500`};
    }
  }
`

export const StyledHeader = tw.header`grid grid-template-columns[1fr minmax(min-content, max-content)] gap-x-2 md:gap-x-4`

export const StyledFooter = styled.footer`
  ${tw`grid py-6 text-3xl border-t-2 mt-10 place-items-center gap-y-2`};

  .title {
    ${tw`grid grid-flow-col text-lg font-semibold text-transparent gap-x-2 place-items-center bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500`};

    svg {
      ${tw`inline-block w-8 h-10 md:(w-10 h-12)`};
    }
  }
  .author {
    ${tw`text-sm font-light`};
    a {
      ${tw`tracking-wider border-b-2 border-yellow-500 hover:text-yellow-500`};
    }
  }
`

export const StyledToggle = styled.label`
  ${tw`inline-grid self-center grid-template-areas["input label"] grid-template-columns[2.5rem auto] gap-1 items-center md:text-lg hover:cursor-pointer`};
  input,
  span {
    ${tw`grid-area[input] h-3 w-8 md:text-base`};
  }
  input {
    ${tw`opacity-0`};
  }
  span {
    ${tw`items-center bg-indigo-500 inline-grid opacity-80 rounded-2xl`};
    &::before {
      ${tw`w-4 h-4 transform transition-all -translate-y-0.5 duration-200 bg-white border-2 border-indigo-500 rounded-full content`};
    }
  }
  input:checked + span::before {
    ${tw`translate-x-4 bg-gray-800`};
  }
  input:focus-visible + span::before {
    ${tw`ring-2 ring-indigo-800`};
  }
  input:checked:focus-visible + span::before {
    ${tw`ring-2 ring-white`};
  }
`
