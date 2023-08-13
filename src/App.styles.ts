import styled, { keyframes } from 'styled-components'

const lineMove = keyframes`
  0%, 100% {
    transform: translateX(-100%)
  }
  50% {
    transform: translateX(100%)
  }


`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background: #3c3d48;

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loader {
    width: 80px;
    height: 30px;
    position: relative;
  }

  .line {
    height: 3px;
    border-radius: 3px;
    background-color: #5474e7;
    animation: ${lineMove} 1.5s ease-in-out infinite;
  }
`
