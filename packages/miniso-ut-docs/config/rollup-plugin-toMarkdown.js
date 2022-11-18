const path = require('path')
const hljs = require('highlight.js')
// const frontMatter = require('front-matter')
const mdContainer = require('markdown-it-container')

let md = require('markdown-it')({
  html: true, // Enable HTML tags in source
  xhtmlOut: true,
  typographer: false,
  linkify: false,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        )
      } catch (__) {
        //
      }
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    )
  }
})

function toMarkdownPlugin() {
  return {
    name: 'rollup-plugin-toMarkdown', // this name will show up in warnings and errors
    transform(source, id) {
      const extension = path.extname(id)

      if (extension !== '.md') return
      // 增加自定义容器
      md.use(mdContainer, 'code-container', {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: (tokens, idx) => {
          // ::: 开始
          if (tokens[idx].nesting === 1) {
            return `
            <div class="md_code_wrapper">
              <div class="md_code_inner">`
          }
          return `
          </div>
        </div>`
        }
      })

      const result = JSON.stringify(md.render(source))

      return {
        // code: formatModule(imports, moduleJS.join('\n'), content, state)
        code: `export default ${result}`,
        map: { mappings: '' }
      }
    }
  }
}
module.exports = toMarkdownPlugin
