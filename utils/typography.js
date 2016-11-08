import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '100',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '300',
        '400',
        '700',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '100',
        '700'
      ]
    }
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  headerWeight: '100',
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  bodyWeight: '300',
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  boldWeight: '700',
  scale: 2.25,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
