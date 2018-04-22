import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FadeIn } from '../atoms/Animations'

import { ReactComponent as Email } from '../../images/email.svg'
import { ReactComponent as Blog } from '../../images/blog.svg'
import { ReactComponent as Twitter } from '../../images/twitter.svg'
import { ReactComponent as GitHub } from '../../images/github.svg'
import { ReactComponent as Dribbble } from '../../images/dribbble.svg'

import '../atoms/Icons.scss'
import './Social.scss'

const SocialIcon = props => {
  switch (props.title) {
    case 'Email':
      return <Email {...props} />
    case 'Blog':
      return <Blog {...props} />
    case 'Twitter':
      return <Twitter {...props} />
    case 'GitHub':
      return <GitHub {...props} />
    case 'Dribbble':
      return <Dribbble {...props} />
    default:
      return null
  }
}

const Social = ({ meta, minimal, hide }) => {
  const { social } = meta
  const classes = minimal ? 'social social--minimal' : 'social'

  return (
    <Fragment>
      {!hide && (
        <FadeIn>
          <aside className={classes}>
            {Object.keys(social).map((key, i) => (
              <OutboundLink
                className="social__link"
                href={social[key]}
                key={i}
                title={key}
              >
                <SocialIcon title={key} className="icon" />
              </OutboundLink>
            ))}
          </aside>
        </FadeIn>
      )}
    </Fragment>
  )
}

Social.propTypes = {
  meta: PropTypes.object,
  minimal: PropTypes.bool,
  hide: PropTypes.bool,
}

export default Social
