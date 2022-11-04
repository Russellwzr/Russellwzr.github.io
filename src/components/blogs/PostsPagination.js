import React from "react"
import { StyledPagButton } from "./styles"

const PostsPagination = ({ count, page, onChange }) => {
  if (count === 1) return null
  const current = page ?? 1
  return (
    <div className="flex space-x-8 text-xl font-light leading-loose">
      <StyledPagButton disabled={current === 1} onClick={() => onChange(-1)}>
        Previous
      </StyledPagButton>
      <div className="flex space-x-2">
        <span>{current ?? 1}</span>
        <span>/</span>
        <span>{count}</span>
      </div>
      <StyledPagButton disabled={current === count} onClick={() => onChange(1)}>
        Next
      </StyledPagButton>
    </div>
  )
}

export default PostsPagination
