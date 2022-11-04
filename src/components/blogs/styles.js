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
      ${tw`md:text-lg font-light leading-loose`};
    }
  }

  p {
    ${tw`md:text-xl font-light leading-loose`};
  }
`

export const StyledPagButton = styled.button`
  ${tw`hover:text-yellow-500 border-b-2 hover:border-yellow-500 disabled:text-gray-200 
  disabled:border-gray-200 dark:disabled:text-gray-500 dark:disabled:border-gray-500`};
`

export const StyledBlogArticle = styled.article`
  ${tw`font-light leading-loose md:text-xl`}

  header {
    ${tw`mb-6`};
  }

  h1 {
    ${tw`mt-4 text-2xl font-bold md:text-3xl`};
  }

  h2 {
    ${tw`mt-4 text-xl font-bold md:text-2xl`};
  }

  h3,
  h4,
  h5,
  h6 {
    ${tw`mt-4 font-bold`};
  }

  img {
    ${tw`my-4`};
  }

  a {
    ${tw`hover:text-yellow-500 underline`};
  }
`
