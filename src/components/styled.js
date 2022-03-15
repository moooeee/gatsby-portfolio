import styled from "styled-components"

export const Header = styled.header`
  /* background: var(--background-primary); */
  /* border-bottom-left-radius: 50px; */
  /* border-bottom-right-radius: 50px; */
`

export const Nav = styled.nav`
  padding: 10px;
  max-width: 100vw;
  max-width: clamp(700px, 83vw, 1200px);
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h2`
  user-select: none;
  border-left: 10px solid;
  display: inline-block;
  padding: 0 7px;
  font-size: 16px;
  line-height: 1;
  color: var(--color-primary);
  /* color: #5468ff; */
  /* color: #fff; */
  /* position: relative; */
  /* z-index: 10; */
  /* text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1); */

  /* &:before {
    position: absolute;
    content: "";
    width: 300%;
    height: 100%;
    padding: 12px 2px;
    background: #036be2;
    border-radius: 100px;
    right: -3px;
    top: 50%;
    z-index: -1;
    transform: translate(0, -50%);
  } */
`

export const Main = styled.main`
  max-width: 100vw;
  max-width: clamp(700px, 80vw, 1200px);
  height: 500px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  font-weight: 900;
  padding: 20px;
  /* color: var(--color-primary); */
  color: var(--color-secondary);
  line-height: initial;
  opacity: 0.85;

  .my-image {
    position: absolute !important;
    bottom: 10%;
    right: 30%;
    width: 300px;
    z-index: -1;
    opacity: 0;
    animation: showImage 1.5s 2s ease forwards;

    @keyframes showImage {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .mask {
    display: block;
    position: relative;
    text-align: start;
    overflow: hidden;
    margin: 0;

    h1 {
      margin: 0;
      font-weight: 900;
      font-size: 90px;
      transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);
      overflow: hidden;
      animation: revealText 1s ease forwards;

      &:nth-child(2) {
        margin-top: -30px;
      }

      @keyframes revealText {
        from {
          opacity: 0;
          transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);
        }
        to {
          opacity: 1;
          transform: translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0);
        }
      }
    }

    h2 {
      font-size: 26px;
      margin: 0;
      opacity: 0;
      font-weight: 100;
      animation: revealText 1s ease forwards;

      &:nth-child(2) {
        margin-top: -9px;
      }
    }

    &:first-child {
      h1 {
        animation-delay: 0.2s;
      }
    }

    &:nth-child(2) {
      margin-top: -40px;

      h1 {
        animation-delay: 0.4s;
      }
    }

    &:nth-child(3) {
      opacity: 0.8;
      h2 {
        animation-delay: 1.2s;
      }
    }

    &:nth-child(4) {
      position: relative;
      opacity: 0.8;
      h2 {
        animation-delay: 1.3s;
      }
    }

    @media (max-width: 740px) {
      h1 {
        font-size: 70px;
        /* font-size: calc(50px + 3vw); */

        &:nth-child(2) {
          margin-top: -10px;
        }
      }

      h2 {
        font-size: 4.2vw;

        &:first-of-type {
          margin-bottom: 5px;
        }
      }
    }

    @media (max-width: 540px) {
      h1 {
        font-size: 12vw;
      }

      &:nth-child(2) {
        margin-top: -15px;
      }
    }
  }

  > * {
    margin: 0;
  }
`

export const SocialIcons = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  a {
    opacity: 0.6;
    transition: all 0.3s ease;

    svg {
      width: 26px;
      height: 26px;
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 970px) {
    top: 150px;
  }
`

export const ProjectsWrapper = styled.section`
  padding: 10px;
  max-width: 100vw;
  max-width: clamp(700px, 83vw, 1200px);
  /* color: var(--color-secondary); */
  /* color: var(--color-primary); */
  margin: auto;
  margin-top: 120px;

  .mask {
    display: block;
    position: relative;
    text-align: start;
    overflow: hidden;
    /* margin: 0; */
    margin-bottom: 100px;

    > h2 {
      line-height: initial;
      color: var(--color-primary);
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      /* opacity: 0.87; */
      opacity: 0;
      margin: 0;
      transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);
      overflow: hidden;
      animation: revealText 1s ease forwards;
      animation-play-state: paused;
    }

    @keyframes revealText {
      from {
        opacity: 0;
        transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0);
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      text-align: center;
    }
  }
`

