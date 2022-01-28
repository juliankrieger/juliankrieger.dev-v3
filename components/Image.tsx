import React, { CSSProperties, ImgHTMLAttributes } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import path from 'path';

type ImageProps = NextImageProps & { style?: CSSProperties };

export const Image = ({ style, className, ...restProps }: ImageProps) => {
  return (
  <div style={style}>
    <NextImage 
      loading='lazy' 
      {...restProps}
      className={classNames([styles.Image, className])}
      />
    </div>);
}

function generateStyleFromMarkdownOptions(options?: string): [string, CSSProperties] {


  let alt = '';
  const styleObj: any = {};

  if (options) {

    const [altString, imageOptions] = options.split('[');
    alt = altString;

    const end = imageOptions.charAt(imageOptions.length - 1);
    if (end !== ']') {
      throw new Error(`Malformed Markdown Image Options - End character of options '${imageOptions}' should be ']', is: ${end}`)
    }

    const trimmedOptions = imageOptions.substring(0, imageOptions.length - 1);

    const optionElements = trimmedOptions.split(',');
    for (const opt of optionElements) {
      const [lhs, rhs] = opt.split('=');
      styleObj[lhs] = rhs;
    }

  }
  return [alt, styleObj];
}

export interface MarkdownImageProps {
  src: string;
  width: number;
  height: number;
  options: string;
}

export const MarkdownImage = (props: MarkdownImageProps) => {

  const { options, ...restProps } = props;

  const [alt, styleOptions] = generateStyleFromMarkdownOptions(options);

  return (
    <span className={styles.MarkdownImageContainer}>
      <Image className={styles.MarkdownImage} alt={alt} style={styleOptions} {...restProps} />
    </span>);
}