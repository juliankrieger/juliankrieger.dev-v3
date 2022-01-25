import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '../types/Post'
import { postsDirectory } from './paths'

export function getSortedPostsData(): Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const {content, data} = matter(fileContents);

    let slug = path.relative(postsDirectory, fullPath).split('.').slice(0, -1).join('.');  

    // Combine the data with the id
    return {
      id,
      ...data,
      fullPath,
      slug,
      content
    }

  })
  // Sort posts by date
  // @ts-ignore
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export const getPostWithId = (slug: string): Post | undefined => {
  const posts = getSortedPostsData();

  return posts.find(post => post.slug === slug)
}