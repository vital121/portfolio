import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import Content from '../components/atoms/Content'
import FullWidth from '../components/atoms/FullWidth'
import ProjectImage from '../components/atoms/ProjectImage'
import ProjectTechstack from '../components/molecules/ProjectTechstack'
import ProjectLinks from '../components/molecules/ProjectLinks'
import ProjectNav from '../components/molecules/ProjectNav'
import images from '../images'
import './Project.scss'

class Project extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      title,
      img,
      img_more,
      description,
      links,
      techstack,
    } = this.props.data.projectsJson
    const { next, previous } = this.props.pathContext

    return (
      <main className="screen screen--project">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        <article className="project">
          <Content>
            <h1 className="project__title">{title}</h1>
            <ReactMarkdown
              source={description}
              escapeHtml={false}
              className="project__description"
            />

            <FullWidth>
              <ProjectImage src={images[img]} alt={title} />
            </FullWidth>

            {!!img_more && (
              <FullWidth>
                {img_more.map(key => (
                  <ProjectImage key={key} src={images[key]} alt={title} />
                ))}
              </FullWidth>
            )}

            <footer className="project__meta">
              {!!techstack && <ProjectTechstack techstack={techstack} />}
              {!!links && <ProjectLinks links={links} />}
            </footer>
          </Content>
        </article>

        <ProjectNav previous={previous} next={next} />
      </main>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default Project

export const projectQuery = graphql`
  query ProjectBySlug($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      slug
      img
      img_more
      description
      links {
        title
        url
      }
      techstack
    }
  }
`
