import { defineConfig } from 'vite'
// HtmlWebpackPlugin
import { createHtmlPlugin } from 'vite-plugin-html'

import { ViteEjsPlugin } from "vite-plugin-ejs"
// import ejs from 'rollup-plugin-ejs';

export default defineConfig({
    plugins: [
        // ejs({
        //     include: ['**/*.ejs', '**/*.html'], // optional, '**/*.ejs' by default
        //     exclude: ['**/index.html'], // optional, undefined by default
        //     compilerOptions: {client: true}, // optional, any options supported by ejs compiler
        //     render: { //optional, if passed, html string will be returned instead of template render function
        //         // data: {...}, //required, data to be rendered to html
        //         // minifierOptions: {...} //optional, [html-minifier](https://github.com/kangax/html-minifier) options, won't minify by default, if not passed
        //     },
        // }),
        createHtmlPlugin(),

        ViteEjsPlugin((viteConfig) => ({
            // viteConfig is the current Vite resolved config
            env: viteConfig.env,
        })),

        // ViteEjsPlugin({title: 'My vue project!'}, {
        //     ejs: (viteConfig) => ({
        //         // ejs options goes here.
        //         views: [viteConfig.publicDir]
        //
        //         //     include: ['**/*.ejs', '**/*.html'], // optional, '**/*.ejs' by default
        //         //     exclude: ['**/index.html'], // optional, undefined by default
        //         //     compilerOptions: {client: true}, // optional, any options supported by ejs compiler
        //         //     render: { //optional, if passed, html string will be returned instead of template render function
        //         //         // data: {...}, //required, data to be rendered to html
        //         //         // minifierOptions: {...} //optional, [html-minifier](https://github.com/kangax/html-minifier) options, won't minify by default, if not passed
        //         //     },
        //         })
        //     }
        // )

        // createHtmlPlugin({
        //     entry: 'src/main/index.js',
        //     template: 'public/index.html',
        //     inject: {
        //         data: {
        //             title: 'index',
        //             injectScript: `<script src="./inject.js"></script>`
        //         }
        //     }
        // })
    ]

})
