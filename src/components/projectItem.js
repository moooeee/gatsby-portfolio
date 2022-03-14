import React, { useLayoutEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import {
  ProjectItem as Item,
  ViewProjectIcons,
  ProjectHeader,
  TechStack,
} from "../components/styled"

function ProjectItem({ name, description, tags, image, githubURL, siteURL }) {
  const [img1, inView1] = useInView({
    threshold: 0.8,
  })

  const [play, setPlay] = useState(false)

  useLayoutEffect(() => {
    if (inView1) {
      setPlay(true)
    }
  }, [inView1])

  return (
    <Item ref={img1}>
      <div
        style={{ animationPlayState: play ? "running" : "paused" }}
        class="outer"
      >
        <div
          style={{ animationPlayState: play ? "running" : "paused" }}
          class="inner"
        >
          <img src={`/images/${image}`} alt="some imaage" />
        </div>
      </div>
      <div>
        <ProjectHeader>
          <div class="mask">
            <h3
              style={{
                animationPlayState: play ? "running" : "paused",
              }}
            >
              {name}
            </h3>
          </div>
          <ViewProjectIcons>
            <a
              style={{
                animationPlayState: play ? "running" : "paused",
              }}
              href={siteURL}
              target="_blank"
              hidden={name === "My Portfolio and Blog 🤪"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line
                  x1="10"
                  y1="14"
                  x2="21"
                  y2="3"
                  fill="var(--color-primary)"
                ></line>
              </svg>
            </a>
            <a
              style={{
                animationPlayState: play ? "running" : "paused",
              }}
              href={githubURL}
              target="_blank"
            >
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
          </ViewProjectIcons>
        </ProjectHeader>
        <p style={{ animationPlayState: play ? "running" : "paused" }}>
          {description}
        </p>
        <TechStack>
          {tags?.map((tag, i) => {
            return (
              <span
                style={{
                  animationPlayState: play ? "running" : "paused",
                }}
                data-index={i + 1}
              >
                {tag}
              </span>
            )
          })}
        </TechStack>
      </div>
    </Item>
  )
}

export default ProjectItem
