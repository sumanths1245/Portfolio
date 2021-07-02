import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink, InlinePageLink } from "../components/atoms"
import Contact from "../components/contact"

const About = _ => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            Hello, my name is Hemanth and I’m a Developer. 
            I've always obsessed with the idea of programs, because they did almost everything that I can wish them for. That’s when I decided to
            follow my passion and take a leap in this field! 
          </p>
          <p>And I still belive the idea that our entire Universe is just a Gigantic Computer which was turned ON when we were born and turns OFF the moment we die.</p>
          <h2>What am I learning?</h2>
          <p>
            I'm currently a third year engineering student at Global Academy of Technology. I’m working on procuring depth in DSA, Problem Solving, Javascript and
            then moving onto learning NodeJS and databases. I’ve Invested my
            time learning Gastby and I ended up making my Portfolio Website on
            it!
          </p>{" "}
          <h2>Something interesting about me</h2>
          <p>
            I’ve got quick reflexes and the ability to understand concepts
            quickly. So whenever it comes to athletics or playing a FPS game
            like CSGO, I squish the competition. Also I’m fond of Chess, it
            really pushes my mind to think of the future moves possible and that
            eventually reflects in my work, thinking a couple of steps ahead to
            solve problems which will later arise.
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
