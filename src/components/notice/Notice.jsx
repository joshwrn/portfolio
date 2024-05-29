import styled from 'styled-components'
import { IoCloseOutline } from 'react-icons/io5'

export const Notice = ({ setShowNotice }) => {
  return (
    <Wrapper>
      <header>
        <h2>Notice</h2>
        <button onClick={() => setShowNotice(false)}>
          <IoCloseOutline />
        </button>
      </header>
      <p>
        This is the old version of my portfolio from 2021, my new site can be
        found at{' '}
        <a href="https://www.joshw.io" target="_blank" rel="noreferrer">
          joshw.io
        </a>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  max-width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 20px;
  background-color: #0000007c;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid #ffffff45;
  display: flex;
  flex-direction: column;
  gap: 20px;
  a {
    color: #f0f0f0;
    text-decoration: underline;
  }
  p {
    line-height: 1.3;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #ffffff85;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      cursor: pointer;
      font-size: 20px;
      color: #ffffff85;
    }
  }
`
