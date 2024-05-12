"use strict";(self.webpackChunkdocs_garz_dev=self.webpackChunkdocs_garz_dev||[]).push([[3516],{9502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(4848),l=n(8453);n(6540),n(2303);const a={},i="PlatformIO",r={id:"tools/platform-io",title:"PlatformIO",description:"Installation",source:"@site/docs/tools/platform-io.mdx",sourceDirName:"tools",slug:"/tools/platform-io",permalink:"/tools/platform-io",draft:!1,unlisted:!1,editUrl:"https://github.com/garzj/docs-diary/edit/master/docs/tools/platform-io.mdx",tags:[],version:"current",lastUpdatedBy:"garzj",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Digi4School",permalink:"/tools/digi4school"},next:{title:"\u2699 OS",permalink:"/category/-os"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Uploading a sketch to the ATMega16",id:"uploading-a-sketch-to-the-atmega16",level:2},{value:"Folder structure",id:"folder-structure",level:3},{value:"Setting up PlatformIO (for VS Code)",id:"setting-up-platformio-for-vs-code",level:3},{value:"The sketch",id:"the-sketch",level:3},{value:"Compilation and upload",id:"compilation-and-upload",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"platformio",children:"PlatformIO"}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["On Arch ",(0,o.jsx)(t.code,{children:"yay -S platformio"})," and ",(0,o.jsx)(t.a,{href:"https://docs.platformio.org/en/latest/core/installation/udev-rules.html",children:"setting up udev rules"})]}),"\n",(0,o.jsxs)(t.li,{children:["Instructions for other platforms can be found ",(0,o.jsx)(t.a,{href:"https://docs.platformio.org/en/latest/core/installation/index.html",children:"here"})]}),"\n",(0,o.jsxs)(t.li,{children:["Optionally the ",(0,o.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide",children:"VS Code extension"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"uploading-a-sketch-to-the-atmega16",children:"Uploading a sketch to the ATMega16"}),"\n",(0,o.jsx)(t.h3,{id:"folder-structure",children:"Folder structure"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"./\n\u251c\u2500\u2500 lib/\n\u251c\u2500\u2500 platformio.ini\n\u2514\u2500\u2500 src/\n    \u2514\u2500\u2500 main.c\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-toml",metastring:"title='platformio.ini'",children:"[env:ATmega16]\nplatform = atmelavr\nframework = arduino\nboard = ATmega16\nboard_build.f_cpu = 8000000L\nboard_fuses.efuse = 0xFF\nboard_fuses.hfuse = 0xD1\nboard_fuses.lfuse = 0xC4\nupload_protocol = stk500\nupload_flags = -e\n"})}),"\n",(0,o.jsx)(t.h3,{id:"setting-up-platformio-for-vs-code",children:"Setting up PlatformIO (for VS Code)"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-BASH",children:"pio init --ide vscode\n"})}),"\n",(0,o.jsx)(t.h3,{id:"the-sketch",children:"The sketch"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",metastring:"title='main.c'",children:"#include <avr/io.h>\n\nint main(void) {\n  DDRB = 0xff;\n  DDRD = 0x0;\n\n  while (1) {\n    PORTB = ~PIND;\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"compilation-and-upload",children:"Compilation and upload"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-BASH",children:"pio run --target upload\n"})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(6540);const l={},a=o.createContext(l);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);