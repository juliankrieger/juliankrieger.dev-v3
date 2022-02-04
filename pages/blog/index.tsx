import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { getSortedPostsData } from '../../lib/postData';
import Link from 'next/link'
import { Post } from '../../types/Post';
import { useGenerateHref } from '../../lib/useGenerateHref';

export const config = {
  unstable_runtimeJS: false,
  unstable_JsPreload: false
}

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) {

  const generateHref = useGenerateHref();

  return (
    <ul>
      {allPostsData.map((post: Post, idx: number) => (
        <li key={idx}>
          <Link href={generateHref(`/blog/${encodeURIComponent(post.slug)}`)}>
            <a>- {post.date} - {post.title} {post.draft && '[DRAFT]'}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {

  const allPostsData: Post[] = getSortedPostsData().filter(post => {
    if(process.env.NODE_ENV === 'production') {
      return !post.draft
    }
    return true;
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allPostsData,
    },
  }
}


export default Blog