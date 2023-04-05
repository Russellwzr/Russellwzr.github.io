import tw, { styled } from 'twin.macro'

export const StyledBlogCard = styled.article`
  header {
    h2 {
      ${tw`mt-4 text-xl font-bold leading-loose md:text-2xl`};
      a {
        ${tw`hover:text-yellow-500`};
      }
    }
    small {
      ${tw`md:text-sm font-light leading-loose mt-1`};
    }
  }

  p {
    ${tw`md:text-lg font-light leading-loose mt-2`};
  }
`

export const StyledPagButton = styled.button`
  ${tw`hover:text-yellow-500 border-b-2 hover:border-yellow-500 disabled:text-gray-200 
  disabled:border-gray-200 dark:disabled:text-gray-500 dark:disabled:border-gray-500`};
`
