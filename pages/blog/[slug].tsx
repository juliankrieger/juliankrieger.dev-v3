import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router'
import { debug } from '../../lib/debug';
import markdownToHtml from '../../lib/markdownToHtml';
import { getPostWithId as getPostWithSlug, getSortedPostsData } from '../../lib/postData';
import {Post as PostT} from '../../types/Post';

function Post({ post, content }: {post: PostT, content: string}) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
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

  const {params} = context;

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let post;
  let content;
  console.log(params)
  if(params?.slug) {
    post = getPostWithSlug(params.slug as string);
    if(post) {
      content = await markdownToHtml(post?.fileContents);
    }
  }
  // Pass post data to the page via props
  return { props: { post, content } }
}

export default Post