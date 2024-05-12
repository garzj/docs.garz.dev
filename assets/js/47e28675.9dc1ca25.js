"use strict";(self.webpackChunkdocs_garz_dev=self.webpackChunkdocs_garz_dev||[]).push([[4275],{6569:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>g,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=i(4848),s=i(8453);const t={},c="Basic configuration",a={id:"os/cisco/base-config",title:"Basic configuration",description:"How setting up a Cisco device with some standard security practices may look like.",source:"@site/docs/os/cisco/010_base-config.md",sourceDirName:"os/cisco",slug:"/os/cisco/base-config",permalink:"/os/cisco/base-config",draft:!1,unlisted:!1,editUrl:"https://github.com/garzj/docs-diary/edit/master/docs/os/cisco/010_base-config.md",tags:[],version:"current",lastUpdatedBy:"garzj",sidebarPosition:10,frontMatter:{},sidebar:"autoSidebar",previous:{title:"Cisco IOS",permalink:"/os/cisco/"},next:{title:"IP addressing",permalink:"/os/cisco/ip-addressing"}},r={},l=[{value:"Editing config",id:"editing-config",level:2},{value:"Global config mode",id:"global-config-mode",level:3},{value:"Base/standard config",id:"basestandard-config",level:3},{value:"Viewing config",id:"viewing-config",level:2},{value:"Saving config",id:"saving-config",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"basic-configuration",children:"Basic configuration"}),"\n",(0,o.jsx)(e.p,{children:"How setting up a Cisco device with some standard security practices may look like."}),"\n",(0,o.jsx)(e.h2,{id:"editing-config",children:"Editing config"}),"\n",(0,o.jsx)(e.h3,{id:"global-config-mode",children:"Global config mode"}),"\n",(0,o.jsxs)(e.admonition,{type:"note",children:[(0,o.jsx)(e.p,{children:"In this documentation all config without a title will assume global configuration mode. Other options are:"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:">"}),": unprivileged exec mode"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"#"}),": privileged exec mode (enable)"]}),"\n"]})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cisco-ios",metastring:'title=">"',children:"enable\nconfigure terminal\n\n! List configuration options\n?\n\n! List subcommands of an option\ninterface ?\n"})}),"\n",(0,o.jsx)(e.h3,{id:"basestandard-config",children:"Base/standard config"}),"\n",(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsx)(e.p,{children:"Make sure to change all specified passwords."})}),"\n",(0,o.jsx)(e.p,{children:"This is how a standard base configuration for a Cisco device can look like:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cisco-ios",children:'! Typos\nno ip domain-lookup\n\n! Authorization\nservice password-encryption\nenable secret class\nusername admin password cisco\nbanner motd "Authorized access only!"\n\n! Hostname\nhostname Device1\n\n! SSH setup\nip domain-name example.com\nip ssh version 2\ncrypto key generate rsa general-keys modulus 2048\n\n! Block login 120s when 3 attempts fail in 60s\nlogin block-for 120 attempts 3 within 60\n\n! Get amount of vty lines (usually 5 or 16)\ndo show line\ndo show run | i vty\n\n! or line vty 0 15\nline vty 0 4\n  ! or transport input ssh telnet\n  transport input ssh\n  exec-timeout 15 0\n\n  ! or password <password>\n  login local\n\nline console 0\n  exec-timeout 15 0\n  login local\n\nline aux 0\n  exec-timeout 15 0\n  login local\n'})}),"\n",(0,o.jsxs)(e.p,{children:["More SSH settings in the ",(0,o.jsx)(e.a,{href:"./administration#ssh",children:"remote administration chapter"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"viewing-config",children:"Viewing config"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cisco-ios",metastring:'title="#"',children:"! Complete config\nshow running-config\n\n! List options\nshow ?\n\n! Filtering using begin / include / exclude / section\nshow ... | include regular-expression\n"})}),"\n",(0,o.jsx)(e.h2,{id:"saving-config",children:"Saving config"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cisco-ios",metastring:'title="#"',children:"! Different commands saving the config to disk\ncopy running-config startup-config\nwrite memory\nwrite\n\n! Backup the config onto a tftp server\ncopy running-config tftp\n"})})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>a});var o=i(6540);const s={},t=o.createContext(s);function c(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);