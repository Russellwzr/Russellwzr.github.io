import tw, { styled } from 'twin.macro'

export const StyledButton = tw.button`inline-flex items-center justify-center p-0 px-6 py-2 text-xl leading-tight text-center text-white no-underline motion-safe:transition duration-200 bg-purple-600 border-none rounded-md shadow-md hover:bg-purple-800 active:bg-purple-800 focus:(outline-none) focus-visible:(ring-4 ring-purple-300)`

export const StyledSocialList = styled.ul`
  ${tw`grid justify-center grid-flow-col gap-x-4`};
  li {
    ${tw`flex items-center`};
    & > ${StyledButton} {
      ${tw`p-2 bg-transparent shadow-none ring-purple-500 
      hover:(bg-gray-100 text-gray-800) 
      active:(bg-gray-100 text-gray-800) 
      light:(text-gray-500 ring-gray-300 
      hover:(bg-gray-700 text-white) 
      active:(bg-gray-700 text-white))`};
      ${(props) => (props.size === 'lg' ? tw`md:text-3xl` : tw`text-2xl`)}
    }
  }
`
