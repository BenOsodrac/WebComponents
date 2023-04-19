/*! For license information please see Welcome-stories-mdx.2197b900.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_bcaosodrac_outsystems_ui_web_components=self.webpackChunk_bcaosodrac_outsystems_ui_web_components||[]).push([[58],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/stories/Welcome.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/code-brackets.svg"),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/assets/colors.svg"),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/assets/comments.svg"),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/assets/direction.svg"),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/assets/flow.svg"),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/assets/plugin.svg"),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/assets/repo.svg"),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/stories/assets/stackalt.svg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Design System/Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Design System/Introduction"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("style",{children:"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h1,{id:"welcome-to-outsystems-ui-storybook",children:"Welcome to OutSystems UI Storybook"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:["Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:["Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.code,{children:"src/stories"})," directory to learn how they work.\nWe recommend building UIs with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"link-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_7__,alt:"plugin"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"Presets for popular tools"}),"\nEasy setup for TypeScript, SCSS and more."]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_9__,alt:"Build"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"Build configuration"}),"\nHow to customize webpack and Babel"]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_3__,alt:"colors"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"Styling"}),"\nHow to load and configure CSS libraries"]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_6__,alt:"flow"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"Data"}),"\nProviders and mocking for data libraries"]})})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"subheading",children:"Learn"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"link-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_8__,alt:"repo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"Storybook documentation"}),"\nConfigure, customize, and extend"]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_5__,alt:"direction"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"In-depth guides"}),"\nBest practices from leading teams"]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_2__,alt:"code"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"GitHub project"}),"\nView the source and add issues"]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_4__,alt:"comments"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:"Discord chat"}),"\nChat with maintainers and the community"]})})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"tip-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("code",{children:"src/stories/Introduction.stories.mdx"})]})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/assets/code-brackets.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},"./src/stories/assets/colors.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},"./src/stories/assets/comments.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},"./src/stories/assets/direction.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},"./src/stories/assets/flow.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},"./src/stories/assets/plugin.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},"./src/stories/assets/repo.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},"./src/stories/assets/stackalt.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"}}]);