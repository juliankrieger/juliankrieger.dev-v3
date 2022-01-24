import NextImage, {ImageProps} from 'next/image';

interface LoaderProps {
    src: string;
}

const myLoader = (props: LoaderProps) => {
    return props.src;
}

export const Image = (props: ImageProps) => {
    return <NextImage {...props} loader={myLoader}>

    </NextImage>
}