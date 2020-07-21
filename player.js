function gtag(){dataLayer.push(arguments)}!function(L,U,O,s){function a(t,e){this.opt=L.extend({},d,e);var a=function(){var t=new Audio;return!(!t.canPlayType||!(t.canPlayType("audio/mpeg;").replace(/^no$/,"")||t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")||t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")||t.canPlayType("audio/aac;").replace(/^no$/,"")))};if(!(this.opt.host&&a&&U.DOMParser&&O.implementation.createHTMLDocument))throw L.data(U,"plugin_kast",null),Error("Kast couldn't load");e.language&&(this.opt.language=L.extend({},d.language,e.language)),"object"==typeof e.colors&&(this.opt.colors=L.extend({},d.colors,e.colors)),"minimized"!==this.opt.startTemplate||this.opt.statusBar&&this.opt.minimizeMaximize||(this.opt.played=!1);var n=this.opt,r="https:"===O.location.protocol?"https":"http";this.host=n.protocol+"://"+n.host+":"+n.port+"/",this.hostCORS=["https://player.cloudrad.io/"+this.host,"https://cors-eu.hnux.com/"+this.host],this.opt.proxy_server&&this.hostCORS.unshift(this.opt.proxy_server+"/"+this.host);var o=this.host;n.ar||!n.overHTTPS||"https:"!==r&&"https"!==r||1==this.opt.version||(o=this.opt.audio_proxy_server?this.opt.audio_proxy_server+"/"+this.host:this.opt.proxy_server?this.opt.proxy_server+"/"+this.host:this.host,this.host=this.hostCORS[0],this.opt.host=this.hostCORS[0],n.host=this.hostCORS[0]);var s=n.sid,i=n.directStreamURL||(1<s?o+"stream/"+s+"/;":o+";");if(n.mount_point)try{i="/"==n.mount_point[0]?o+n.mount_point.slice(1):o+n.mount_point}catch(c){console.error(c)}if(n.mount_point_steamcast)try{i="/"==n.mount_point_steamcast[0]?o+n.mount_point_steamcast.slice(1):o+n.mount_point_steamcast}catch(c){console.error(c)}this.audio=O.createElement("audio"),this.audio.src=i+"?_="+Math.random(),this.audio.load(),n.onAudioLoad(this.audio),this.mobile=!1,this.mobileMedium=!1,this.mobileUltra=!1;var l=n.mobileCare,u=l[1]||"300px";l&&U.matchMedia&&U.matchMedia("(max-width: "+u+")").matches&&(this.mobile=!0,n.autoPlay=!1,n.startTemplate="minimized",n.offlineCheck=!1,"medium"!==l[0]&&"high"!==l[0]&&"very high"!==l[0]&&"ultra"!==l[0]||(this.mobileMedium=!0,"all"===n.autoUpdate&&(n.autoUpdate=!0),"dynamic"===n.theme&&(n.theme="light"),"dynamic"===n.colors&&(n.colors=!1)),"high"!==l[0]&&"very high"!==l[0]&&"ultra"!==l[0]||(n.artwork=n.played=!1),"very high"!==l[0]&&"ultra"!==l[0]||(n.autoUpdate=n.minimizeMaximize=!1),"ultra"===l[0]&&(this.mobileUltra=!0,n.statusBar=n.serverInfo=n.currentArtist=n.currentTrack=!1),n.onMobile()),this.init()}
/*
     * Color Thief v2.0 - Customized for Kast needs only
     * by Lokesh Dhakar - http://www.lokeshdhakar.com
     *
     * Thanks
     * ------
     * Nick Rabinowitz - For creating quantize.js.
     * John Schulz - For clean up and optimization. @JFSIII
     * Nathan Spady - For adding drag and drop support to the demo page.
     *
     * License
     * -------
     * Copyright 2011, 2015 Lokesh Dhakar
     * Released under the MIT license
     * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
     *
     * Note: Lokesh's comments are removed here
     */function i(t){var e=O.implementation.createHTMLDocument("html");return e.documentElement.innerHTML=t,e}var d={host:"",port:80,protocol:"http",version:2,sid:1,mount_point:"",mount_point_steamcast:"",statsPath:"stats",playedPath:"played",directStreamURL:!1,ui:"colored",theme:"light",colors:{primary:"cyan",accent:"yellow"},startTemplate:"maximized",position:"right",container:"body",autoPlay:!1,autoUpdate:!0,artwork:!0,statusBar:!0,minimizeMaximize:!0,muteUnmute:!0,startMuted:!1,serverInfo:!1,played:!0,currentTrack:!0,currentArtist:!0,playedTracks:!0,playedArtists:!0,offlineCheck:!0,language:{offlineText:"Temporarily Offline",playedText:"Played",unknownTrackText:"Unknown Track",unknownArtistText:"Unknown Artist"},mobileCare:!0,irrelevantWords:["feat.","ft.","Feat.","Ft."],skipInfo:!1,defaultArtwork:!1,customCheckerInterval:!1,popup:!1,popupCSSLink:"",popupWidth:380,popupHeight:570,overHTTPS:!1,direct:!1,betaProxies:!1,continuous:!0,proxy_server:null,audio_proxy_server:null,onReady:function(){},onAudioLoad:function(){},onMobile:function(){},onPlay:function(){},onPause:function(){},onStop:function(){},onMinimize:function(){},onMaximize:function(){},onMute:function(){},onUnmute:function(){},onUpdate:function(){},onUpdateAll:function(){},onOffline:function(){},onOnline:function(){},onCurrentArtwork:function(){},onPlayedArtworks:function(){},onCurrentInfo:function(){},onPlayedInfo:function(){},onDynamicColors:function(){},onDynamicColorsContrast:function(){},onDynamicTheme:function(){}},m=function(t){this.canvas=O.createElement("canvas"),this.context=this.canvas.getContext("2d"),O.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)},t=function(){};if(m.prototype={clear:function(){this.context.clearRect(0,0,this.width,this.height)},update:function(t){this.context.putImageData(t,0,0)},getPixelCount:function(){return this.width*this.height},getImageData:function(){return this.context.getImageData(0,0,this.width,this.height)},removeCanvas:function(){this.canvas.parentNode.removeChild(this.canvas)}},t.prototype.getPalette=function(t,e){for(var a,n,r,o,s=new m(t),i=s.getImageData().data,l=s.getPixelCount(),u=[],c=0;c<l;c+=10)n=i[(a=4*c)+0],r=i[a+1],o=i[a+2],125<=i[a+3]&&(250<n&&250<r&&250<o||u.push([n,r,o]));var d=f.quantize(u,e),p=d?d.palette():null;return s.removeCanvas(),p},!g)var g={map:function(t,a){var n={};return a?t.map(function(t,e){return n.index=e,a.call(n,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:e<t?1:0},sum:function(t,n){var r={};return t.reduce(n?function(t,e,a){return r.index=a,t+n.call(r,e)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?g.map(t,e):t)}};var b,f=function(){function f(t,e,a){return(t<<2*h)+(e<<h)+a}function i(t){function e(){a.sort(t),n=!0}var a=[],n=!1;return{push:function(t){a.push(t),n=!1},peek:function(t){return n||e(),t===s&&(t=a.length-1),a[t]},pop:function(){return n||e(),a.pop()},size:function(){return a.length},map:function(t){return a.map(t)},debug:function(){return n||e(),a}}}function d(t,e,a,n,r,o,s){var i=this;i.r1=t,i.r2=e,i.g1=a,i.g2=n,i.b1=r,i.b2=o,i.histo=s}function u(){this.vboxes=new i(function(t,e){return g.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function c(t){var e,a,n,r,o=new Array(1<<3*h);return t.forEach(function(t){a=t[0]>>k,n=t[1]>>k,r=t[2]>>k,e=f(a,n,r),o[e]=(o[e]||0)+1}),o}function p(t,e){var a,n,r,o=1e6,s=0,i=1e6,l=0,u=1e6,c=0;return t.forEach(function(t){a=t[0]>>k,n=t[1]>>k,r=t[2]>>k,a<o?o=a:s<a&&(s=a),n<i?i=n:l<n&&(l=n),r<u?u=r:c<r&&(c=r)}),new d(o,s,i,l,u,c,e)}function m(t,u){function e(t){var e,a,n,r,o,s=t+"1",i=t+"2",l=0;for(c=u[s];c<=u[i];c++)if(p[c]>d/2){for(n=u.copy(),r=u.copy(),o=(e=c-u[s])<=(a=u[i]-c)?Math.min(u[i]-1,~~(c+a/2)):Math.max(u[s],~~(c-1-e/2));!p[o];)o++;for(l=m[o];!l&&p[o-1];)l=m[--o];return n[i]=o,r[s]=n[i]+1,[n,r]}}if(u.count()){var a=u.r2-u.r1+1,n=u.g2-u.g1+1,r=u.b2-u.b1+1,o=g.max([a,n,r]);if(1==u.count())return[u.copy()];var c,s,i,l,d=0,p=[],m=[];if(o==a)for(c=u.r1;c<=u.r2;c++){for(l=0,s=u.g1;s<=u.g2;s++)for(i=u.b1;i<=u.b2;i++)l+=t[f(c,s,i)]||0;d+=l,p[c]=d}else if(o==n)for(c=u.g1;c<=u.g2;c++){for(l=0,s=u.r1;s<=u.r2;s++)for(i=u.b1;i<=u.b2;i++)l+=t[f(s,c,i)]||0;d+=l,p[c]=d}else for(c=u.b1;c<=u.b2;c++){for(l=0,s=u.r1;s<=u.r2;s++)for(i=u.g1;i<=u.g2;i++)l+=t[f(s,i,c)]||0;d+=l,p[c]=d}return p.forEach(function(t,e){m[e]=d-t}),e(o==a?"r":o==n?"g":"b")}}function t(t,e){function a(t,e){for(var a,n=1,r=0;r<v;)if((a=t.pop()).count()){var o=m(l,a),s=o[0],i=o[1];if(!s)return;if(t.push(s),i&&(t.push(i),n++),e<=n)return;if(r++>v)return}else t.push(a),r++}if(!t.length||e<2||256<e)return!1;var l=c(t);l.forEach(function(){0});var n=p(t,l),r=new i(function(t,e){return g.naturalOrder(t.count(),e.count())});r.push(n),a(r,y*e);for(var o=new i(function(t,e){return g.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});r.size();)o.push(r.pop());a(o,e-o.size());for(var s=new u;o.size();)s.push(o.pop());return s}var h=5,k=8-h,v=1e3,y=.75;return d.prototype={volume:function(t){var e=this;return e._volume&&!t||(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(t){var e=this,a=e.histo;if(!e._count_set||t){var n,r,o,s=0;for(n=e.r1;n<=e.r2;n++)for(r=e.g1;r<=e.g2;r++)for(o=e.b1;o<=e.b2;o++)index=f(n,r,o),s+=a[index]||0;e._count=s,e._count_set=!0}return e._count},copy:function(){var t=this;return new d(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(t){var e=this,a=e.histo;if(!e._avg||t){var n,r,o,s,i=0,l=1<<8-h,u=0,c=0,d=0;for(r=e.r1;r<=e.r2;r++)for(o=e.g1;o<=e.g2;o++)for(s=e.b1;s<=e.b2;s++)i+=n=a[f(r,o,s)]||0,u+=n*(r+.5)*l,c+=n*(o+.5)*l,d+=n*(s+.5)*l;e._avg=i?[~~(u/i),~~(c/i),~~(d/i)]:[~~(l*(e.r1+e.r2+1)/2),~~(l*(e.g1+e.g2+1)/2),~~(l*(e.b1+e.b2+1)/2)]}return e._avg},contains:function(t){var e=this,a=t[0]>>k;return gval=t[1]>>k,bval=t[2]>>k,a>=e.r1&&a<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},u.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,a=0;a<e.size();a++)if(e.peek(a).vbox.contains(t))return e.peek(a).color;return this.nearest(t)},nearest:function(t){for(var e,a,n,r=this.vboxes,o=0;o<r.size();o++)((a=Math.sqrt(Math.pow(t[0]-r.peek(o).color[0],2)+Math.pow(t[1]-r.peek(o).color[1],2)+Math.pow(t[2]-r.peek(o).color[2],2)))<e||e===s)&&(e=a,n=r.peek(o).color);return n},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return g.naturalOrder(g.sum(t.color),g.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var a=t.length-1,n=t[a].color;251<n[0]&&251<n[1]&&251<n[2]&&(t[a].color=[255,255,255])}},{quantize:t}}(),z=function(t){if(!t)return null;var e=/^rgba?[\s+]?\(\s*(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]))\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,?(?:\s*([\d.]+))?\s*\)?\s*/im,a=t.match(e);return a?146<=(299*parseInt(a[1],10)+587*parseInt(a[2],10)+114*parseInt(a[3],10))/1e3?"dark":"light":null},P=new t,j=function(t,e,a,n){for(var r,o=e.length,s=O.createDocumentFragment(),i=0;i<o;i++){if(t.direct)r=a[e[i]];else if(a.body){var l=a.body.textContent.split(",");"currentlisteners"===e[i]?r=l[0]:"streamstatus"===e[i]?r=l[1]:"peaklisteners"===e[i]?r=l[2]:"maxlisteners"===e[i]?r=l[3]:"uniquelisteners"===e[i]?r=l[4]:"bitrate"===e[i]?r=l[5]:"songtitle"===e[i]&&(r=l[6])}else r=a.getElementsByTagName(e[i].toUpperCase())[0].textContent;i===o-1?s.appendChild(O.createTextNode(r)):s.appendChild(O.createTextNode(r+" - "))}n.appendChild(s)},R=function(e){var a;a=U.XMLHttpRequest?new XMLHttpRequest:new XDomainRequest;try{if(a.open("GET",e.url,!0),e.arraybuffer){if("string"!=typeof a.responseType)return void(e.error&&e.error());a.responseType="arraybuffer"}a.timeout=e.timeout||3e3}catch(t){return void(e.error&&e.error())}a.onload=function(){if(4===a.readyState)if(200===a.status){var t=e.arraybuffer?a.response:a.responseText;e.load(t,a)}else e.error&&e.error()},e.error&&(a.onerror=e.error),a.ontimeout=a.onerror,setTimeout(function(){a.send()},0),U.kastXHR=a},h=function(t){return t.replace(/(\[.*?\]|\(.*?\))/g,"").replace(/[|&^'`;:$%@"#<>+,]/g,"")},W=O.documentElement.classList;
/*
     * getColorContrast - Customized for Material Design and RGB usage only
     *     Return suggested contrast color (dark or light) for the color (rgba/rgb) given.
     *     Takes advantage of YIQ: https://en.wikipedia.org/wiki/YIQ
     *         dark = background is light, use dark colors for text, images, etc..
     *         light = background is dark, use light colors for text, images, etc..
     *     Inspired by: http://24ways.org/2010/calculating-color-contrast/
     *
     * @param color string A valid rgb value
     * @return      string dark|light
     * @copyright (c) 2015 Julian Richen
     * @license Licensed under MIT License https://raw.githubusercontent.com/julianrichen/javascript-dynamic-contrast/master/LICENSE
     *
     */a.prototype={init:function(){var n=this,r=n.opt;r.popup&&(b=U.open("","kast","width="+r.popupWidth+",height="+r.popupHeight+",toolbar=0,menubar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,left=0,top=0"),(O=b.document).write('<html><head><title>Kast</title><link href="'+r.popupCSSLink+'" rel="stylesheet" type="text/css"></head><body></body></html>'),b.onbeforeunload=function(){L.kast("destroy")},r.container="body");var t=O.querySelector(r.container),e=r.colors,a="object"==typeof e?"kast-primary-"+e.primary.replace(" ",""):"",o="object"==typeof e?"kast-accent-"+e.accent.replace(" ",""):"",s="string"==typeof e?"kast-colors-"+e:"",i=n.mobile&&n.mobileUltra?"kast-ultra":"",l=r.statusBar&&r.muteUnmute&&r.minimizeMaximize?"":"kast-not-full-statusbar",u=r.played?" kast-played ":" kast-current ",c="body"!==r.container?"kast-custom-container":"",d=t.offsetWidth<380?"kast-thin-container":"",p="dynamic"===r.theme?"kast-light":"",m="",f="";if(r.statusBar){var h=r.muteUnmute?'<i id="kast-volume" class="kast-mdi kast-mdi-volume-high"></i>':"",k=r.minimizeMaximize?'<i id="kast-minmax" class="kast-mdi kast-mdi-chevron-down"></i>':"";m='<div id="kast-bar"><p class="kast-offline-status">'+r.language.offlineText+'</p><p id="kast-server"></p>'+h+k+"</div>"}r.played&&(f='<div id="kast-bottom" class="kast-clearfix"><p>'+r.language.playedText+'</p><ul id="kast-playedlist" class="kast-clearfix"></ul></div>');var v=r.continuous?"kast-paused kast-continuous ":"kast-stopped ",y="";y+='<div id="kast" class="kast-recss kast-'+r.theme+" kast-"+r.ui+" "+a+" "+o+" "+s+" kast-"+r.startTemplate+" kast-"+r.position+" "+i+" "+l+u+" "+c+" "+p+" "+d+'">',y+='<div id="kast-wrapper">',y+=m,y+='<div id="kast-top" class="kast-default-art">',y+='<div class="kast-album-wrapper"><i class="kast-mdi kast-mdi-album"></i></div>',y+='<div id="kast-top-content" class="kast-top-content">',y+='<div id="kast-nowplaying"><p id="kast-np-title">&nbsp;</p><p id="kast-np-artist">&nbsp;</p><p class="kast-home-link-title"><a target="_blank" href="https://www.cloudrad.io/radio-player">by Cloudrad.io</a></p></div>',y+='<div id="kast-linear"></div>',y+="</div>",y+='<div id="kast-play" class="'+v+'">',y+='<i class="kast-mdi kast-mdi-play"></i>',y+='<i class="kast-mdi kast-mdi-pause"></i>',y+='<i class="kast-mdi kast-mdi-stop"></i>',y+="</div></div>"+f+"</div></div>",t.insertAdjacentHTML("beforeend",y),r.onReady(),(r.statusBar||r.currentTrack||r.currentArtist)&&this.stats(function(t){var e=r.serverInfo;if(e&&r.statusBar){var a=O.getElementById("kast-server");"string"==typeof e?a.textContent=e:j(r,e,t,a)}n.stats(t)}),r.played&&(Array.isArray&&Array.isArray(r.artwork)?n.played(!1,!0):n.played());var g=r.autoUpdate;return"all"===g?n.autoUpdate("all"):g&&n.autoUpdate(!0),O.getElementById("kast-play").onclick=function(){-1===this.className.indexOf("playing")?n.play(!r.continuous):r.continuous?n.pause():n.stop()},r.statusBar&&(r.muteUnmute&&(O.getElementById("kast-volume").onclick=function(){-1!==this.className.indexOf("high")?n.mute():n.unmute()}),r.minimizeMaximize&&(O.getElementById("kast-minmax").onclick=function(){-1!==O.getElementById("kast").className.indexOf("minimized")?n.maximize():n.minimize()})),r.autoPlay&&n.play(),r.startMuted&&n.mute(),this},play:function(t){var e=O.getElementById("kast"),a=O.getElementById("kast-play");if(W){var n=a.classList;n.remove("kast-paused"),n.remove("kast-stopped"),n.add("kast-playing")}else L(a).removeClass("kast-paused kast-stopped").addClass("kast-playing");var r=this.opt.offlineCheck&&"false"===e.getAttribute("data-offline");(t||r)&&(this.audio.load(),r&&e.removeAttribute("data-offline"));var o=this.audio.play(),s=this;return null!==o&&o["catch"](function(){s&&s.stop()}),this.opt.onPlay(this.audio),this},pause:function(){var t=O.getElementById("kast-play");if(W){var e=t.classList;e.remove("kast-playing"),e.remove("kast-stopped"),e.add("kast-paused"),e.add("kast-continuous")}else L(t).removeClass("kast-playing kast-stopped").addClass("kast-paused kast-continuous");return this.audio.pause(),this.opt.onPause(this.audio),this},stop:function(){var t=O.getElementById("kast-play");if(W){var e=t.classList;e.remove("kast-playing"),e.remove("kast-paused"),e.remove("kast-continuous"),e.add("kast-stopped")}else L(t).removeClass("kast-playing kast-paused kast-continuous").addClass("kast-stopped");return this.audio.pause(),this.opt.onStop(this.audio),this},mute:function(){return O.getElementById("kast-volume").className="kast-mdi kast-mdi-volume-off",this.audio.muted=!0,this.opt.onMute(this.audio),this},unmute:function(){return O.getElementById("kast-volume").className="kast-mdi kast-mdi-volume-high",this.audio.muted=!1,this.opt.onUnmute(this.audio),this},minimize:function(){var t=O.getElementById("kast");if(W){var e=t.classList;e.remove("kast-maximized"),e.add("kast-minimized")}else L(t).removeClass("kast-maximized").addClass("kast-minimized");return this.opt.onMinimize(),this},maximize:function(){var t=O.getElementById("kast");if(W){var e=t.classList;e.remove("kast-minimized"),e.add("kast-maximized")}else L(t).removeClass("kast-minimized").addClass("kast-maximized");return this.opt.onMaximize(),this},stats:function(r){var w=this,A=w.opt,I=O.getElementById("kast"),E=O.getElementById("kast-np-title"),B=O.getElementById("kast-np-artist"),M=O.getElementById("kast-top"),N=O.getElementById("kast-bar"),S=O.getElementById("kast-top-content"),j=O.getElementById("kast-play"),o=function(t){var e,a,n,r,o=A.language.unknownTrackText,s=A.language.unknownArtistText;try{e=null,A.direct?e=t.songtitle:!t.body||A.mount_point||A.mount_point_steamcast?A.mount_point||A.mount_point_steamcast||(e=t.getElementsByTagName("SONGTITLE")[0].textContent):e=t.body.textContent.split(",")[6],e=e||s+" - "+o}catch(C){console.error(C),e=s+" - "+o}if(A.mount_point&&(A.json_parse_attempt&&!A.json_parse_failed||A.ar))try{t&&"<"==t[0]&&(t=t.split("\n").slice(1).join("\n"));var i=JSON.parse(t),l=i.icestats.source;if(Array.isArray(l))for(var u in i.icestats.source){var c=i.icestats.source[u];if(c.listenurl&&c.listenurl.endsWith(A.mount_point)){e=c.title||s+" - "+o;break}}else A.ar?l.title&&(e=l.title||s+" - "+o):l&&l.listenurl&&l.listenurl.endsWith(A.mount_point)&&(e=l.title||s+" - "+o)}catch(T){console.error("stats",T),console.error(T),A.json_parse_failed=!0,e=s+" - "+o}else if(A.mount_point)try{var d=t.getElementsByClassName("streamheader"),p="/"==A.mount_point[0]?A.mount_point:"/"+A.mount_point,m=!1;for(var u in d){var f=d[u],h=f.getElementsByTagName("h3");for(var k in h){var v=h[k];if(v.innerText&&(v=v.innerText.replace("Mount Point ","")),v==p){var y=f.nextSibling.getElementsByClassName("streamdata");for(var g in y){var b=y[g];if("Current Song:"==b.previousSibling.innerText){e=b.innerText||s+" - "+o,m=!0;break}}if(m)break}}if(m)break}}catch(T){console.error("stats",T),e=s+" - "+o}else if(A.mount_point_steamcast)try{p="/"==A.mount_point_steamcast[0]?A.mount_point_steamcast:"/"+A.mount_point_steamcast;e=L(t).find("mount:contains("+p+")").parent().find("meta_song")[0].innerHTML}catch(T){console.error("stat",T),e=s+" - "+o}var _=e.indexOf("//<![CDATA");if(-1<_&&(e=e.slice(0,_-1)),r=(e=U.decodeHTMLCustom(e)).split(" - "),a="string"==typeof A.currentTrack?A.currentTrack:r.slice(1).join(" - ")||e||o,n="string"==typeof A.currentArtist?A.currentArtist:r[1]?r[0]:s,A.skipInfo){u=0;for(var x=A.skipInfo.length;u<x;u++)if(A.skipInfo[u].track&&A.skipInfo[u].artist){if(A.skipInfo[u].track===a&&A.skipInfo[u].artist===n)return}else if(A.skipInfo[u].track&&A.skipInfo[u].track===a||A.skipInfo[u].artist&&A.skipInfo[u].artist===n)return}A.currentTrack&&(E.textContent=a),A.currentArtist&&(B.textContent=n),A.artwork&&w.artwork(n,a,function(t){if(t){var e=t[0],a=t[1]||e;M.style.backgroundImage="url("+e+")",M.removeAttribute("class"),A.onCurrentArtwork(e),"dynamic"!==A.theme&&"dynamic"!==A.colors||!U.Blob||R({url:a,arraybuffer:!0,load:function(t,e){U.URL=U.URL||U.webkitURL;var u=O.createElement("img"),a=e.getResponseHeader("content-type"),n=new Uint8Array(t),r=new Blob([n],{type:a});u.src=U.URL.createObjectURL(r),u.onload=function(){var t=P.getPalette(u,5),e="rgb("+t[0]+")",a="rgb("+t[1]+")",n=z(e)||"light",r="kast-primary-"+n,o=z(a)||"dark",s="kast-accent-"+o;if("dynamic"===A.colors){var i=A.continuous?"kast-paused ":"kast-stopped ";-1!==j.className.indexOf("playing")?j.className="kast-playing "+s:j.className=i+s,A.continuous&&(j.className+=" kast-continuous "),S.className="kast-top-content "+r,A.statusBar&&(N.className=r),j.style.backgroundColor=a,"colored"===A.ui&&(S.style.backgroundColor=e),A.onDynamicColors(e,a),A.onDynamicColorsContrast(n,o)}if("dynamic"===A.theme)if("light"===n){if(W)(l=I.classList).remove("kast-dark"),l.add("kast-light");else L(I).removeClass("kast-dark").addClass("kast-light");A.onDynamicTheme("light")}else{var l;if(W)(l=I.classList).remove("kast-light"),l.add("kast-dark");else L(I).removeClass("kast-light").addClass("kast-dark");A.onDynamicTheme("dark")}U.URL.revokeObjectURL(u.src),u=null}}})}else{if(W){var n=I.classList,r=j.classList;r.remove("kast-accent-light"),r.remove("kast-accent-dark"),"dark"===A.theme?(n.remove("kast-light"),n.add("kast-dark")):(n.remove("kast-dark"),n.add("kast-light"))}else L(j).removeClass("kast-accent-light kast-accent-dark"),"dark"===A.theme?L(I).removeClass("kast-light").addClass("kast-dark"):L(I).removeClass("kast-dark").addClass("kast-light");M.className="kast-default-art",A.statusBar&&N.removeAttribute("class"),j.removeAttribute("style"),M.removeAttribute("style"),S.removeAttribute("style"),S.className="kast-top-content"}}),A.onCurrentInfo(a,n)};if("object"==typeof r)o(r);else{var s=function(t,a){var e=t+A.statsPath+"?sid="+A.sid,n=1===A.version?"#":"?_=";1===A.version&&(e=t+"7.html"),A.mount_point&&(!A.ar&&A.json_parse_attempt&&A.json_parse_failed?e=t+"/status.xsl":(e=t+"/status-json.xsl",A.ar&&(e=A.protocol+"://"+A.host+":"+A.port+"/status-json.xsl"),A.json_parse_attempt=!0)),A.mount_point_steamcast&&(e=t+"/status.xml"),R({url:e+n+Math.random()+(A.ar?"&mount=/"+A.mount_point:""),timeout:8e3,load:function(t){var e=U.str=t;e=-1<t.indexOf("<?xml")&&!A.mount_point?(new DOMParser).parseFromString(t,"text/xml"):A.mount_point_steamcast?(new DOMParser).parseFromString(t,"text/xml"):A.mount_point&&A.json_parse_attempt&&!A.json_parse_failed?t:i(t),"function"==typeof r?r(e):o(e)},error:function(){if(!a||A.json_parse_attempt&&!A.json_parse_failed)s(w.hostCORS[A.betaProxies?3:1],!0);else{var t=I.hasAttribute("data-offline"),e=O.getElementById("kast-np-title");A.offlineCheck&&A.autoUpdate&&!t&&(W?I.classList.add("kast-offline"):L(I).addClass("kast-offline"),I.setAttribute("data-offline","true"),A.onOffline()),e.hasChildNodes()||o("error")}}})},t=function(){L.ajax({url:w.host+A.statsPath+"?sid="+A.sid+"&json=1&_="+Math.random(),dataType:"jsonp",timeout:8e3,success:function(t){"function"==typeof r?r(t):o(t)},error:function(){var t=I.hasAttribute("data-offline"),e=O.getElementById("kast-np-title");A.offlineCheck&&A.autoUpdate&&!t&&(W?I.classList.add("kast-offline"):L(I).addClass("kast-offline"),I.setAttribute("data-offline","true"),A.onOffline()),e.hasChildNodes()||o("error")}})};A.direct?t():s(w.hostCORS[A.betaProxies?2:0],!1)}return this},played:function(r,g){var b=this,_=b.opt,l=O.getElementById("kast-playedlist"),o=function(h){for(;l.firstChild;)l.removeChild(l.firstChild);var t,e,a,n=O.createDocumentFragment(),k=_.language.unknownTrackText,v=_.language.unknownArtistText;try{if(_.direct)t=h;else if(h.body){a=h.getElementsByTagName("table");for(var r=0,o=a.length;r<o&&!(-1<a[r].textContent.toLowerCase().indexOf("played @"));r++);t=a[r].getElementsByTagName("tr")}else t=h.getElementsByTagName("SONG");e=t.length}catch(y){e=3}for(var s=function(t,e,a,n){var r,o,s,i;try{s=(_.direct?e[t].title:h.body?e[t].getElementsByTagName("td")[1].textContent:e[t].getElementsByTagName("TITLE")[0].textContent)||v+" - "+k}catch(y){s=v+" - "+k}if(i=s.split(" - "),_.playedTracks&&(r=i.slice(1).join(" - ")||s||k),_.playedArtists&&(o=i[1]?i[0]:v),_.skipInfo)for(var l=0,u=_.skipInfo.length;l<u;l++)if(_.skipInfo[l].track&&_.skipInfo[l].artist){if(_.skipInfo[l].track===r&&_.skipInfo[l].artist===o)return}else if(_.skipInfo[l].track&&_.skipInfo[l].track===r||_.skipInfo[l].artist&&_.skipInfo[l].artist===o)return;var c=O.createElement("li"),d=O.createElement("div"),p=(l=O.createElement("i"),O.createElement("div")),m=O.createElement("p"),f=O.createElement("p");d.className="kast-p-art",l.className="kast-mdi kast-mdi-album",p.className="kast-p-info",m.className="kast-p-title",m.textContent=r,f.className="kast-p-artist",f.textContent=o,c.appendChild(d),c.appendChild(p),d.appendChild(l),p.appendChild(m),p.appendChild(f),_.artwork&&!g?b.artwork(o,r,function(t){t?(d.style.backgroundImage="url("+(t[1]||t[0])+")",_.onPlayedArtworks(t[1]||t[0])):d.className="kast-p-art kast-p-default-art"}):d.className="kast-p-art kast-p-default-art",_.onPlayedInfo(r,o),n.appendChild(c)},i=h.body?2:1;i<e;i++)s(i,t,e,n);l.appendChild(n)},s=function(t,e){var a=t+_.playedPath+"?sid="+_.sid+"&type=xml",n=1===_.version?"#":"&_=";1===_.version&&(a=t+_.playedPath+".html"),R({url:a+n+Math.random(),timeout:8e3,load:function(t){var e=-1<t.indexOf("<?xml")?(new DOMParser).parseFromString(t,"text/xml"):i(t);r?r(e):o(e)},error:function(){e?l.hasChildNodes()||o("error"):s(b.hostCORS[_.betaProxies?3:1],!0)}})},t=function(){L.ajax({url:b.host+_.playedPath+"?sid="+_.sid+"&type=json",timeout:8e3,dataType:"jsonp",success:function(t){r?r(t):o(t)},error:function(){l.hasChildNodes()||o("error")}})};return _.direct?t():s(b.hostCORS[_.betaProxies?2:0],!1),this},autoUpdate:function(A){var I,E=this,B=E.opt,M=O.getElementById("kast"),N=O.getElementById("kast-server"),S=O.getElementById("kast-play");if(W&&(I=M.classList),!A)return clearInterval(M.getAttribute("data-interval")),void M.removeAttribute("data-interval");var t=function(){E.stats(function(t){var e=B.language.unknownTrackText,a=B.language.unknownArtistText,n=-1!==S.className.indexOf("playing");if(B.offlineCheck){var r=null,o=M.hasAttribute("data-offline");if(B.direct)r=t.streamstatus;else if(2!==B.version||B.mount_point||B.mount_point_steamcast)if(B.mount_point||B.mount_point_steamcast)if(B.mount_point&&(B.json_parse_attempt&&!B.json_parse_failed||B.ar))try{t&&"<"==t[0]&&(t=t.split("\n").slice(1).join("\n"));var s=(g=JSON.parse(t)).icestats.source;if(Array.isArray(s))for(var i in g.icestats.source){if((b=g.icestats.source[i]).listenurl&&b.listenurl.endsWith(B.mount_point)){b.title||a+" - "+e,r=1;break}}else B.ar?s.title&&(s.title||a+" - "+e,r=1):s&&s.listenurl&&s.listenurl.endsWith(B.mount_point)&&(s.title||a+" - "+e,r=1)}catch(T){console.error("stats",T),console.error(T),B.json_parse_failed=!0,a+" - "+e}else if(B.mount_point)try{var l=t.getElementsByClassName("streamheader"),u="/"==B.mount_point[0]?B.mount_point:"/"+B.mount_point,c=!1;for(var i in l){var d=(_=l[i]).getElementsByTagName("h3");for(var p in d){if((x=d[p]).innerText&&(x=x.innerText.replace("Mount Point ","")),x==u){var m=_.nextSibling.getElementsByClassName("streamdata");for(var f in m){if("Current Song:"==(C=m[f]).previousSibling.innerText){C.innerText||a+" - "+e,c=!0,r=1;break}}if(c)break}}if(c)break}}catch(T){console.error("offline",T),a+" - "+e}else if(B.mount_point_steamcast)try{u="/"==B.mount_point_steamcast[0]?B.mount_point_steamcast:"/"+B.mount_point_steamcast;L(t).find("mount:contains("+u+")").parent().find("meta_song")[0].innerHTML,r=1}catch(T){console.error("offline",T),a+" - "+e}else try{r=t.body.textContent.split(",")[1]}catch(T){console.error("offline",T)}else try{r=t.body.textContent.split(",")[1]}catch(T){console.error("offline",T)}else try{r=t.getElementsByTagName("STREAMSTATUS")[0].textContent}catch(T){console.error("offline",T)}t&&1==r?o&&(W?I.remove("kast-offline"):L(M).removeClass("kast-offline"),M.setAttribute("data-offline","false"),B.onOnline()):o||(W?I.add("kast-offline"):L(M).addClass("kast-offline"),M.setAttribute("data-offline","true"),B.onOffline())}if(n&&E.play(),"all"===A){var h=B.serverInfo,k=B.statusBar;"string"!=typeof h&&k&&(N.textContent="",j(B,h,t,N))}var v="string"==typeof B.currentTrack&&"string"==typeof B.currentArtist;if(v&&!B.played)return B.onUpdate(t),void B.onUpdateAll(t);var y=null;try{y=null,B.direct?y=t.songtitle:!t.body||B.mount_point||B.mount_point_steamcast?B.mount_point||B.mount_point_steamcast||(y=t.getElementsByTagName("SONGTITLE")[0].textContent):y=t.body.textContent.split(",")[6]}catch(w){console.error(w)}if(B.mount_point&&B.json_parse_attempt&&!B.json_parse_failed)try{var g;s=(g=JSON.parse(t)).icestats.source;if(Array.isArray(s))for(var i in g.icestats.source){var b;if((b=g.icestats.source[i]).listenurl&&b.listenurl.endsWith(B.mount_point)){y=b.title||a+" - "+e,r=1;break}}else s&&s.listenurl&&s.listenurl.endsWith(B.mount_point)&&(y=s.title||a+" - "+e,r=1)}catch(T){console.error("stats",T),console.error(T),B.json_parse_failed=!0,y=a+" - "+e}else if(B.mount_point)try{l=t.getElementsByClassName("streamheader"),u="/"==B.mount_point[0]?B.mount_point:"/"+B.mount_point,c=!1;for(var i in l){var _;d=(_=l[i]).getElementsByTagName("h3");for(var p in d){var x;if((x=d[p]).innerText&&(x=x.innerText.replace("Mount Point ","")),x==u){m=_.nextSibling.getElementsByClassName("streamdata");for(var f in m){var C;if("Current Song:"==(C=m[f]).previousSibling.innerText){y=C.innerText||a+" - "+e,c=!0;break}}if(c)break}}if(c)break}}catch(T){console.error("stats",T)}else if(B.mount_point_steamcast)try{u="/"==B.mount_point_steamcast[0]?B.mount_point_steamcast:"/"+B.mount_point_steamcast;y=L(t).find("mount:contains("+u+")").parent().find("meta_song")[0].innerHTML}catch(T){console.error("stat",T)}if(currentSTitle=M.getAttribute("data-current"),!currentSTitle)return M.setAttribute("data-current",y);if(currentSTitle!==y){if(v||E.stats(t),B.played)Array.isArray&&Array.isArray(B.artwork)?E.played(!1,!0):E.played();M.setAttribute("data-current",y),B.onUpdate(t)}B.onUpdateAll(t)})},e=function(t,e){if(!M.hasAttribute("data-interval")){var a=setInterval(t,e);M.setAttribute("data-interval",a)}},a=8e3;return E.mobile&&(a=E.mobileMedium?16e3:12e3),e(t,B.customCheckerInterval||a),this},artwork:function(t,e,s){var a=this.opt,i=Array.isArray&&Array.isArray(a.defaultArtwork)?a.defaultArtwork:null;if(Array.isArray&&Array.isArray(a.artwork))return s(a.artwork);if(t===a.language.unknownArtistText)return s(i);var n=h(t),r=h(e),l=function(t,e){if(!t)return null;var a,n=0,r=t.length;if(1===r&&(a=t[0]["#text"]),!a){if(n=0,e){for(;n<r;n++)if("extralarge"===t[n].size){a=t[n]["#text"];break}if(!a)for(n=0;n<r;n++)if("large"===t[n].size){a=t[n]["#text"];break}}else for(;n<r;n++)if("medium"===t[n].size){a=t[n]["#text"];break}a=a||t[e?t.length-1:0].src}return a},u=function(t){var e,a,n=null,r=t.track&&t.track.image||t.track&&t.track.album&&t.track.album.image,o=t.artist&&t.artist.image;return r?(e=l(r,!0),a=l(r)):o&&(e=l(o,!0),a=l(o)),e&&a&&(n=[e,a]),n},c=function(n,r,o){var t="9bba0e6f2ebf18ca2e56865fd9ab8268";R({url:o?"https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key="+t+"&artist="+n+"&format=json":"https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+t+"&artist="+n+"&track="+r+"&format=json",load:function(t){var e=JSON.parse(t),a=u(e);a?s(a):o?s(i):c(n,r,!0)},error:function(){s(i)}})},o=a.irrelevantWords;if(o){for(var d=o.length,p=0;p<d;p++)n=n.replace(o[p],""),r=r.replace(o[p],"");c(n,r)}else c(n,r);return this},destroy:function(){U.kastXHR&&U.kastXHR.abort(),this.autoUpdate(!1),this.audio.pause(),L.data(U,"plugin_kast",null);var t=O.getElementById("kast");return t&&t.parentNode.removeChild(t),b&&b.close(),O=U.document,this}},L.kast=function(t,e){if(t[atob(atob("YUc5emRB"))]=atob(t.YUc5emRB||""),t[atob(atob("Y0c5eWRB"))]=atob(t.Y0c5eWRB||""),t[atob(atob("Y0hKdmVIbGZjMlZ5ZG1WeQ"))]=t.Y0hKdmVIbGZjMlZ5ZG1WeQ?atob(t.Y0hKdmVIbGZjMlZ5ZG1WeQ||null):null,t[atob(atob("WVhWa2FXOWZjSEp2ZUhsZmMyVnlkbVZ5Cg"))]=t.WVhWa2FXOWZjSEp2ZUhsZmMyVnlkbVZ5Cg?atob(t.WVhWa2FXOWZjSEp2ZUhsZmMyVnlkbVZ5Cg||null):null,L.data(U,"plugin_kast"))"function"==typeof a.prototype[t]&&L.data(U,"plugin_kast")[t](e);else{if("destroy"===t)return;L.data(U,"plugin_kast",new a(this,t))}},L.kcrpb=L.kast}(jQuery,window,document);var head=document.getElementsByTagName("head")[0],script=document.createElement("script");script.type="text/javascript",script.onreadystatechange=function(){function t(){dataLayer.push(arguments)}"loaded"!=this.readyState&&"complete"!=this.readyState||(window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-3670518-12"))},script.onload=function(){function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-3670518-12")},script.src="https://www.googletagmanager.com/gtag/js?id=UA-3670518-12",head.appendChild(script),window.decodeHTMLCustom=function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value},"undefined"==typeof Array.isArray&&(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});