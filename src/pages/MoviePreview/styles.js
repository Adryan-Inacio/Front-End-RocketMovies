import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  main {
    max-width: 1500px;
    margin: 30px auto;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding-right: 10px;

  grid-area: content;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > .sub-header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    button {
      display: flex;
      align-self: start;
    }

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    > .movie {
      display: flex;
      align-items: center;

      gap: 20px;

      h1 {
        font-size: 36px;
      }

      .stars {
        display: flex;
        font-size: 30px;
        gap: 10px;
      }
    }

    > .tags {
      display: flex;
      gap: 8px;
    }
  }

  > .sinopse {
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 20px;
  }
`
