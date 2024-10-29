/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/astronaut.png";

const imageAltText = "astronaut";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Helpbot",
    description:
      "HelpBot is a cutting-edge AI customer support chatbot built using Next.js and Material-UI (MUI). HelpBot provides a user-friendly and engaging experience for customers seeking assistance.",
    url: "https://help-bot-beta.vercel.app/",
  },
  {
    title: "Transform Your Business with Azure AI 🚀",
    description:
      "Azure AI offers a comprehensive suite of tools for building, deploying, and managing AI applications, including machine learning, cognitive services, and chatbots, all designed for scalability, security, and ease of integration.",
    url: "https://dev.to/hasanul_banna_himel/transform-your-business-with-azure-ai-5j4",
  },
  {
    title: "My Resume Site",
    description:
      "Includes my experience and design abilities.",
    url: "https://hasanul-banna-himel.vercel.app/",
  },
  {
    title: "Maths for Machine Learning",
    description:
      "Video learning to explain to all the required maths needed for machine learning.",
    url: "https://www.youtube.com/playlist?list=PL358M62wp5EPCDbYCaNqPHafwbsqhoSrd",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
