
import React from 'react'
import styled from 'styled-components'

const Box = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 100px;
  background-color: ${({ even }) => even ? '#eee' : '#fff'}
`

export function Item ({ columnIndex, name }) {
  return (
    <Box even={columnIndex % 2 === 0}>
      {name}
    </Box>
  )
}

export const Button = styled('button')`
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  background-color: #eee;
  border: 1px solid #666;
  border-radius: 0.25rem;
`
