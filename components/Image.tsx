import React from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
}

export const Image = (props: ImageProps) => {

    const {src, ...restProps} = props;

    const responsiveImage = require(`../assets/images/${src}?resize&sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=1920`);

    return <img
      srcSet={responsiveImage.srcSet}
      src={responsiveImage.src}
      sizes='(min-width: 2048px): 1920px, (min-width: 1920px) 1024px, (min-width: 1024px) 600px, 95vw'
      loading="lazy"
      {...restProps}
      className={classNames([styles.Image, props.className])}
  />
}

export const MarkdownImage = (props: ImageProps) => {
  return <span className={styles.MarkdownImageContainer}><Image {...props} className={styles.MarkdownImage}/></span>
}