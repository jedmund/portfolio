import React, { Component } from 'react';
import '../../components/common.styl'

import Block from '../../components/Block'
import Image from '../../components/Image'
import ProjectContext from '../../components/ProjectContext'
import Section from '../../components/Section'

export default class extends Component {

  render() {
    const name = "Foundation"
    const url = "http://build.onfoundation.com/"

    const sections = [
      "Intro",
      "Strategy",
      "Storytelling",
      "Collaboration",
      "Publishing",
      "Native",
      "Availability"
    ]

    const hero = {
        "1x": "../../static/projects/foundation/hero.png",
        "2x": "../../static/projects/foundation/hero@2x.png"
    }

    return (
      <Section className="foundation project" header="Foundation" image={hero} underlined>
        <ProjectContext name={name} sections={sections} url={url} />
        <Section id="intro" header="Intro">
          <Block>
              <p className="col-1-2 left after">Foundation is a documentation platform that helps creative people tell the story of their work to the world.</p>
              <p className="col-1-2 left after">For many years, I watched artists struggle with their online presence. As web portfolios were rapidly rising in popularity, many of my peers used solutions like deviantArt, Behance or Cargo Collective to showcase their work to would-be employers.</p>
              <p className="col-1-2">Foundation is meant to be a solution to myriad problems introduced by these tools. Through focusing on storytelling and collaboration, Foundation aims to make documenting all kinds of creative projects easy.</p>
              <p className="col-1-2">I&apos;ve worked on refining Foundation for over five years in my spare time, handling all facets of the product from branding to back-end development.</p>
          </Block>

          <Block>
            <p className="col-1-2 left after">Heavily inspired by Nicholas Felton’s data visualization projects, Foundation users would create metadata profiles for their unique brand of art. These "foundations," as they were called, could record data such as the programming languages, fabrics, or paper stock used in a project.</p>
            <p className="col-1-2 left after">A non-trivial amount of time was also spent on the initial branding for the product. Set in National, the logotype was meant to be sturdy, while retaining playfulness in its curves. The initial iconography was my first real foray into icon design. My goal was to be straightforward but not overly plain.</p>
            <p className="col-1-2">This rudimentary version of Foundation was completely built in PHP in 2010. It included Parsel, a custom templating system inspired by Hypercard and other natural language programming languages.</p>
            <p className="col-1-2">About twenty-four beta testers used the product and provided extensive feedback. Over time, it became clear that while some things worked well, the strategy of the product needed to be revisited.</p>
            <p className="col-1-2">To learn more about early Foundation, visit my old portfolio →</p>
          </Block>
        </Section>

        <Section id="strategy" header="Strategy">
          <Block>
              <p className="col-1-2 left after">Originally, Foundation was intended to be a product solely for building online portfolios. However, its currently best described as a documentation engine that helps individuals and groups document workflows and processes and share them with any audience they wish. While online portfolios are still a core use case, a broader scope allows Foundation to reach more people and potentially sustain itself as a business.</p>
              <p className="col-1-2 left after">There are three pillars of the Foundation product: storytelling, collaboration, and personalization. These came about after extensive analysis of both successful online portfolios and competing portfolio platforms.</p>
              <p className="col-1-2">Storytelling: Everyone has a story to tell about their work.
              Collaboration: Most work isn’t created in a silo.
              Customization: A portfolio should be as individual as the person who made it.</p>
          </Block>
        </Section>

        <Section id="storytelling" header="Storytelling">
          <Block>
              <p className="col-1-2 left after">Telling a coherent story is hard. The best stories have a clear (note) narrative arc, beginning with exposition, rising after an inciting incident to reach a climax, before falling into a resolution. Many people aren’t familiar with this sequence—or at least don’t remember it from their secondary school writing courses.</p>
              <p className="col-1-2 left after">Foundation’s core interface is designed to make crafting a narrative arc easier. Primarily, it is a WYSIWYG editor that allows the user to split their writing into “sections.”</p>
              <p className="col-1-2">However, the editor also asks generic, but clarifying questions designed to help guide the writer through the narrative arc of their work.</p>
              <p className="col-1-2">The Storyteller arranges related text, image, and other rich content into these sections. This way, a more cohesive story can be composed. Unlike other content management systems, there are no separate pages for managing or arranging media. Everything happens inline.</p>
          </Block>
        </Section>

        <Section id="collaboration" header="Collaboration">
          <Block>
              <p className="col-1-2 left after">Another function that happens inline is collaboration. For most people, collaboration is an integral part of the creative process. Many portfolio tools don’t address this in a structured way. In fact, many document editors only just recently started focusing on collaboration features, as recently as 2014.</p>
              <p className="col-1-2 left after">In Foundation, it’s simple to add attribution to the people you work with. You can even note individual responsibilities. By default, Foundation will simply link the colleague’s name to the story and ask for more information to invite them to the service.</p>
              <p className="col-1-2">However, if they’re already on the service or accept the invitation, the collaboration features become a lot more useful.</p>
              <p className="col-1-2">In the case that any number of colleagues also use Foundation, the writer can work with them to create a cohesive story. By clicking on avatars at the top of Storyteller, the writer can instantly see and interact with other representations of their story by their colleagues. They can then write alongside them, share assets, and so on. The end goal of this level of collaboration wouldn’t be two stories that are the same, but two stories that are on the same page.</p>
          </Block>
        </Section>

        <Section id="publishing" header="Publishing">
          <Block>
              <p className="col-1-2 left after">As a documentation engine, Foundation should allow writers to publish their stories to any audience they wish. (note) For organizations, this might mean distribution via an internal tool like Slack. For individuals and small groups, though, more often than not it means publishing to the internet for everyone to see.</p>
              <p className="col-1-2 left after">Foundation’s roots are in making a portfolio as individual as the person who made it. The value of personalization persists even with more corporate use cases—for applying company logos or graphic styles, for instance. Regardless, allowing writers to personalize the output of their work is just as important as guiding them through the heavy input of the writing process itself.</p>
              <p className="col-1-2 left after">Being a product for everyone, anyone should be able to customize the output of their work easily.</p>
              <p className="col-1-2"> This problem space is addressed by Parsel, a natural-language templating language. Parsel takes common design patterns and (note) abstracts them away into simple English sentences. If told to “generate a slideshow of images”, Parsel will do just that inside of its current “context”, the project it is rendering.</p>
              <p className="col-1-2">All of Parsel’s statements can be used alongside regular HTML, CSS, and Javascript, so that it doesn’t alienate more experienced programmers. In practice, Parsel reduces a simple portfolio site down to an average of roughly 30-40 lines of “code.”</p>
              <p className="col-1-2">The current version of Parsel was written in 2011 and hasn’t been worked on since, so it only understands HTML and snippets of Javascript. It needs as large a re-imagining as Foundation received itself, which hopefully it will get soon.</p>
          </Block>
        </Section>

        <Section id="native" header="Native">
          <Block>
              <p className="col-1-2 left after">Beyond Parsel’s shortcomings, there is still a large flaw in the product strategy of Foundation: Documentation is hard and time-consuming. People generally don’t remember what happened during a project to document it afterwards. If Foundation wants to help people document the work that they do, then it needs to do a lot more work to get them there.</p>
              <p className="col-1-2 left">Capture was a prototype that explored what a mobile companion app to Foundation might look like. It would prompt writers to record their progress every day with a sentence or two, along with an image. This way, when it came time to write, there would already be a wealth of content to draw from. After a lot of thought, Capture has graduated into its own product, Maitsu →</p>
          </Block>
        </Section>

        <Section id="availability" header="Availability">
          <Block>
              <p className="col-1-2 left after">Foundation is part of a suite of creative tools I’d love to build and release. However, it is currently on hiatus as I work on other projects.</p>
              <p className="col-1-2 left">To keep up to date with Foundation, subscribe to the newsletter or follow @onfoundation on Twitter.</p>
          </Block>
        </Section>
      </Section>
    );
  }

}
