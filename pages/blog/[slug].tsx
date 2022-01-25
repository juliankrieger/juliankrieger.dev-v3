import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import imageSize from 'rehype-img-size';

import { getPostWithId as getPostWithSlug, getSortedPostsData } from '../../lib/postData';
import { Post as PostT } from '../../types/Post';
import style from './blog.module.scss';
import { Image } from '../../components/Image';
import React from 'react';

interface PostProps {
  post: PostT,
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

function Post({ post, source }: PostProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div
        className={style.paragraph}
      >
        <MDXRemote {...source} components={{
          img: (props: any) => {
            console.log(props)
            return <Image width="50%" height="auto" {...props} layout="responsive" loading="lazy"></Image>
          }
        }} />
      </div>
        
    </div>
  )
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const posts = getSortedPostsData();

  // Get the paths we want to pre-render based on posts
  const paths = posts.filter(post => !post.draft).map((post) => ({
    params: { slug: post.slug }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {

  const { params } = context;

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let post;
  let source;
  if (params?.slug) {
    post = getPostWithSlug(params.slug as string);
    if (post && post.content) {
      source = await serialize(post.content, {
        mdxOptions: {
          rehypePlugins: [[imageSize, { dir: "public" }]],
        }
      });
    }
  }
  // Pass post data to the page via props
  return { props: { post, source } }
}

export default Post