export const ProjectsList = styled.div`
  max-width: 100vw;
  max-width: clamp(700px, 83vw, 1200px);
  display: flex;
  flex-direction: column;
  gap: 100px;
  color: var(--color-primary);
  /* color: var(--color-secondary); */
`

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 30px;
  color: var(--color-secondary);
  padding: 10px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      /* padding: 10px; */
      margin: 0;
      display: inline-block;
      opacity: 0.9;
    }

    p {
      max-width: 550px;
      color: var(--color-secondary-2);
      margin-left: 30px;
      font-size: 16px;
      opacity: 0;
      animation: revealP 1s 0.8s ease forwards;
      animation-play-state: paused;
    }
  }

  .outer {
    display: block;
    position: relative;
    /* text-align: start; */
    overflow: hidden;
    margin: 0;
    transform: translate3d(0, -100%, 0);
    animation: revealInner 1s 1.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
    /* max-width: 400px; */
    /* max-width: 35%; */
    max-width: 400px;
    height: 100%;
    animation-play-state: paused;

    .inner {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
      animation: revealOuter 1s 1.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
      animation-play-state: paused;
      width: 100%;
      height: 100%;
      > img {
        width: 100%;
        height: 100%;
        /* max-width: 400px; */
        border-radius: 5px;
      }
    }

    @keyframes revealInner {
      from {
        transform: translate3d(0, -100%, 0);
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes revealOuter {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes revealP {
      from {
        opacity: 0;
        transform: translateX(-15px);
      }
      to {
        opacity: 0.9;
        transform: translateX(0);
      }
    }
  }

  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;

    > div > p {
      margin-left: 0;
    }
  }
`

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;

  .mask {
    display: block;
    position: relative;
    text-align: start;
    overflow: hidden;
    margin: 0;

    h3 {
      padding: 0;
      margin: 0;
      opacity: 0;
      overflow: hidden;
      animation: revealText 1s ease forwards;
      color: var(--color-primary);
      /* animation-play-state: paused; */
    }

    @keyframes revealText {
      from {
        opacity: 0;
        transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0);
      }
    }
  }

  @media (max-width: 1240px) {
    justify-content: center;

    .mask {
      h3 {
        text-align: center;
      }
    }
  }
`

export const TechStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 30px;

  span {
    padding: 0 10px;
    font-size: 14px;
    color: var(--color-primary);
    background: var(--color-primary-2);
    /* background: #f5f8fe; */
    /* background: #ebf0fe; */
    border-radius: 100px;
    opacity: 0;
    /* text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5); */
    /* animation: revealSpan 0.5s calc(attr(data-index) * 100ms) ease forwards; */
    animation-play-state: paused;

    &:nth-child(1) {
      animation: revealSpan 0.5s 1.3s ease forwards;
    }
    &:nth-child(2) {
      animation: revealSpan 0.5s 1.5s ease forwards;
    }
    &:nth-child(3) {
      animation: revealSpan 0.5s 1.7s ease forwards;
    }
    &:nth-child(4) {
      animation: revealSpan 0.5s 1.9s ease forwards;
    }
    &:nth-child(5) {
      animation: revealSpan 0.5s 2.1s ease forwards;
    }
    &:nth-child(6) {
      animation: revealSpan 0.5s 2.3s ease forwards;
    }
    &:nth-child(7) {
      animation: revealSpan 0.5s 2.5s ease forwards;
    }
  }

  @keyframes revealSpan {
    from {
      opacity: 0;
      /* transform: translateX(8px); */
    }
    to {
      opacity: 1;
      /* transform: translateX(0); */
    }
  }

  @media (max-width: 1240px) {
    justify-content: center;
    margin-left: 0;
  }
`

export const ViewProjectIcons = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  opacity: 0.9;

  a {
    opacity: 0;
    transition: all 0.3s ease;

    svg {
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.6;
      }
    }

    &:first-child {
      animation: revealIcon 0.5s 0.3s ease forwards;
      animation-play-state: paused;
      svg {
        width: 22px;
        height: 22px;
        /* fill: #0e30f9; */
      }
    }

    &:nth-child(2) {
      animation: revealIcon 0.5s 0.4s ease forwards;
      animation-play-state: paused;
      svg {
        width: 25px;
        height: 25px;
        /* fill: #fff; */
        /* fill: #0e30f9; */
      }
    }
  }

  @keyframes revealIcon {
    from {
      opacity: 0;
      /* transform: translateX(-8px); */
    }
    to {
      opacity: 0.9;
      /* transform: translateX(0); */
    }
  }
`

export const Footer = styled.footer`
  padding: 15px 10px;
  max-width: 100vw;
  margin-top: 150px;
  color: var(--color-primary);
  text-align: center;
  font-size: 10px;

  h2 {
    margin: 0;
  }

  p {
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 12px;
    }
    p {
      font-size: 9px;
    }
  }
`
