const kt = require('katex');

module.exports = {
	title: 'BanGround Wiki',
	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://cdn.bootcss.com/KaTeX/0.11.1/katex.min.css'
			}
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://unpkg.com/markdown-it-texmath@0.6.0/css/texmath.css'
			}
		]
	],
	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-texmath').use(kt))
		}
	},
	themeConfig: {
		sidebar: [
			'setting',
			'map'
		]
	}
};