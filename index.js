(function(l,b,m,r,n,u,o,c){"use strict";const{ScrollView:f,View:g}=o.General,{FormRow:p,FormSwitch:w,FormSection:E,FormDivider:h}=o.Forms;n.stylesheet.createThemedStyleSheet({text:{color:c.semanticColors.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:n.constants.Fonts.PRIMARY_BOLD,fontSize:16},subText:{color:c.semanticColors.TEXT_POSITIVE,paddingLeft:"6%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:n.constants.Fonts.DISPLAY_NORMAL,fontSize:12}});const i=[{id:"instagramEnabled",default:!0,label:"Enable BetterInstagramEmbeds",subLabel:"Replace Instagram embeds with ddinstagram embeds"},{id:"twitterEnabled",default:!0,label:"Enable BetterTwitterEmbeds",subLabel:"Replace Twitter embeds with fxtwitter embeds"},{id:"xEnabled",default:!0,label:"Enable BetterXEmbeds",subLabel:"Replace X embeds with fixupx embeds"},{id:"tiktokEnabled",default:!0,label:"Enable BetterTikTokEmbeds",subLabel:"Replace TikTok embeds with tnktok embeds"}];function R(){u.useProxy(r.storage);for(const{id:t,default:a}of i)r.storage[t]??=a;return n.React.createElement(f,null,n.React.createElement(g,{style:{marginTop:20,marginBottom:20}},n.React.createElement(E,{title:"Plugin Settings"},i.map(function(t,a){return n.React.createElement(n.React.Fragment,{key:t.id},n.React.createElement(p,{label:t.label,subLabel:t.subLabel,trailing:n.React.createElement(w,{value:r.storage[t.id]??t.default,onValueChange:function(e){return r.storage[t.id]=e}})}),a!==i.length-1&&n.React.createElement(h,null))}))))}const k=b.findByProps("sendMessage","receiveMessage");let d;var S={onLoad:function(){d=m.before("sendMessage",k,function(t){const a=t[1].content;if(r.storage.instagramEnabled){const e=/https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g;e.test(a)&&(t[1].content=a.replace(e,function(s){return s.replace("https://www.instagram.com","https://www.ddinstagram.com")}))}if(r.storage.twitterEnabled){const e=/https:\/\/twitter\.com\/[^ ]+/g;e.test(a)&&(t[1].content=a.replace(e,function(s){return s.replace("https://twitter.com","https://fxtwitter.com")}))}if(r.storage.xEnabled){const e=/https:\/\/x\.com\/[^ ]+/g;e.test(a)&&(t[1].content=a.replace(e,function(s){return s.replace("https://x.com","https://fixupx.com")}))}if(r.storage.tiktokEnabled){const e=/https:\/\/(?:www\.)?tiktok\.com\/[^ ]+/g;e.test(a)&&(t[1].content=a.replace(e,function(s){return s.replace(/https:\/\/(?:www\.)?tiktok\.com/,"https://tnktok.com")}))}})},onUnload:function(){d()},settings:R};return l.default=S,Object.defineProperty(l,"__esModule",{value:!0}),l})({},vendetta.metro,vendetta.patcher,vendetta.plugin,vendetta.metro.common,vendetta.storage,vendetta.ui.components,vendetta.ui);
