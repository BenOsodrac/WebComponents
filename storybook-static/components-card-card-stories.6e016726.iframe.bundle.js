(self.webpackChunk_bcaosodrac_outsystems_ui_web_components=self.webpackChunk_bcaosodrac_outsystems_ui_web_components||[]).push([[502],{"./src/components/card/card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,NoPadding:()=>NoPadding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./dist/outsystemsui.js");var _storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Patterns/Atoms/Card",argTypes:{text:{control:"text"},padding:{control:"text"},backgroundColor:{control:"color"}}},Template=({text,padding,backgroundColor})=>`<osui-card background=${backgroundColor} padding=${padding}>${text}</osui-card>`,Basic=Template.bind({});Basic.args={text:"Hello World!"},Basic.play=async({args,canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement),card=await canvas.findByText(args.text);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.mV.click(card),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(card.textContent).toContain("clicked")};const NoPadding=Template.bind({});NoPadding.args={text:"Hello World!",padding:"0px"},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"({\n  text,\n  padding,\n  backgroundColor\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<osui-card></osui-card>`;\n  return `<osui-card background=${backgroundColor} padding=${padding}>${text}</osui-card>`;\n}",...Basic.parameters?.docs?.source}}},NoPadding.parameters={...NoPadding.parameters,docs:{...NoPadding.parameters?.docs,source:{originalSource:"({\n  text,\n  padding,\n  backgroundColor\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<osui-card></osui-card>`;\n  return `<osui-card background=${backgroundColor} padding=${padding}>${text}</osui-card>`;\n}",...NoPadding.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","NoPadding"]},"?4f7e":()=>{}}]);