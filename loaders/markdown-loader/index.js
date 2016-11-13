var frontMatter = require('front-matter')
var markdownIt = require('markdown-it')
var hljs = require('highlight.js')
var objectAssign = require('object-assign')

var highlight = function (str, lang) {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
})
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-anchor'), {
    level: 1,
    permalink: true,
    permalinkClass: 'header-link',
    permalinkSymbol: '🔗',
  })
  .use(require('markdown-it-link-attributes'), {
    target: '_blank',
  })
  .use(require('markdown-it-container'), 'tip', {
    validate: name => name.trim().length,
    render: (tokens, idx) => {
      const kind = tokens[idx].info.trim();

      let icon;
      if (kind === 'tip') {
        icon = 'add_alert'
      } else if (kind === 'warning') {
        icon = 'warning'
      } else if (kind === 'info') {
        icon = 'info'
      }

      if (tokens[idx].nesting === 1) {
        return `
          <div class="${kind}">\n
            <i class="material-icons">${icon}</i>\n
        `;
      } else  {
        return '</div>\n';
      }
    }
  });

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body)
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
