import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'

function filterChildren(opts: {filter: (c: any) => boolean}) {
  return (tree: any) => {
    return Object.assign({}, tree, {
      children: tree.children.filter(opts.filter)
    })
  }
}



export default async function markdownToHtml(markdown: any) {
  const result = await unified()
  .use(remarkFrontmatter)
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeStringify)
  .process(markdown)
  return result.toString();
}
