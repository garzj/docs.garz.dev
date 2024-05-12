"use strict";(self.webpackChunkdocs_garz_dev=self.webpackChunkdocs_garz_dev||[]).push([[1063],{5337:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var n=a(4848),i=a(8453);const t={},l="Swapfiles",o={id:"os/linux/swap",title:"Swapfiles",description:"A swap space extends the available RAM on your machine with some virtual memory on your hard drive.",source:"@site/docs/os/linux/swap.md",sourceDirName:"os/linux",slug:"/os/linux/swap",permalink:"/os/linux/swap",draft:!1,unlisted:!1,editUrl:"https://github.com/garzj/docs-diary/edit/master/docs/os/linux/swap.md",tags:[],version:"current",lastUpdatedBy:"garzj",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Screen",permalink:"/os/linux/screen"},next:{title:"Windows",permalink:"/category/windows"}},r={},p=[{value:"Creating a swapfile",id:"creating-a-swapfile",level:2},{value:"Adjusting the swappiness value",id:"adjusting-the-swappiness-value",level:2},{value:"Resizing a swapfile",id:"resizing-a-swapfile",level:2},{value:"Removing a swapfile",id:"removing-a-swapfile",level:2}];function c(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"swapfiles",children:"Swapfiles"}),"\n",(0,n.jsx)(s.p,{children:"A swap space extends the available RAM on your machine with some virtual memory on your hard drive."}),"\n",(0,n.jsx)(s.p,{children:"Normally you would use a dedicated partition for this purpose, but this is not always possible on cloud-based virtual machines. The solution is a swapfile."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:"title='Enter super user mode'",children:"sudo su\n"})}),"\n",(0,n.jsx)(s.h2,{id:"creating-a-swapfile",children:"Creating a swapfile"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'# Show swap spaces\nswapon --show\n\n# Allocate the file (1G)\ndd if=/dev/zero of=/var/swapfile bs=1M count=1K\nchmod 600 /var/swapfile\nmkswap /var/swapfile\n\n# Activate the swap\nswapon /var/swapfile\necho "/var/swapfile swap swap defaults 0 0" >> /etc/fstab\n'})}),"\n",(0,n.jsx)(s.h2,{id:"adjusting-the-swappiness-value",children:"Adjusting the swappiness value"}),"\n",(0,n.jsx)(s.p,{children:"A lower swappiness value will tell the OS to avoid using the swap, while a higher one will tell it to use the swap more frequently."}),"\n",(0,n.jsxs)(s.p,{children:["Swappiness values usually range between ",(0,n.jsx)(s.code,{children:"0"})," and ",(0,n.jsx)(s.code,{children:"100"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'# Show swappiness\ncat /proc/sys/vm/swappiness\n\n# Set swappiness value\nsysctl vm.swappiness=20\necho "vm.swappiness=20" >> /etc/sysctl.conf\n'})}),"\n",(0,n.jsx)(s.h2,{id:"resizing-a-swapfile",children:"Resizing a swapfile"}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"Deactivating a swapfile will swap its contents into RAM, which could summon the OOM killer. It may be better to just create a second one."})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# Deactivate the swap\nswapoff /var/swapfile\n\n# Increase the swapfile size (1G)\ndd if=/dev/zero of=/var/swapfile bs=1M count=1K\nmkswap /var/swapfile\n\n# Reactivate the swap\nswapon /var/swapfile\n"})}),"\n",(0,n.jsx)(s.h2,{id:"removing-a-swapfile",children:"Removing a swapfile"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# Deactivate the swap\nswapoff /var/swapfile\n\n# Remove the swapfile from /etc/fstab\nvim /var/swapfile\n\n# Delete the file\nrm /var/swapfile\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>o});var n=a(6540);const i={},t=n.createContext(i);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);