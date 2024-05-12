"use strict";(self.webpackChunkdocs_garz_dev=self.webpackChunkdocs_garz_dev||[]).push([[8004],{5290:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=i(4848),r=i(8453);const l={title:"Installing Manjaro on my Dell XPS 15"},t="Manjaro on a Dell XPS 15",a={id:"os/linux/arch/xps-15-installing-manjaro",title:"Installing Manjaro on my Dell XPS 15",description:"Here are my steps switching from Windows to Manjaro Linux on a Dell XPS 15 9500.",source:"@site/docs/os/linux/arch/xps-15-installing-manjaro.md",sourceDirName:"os/linux/arch",slug:"/os/linux/arch/xps-15-installing-manjaro",permalink:"/os/linux/arch/xps-15-installing-manjaro",draft:!1,unlisted:!1,editUrl:"https://github.com/garzj/docs-diary/edit/master/docs/os/linux/arch/xps-15-installing-manjaro.md",tags:[],version:"current",lastUpdatedBy:"garzj",frontMatter:{title:"Installing Manjaro on my Dell XPS 15"},sidebar:"autoSidebar",previous:{title:"MySQL",permalink:"/os/linux/arch/mysql"},next:{title:"Certbot",permalink:"/os/linux/certbot"}},o={},d=[{value:"Basic installation",id:"basic-installation",level:2},{value:"Rendering setup",id:"rendering-setup",level:2},{value:"Resolve hibernation and sleep issues",id:"resolve-hibernation-and-sleep-issues",level:3},{value:"Use X and disable Wayland",id:"use-x-and-disable-wayland",level:3},{value:"Enable fractional scaling",id:"enable-fractional-scaling",level:3},{value:"Setup optimus manager",id:"setup-optimus-manager",level:3},{value:"Pretty GDM and plymouth",id:"pretty-gdm-and-plymouth",level:3},{value:"Apply some nice settings to GDM",id:"apply-some-nice-settings-to-gdm",level:4},{value:"Change the plymouth theme",id:"change-the-plymouth-theme",level:4},{value:"Setting up the fingerprint sensor",id:"setting-up-the-fingerprint-sensor",level:2},{value:"Fixing scroll issues with libinput and HiDPI mice",id:"fixing-scroll-issues-with-libinput-and-hidpi-mice",level:2},{value:"Configuring Gnome settings",id:"configuring-gnome-settings",level:2},{value:"Configuring additional apps",id:"configuring-additional-apps",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manjaro-on-a-dell-xps-15",children:"Manjaro on a Dell XPS 15"}),"\n",(0,s.jsx)(n.p,{children:"Here are my steps switching from Windows to Manjaro Linux on a Dell XPS 15 9500."}),"\n",(0,s.jsx)(n.h2,{id:"basic-installation",children:"Basic installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Backed up my Windows system"}),"\n",(0,s.jsx)(n.li,{children:"Installed Manjaro Gnome using Ventoy"}),"\n",(0,s.jsxs)(n.li,{children:["Once booted, update pacman mirrors",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"sudo pacman-mirrors -c de,at"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enable the AUR + Flatpak with updates in the Pamac GUI and upgrade all packages","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add flathub: ",(0,s.jsx)(n.code,{children:"flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rendering-setup",children:"Rendering setup"}),"\n",(0,s.jsx)(n.h3,{id:"resolve-hibernation-and-sleep-issues",children:"Resolve hibernation and sleep issues"}),"\n",(0,s.jsx)(n.p,{children:"The default installation had issues waking up after being in suspend or hibernation state. The following actions solved the problem for me:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Changing some boot options","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["I also added ",(0,s.jsx)(n.code,{children:"sysrq_always_enabled=1"})," here, to enable the ",(0,s.jsx)(n.a,{href:"https://forum.manjaro.org/t/howto-reboot-turn-off-your-frozen-computer-reisub-reisuo/3855",children:"REISUB"})," method, just in case"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sudo update-grub"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Enabling ",(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/title/kernel_mode_setting#Early_KMS_start",children:"early KMS start"})," of the Intel and Nvidia modules","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"i915"})," and ",(0,s.jsx)(n.code,{children:"nvidia nvidia_modeset nvidia_uvm nvidia_drm"})," to the ",(0,s.jsx)(n.code,{children:"MODULES=(...)"})," array in ",(0,s.jsx)(n.code,{children:"/etc/mkinitcpio.conf"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sudo mkinitcpio -P"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"use-x-and-disable-wayland",children:"Use X and disable Wayland"}),"\n",(0,s.jsxs)(n.p,{children:["Edit ",(0,s.jsx)(n.code,{children:"/etc/gdm/custom.conf"}),", and uncomment ",(0,s.jsx)(n.code,{children:"#WaylandEnable=false"}),", because Wayland"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"has no message API between windows, so CopyQ doesn't work"}),"\n",(0,s.jsxs)(n.li,{children:["is still not supported by a lot of apps and XWayland is blurry on HiDPI (",(0,s.jsx)(n.a,{href:"https://chromium.googlesource.com/chromiumos/platform2/+/master/vm_tools/sommelier/",children:"Sommilier"})," could be ported here)"]}),"\n",(0,s.jsx)(n.li,{children:"disables hardware acceleration in some apps"}),"\n",(0,s.jsx)(n.li,{children:"forces VSync"}),"\n",(0,s.jsx)(n.li,{children:"doesn't work with optimus manager"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"enable-fractional-scaling",children:"Enable fractional scaling"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S mutter-x11-scaling\ngsettings set org.gnome.mutter experimental-features \"['x11-randr-fractional-scaling']\"\nsudo systemctl restart gdm # note, that this will close all apps\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setup-optimus-manager",children:"Setup optimus manager"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pamac install base-devel optimus-manager gdm-prime\nsudo cp /usr/share/optimus-manager.conf /etc/optimus-manager\n"})}),"\n",(0,s.jsx)(n.p,{children:"Editing these configs will create a tear free experience:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",metastring:"title='/etc/optimus-manager/optimus-manager.conf'",children:"driver=intel # modesetting is recommended for newer hardware, but then tearfree only works with xorg-server-git for now\ntearfree=yes\noptions=overclocking, triple_buffer\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Also, applying the following settings will enable dynamic power management and hybrid graphics, but one should read ",(0,s.jsx)(n.a,{href:"https://github.com/Askannz/optimus-manager/wiki/A-guide--to-power-management-options#configuration-1--dynamic-power-management-inside-the-nvidia-driver-runtime-d3-power-management",children:"this guide"})," first:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",metastring:"title='/etc/optimus-manager/optimus-manager.conf'",children:"startup_mode=hybrid\ndynamic_power_management=fine\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, after runnning ",(0,s.jsx)(n.code,{children:"systemctl restart gdm optimus-manager"}),", the desktop will begin to use ",(0,s.jsx)(n.code,{children:"gdm-prime"})," and start optimus-manager using hybrid graphics right away. (",(0,s.jsx)(n.code,{children:"reboot"})," if this fails)"]}),"\n",(0,s.jsx)(n.h3,{id:"pretty-gdm-and-plymouth",children:"Pretty GDM and plymouth"}),"\n",(0,s.jsx)(n.p,{children:"The following procedures will remove all Manjaro ads from the boot process and the login screen."}),"\n",(0,s.jsx)(n.h4,{id:"apply-some-nice-settings-to-gdm",children:"Apply some nice settings to GDM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pamac install gdm-settings"})}),"\n",(0,s.jsx)(n.li,{children:"Click three dots -> Load session settings"}),"\n",(0,s.jsx)(n.li,{children:'Login Screen -> Disable "Enable Logo"'}),"\n",(0,s.jsx)(n.li,{children:"Apply"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"change-the-plymouth-theme",children:"Change the plymouth theme"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plymouth-set-default-theme --list"})," and pick a theme"]}),"\n",(0,s.jsxs)(n.li,{children:["Set ",(0,s.jsx)(n.code,{children:"DeviceScale=2"})," in ",(0,s.jsx)(n.code,{children:"/etc/plymouth/plymouthd.conf"})," for HiDPI"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sudo plymouth-set-default-theme -R spinner"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-the-fingerprint-sensor",children:"Setting up the fingerprint sensor"}),"\n",(0,s.jsxs)(n.p,{children:["The device is on the ",(0,s.jsx)(n.a,{href:"https://gitlab.freedesktop.org/libfprint/wiki/-/wikis/Unsupported-Devices",children:"list of unsupported devices"}),", but it works tho with the ",(0,s.jsx)(n.code,{children:"libfprint-2-tod1-xps9300"})," driver from the AUR."]}),"\n",(0,s.jsx)(n.p,{children:"This will install the driver:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pamac remove fprintd\npamac install libfprint-tod-git libfprint-2-tod1-xps9300-bin\npamac install fprintd\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then setup your fingerprint in Settings -> Users"}),"\n",(0,s.jsx)(n.h2,{id:"fixing-scroll-issues-with-libinput-and-hidpi-mice",children:"Fixing scroll issues with libinput and HiDPI mice"}),"\n",(0,s.jsxs)(n.p,{children:["Some X apps might ignore scroll events when the scroll direction changes and HiDPI scrolling is enabled. ",(0,s.jsx)(n.a,{href:"https://archlinux.org/packages/extra/x86_64/xorg-xev/",children:"xev"})," can be used to track this behaviour, even when ",(0,s.jsx)(n.a,{href:"https://archlinux.org/packages/community/x86_64/evtest/",children:"evtest"})," shows different events."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://forum.manjaro.org/t/logitech-mx-master-vertical-scroll-issue/100859/4",children:"This solution"})," worked by creating the following file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",metastring:"title='/etc/libinput/local-overrides.quirks'",children:"[Logitech MX Master 3 USB]\nMatchVendor=0x046D\nMatchProduct=0x4082\nModelInvertHorizontalScrolling=1\nAttrEventCode=-REL_WHEEL_HI_RES;-REL_HWHEEL_HI_RES;\n\n[Logitech MX Master 3]\nMatchVendor=0x46D\nMatchProduct=0xB023\nModelInvertHorizontalScrolling=1\nAttrEventCode=-REL_WHEEL_HI_RES;-REL_HWHEEL_HI_RES;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now after running ",(0,s.jsx)(n.code,{children:"systemctl restart gdm"}),", the issues were fixed."]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-gnome-settings",children:"Configuring Gnome settings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Set a nice wallpaper"}),"\n",(0,s.jsxs)(n.li,{children:["Shortcuts","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Super + Arrow Up"}),": Maximize window"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Super + Arrow Down"}),": Restore window"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Super + E"}),": ",(0,s.jsx)(n.code,{children:"nautilus --new-window"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Super + T"}),": ",(0,s.jsx)(n.code,{children:"gnome-terminal"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Super + V"}),": ",(0,s.jsx)(n.code,{children:"copyq \"menu('clipboard', 20)\""})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Super + ."}),": ",(0,s.jsx)(n.code,{children:"emoji-picker"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Configure cursor speed"}),"\n",(0,s.jsxs)(n.li,{children:["Gnome Extensions","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://extensions.gnome.org/extension/3843/just-perfection/",children:"Just Perfection"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Preset: Super Minimal"}),"\n",(0,s.jsx)(n.li,{children:"Panel in Overview: On"}),"\n",(0,s.jsx)(n.li,{children:"OSD: On"}),"\n",(0,s.jsx)(n.li,{children:"Workspace Popup: On"}),"\n",(0,s.jsx)(n.li,{children:"Workspace Switcher: On"}),"\n",(0,s.jsx)(n.li,{children:"Animation: Fastest"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Configure user dirs in ",(0,s.jsx)(n.code,{children:"~/.config/user-dirs.dirs"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-additional-apps",children:"Configuring additional apps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pamac install brave-browser copyq neovim nvim-packer-git visual-studio-code-bin ttf-ms-win11-auto steam-native-runtime bitwarden speedtest-cli minecraft-launcher whatsapp-for-linux tree platformio neofetch mutter-x11-scaling cowsay x11-emoji-picker cuda-tools teams-for-linux youtube-dl nm-connection-editor vmware-workstation wireshark-qt dotnet-sdk python-pip rustup lldb go libreoffice-still android-sdk android-studio autojump bluez-utils-compat cabextract gdlauncher-bin linux-wifi-hotspot nvidia-container-runtime-bin python2-bin sqlite teamviewer usb_modeswitch xxd-standalone tensorflow cuda cudnn xcursor-breeze noto-fonts downgrade virt-manager"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set VS Code ",(0,s.jsx)(n.code,{children:"terminal.integrated.fontFamily"})," to ",(0,s.jsx)(n.code,{children:"MesloLGS NF"})," or ",(0,s.jsx)(n.code,{children:"NotoSansMono Nerd Font"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Change cursor in Tweaks to ",(0,s.jsx)(n.code,{children:"Xcursor-breeze"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add myself to the wireshark group",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"sudo usermod -a -G wireshark $USER"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install a ",(0,s.jsx)(n.a,{href:"https://www.reddit.com/user/GermanAcId/comments/yxssux/this_is_probably_what_youre_looking_for/",children:"resolve crack"})," for mp4 codecs"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Override desktop file to execute app with ",(0,s.jsx)(n.code,{children:"prime-run"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"VMWare setup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enter a ",(0,s.jsx)(n.a,{href:"https://web.archive.org/web/20221202083641/https://gist.github.com/williamgh2019/cc2ad94cc18cb930a0aab42ed8d39e6f",children:"license key"})]}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.a,{href:"https://communities.vmware.com/t5/VMware-Workstation-Pro-Documents/Workstation-support-on-Linux-using-systemd/ta-p/2792857",children:"systemd services"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Rust setup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"rustup default stable"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"rustup target add i686-unknown-linux-gnu"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cargo install cargo-watch"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"VirtManager setup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To use VirtManager without root, set ",(0,s.jsx)(n.code,{children:'unix_sock_group = "libvirt"'})," in ",(0,s.jsx)(n.code,{children:"/etc/libvirt/libvirtd.conf"})," and run:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"newgrp libvirt\nsudo usermod -a -G libvirt $USER\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Enable and start the daemon and the default network:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable libvirtd\nsudo systemctl start libvirtd\nsudo virsh net-autostart default\nsudo virsh net-start default\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"League of Legends"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install lutris with ",(0,s.jsx)(n.code,{children:"pamac install lutris"})," (with ",(0,s.jsx)(n.code,{children:"gamemode gamescope vkd3d wine winetricks xorg-xgamma"})," and their lib32 versions)"]}),"\n",(0,s.jsxs)(n.li,{children:["Configure Lutris -> Wine Settings -> System Options","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the Default installation folder to ",(0,s.jsx)(n.code,{children:"~/.local/share/games"})]}),"\n",(0,s.jsx)(n.li,{children:"Enable NVIDIA Prime Render Offload"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Install from ",(0,s.jsx)(n.code,{children:"https://lutris.net/games/league-of-legends/"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pamac install nvm"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Follow setup instructions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Setup ",(0,s.jsx)(n.a,{href:"/os/linux/arch/mysql",children:"mysql"})," and ",(0,s.jsx)(n.a,{href:"/tools/platform-io",children:"platformio"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"..."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/os/linux/fedora/xps-17-fedora-setup",children:"Switch to Fedora and Wayland"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(6540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);