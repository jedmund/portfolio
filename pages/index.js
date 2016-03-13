/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ProjectList from '../components/ProjectList';
import OmnibusProject from '../components/OmnibusProject';
import Project from '../components/Project';
import MentionCardList from '../components/MentionCardList';
import MentionCard from '../components/MentionCard';
import Bio from '../components/Bio';
import Section from '../components/Section';

const projects = [
  {
    "name": "Maitsu",
    "about": "Develop your hobbies and find new ones with Maitsu. Set your goals and make something new every week!"
  }, {
    "name": "Foundation",
    "about": "Share your story with Foundation, a platform for creators to document, collaborate and publish their work to the world."
  }, {
    "name": "Pinterest",
    "about": "Pinterest is a place to discover and save creative ideas that inspire you.",
    "projects": [
      {
        "name": "Place Pins"
      }, {
        "name": "Rich Pins"
      }, {
        "name": "Other projects" // Team, Search & Discovery, Growth, Analytics
      }
    ]
  }
];

const mentions = [
 {
    "title": "Revision Path #113",
    "sourceUrl": "http://revisionpath.com/justin-edmund/",
    "sourceType": "Podcast",
    "date": "Dec 2015"
  }, {
    "title": "Design Details #76",
    "sourceUrl": "http://spec.fm/podcasts/design-details/19703",
    "sourceType": "Podcast",
    "date": "Nov 2015"
  }, {
    "title": "Pinterest's seventh employee on being black in Silicon Valley",
    "source": "USA Today",
    "sourceUrl": "http://www.usatoday.com/story/tech/2014/10/30/justin-edmund-pinterest-diversity-silicon-valley-ferguson-african-americans-hispanics-technology/17832781/",
    "sourceType": "Article",
    "date": "Oct 2014"
  }, {
    "title": "Ask Me Anything",
    "source": "Designer News",
    "sourceUrl": "https://www.designernews.co/stories/12669-ama-im-justin-edmund-the-first-product-design-hire-at-pinterest",
    "sourceType": "Q&A",
    "date": "Jan 2014"
  }, {
    "title": "Hopes Pinned on Success",
    "source": "Carnegie Mellon Today",
    "sourceUrl": "http://www.cmu.edu/homepage/creativity/2012/spring/hopes-pinned-on-success.shtml",
    "sourceType": "Article",
    "date": "May 2012"
  }, {
    "title": "In Silicon Valley, designers emerge as <br>rock stars",
    "source": "Reuters",
    "sourceUrl": "http://www.reuters.com/article/us-designers-startup-idUSBRE83C0QG20120416",
    "sourceType": "Article",
    "date": "Apr 2012"
  }, 
];

export default class extends Component {
  render() {
    return (
      <div>
        <Section className="design" header="I make creative tools">
          <ProjectList>
            { this.renderProjects() }
          </ProjectList>
        </Section>
        <Section className="writing" header="I write about design and culture">
        </Section>
        <Section className="about" header="I work as a product designer">
          <Bio />
          <MentionCardList>
            { this.renderMentions() }
          </MentionCardList>
        </Section>
      </div>
    );
  }

  renderProjects() {
    return projects.map(function (p, i) {
      if ("projects" in p) {
        return <OmnibusProject i={i} name={p.name} about={p.about} projects={p.projects} />
      } else {
        return <Project i={i} name={p.name} about={p.about} />
      }
    });
  }

  renderMentions() {
    return mentions.map((m, i) =>
      <MentionCard title={m.title} source={m.source} sourceUrl={m.sourceUrl} sourceType={m.sourceType} date={m.date} />)
  }
}
