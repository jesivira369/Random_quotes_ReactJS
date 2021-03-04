import React from 'react'
import styled from 'styled-components'

const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  height: 100vh;
`

export default PagesContainer