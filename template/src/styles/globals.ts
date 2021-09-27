import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Russo One', 'Fira Code', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scrollbar-width: none;
  }
  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  h4 {
    margin-bottom: 10px;
    font-weight: 420;
  }
  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: light) {
    body {
      background: #f9f9f9;
      color: #333;
    }
  }
  @media (prefers-color-scheme: dark) {
    body {
      background:  rgba(20, 20, 20, 0.9);
      color: #FFF;
    }
  }
`;

export const ForegroundTheme = styled.div`
	@media (prefers-color-scheme: light) {
		& {
			background: #eee;
			color: #333;
		}
	}
	@media (prefers-color-scheme: dark) {
		& {
			background: rgba(20, 20, 20, 0.9);
			color: #fff;
		}
	}
`;

export const ListTile = styled.div`
	box-shadow: 1px 1px 4px 2px #888;
	padding: 1.6em;
	border-radius: 15px;
`;

export const Container = styled.div`
	margin: auto 20%;
`;

export const FlexRow = styled.div`
	display: flex;
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-flow: column;
`;

export const VerticalGap = styled.div`
	min-height: ${({ gap }: { gap: number }) => gap}px;
`;

export const HorizontalGap = styled.div`
	width: ${({ gap }: { gap: number }) => gap}px;
`;

export const Status = styled.div`
	background-color: ${({ color }: { color: 'green' | 'red' }) => color};
	width: 15px;
	height: 15px;
	border-radius: 50%;
`;

export const Button = styled.button`
	padding: 0.7em;
	outline: none;
	font-size: 1.2em;
	font-weight: 500;
	cursor: pointer;
`;

export const SplashText = styled(motion.div)`
	animation: splash 1s infinite ease-in-out;
	@keyframes splash {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`;
