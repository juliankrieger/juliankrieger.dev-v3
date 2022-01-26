import React, { ImgHTMLAttributes } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const Image = (props: ImageProps) => {

    const {src, ...restProps} = props;

    const responsiveImage = require(`../assets/images/${src}?resize&sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=1600,sizes[]=1920`);

    return <img
      srcSet={responsiveImage.srcSet}
      src={responsiveImage.src}
      sizes='(min-width: 1600px) 1920px, (min-width: 1024px) 1600px, (min-width: 600px) 1024px, 100vw'
      loading="lazy"
      {...restProps}
      className={classNames([styles.Image, props.className])}
  />
}

function generateStyleFromMarkdownOptions(options?: string) {

  
  let alt = '';
  const styleObj: any = {};

    if(options) {

      const [altString, imageOptions] = options.split('[');
      alt = altString;

      const end = imageOptions.charAt(imageOptions.length - 1);
      if(end !== ']') {
        throw new Error(`Malformed Markdown Image Options - End character of options '${imageOptions}' should be ']', is: ${end}`)
      }

      const trimmedOptions = imageOptions.substring(0, imageOptions.length - 1);
    
      const optionElements = trimmedOptions.split(',');
      for(const opt of optionElements) { 
        const [lhs, rhs] = opt.split('=');
        styleObj[lhs] = rhs;
      }

    }
  return [alt, styleObj];
}

export interface MarkdownImageProps {
  src: string;
  options: string;
}

export const MarkdownImage = (props: MarkdownImageProps) => {

  const {src, options} = props;

  const [alt, styleOptions] = generateStyleFromMarkdownOptions(options);
  
  return <span className={styles.MarkdownImageContainer}><Image className={styles.MarkdownImage} alt={alt} style={styleOptions}/></span>
}