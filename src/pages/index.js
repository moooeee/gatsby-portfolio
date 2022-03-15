import React, { useRef } from "react"
import GlobalStyles from "../styles/GlobalStyles"
import Helmet from "react-helmet"
import {
  Nav,
  Header,
  Main,
  Logo,
  SocialIcons,
  ProjectsWrapper,
  ProjectsList,
  Footer,
} from "../components/styled"
import { useInView } from "react-intersection-observer"
import DarkModeToggle from "../components/nightModeToggle"
import { Link } from "gatsby"
import ProjectItem from "../components/projectItem"

function IndexPage() {
  const headerRef = useRef()
  const [projectsTitleRef, inView] = useInView({
    threshold: 1,
  })
  const [img1, inView1] = useInView({
    threshold: 1,
  })
  const [img2, inView2] = useInView({
    threshold: 1,
  })
  const [img3, inView3] = useInView({
    threshold: 1,
  })
  const [img4, inView4] = useInView({
    threshold: 1,
  })

  return (
    <div>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather"
          rel="stylesheet"
        />
      </Helmet>
      <Header ref={headerRef}>
        <Nav>
          <Logo>Mohamed Al-Omari</Logo>
          <Link
            to="/blog"
            style={{
              color: "var(--post-text-primary)",
              marginLeft: "auto",
              marginRight: "30px",
              textDecoration: "none",
            }}
          >
            Blog
          </Link>
          <DarkModeToggle />
          <SocialIcons>
            <a href="https://twitter.com/moe_omari" target="_blank">
              <svg
                class="twitter"
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.07969 18.0619C8.07969 17.5998 7.74199 17.1732 7.20879 17.0844C7.29766 16.5512 7.77754 16.018 8.07969 15.8047L7.42207 15.1648C6.65781 15.8225 6.05352 16.7467 6.05352 17.9908C6.05352 18.6484 6.51563 19.075 7.10215 19.075C7.65313 19.075 8.07969 18.6129 8.07969 18.0619ZM10.7102 18.0619C10.7102 17.5998 10.3725 17.1732 9.83926 17.0844C9.92813 16.5512 10.408 16.018 10.7102 15.8047L10.0525 15.1648C9.28828 15.8225 8.68398 16.7467 8.68398 17.9908C8.68398 18.6484 9.14609 19.075 9.73262 19.075C10.2836 19.075 10.7102 18.6129 10.7102 18.0619Z"
                  fill="var(--color-primary)"
                  fill-opacity="0.03"
                ></path>
                <path
                  d="M27.1875 6.45019C26.291 6.83691 25.3154 7.11523 24.3105 7.22363C25.3538 6.60381 26.1351 5.6246 26.5078 4.46972C25.5288 5.05211 24.4563 5.4605 23.3379 5.67675C22.8704 5.17703 22.3051 4.77892 21.6771 4.50725C21.049 4.23557 20.3718 4.09614 19.6875 4.09765C16.9189 4.09765 14.6924 6.34179 14.6924 9.0957C14.6924 9.48242 14.7393 9.86914 14.8154 10.2412C10.6699 10.0244 6.97266 8.04394 4.51465 5.01172C4.06677 5.7767 3.83207 6.64773 3.83496 7.53418C3.83496 9.26855 4.7168 10.7978 6.06152 11.6973C5.26906 11.6661 4.49514 11.4482 3.80273 11.0615V11.123C3.80273 13.5518 5.51953 15.5645 7.80762 16.0273C7.378 16.1389 6.93606 16.196 6.49219 16.1973C6.16699 16.1973 5.85937 16.165 5.54883 16.1211C6.18164 18.1016 8.02441 19.54 10.2187 19.5869C8.50195 20.9316 6.35156 21.7227 4.0166 21.7227C3.59766 21.7227 3.21094 21.708 2.80957 21.6611C5.02441 23.082 7.65234 23.9023 10.4824 23.9023C19.6699 23.9023 24.6973 16.291 24.6973 9.68457C24.6973 9.46777 24.6973 9.25097 24.6826 9.03418C25.6553 8.32226 26.5078 7.44043 27.1875 6.45019Z"
                  fill="var(--color-primary)"
                ></path>
              </svg>
            </a>
            <a href="https://github.com/moooeee" target="_blank">
              <svg
                class="git"
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9883 1.23535C7.74316 1.23242 1.875 7.09766 1.875 14.3369C1.875 20.0615 5.5459 24.9277 10.6582 26.7148C11.3467 26.8877 11.2412 26.3984 11.2412 26.0645V23.7939C7.26563 24.2598 7.10449 21.6289 6.83789 21.1895C6.29883 20.2695 5.02441 20.0352 5.40527 19.5957C6.31055 19.1299 7.2334 19.7129 8.30273 21.292C9.07617 22.4375 10.585 22.2441 11.3496 22.0537C11.5166 21.3652 11.874 20.75 12.3662 20.2725C8.24707 19.5342 6.53027 17.0205 6.53027 14.0322C6.53027 12.582 7.00781 11.249 7.94531 10.1738C7.34766 8.40137 8.00098 6.88379 8.08887 6.6582C9.79102 6.50586 11.5605 7.87696 11.6982 7.98535C12.665 7.72461 13.7695 7.58692 15.0059 7.58692C16.248 7.58692 17.3555 7.73047 18.3311 7.99414C18.6621 7.74219 20.3027 6.56445 21.8848 6.70801C21.9697 6.9336 22.6084 8.41602 22.0459 10.165C22.9951 11.2432 23.4785 12.5879 23.4785 14.041C23.4785 17.0352 21.75 19.5518 17.6191 20.2783C17.973 20.6263 18.2539 21.0413 18.4455 21.499C18.6372 21.9567 18.7357 22.4481 18.7354 22.9443V26.2402C18.7588 26.5039 18.7354 26.7647 19.1748 26.7647C24.3633 25.0156 28.0986 20.1143 28.0986 14.3398C28.0986 7.09766 22.2275 1.23535 14.9883 1.23535V1.23535Z"
                  fill="var(--color-primary)"
                ></path>
              </svg>
            </a>
          </SocialIcons>
        </Nav>
        <Main>
          <div class="mask">
            <h1>HELLO</h1>
          </div>
          <div class="mask">
            <h1>I'm Mohamed</h1>
          </div>
          <div class="mask">
            <h2>I'm a Frontend Engineer</h2>
          </div>
          <div class="mask">
            <h2>I design and develop digital experiences!</h2>
          </div>
        </Main>
      </Header>
      <ProjectsWrapper>
        <div ref={projectsTitleRef} class="mask">
          <h2 style={{ animationPlayState: inView ? "running" : "paused" }}>
            Project's I've had fun building
          </h2>
        </div>
        <ProjectsList>
          <ProjectItem
            key="Timetable Scheduler"
            name="Timetable Scheduler"
            description="A React application that utilizes the Genetic Algorithms in order to generate a full university timetable with no conflicts. This application was developed to suit the Islamic University of Gaza Engineering department's specification for generating a schedule"
            tags={[
              "React",
              "Genetic Algorithms",
              "React Spectrum",
              "CSS modules",
              "Netlify",
            ]}
            image="timetable-generator.png"
            githubURL="https://github.com/moooeee/ScheduleGenerator"
            siteURL="https://timetable-generator.netlify.app"
          />
          <ProjectItem
            key="React Minesweeper"
            name="React Minesweeper"
            description="The famous Minesweeper game built in React with a beautiful design and layout, also using some audio effects to give the user a great experience"
            tags={["React hooks", "Sass", "Netlify"]}
            image="minesweeper-app.png"
            githubURL="https://github.com/moooeee/react-minesweeper"
            siteURL="https://next-js-minesweeper.vercel.app/"
          />
          <ProjectItem
            key="React Chess App"
            name="React Chess App"
            description="A Chess app built with React and Adobe's design system (React Spectrum) as well as a chess library (chess.js), the game can be played in one PC by two players with a adjustable timer"
            tags={[
              "React",
              "React Spectrum",
              "Redux toolkit",
              "ReactDnD",
              "CSS modules",
              "Netlify",
            ]}
            image="chess-app.png"
            githubURL="https://github.com/moooeee/react-chess-app"
            siteURL="https://react-chess-app.netlify.app"
          />
          <ProjectItem
            key="Frame Company Website"
            name="Frame Company Website"
            description="Official website for Frame company, which is a graphic design company and a training center, the website highlights the services and activities the company serves in a cutting edge design (Not official yet!)"
            tags={["Webpack", "HTML", "Sass", "Javascript", "Netlify"]}
            image="frame-website.png"
            githubURL="https://github.com/moooeee/Frame-Landing-Page"
            siteURL="https://frame-v3.netlify.app"
          />
          <ProjectItem
            key="My Portfolio and Blog 🤪"
            name="My Portfolio and Blog 🤪"
            description="Gatby portfolio and blog platform, made ready for technical posts with a code snippets, text highlight and more"
            tags={["React", "Gatsby", "Styled Components", "MDX", "Netlify"]}
            image="blog-app.png"
            githubURL="https://github.com/moooeee/Portfolio"
            siteURL="moe-dev.netlify.app"
          />
        </ProjectsList>
      </ProjectsWrapper>
      <Footer>
        <h2>Designed & Built by Mohamed Al-Omari</h2>
        <p>© 2020–2021 / Copyright Mohamed Al-Omari. All rights reserved.</p>
      </Footer>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    codeLogo1: file(relativePath: { eq: "type-7-p-500.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
