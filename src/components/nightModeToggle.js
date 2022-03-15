import React from "react"
import styled from "styled-components"
import useTheme from "../utils/useTheme"

function ToggleNightMode() {
  const [theme, setTheme] = useTheme()

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <div
        style={{
          transition: "transform .3s cubic-bezier(.17,.67,.53,1.84)",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          class="DarkModeToggle__MoonOrSun-sc-1ngd9fq-1 dBeOcn"
          style={{
            transform: theme === "dark" ? "rotate(40deg)" : "rotate(90deg)",
          }}
        >
          <mask id="moon-mask-breu">
            <rect x="0" y="0" width="18" height="18" fill="white"></rect>
            <circle
              cx={theme === "dark" ? "10" : "25"}
              cy={theme === "dark" ? "2" : "0"}
              r="8"
              fill={theme === "dark" ? "black" : "white"}
              style={{
                transition: "all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            ></circle>
          </mask>
          <circle
            cx="9"
            cy="9"
            fill={theme === "dark" ? "var(--color-primary)" : "black"}
            mask="url(#moon-mask-breu)"
            r={theme === "dark" ? "8" : "5"}
            style={{
              transition: "all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          ></circle>
          <g>
            <circle
              cx="17"
              cy="9"
              r="1.5"
              fill="var(--color-text)"
              style={{
                transformOrigin: "center center",
                transform: theme === "dark" ? "scale(0)" : "scale(1)",
                opacity: theme === "dark" ? 0 : 1,
              }}
            ></circle>
            <circle
              cx="13"
              cy="15.928203230275509"
              r="1.5"
              fill="var(--color-text)"
              style={{
                transformOrigin: "center center",
                transform: theme === "dark" ? "scale(0)" : "scale(1)",
                opacity: theme === "dark" ? 0 : 1,
              }}
            ></circle>
            <circle
              cx="5.000000000000002"
              cy="15.92820323027551"
              r="1.5"
              fill="var(--color-text)"
              style={{
                transformOrigin: "center center",
                transform: theme === "dark" ? "scale(0)" : "scale(1)",
                opacity: theme === "dark" ? 0 : 1,
              }}
            ></circle>
            <circle
              cx="1"
              cy="9.000000000000002"
              r="1.5"
              fill="var(--color-text)"
              style={{
                transformOrigin: "center center",
                transform: theme === "dark" ? "scale(0)" : "scale(1)",
                opacity: theme === "dark" ? 0 : 1,
              }}
            ></circle>
            <circle
              cx="4.9999999999999964"
              cy="2.071796769724492"
              r="1.5"
              fill="var(--color-text)"
              style={{
                transformOrigin: "center center",
                transform: theme === "dark" ? "scale(0)" : "scale(1)",
                opacity: theme === "dark" ? 0 : 1,
              }}
            ></circle>
            <circle
              cx="13"
              cy="2.0717967697244912"
              r="1.5"
              fill="var(--color-text)"
              style={{
                transformOrigin: "center center",
                transform: theme === "dark" ? "scale(0)" : "scale(1)",
                opacity: theme === "dark" ? 0 : 1,
              }}
            ></circle>
          </g>
        </svg>
      </div>
    </Button>
  )
}

const Button = styled.button`
  width: 40px;
  height: 32px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: visible;

  svg {
    overflow: visible;

    > circle {
      transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    g {
      circle:nth-child(1) {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.375) 0s;
      }
      circle:nth-child(2) {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.375) 0.1s;
      }
      circle:nth-child(3) {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.375) 0.2s;
      }
      circle:nth-child(4) {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.375) 0.3s;
      }
      circle:nth-child(5) {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.375) 0.4s;
      }
      circle:nth-child(6) {
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.375) 0.5s;
      }
    }
  }

  &:focus {
    outline: none;
  }
`

export default ToggleNightMode
