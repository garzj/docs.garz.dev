"use strict";(self.webpackChunkdocs_garz_dev=self.webpackChunkdocs_garz_dev||[]).push([[926],{3560:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const r={},c="Port & Network security",o={id:"os/cisco/port_security",title:"Port & Network security",description:"Securing switchports and avoiding spoofing attacks (ARP / DHCP) on a Cisco device.",source:"@site/docs/os/cisco/080_port_security.md",sourceDirName:"os/cisco",slug:"/os/cisco/port_security",permalink:"/os/cisco/port_security",draft:!1,unlisted:!1,editUrl:"https://github.com/garzj/docs-diary/edit/master/docs/os/cisco/080_port_security.md",tags:[],version:"current",lastUpdatedBy:"garzj",sidebarPosition:80,frontMatter:{},sidebar:"autoSidebar",previous:{title:"Redundancy",permalink:"/os/cisco/redundancy"},next:{title:"Access lists",permalink:"/os/cisco/acls"}},a={},d=[{value:"Port security",id:"port-security",level:2},{value:"Restricting VLAN access",id:"restricting-vlan-access",level:3},{value:"Restrict MACs",id:"restrict-macs",level:3},{value:"Security violations",id:"security-violations",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"DHCP snooping",id:"dhcp-snooping",level:2},{value:"ARP inspection",id:"arp-inspection",level:2},{value:"BPDU Guard (STP)",id:"bpdu-guard-stp",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"port--network-security",children:"Port & Network security"}),"\n",(0,t.jsx)(n.p,{children:"Securing switchports and avoiding spoofing attacks (ARP / DHCP) on a Cisco device."}),"\n",(0,t.jsx)(n.h2,{id:"port-security",children:"Port security"}),"\n",(0,t.jsx)(n.h3,{id:"restricting-vlan-access",children:"Restricting VLAN access"}),"\n",(0,t.jsxs)(n.p,{children:["Restricting access to VLANs is covered in the ",(0,t.jsx)(n.a,{href:"./vlans-trunking",children:"VLANs and trunking chapter"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"restrict-macs",children:"Restrict MACs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cisco-ios",metastring:'title="config-if#"',children:"! Enable port-security\nswitchport port-security\n\n! Maximum MAC addresses\nswitchport port-security maximum 5\n\n! Manual MAC address config\nswitchport port-security mac-address 0123.4567.89ab\n\n! Dynamically learn new addresses until max\nswitchport port-security mac-address sticky\n\n! Delete inactive addresses\nswitchport port-security aging time 10\nswitchport port-security aging type inactivity\n"})}),"\n",(0,t.jsx)(n.h3,{id:"security-violations",children:"Security violations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cisco-ios",metastring:'title="config-if#"',children:"switchport port-security violation shutdown\n"})}),"\n",(0,t.jsx)(n.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cisco-ios",metastring:'title="#"',children:"show port-security\nshow port-security address\nshow port-security interface fa0/1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"dhcp-snooping",children:"DHCP snooping"}),"\n",(0,t.jsx)(n.p,{children:"Stops bad actors from running their own DHCP server in a network."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cisco-ios",children:"ip dhcp snooping\n\n! On all interfaces valid DHCP packets may be received from\ninterface gi0/1\n  ip dhcp snooping trust\n\n! Limits DHCPDISCOVER packets on an interface\ninterface fa0/1\n  ! dhcp snooping limit rate <seconds>\n  dhcp snooping limit rate 5\n\n! Limit to vlans\ndhcp snooping vlan 5,10,40-42\n"})}),"\n",(0,t.jsx)(n.h2,{id:"arp-inspection",children:"ARP inspection"}),"\n",(0,t.jsx)(n.p,{children:"Requires dhcp snooping to be active!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cisco-ios",children:"! On all interfaces ARP packets can be trusted from\ninterface gi0/1\n  ip arp inspection trust\n\n! Limit to vlans\nip arp inspection vlan 5,10,40-42\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bpdu-guard-stp",children:"BPDU Guard (STP)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cisco-ios",children:"spanning-tree bpduguard enable\n\n! On all interfaces attached to end devices\ninterface fa0/1\n  spanning-tree portfast bpduguard enable\n\n! Enable on all portfast ports by default\nspanning-tree portfast bpduguard default\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);