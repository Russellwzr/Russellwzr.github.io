import tw, { styled } from "twin.macro"

export const StyledBlogCard = styled.article`
  header {
    h2 {
      ${tw`mt-4 text-xl font-bold leading-loose md:text-2xl`};
      a {
        ${tw`hover:text-yellow-500`};
      }
    }
    small {
      ${tw`text-lg font-light leading-loose`};
    }
  }

  p {
    ${tw`text-xl font-light leading-loose`};
  }
`
