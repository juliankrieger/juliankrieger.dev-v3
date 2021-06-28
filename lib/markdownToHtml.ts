import remark from 'remark'
import html from 'remark-html'
const remarkFrontmatter = require('remark-frontmatter');

function filterChildren(opts: {filter: (c: any) => boolean}) {
  return (tree: any) => {
    return Object.assign({}, tree, {
      children: tree.children.filter(opts.filter)
    })
  }
}



export default async function markdownToHtml(markdown: any) {
  const result = await remark().use(remarkFrontmatter)
  .use(filterChildren, { filter: c => c.type !== 'yaml' })
  .use(html, {
    sanitize: true,
  }).process(markdown)
  return result.toString()
}