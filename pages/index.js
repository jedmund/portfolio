/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ProjectList from '../components/ProjectList';
import OmnibusProject from '../components/OmnibusProject';
import Project from '../components/Project';
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';
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

const articles = [
  {
    "title": "Growing Up",
    "date": "Aug 2014",
    "readTime": "7 min",
    "summary": "As a kid, I spent most of my time between two worlds. My youngest years were spent in a small suburb in between Queens and Long Island in New York City. It wasn’t rich, but it wasn’t poor."
  }, {
    "title": "The Tools That Shape Us",
    "date": "Mar 2014",
    "readTime": "4 min",
    "summary": "It’s hard to find a designer that is satisfied. As designers, we rely on our deep dissatisfaction with the world around us to keep moving forward. We create, hoping that every day, we’ve made the world a little better than how we found it."
  }, {
    "title": "Fear",
    "date": "Mar 2013",
    "readTime": "3 min",
    "summary": "Everyone is afraid of something. It could be spiders, or clowns, or the inevitable heat death of the universe. For most people, fear runs much deeper. Fear is much realer."
  }, 
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
          <ArticleList>
            { this.renderArticles() }
          </ArticleList>
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
        return <Project key={i} index={i} name={p.name} about={p.about} />
      }
    });
  }

  renderArticles() {
    return articles.map((a, i) =>
      <Article title={a.title} summary={a.summary} readTime={a.readTime} date={a.date} />)
  }

  renderMentions() {
    return mentions.map((m, i) =>
      <MentionCard title={m.title} source={m.source} sourceUrl={m.sourceUrl} sourceType={m.sourceType} date={m.date} />)
  }
}
