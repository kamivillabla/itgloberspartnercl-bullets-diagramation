import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import { LinkProps } from './BulletTypes'

import "./styles.css"

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
  /* Declaro los handles que ocupare */
  const CSS_HANDLES = ["bullet__item", "bullet__item--title", "bullet__item--image", "bullet__item--link"]
  // muestra la clase vtex io ""itgloberspartnercl-bullets-diagramation-0-x"
  const handles = useCssHandles(CSS_HANDLES)

  return <div className={handles.bullet__item}>
    <Link
      to={link.url}
      className={handles["bullet__item--link"]}
    >
      <img className={handles["bullet__item--image"]} src={src} alt={titleBullet} />
      <p className={handles["bullet__item--title"]}>{titleBullet}</p>
    </Link>
  </div>
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "imagen de Bullet",
      type: "string",
      widget: {
        "ui.widget": "image-uploader"
      }
    }
  }
}

export default Bullet

