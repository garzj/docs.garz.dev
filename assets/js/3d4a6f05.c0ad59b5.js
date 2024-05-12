"use strict";(self.webpackChunkdocs_garz_dev=self.webpackChunkdocs_garz_dev||[]).push([[678],{3152:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(4848),t=r(8453);const o={},d="Raise BSOD",i={id:"os/windows/raise-bsod",title:"Raise BSOD",description:"The following C code will shutdown Windows 10 with a BSOD.",source:"@site/docs/os/windows/raise-bsod.md",sourceDirName:"os/windows",slug:"/os/windows/raise-bsod",permalink:"/os/windows/raise-bsod",draft:!1,unlisted:!1,editUrl:"https://github.com/garzj/docs-diary/edit/master/docs/os/windows/raise-bsod.md",tags:[],version:"current",lastUpdatedBy:"garzj",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Map drive letter to folder",permalink:"/os/windows/map-drive-to-folder"},next:{title:"Spoof MAC address",permalink:"/os/windows/spoof-mac-address"}},a={},l=[];function c(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"raise-bsod",children:"Raise BSOD"}),"\n",(0,s.jsx)(n.p,{children:"The following C code will shutdown Windows 10 with a BSOD."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <Windows.h>\n#include <ntstatus.h>\n\n#define SHUTDOWN_PRIVILEGE 19\n#define OPTION_SHUTDOWN 6\n\n// function definitions\ntypedef NTSTATUS(NTAPI *pdef_RtlAdjustPrivilege)(\n    ULONG privilege,\n    BOOLEAN enable,\n    BOOLEAN current_thread,\n    PBOOLEAN enabled);\ntypedef NTSTATUS(NTAPI *pdef_NtRaiseHardError)(\n    NTSTATUS error_status,\n    ULONG number_of_parameters,\n    ULONG unicode_string_parameter_mask,\n    PULONG_PTR parameters,\n    ULONG response_option,\n    PULONG reponse);\n\nint main()\n{\n  pdef_RtlAdjustPrivilege RtlAdjustPrivilege = (pdef_RtlAdjustPrivilege)GetProcAddress(LoadLibraryA("ntdll.dll"), "RtlAdjustPrivilege");\n  BOOLEAN enabled;\n  if (RtlAdjustPrivilege(SHUTDOWN_PRIVILEGE, TRUE, FALSE, &enabled) == 0)\n  {\n    // raise error with response option 6 to shutdown the system\n    pdef_NtRaiseHardError NtRaiseHardError = (pdef_NtRaiseHardError)GetProcAddress(LoadLibraryA("ntdll.dll"), "NtRaiseHardError");\n    ULONG response;\n    NtRaiseHardError(STATUS_NOT_IMPLEMENTED, 0, 0, 0, OPTION_SHUTDOWN, &response);\n  }\n\n  return 0;\n}\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(6540);const t={},o=s.createContext(t);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);