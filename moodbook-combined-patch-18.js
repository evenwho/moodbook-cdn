;(function(){
try{if(typeof STORYBOOK!=="undefined"){Object.keys(STORYBOOK).forEach(function(k){delete STORYBOOK[k];});}}catch(_){}
function removeStoryCta(){document.querySelectorAll('[data-story],.story-cta,#storyModal,.popup-stage').forEach(function(el){if(el&&el.parentNode)el.parentNode.removeChild(el);});}
removeStoryCta();
document.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest('[data-story],.story-cta');if(t){e.preventDefault();e.stopPropagation();removeStoryCta();}},true);
function makeChapters(orig,ko,max){orig=orig||[];ko=ko||[];max=max||5;var total=Math.max(orig.length,ko.length);if(!total)return[];var size=Math.max(1,Math.ceil(total/max)),chapters=[];for(var i=0;i<total;i+=size){var no=chapters.length+1;chapters.push({title:"本文 "+no,titleKo:"본문 "+no,paras:orig.slice(i,i+size),ko:ko.slice(i,i+size)});}return chapters;}
function flattenReader(id){if(typeof READER==="undefined"||!READER[id]||!READER[id].chapters)return[];var out=[];READER[id].chapters.forEach(function(ch){(ch.paras||[]).forEach(function(p){out.push(p);});});return out;}
function rebuildPreviewReaders(){if(typeof READER==="undefined"||typeof PREVIEWS==="undefined")return false;var changed=false;var koMap=typeof PREVIEWS_KO!=="undefined"?PREVIEWS_KO:{};Object.keys(koMap).filter(function(id){return /^jp\d{2}$/.test(id);}).forEach(function(id){var chapters=makeChapters(PREVIEWS[id]||[],koMap[id]||[],5);if(!chapters.length)return;READER[id]={theme:id==="jp09"?"galaxy":"rain",art:id==="jp09"?"galaxy":"rain",lang:"ja",chapters:chapters};changed=true;});Object.keys(PREVIEWS).filter(function(id){return /^b\d{2}$/.test(id);}).forEach(function(id){var source=flattenReader(id);if(!source.length)source=PREVIEWS[id]||[];var chapters=makeChapters(source,[],5);if(!chapters.length)return;var theme=(READER[id]&&READER[id].theme)||"rain";var art=(READER[id]&&READER[id].art)||"rain";READER[id]={theme:theme,art:art,lang:"ko",chapters:chapters};changed=true;});return changed;}
function scopedLinks(){var map={kr:"#/discover/kr",jp:"#/discover/jp",en:"#/discover/en"};Object.keys(map).forEach(function(scope){var link=document.querySelector("#sec-"+scope+" .sec-head .more-link");if(link)link.setAttribute("href",map[scope]);});}
var readersChanged=rebuildPreviewReaders();
if(typeof filterBooks==="function"&&typeof BOOKS!=="undefined"&&!window.__MOODBOOK_SCOPED_DISCOVER_CORE__){window.__MOODBOOK_SCOPED_DISCOVER_CORE__=true;var originalFilterBooks=filterBooks;filterBooks=function(opts){var list=originalFilterBooks(opts);var m=(location.hash||"").match(/#\/discover\/(kr|jp|en)(?:$|[?#/])/);if(!m)return list;var scope=m[1];return list.filter(function(b){return scope==="kr"?!b.origin:scope==="jp"?b.origin==="일본":b.origin==="영어";});};}
if(typeof render==="function"&&!window.__MOODBOOK_SCOPED_RENDER_CORE__){window.__MOODBOOK_SCOPED_RENDER_CORE__=true;var originalRender=render;render=function(){originalRender();scopedLinks();removeStoryCta();};}
scopedLinks();removeStoryCta();if(typeof render==="function")render();
})();
;try{
(function(){
  if(window.__MOODBOOK_BLUEPRINT_PATCH_VERSION__ === 'inline-parts-18-img') return;
  window.__MOODBOOK_BLUEPRINT_PATCH_VERSION__ = 'inline-parts-18-img';

  var CSS = [
    '.book-blueprint[data-b14-upgraded="1"] .bp-fig{overflow:hidden;padding:0;background:linear-gradient(145deg,rgba(255,253,246,.96),rgba(230,219,198,.78));}',
    '.book-blueprint[data-b14-upgraded="1"] .bp-fig:after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 28% 18%,rgba(255,255,255,.42),transparent 36%),linear-gradient(135deg,rgba(255,255,255,.18),transparent 42%);mix-blend-mode:screen;}',
    '.bp-specimen-wrap{position:absolute;inset:6px;display:grid;place-items:center;border-radius:3px;background:linear-gradient(145deg,#fbf4e5,#e8d9bd);box-shadow:inset 0 0 0 1px rgba(92,61,34,.22),inset 0 -14px 24px rgba(92,61,34,.08);overflow:hidden;}',
    '.bp-specimen-wrap:before{content:"";position:absolute;inset:0;opacity:.25;background-image:radial-gradient(circle at 22% 18%,rgba(92,61,34,.18) 0 1px,transparent 1.3px),radial-gradient(circle at 78% 72%,rgba(22,58,92,.16) 0 1px,transparent 1.2px);background-size:23px 23px,29px 29px;}',
    '.bp-specimen{position:relative;z-index:1;width:96%;height:96%;filter:drop-shadow(0 10px 13px rgba(33,26,18,.22));}',
    '.bp-specimen-img{position:relative;z-index:1;width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.96) contrast(1.04);}',
    '.bp-specimen-img.fit{object-fit:contain;padding:3px;}',
    '.bp-bloom-stage{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;opacity:0;filter:saturate(.98) contrast(1.03);}',
    '.bp-bloom-stage.s1{opacity:1}',
    '.bp-bloom-wrap.play .bp-bloom-stage{animation:mbBloomStage 3.2s ease-in-out forwards;}',
    '.bp-bloom-wrap.play .bp-bloom-stage.s1{animation-delay:.1s}.bp-bloom-wrap.play .bp-bloom-stage.s2{animation-delay:2.1s}.bp-bloom-wrap.play .bp-bloom-stage.s3{animation-delay:4.1s}',
    '.bp-bloom-wrap:after{content:"";position:absolute;inset:0;z-index:4;pointer-events:none;background:radial-gradient(circle at 42% 24%,rgba(255,245,220,.28),transparent 34%),linear-gradient(135deg,rgba(255,255,255,.18),transparent 46%);mix-blend-mode:screen;}',
    '@keyframes mbBloomStage{0%{opacity:0;transform:scale(1.012)}18%{opacity:1;transform:scale(1)}48%{opacity:1}68%{opacity:0}100%{opacity:0}}',
    '.bp-bloom-wrap.play .bp-bloom-stage.s3{animation-name:mbBloomFinal}@keyframes mbBloomFinal{0%{opacity:0;transform:scale(1.015)}18%{opacity:1;transform:scale(1)}100%{opacity:1;transform:scale(1)}}',
    '@media (prefers-reduced-motion: reduce){.bp-bloom-stage{animation:none!important}.bp-bloom-stage.s1,.bp-bloom-stage.s2{opacity:0}.bp-bloom-stage.s3{opacity:1}}',
    '.mb-inline-part{position:relative;margin:22px auto 24px;max-width:620px;border:0;padding:0;break-inside:avoid;}',
    '.mb-inline-part .mb-part-media{position:relative;display:block;aspect-ratio:16/10;border-radius:15px;overflow:hidden;background:#151c27;box-shadow:0 20px 42px -34px rgba(24,20,16,.75),inset 0 0 0 1px rgba(255,255,255,.14);}',
    '.mb-inline-part .mb-part-media:after{content:"";position:absolute;inset:0;z-index:4;pointer-events:none;background:radial-gradient(circle at 38% 18%,rgba(255,241,210,.22),transparent 34%),linear-gradient(180deg,rgba(12,15,22,.04),rgba(12,15,22,.2));mix-blend-mode:screen;}',
    '.mb-inline-part img:not(.bp-bloom-stage){width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.98) contrast(1.03);}',
    '.mb-inline-svg{width:100%;height:100%;display:grid;place-items:center;background:linear-gradient(145deg,#fbf4e5,#e4d4b8);color:#6d4c2d;}.mb-inline-svg svg{width:58%;height:58%;filter:drop-shadow(0 12px 15px rgba(60,42,24,.18));}.mb-inline-svg .bp-specimen{width:86%;height:86%;}',
    '.mb-inline-part.is-small{max-width:430px}.mb-inline-part.is-wide{max-width:720px}.mb-inline-part.align-left{margin-left:0}.mb-inline-part.align-right{margin-right:0}',
    '.mb-inline-part.is-bloom .mb-part-media.play .bp-bloom-stage{animation:mbBloomStage 3.2s ease-in-out forwards}.mb-inline-part.is-bloom .mb-part-media.play .bp-bloom-stage.s1{animation-delay:.1s}.mb-inline-part.is-bloom .mb-part-media.play .bp-bloom-stage.s2{animation-delay:2.1s}.mb-inline-part.is-bloom .mb-part-media.play .bp-bloom-stage.s3{animation-delay:4.1s;animation-name:mbBloomFinal}',
    '.preview-box .mb-inline-part{max-width:560px;margin:18px auto 19px}.preview-box .mb-inline-part.align-left{margin-left:0}.preview-box .mb-inline-part.align-right{margin-right:0}.preview-box .mb-inline-part.is-small{max-width:390px}.preview-box .mb-part-media{border-radius:12px;aspect-ratio:16/10;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15),0 18px 36px -32px rgba(24,20,16,.65)}',
    '@media(max-width:640px){.mb-inline-part{margin:19px auto 21px}.mb-inline-part.is-small,.mb-inline-part.is-wide,.preview-box .mb-inline-part,.preview-box .mb-inline-part.is-small{max-width:100%}}',
    '.bp-sheet.blue .bp-specimen-wrap{background:linear-gradient(145deg,#f8f1df,#d9c49d);box-shadow:inset 0 0 0 1px rgba(126,167,210,.35),0 0 20px rgba(126,167,210,.08);}',
    '.bp-specimen .fine{stroke-width:.65;opacity:.45}.bp-specimen .hair{stroke-width:.45;opacity:.55}.bp-specimen .soft{opacity:.42}',
    '@media(max-width:640px){.bp-specimen-wrap{inset:5px}.bp-specimen{width:98%;height:98%;}}'
  ].join('\n');

  var CDN_ASSET_FILES = {"b01":["b01-p01-sun.jpg","b01-p02-jigae.jpg","b01-p03-two-people.jpg","b01-p04-road.jpg","b01-p05-hahoe-mask.jpg"],"b02":["b02-p01-flower.jpg","b02-p02-sun.jpg","b02-p03-butterfly.jpg","b02-p04-hahoe-mask.jpg","b02-p05-rice.jpg"],"b03":["b03-p01-gold.jpg","b03-p02-mine-rock.jpg","b03-p03-jigae.jpg","b03-p04-eye.jpg","b03-p05-crowd.jpg"],"b04":["b04-p01-mask.jpg","b04-p02-hanok.jpg","b04-p03-scales.jpg","b04-p04-eye.jpg","b04-p05-hahoe-mask.jpg"],"b05":["b05-p01-flower.jpg","b05-p02-moon.jpg","b05-p03-lantern.jpg","b05-p04-crowd.jpg","b05-p05-person.jpg"],"b06":["b06-p01-rice.jpg","b06-p02-sickle.jpg","b06-p03-rickshaw.jpg","b06-p04-mask.jpg","b06-p05-snow.jpg"],"b07":["b07-p01-road.jpg","b07-p02-crowd.jpg","b07-p03-eye.jpg","b07-p04-person.jpg","b07-p05-cloud.jpg"],"b08":["b08-p01-road.jpg","b08-p02-crowd.jpg","b08-p03-hahoe-mask.jpg","b08-p04-lantern.jpg","b08-p05-footprints.jpg"],"b09":["b09-p01-bed.jpg","b09-p02-coin.jpg","b09-p03-rice.jpg","b09-p04-hahoe-mask.jpg","b09-p05-cloud.jpg"],"b10":["b10-p01-eye.jpg","b10-p02-hand.jpg","b10-p03-rain.jpg","b10-p04-house.jpg","b10-p05-broken-heart.jpg"],"b11":["b11-p01-brush.jpg","b11-p02-eye.jpg","b11-p03-mirror.jpg","b11-p04-mask.jpg","b11-p05-fire.jpg"],"b12":["b12-p01-violin.jpg","b12-p02-fire.jpg","b12-p03-mask.jpg","b12-p04-brush.jpg","b12-p05-scales.jpg"],"b13":["b13-p01-flask.jpg","b13-p02-mask.jpg","b13-p03-microscope.jpg","b13-p04-rice.jpg","b13-p05-gear.jpg"],"b14":["b14-p01-rain.jpg","b14-p02-rickshaw.jpg","b14-p03-seolleongtang.jpg","b14-p04-oil-lamp.jpg","b14-p05-mask.jpg"],"b15":["b15-p01-fire.jpg","b15-p02-hanok.jpg","b15-p03-hahoe-mask.jpg","b15-p04-heart.jpg","b15-p05-hanbok.jpg"],"jp01":["jp01-p01-needle.jpg","jp01-p02-snake.jpg","jp01-p03-fire.jpg","jp01-p04-crowd.jpg","jp01-p05-hand.jpg"],"jp02":["jp02-p01-door.jpg","jp02-p02-rain.jpg","jp02-p03-scales.jpg","jp02-p04-crow.jpg","jp02-p05-mask.jpg"],"jp03":["jp03-p01-violin.jpg","jp03-p02-cat.jpg","jp03-p03-house.jpg","jp03-p04-moon.jpg","jp03-p05-bird.jpg"],"jp04":["jp04-p01-footprints.jpg","jp04-p02-road.jpg","jp04-p03-duo.jpg","jp04-p04-chain.jpg","jp04-p05-sun.jpg"],"jp05":["jp05-p01-moon.jpg","jp05-p02-hourglass.jpg","jp05-p03-flower.jpg","jp05-p04-bed.jpg","jp05-p05-star.jpg"],"jp06":["jp06-p01-door.jpg","jp06-p02-rifle.jpg","jp06-p03-knife.jpg","jp06-p04-mask.jpg","jp06-p05-dog.jpg"],"jp07":["jp07-p01-scholar.jpg","jp07-p02-scales.jpg","jp07-p03-eye.jpg","jp07-p04-mirror.jpg","jp07-p05-mask.jpg"],"jp08":["jp08-p01-scholar.jpg","jp08-p02-train.jpg","jp08-p03-mask-hahoe.jpg","jp08-p04-scales.jpg","jp08-p05-bowl.jpg"],"jp09":["jp09-p01-train.jpg","jp09-p02-star.jpg","jp09-p03-duo.jpg","jp09-p04-lantern.jpg","jp09-p05-parting.jpg"],"jp10":["jp10-p01-mirror.jpg","jp10-p02-clock.jpg","jp10-p03-flower.jpg","jp10-p04-hanbok.jpg","jp10-p05-window.jpg"]};

  function injectCss(){
    var st=document.getElementById('moodbook-b14-blueprint-upgrade');
    if(!st){
      st=document.createElement('style');
      st.id='moodbook-b14-blueprint-upgrade';
      (document.head||document.documentElement).appendChild(st);
    }
    st.textContent=CSS;
  }

  function lines(arr){ return arr.join(''); }
  function radialSpokes(cx,cy,r,n){
    var out='';
    for(var i=0;i<n;i++){
      var a=i*Math.PI*2/n, x=cx+Math.cos(a)*r, y=cy+Math.sin(a)*r;
      out+='<path d="M'+cx+' '+cy+'L'+x.toFixed(1)+' '+y.toFixed(1)+'"/>';
    }
    return out;
  }

  function specimen(kind){
    var common='class="bp-specimen" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"';
    if(kind==='sleet') return '<svg '+common+'><defs><linearGradient id="sleetA" x1="42" y1="17" x2="108" y2="103"><stop stop-color="#f8fbfd"/><stop offset="1" stop-color="#5d7381"/></linearGradient><radialGradient id="sleetB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 67) rotate(90) scale(49 62)"><stop stop-color="#eaf2f5"/><stop offset="1" stop-color="#8597a1" stop-opacity=".15"/></radialGradient></defs><path d="M33 78c3-23 23-43 50-43 25 0 44 17 47 40 4 28-17 36-47 36-31 0-55-8-50-33z" fill="url(#sleetB)"/><path d="M48 33c25-14 61-3 70 26" stroke="#9fb2bb" class="fine"/><path d="M23 93h112" stroke="#8d6c43" class="hair" stroke-dasharray="5 5"/><g stroke="url(#sleetA)" stroke-linecap="round">'+lines([44,55,68,79,93,105,117].map(function(x,i){return '<path d="M'+x+' '+(18+i%3*8)+'l-'+(13+i%2*4)+' '+(52+i%4*3)+'" stroke-width="1.2"/><circle cx="'+(x-13-i%2*4)+'" cy="'+(70+i%4*3)+'" r="3.4" fill="#edf4f7" stroke-width=".7"/>';}))+'</g><g fill="#f7fbfc" stroke="#8ea4ae" stroke-width=".55">'+lines([[66,49],[86,42],[98,66],[58,77],[110,82],[73,92]].map(function(p){return '<path d="M'+p[0]+' '+(p[1]-7)+'v14M'+(p[0]-7)+' '+p[1]+'h14M'+(p[0]-5)+' '+(p[1]-5)+'l10 10M'+(p[0]+5)+' '+(p[1]-5)+'l-10 10"/>';}))+'</g><path d="M42 98c19 10 54 13 78 0" stroke="#7e8f99" class="fine"/></svg>';
    if(kind==='rickshaw') return '<svg '+common+'><defs><linearGradient id="rickA" x1="37" y1="30" x2="125" y2="96"><stop stop-color="#35302b"/><stop offset="1" stop-color="#08090a"/></linearGradient><linearGradient id="rickB" x1="55" y1="49" x2="98" y2="89"><stop stop-color="#7b4a31"/><stop offset="1" stop-color="#2d1e18"/></linearGradient></defs><path d="M21 88h51" stroke="#3b2418" stroke-width="4" stroke-linecap="round"/><path d="M17 95h54" stroke="#3b2418" stroke-width="4" stroke-linecap="round"/><path d="M64 78c7-22 17-36 49-33 13 2 24 12 25 28l-12 5c-2-13-9-20-20-21-20-2-29 8-34 26z" fill="url(#rickA)" stroke="#2b211b" stroke-width="2"/><path d="M62 81c18 6 43 5 64-3" stroke="#171311" stroke-width="4"/><path d="M73 73c9-12 21-15 38-12l-3 23c-12 3-25 2-39-3z" fill="url(#rickB)" stroke="#2a1812" stroke-width="1.4"/><circle cx="114" cy="90" r="23" stroke="#111" stroke-width="4" fill="none"/><circle cx="114" cy="90" r="4" fill="#4b3322"/><g stroke="#202020" class="hair">'+radialSpokes(114,90,22,18)+'</g><path d="M70 79l-12 17M86 55L73 84M104 45L95 84M121 51l-5 34" stroke="#5f442e" stroke-width="2"/><path d="M49 97c24 8 71 8 94 0" stroke="#7b8790" class="fine"/><path d="M74 35c17-14 49-12 60 16" stroke="#6f5a40" class="fine"/></svg>';
    if(kind==='soup') return '<svg '+common+'><defs><radialGradient id="soupA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(82 69) scale(51 23)"><stop stop-color="#fff7cf"/><stop offset="1" stop-color="#c9baa0"/></radialGradient><linearGradient id="soupB" x1="39" y1="62" x2="119" y2="103"><stop stop-color="#f7f0df"/><stop offset="1" stop-color="#9a8d7b"/></linearGradient></defs><ellipse cx="81" cy="69" rx="52" ry="24" fill="url(#soupA)" stroke="#7d705e" stroke-width="1.5"/><path d="M31 69c6 29 17 37 50 37s45-8 52-37" fill="url(#soupB)" stroke="#7d705e" stroke-width="1.4"/><ellipse cx="81" cy="69" rx="44" ry="17" fill="#efe2b9" opacity=".55"/><g fill="#8aa067" opacity=".9">'+lines([[72,61],[80,58],[87,63],[93,59],[77,68],[88,70]].map(function(p){return '<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="8" ry="3" transform="rotate(-21 '+p[0]+' '+p[1]+')"/>';}))+'</g><g stroke="#d7d0bf" stroke-width="3" stroke-linecap="round" opacity=".72"><path d="M62 48c-9-17 10-19 2-35"/><path d="M82 45c-7-14 8-18 0-31"/><path d="M101 49c-8-15 10-18 4-32"/></g><path d="M105 99c20 3 29 0 38-9" stroke="#776f62" stroke-width="4" stroke-linecap="round"/><ellipse cx="141" cy="88" rx="13" ry="6" transform="rotate(-18 141 88)" fill="#b9aa93" stroke="#756b5f" stroke-width="1"/><path d="M31 107h102" stroke="#8d6c43" class="hair" stroke-dasharray="4 4"/></svg>';
    if(kind==='lamp') return '<svg '+common+'><defs><radialGradient id="lampGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 50) scale(50 48)"><stop stop-color="#ffd57a" stop-opacity=".82"/><stop offset="1" stop-color="#f0a33f" stop-opacity="0"/></radialGradient><linearGradient id="lampA" x1="57" y1="42" x2="103" y2="109"><stop stop-color="#9b7141"/><stop offset="1" stop-color="#17120d"/></linearGradient></defs><circle cx="80" cy="55" r="53" fill="url(#lampGlow)"/><path d="M61 79c5-20 5-41 2-63 10-4 25-4 35 0-4 22-3 43 2 63" fill="#d8c3a0" opacity=".55" stroke="#5e4a35" stroke-width="1.4"/><path d="M67 80h28l8 22c-12 7-33 7-45 0z" fill="url(#lampA)" stroke="#2a1b12" stroke-width="1.6"/><ellipse cx="80" cy="81" rx="24" ry="7" fill="#523923" stroke="#1f150f"/><path d="M74 76c4-13 8-13 13 0" fill="#2b1a10"/><path d="M80 35c11 14 7 25 0 31-8-8-10-18 0-31z" fill="#ffbf45" stroke="#9f561a" stroke-width=".9"/><path d="M80 47c4 7 3 12 0 16-4-5-4-10 0-16z" fill="#fff1a6"/><path d="M102 90h17" stroke="#4b3524" stroke-width="3" stroke-linecap="round"/><circle cx="122" cy="90" r="5" fill="#6e4a28" stroke="#342214"/><path d="M55 108c18 7 52 7 70 0" stroke="#795f42" class="fine"/><path d="M52 18h56M52 18v82M108 18v82" stroke="#7d705e" class="hair" stroke-dasharray="5 5"/></svg>';
    return '<svg '+common+'><defs><linearGradient id="maskA" x1="41" y1="25" x2="123" y2="96"><stop stop-color="#f3d99f"/><stop offset=".52" stop-color="#b69058"/><stop offset=".53" stop-color="#33414b"/><stop offset="1" stop-color="#12181d"/></linearGradient></defs><path d="M42 35c10-17 66-17 76 0 8 15 4 50-15 68-12 11-34 11-46 0C38 85 34 50 42 35z" fill="url(#maskA)" stroke="#3d2d20" stroke-width="1.6"/><path d="M80 22v90" stroke="#261a15" stroke-width="1" opacity=".5"/><path d="M80 24c5 24 2 44-1 66" stroke="#1d1511" class="hair"/><path d="M80 33c9 7 8 21 2 30 7 9 8 20-1 33" stroke="#caa45f" stroke-width="1.1" opacity=".85"/><path d="M83 31c10 7 9 21 3 31 7 9 9 21-2 35" stroke="#101820" stroke-width="1.6" opacity=".9"/><path d="M53 58c11-8 21-8 30 0" stroke="#3a2a1f" stroke-width="2"/><path d="M77 58c11-8 21-8 30 0" stroke="#101820" stroke-width="2"/><path d="M56 85c15 10 32 10 48 0" stroke="#2a1c16" stroke-width="3" stroke-linecap="round"/><path d="M62 47c4-5 12-5 16 0M88 47c5-5 13-5 17 0" stroke="#5d452d" stroke-width="2" stroke-linecap="round"/><path d="M96 25c2 18 2 49-1 77" stroke="#dfe8ec" class="fine" stroke-dasharray="3 5"/><g fill="#dfe8ec" opacity=".72"><ellipse cx="101" cy="42" rx="2" ry="5"/><ellipse cx="107" cy="66" rx="1.6" ry="4"/><ellipse cx="95" cy="74" rx="1.7" ry="4.5"/></g><path d="M43 107h74" stroke="#8d6c43" class="hair" stroke-dasharray="4 4"/></svg>';
  }

  var ASSET_MAP = null;
  function loadAssetManifest(path){
    return fetch(path)
      .then(function(r){ return r.ok ? r.json() : null; })
      .catch(function(){ return null; });
  }
  Promise.all([
    Promise.resolve(null),
    Promise.resolve(null)
  ]).then(function(manifests){
    ASSET_MAP = {};
    manifests.filter(Boolean).forEach(function(manifest){
      manifest.books.forEach(function(book){
        var locale = /^jp/.test(book.id) ? 'jp' : 'kr';
        ASSET_MAP[book.id] = book.elements.map(function(part){
          var generated = part.status === 'optimized-local' || /^(b01|b14)$/.test(book.id);
          return {
            alt: part.label,
            src: generated ? 'https://evenwho.github.io/moodbook-cdn/assets/parts/' + locale + '/' + book.id + '/' + part.fileName : null,
            slug: part.slug || '',
            spec: part.spec || '',
            fit: /rickshaw|road|hanok|jigae/.test(part.slug)
          };
        });
      });
    });
    schedule();
  }).catch(function(){ ASSET_MAP = {}; });

  function patch(){
    injectCss();
    var readerChanged = installJpPreviewReaders();
    installScopedDiscoverFilter();
    cleanupOldIllustrationsOnce();
    patchScopedDiscoverLinks();
    handleReadRoute();
    injectReaderParts();
    injectPreviewParts();
    if(readerChanged && /\/book\/jp\d{2}/.test(location.hash || '')) rerenderApp();
    var idMatch = location.hash.match(/\/book\/((?:b|jp)\d{2})/);
    if(!idMatch) return;
    var bookId = idMatch[1];
    var parts = ensureAssetParts(bookId);
    if(!parts || parts.some(function(part){ return !hasPartVisual(part); })) return;
    var sections=Array.prototype.slice.call(document.querySelectorAll('.book-blueprint'));
    var bp=sections.find(function(el){return new RegExp('MB-' + bookId.toUpperCase()).test(el.textContent||'');});
    if(!bp) return;
    bp.setAttribute('data-b14-upgraded','1');
    var figs=Array.prototype.slice.call(bp.querySelectorAll('.bp-part .bp-fig'));
    if(figs.length<Math.min(5, parts.length)) return;
    figs.slice(0,parts.length).forEach(function(fig,i){
      var targetSrc = parts[i].src || 'svg';
      if(fig.getAttribute('data-b14-img')==='1' && fig.getAttribute('data-b14-img-src') === targetSrc) return;
      var balloon=fig.querySelector('.bp-balloon');
      var n=balloon ? balloon.textContent : String(i+1).padStart(2,'0');
      fig.setAttribute('data-b14-img','1');
      fig.setAttribute('data-b14-img-src', targetSrc);
      if(bookId === 'b05' && i === 0){
        fig.innerHTML='<span class="bp-balloon">'+n+'</span><div class="bp-specimen-wrap bp-bloom-wrap" role="img" aria-label="밤벚꽃이 봉오리에서 만개로 피어나는 장면">'
          + '<img class="bp-bloom-stage s1" src="https://evenwho.github.io/moodbook-cdn/assets/parts/kr/b05/animation/b05-p01-night-cherry-01-bud.jpg" alt="">'
          + '<img class="bp-bloom-stage s2" src="https://evenwho.github.io/moodbook-cdn/assets/parts/kr/b05/animation/b05-p01-night-cherry-02-opening.jpg" alt="">'
          + '<img class="bp-bloom-stage s3" src="https://evenwho.github.io/moodbook-cdn/assets/parts/kr/b05/animation/b05-p01-night-cherry-03-full.jpg" alt="흐드러지게 핀 밤벚꽃 한 가지">'
          + '</div>';
        observeBloom(fig.querySelector('.bp-bloom-wrap'));
        return;
      }
      fig.innerHTML='<span class="bp-balloon">'+n+'</span><div class="bp-specimen-wrap" role="img" aria-label="'+parts[i].alt+'">'+partVisual(parts[i], 'bp-specimen-img'+(parts[i].fit?' fit':''))+'</div>';
    });
  }

  function bloomFrames(){
    return '<img class="bp-bloom-stage s1" src="https://evenwho.github.io/moodbook-cdn/assets/parts/kr/b05/animation/b05-p01-night-cherry-01-bud.jpg" alt="">'
      + '<img class="bp-bloom-stage s2" src="https://evenwho.github.io/moodbook-cdn/assets/parts/kr/b05/animation/b05-p01-night-cherry-02-opening.jpg" alt="">'
      + '<img class="bp-bloom-stage s3" src="https://evenwho.github.io/moodbook-cdn/assets/parts/kr/b05/animation/b05-p01-night-cherry-03-full.jpg" alt="활짝 핀 밤벚꽃">';
  }

  var didCleanupOldIllustrations=false;
  function cleanupOldIllustrationsOnce(){
    if(didCleanupOldIllustrations) return;
    didCleanupOldIllustrations=true;
    document.querySelectorAll('#mbBloomFeatureB05,#mbReaderBloomB05,#mbPreviewBloomB05,.mb-reader-illo,.mb-preview-illo,.mb-inline-part').forEach(function(el){
      if(el.parentNode) el.parentNode.removeChild(el);
    });
    document.querySelectorAll('[data-inline-parts-reader],[data-inline-parts-preview]').forEach(function(el){
      el.removeAttribute('data-inline-parts-reader');
      el.removeAttribute('data-inline-parts-preview');
    });
  }

  function handleReadRoute(){
    if(!/\/read\/b05(?:$|[?#])/.test(location.hash || '')) return;
    var modal=document.querySelector('#readerModal');
    if(modal && modal.classList.contains('open') && modal.querySelector('.reader[data-reader="b05"]')) return;
    try {
      if(typeof window.openReader === 'function'){
        window.openReader('b05');
        return;
      }
    } catch(_){}
    try {
      (0,eval)('typeof openReader==="function" && openReader("b05")');
    } catch(_){}
  }

  function rerenderApp(){
    try { (0,eval)('typeof render==="function" && render()'); } catch(_){}
  }

  function installJpPreviewReaders(){
    if(window.__MOODBOOK_JP_PREVIEW_READERS_INSTALLED__) return false;
    try {
      var changed = (0,eval)('(function(){'
        + 'if(typeof READER==="undefined"||typeof PREVIEWS==="undefined") return false;'
        + 'function makeChapters(orig,ko,max){orig=orig||[];ko=ko||[];max=max||5;var total=Math.max(orig.length,ko.length);if(!total)return[];var size=Math.max(1,Math.ceil(total/max)),chapters=[];for(var i=0;i<total;i+=size){var no=chapters.length+1;chapters.push({title:"本文 "+no,titleKo:"본문 "+no,paras:orig.slice(i,i+size),ko:ko.slice(i,i+size)});}return chapters;}'
        + 'function flattenReader(id){if(!READER[id]||!READER[id].chapters)return[];var out=[];READER[id].chapters.forEach(function(ch){(ch.paras||[]).forEach(function(p){out.push(p);});});return out;}'
        + 'var changed=false;'
        + 'var koMap=typeof PREVIEWS_KO!=="undefined"?PREVIEWS_KO:{};'
        + 'Object.keys(koMap).filter(function(id){return /^jp\\d{2}$/.test(id);}).forEach(function(id){'
        + 'var chapters=makeChapters(PREVIEWS[id]||[],koMap[id]||[],5);'
        + 'if(!chapters.length) return;'
        + 'READER[id]={theme:id==="jp09"?"galaxy":"rain",art:id==="jp09"?"galaxy":"rain",lang:"ja",chapters:chapters};'
        + 'changed=true;'
        + '});'
        + 'Object.keys(PREVIEWS).filter(function(id){return /^b\\d{2}$/.test(id);}).forEach(function(id){'
        + 'var source=flattenReader(id); if(!source.length) source=PREVIEWS[id]||[];'
        + 'var chapters=makeChapters(source,[],5); if(!chapters.length) return;'
        + 'var theme=(READER[id]&&READER[id].theme)||"rain"; var art=(READER[id]&&READER[id].art)||"rain";'
        + 'READER[id]={theme:theme,art:art,lang:"ko",chapters:chapters};'
        + 'changed=true;'
        + '});'
        + 'return changed;'
        + '})()');
      window.__MOODBOOK_JP_PREVIEW_READERS_INSTALLED__ = true;
      return !!changed;
    } catch(_){
      return false;
    }
  }

  function installScopedDiscoverFilter(){
    if(window.__MOODBOOK_DISCOVER_SCOPE_FILTER_INSTALLED__) return;
    try {
      (0,eval)('if(typeof filterBooks==="function"&&typeof BOOKS!=="undefined"){'
        + 'if(!window.__MOODBOOK_ORIG_FILTER_BOOKS__) window.__MOODBOOK_ORIG_FILTER_BOOKS__=filterBooks;'
        + 'filterBooks=function(opts){'
        + 'var list=window.__MOODBOOK_ORIG_FILTER_BOOKS__(opts);'
        + 'var m=(location.hash||"").match(/#\\/discover\\/(kr|jp|en)(?:$|[?#/])/);'
        + 'if(!m) return list;'
        + 'var scope=m[1];'
        + 'return list.filter(function(b){return scope==="kr"?!b.origin:scope==="jp"?b.origin==="일본":b.origin==="영어";});'
        + '};'
        + '}');
      window.__MOODBOOK_DISCOVER_SCOPE_FILTER_INSTALLED__ = true;
    } catch(_){}
  }

  function patchScopedDiscoverLinks(){
    var map={kr:'#/discover/kr',jp:'#/discover/jp',en:'#/discover/en'};
    Object.keys(map).forEach(function(scope){
      var link=document.querySelector('#sec-'+scope+' .sec-head .more-link');
      if(link) link.setAttribute('href', map[scope]);
    });
  }

  function partMarkup(bookId, part, i, compact){
    var bloom = bookId === 'b05' && i === 0;
    var cls = 'mb-inline-part' + (bloom ? ' is-bloom' : '') + (compact ? '' : (i%3===0 ? ' is-wide' : i%3===1 ? ' is-small align-right' : ' align-left'));
    var media = bloom ? bloomFrames() : partVisual(part, '');
    return '<figure class="'+cls+'" data-inline-part="'+bookId+'-'+i+'" data-inline-src="'+(part.src || 'svg')+'"><span class="mb-part-media'+(bloom ? ' bp-bloom-wrap' : '')+'" role="img" aria-label="'+part.alt+'">'+media+'</span></figure>';
  }

  function getBookExtra(id){
    try {
      var extra=(0,eval)('typeof BOOK_EXTRA!=="undefined" ? BOOK_EXTRA : null');
      return extra && extra[id] ? extra[id] : null;
    } catch(_){ return null; }
  }

  function getIconSvg(iconName){
    try {
      var icons=(0,eval)('typeof EL_ICON!=="undefined" ? EL_ICON : null');
      return icons && icons[iconName] ? icons[iconName] : '';
    } catch(_){ return ''; }
  }

  function ensureAssetParts(bookId){
    if(ASSET_MAP && ASSET_MAP[bookId] && ASSET_MAP[bookId].length) return ASSET_MAP[bookId];
    var extra=getBookExtra(bookId);
    if(!extra || !extra.elements){
      var domParts=partsFromBlueprint(bookId);
      if(domParts && domParts.length){
        if(!ASSET_MAP) ASSET_MAP={};
        ASSET_MAP[bookId]=domParts;
        return ASSET_MAP[bookId];
      }
      return null;
    }
    if(!ASSET_MAP) ASSET_MAP={};
    ASSET_MAP[bookId]=extra.elements.map(function(part, i){
      var slug = String(part.icon || part.slug || '').replace(/_/g, '-');
      var idx = String(i + 1).padStart(2, '0');
      var locale = /^jp\d{2}$/.test(bookId) ? 'jp' : 'kr';
      var fileName = CDN_ASSET_FILES[bookId] && CDN_ASSET_FILES[bookId][i];
      var assetSrc = fileName ? 'https://evenwho.github.io/moodbook-cdn/assets/parts/' + locale + '/' + bookId + '/' + fileName : (slug ? 'https://evenwho.github.io/moodbook-cdn/assets/parts/' + locale + '/' + bookId + '/' + bookId + '-p' + idx + '-' + slug + '.jpg' : null);
      return {
        alt: part.label || part.spec || '',
        src: assetSrc,
        svg: getIconSvg(part.icon) || specimen(part.icon || part.slug || ''),
        slug: part.icon || '',
        spec: part.spec || '',
        fit: false
      };
    });
    return ASSET_MAP[bookId];
  }

  function partsFromBlueprint(bookId){
    var sections=Array.prototype.slice.call(document.querySelectorAll('.book-blueprint'));
    var bp=sections.find(function(el){return new RegExp('MB-' + bookId.toUpperCase()).test(el.textContent||'');});
    if(!bp) return null;
    return Array.prototype.slice.call(bp.querySelectorAll('.bp-part')).map(function(el,i){
      var title=el.querySelector('figcaption b');
      var spec=el.querySelector('figcaption small');
      var svg=el.querySelector('.bp-fig svg');
      return {
        alt: title ? title.textContent.trim() : 'story part '+(i+1),
        src: null,
        svg: svg ? svg.outerHTML : specimen('mask'),
        slug: '',
        spec: spec ? spec.textContent.trim() : '',
        fit: false
      };
    }).filter(function(part){ return part.alt || part.svg; });
  }

  function hasPartVisual(part){
    return !!(part && (part.src || part.svg));
  }

  function partVisual(part, imgClass){
    if(part.src) return '<img class="'+imgClass+'" src="'+part.src+'" alt="'+part.alt+'">';
    return '<span class="mb-inline-svg" aria-hidden="true">'+(part.svg || specimen(part.slug || ''))+'</span>';
  }

  function partWords(part){
    var text=(part.alt+' '+part.spec+' '+part.slug).toLowerCase();
    var extra={
      flower:['꽃','벚꽃','가지','봄','야앵','개화'],
      moon:['달','달빛','밤','봄밤'],
      lantern:['등','등롱','불빛','거리'],
      crowd:['군중','사람','거리','북적'],
      person:['홀로','혼자','그림자','쓸쓸'],
      sun:['해','볕','땡볕','여름'],
      jigae:['지게','등짐','길','짐'],
      road:['길','먼','진료','거리'],
      rain:['비','진눈깨비','눈','날씨'],
      rickshaw:['인력거','차부','수레'],
      seolleongtang:['설렁탕','국','밥','그릇'],
      mask:['가면','반어','웃음','풍자']
    };
    Object.keys(extra).forEach(function(k){
      if(text.indexOf(k) !== -1) text += ' ' + extra[k].join(' ');
    });
    return text.split(/[\s·,./()_-]+/).filter(function(w){ return w && w.length > 1; });
  }

  function chooseAnchors(paras, parts, limit){
    var used={}, anchors=[];
    var max=Math.min(limit || parts.length, parts.length, paras.length);
    for(var i=0;i<max;i++){
      var words=partWords(parts[i]), best=-1, score=0;
      for(var p=0;p<paras.length;p++){
        if(used[p]) continue;
        var txt=(paras[p].textContent||'').toLowerCase();
        var s=words.reduce(function(n,w){ return n + (txt.indexOf(w)!==-1 ? 1 : 0); }, 0);
        if(s>score){ score=s; best=p; }
      }
      if(best < 0){
        best=Math.min(paras.length-1, Math.max(0, Math.round((i+1)*paras.length/(max+1))-1));
        while(used[best] && best<paras.length-1) best++;
        while(used[best] && best>0) best--;
      }
      used[best]=1;
      anchors.push(best);
    }
    return anchors;
  }

  function readerChapterIndex(reader){
    var count=reader.querySelector('.rd-count');
    var m=count && (count.textContent||'').match(/(\d+)/);
    return m ? Math.max(0, parseInt(m[1],10)-1) : 0;
  }

  function chooseReaderPart(parts, paras, chapterIndex){
    var fallback=chapterIndex % parts.length;
    var text=Array.prototype.map.call(paras,function(p){ return p.textContent || ''; }).join(' ').toLowerCase();
    var best=fallback, bestScore=0;
    parts.forEach(function(part,i){
      var s=partWords(part).reduce(function(n,w){ return n + (text.indexOf(w)!==-1 ? 1 : 0); }, 0);
      if(s>bestScore){ bestScore=s; best=i; }
    });
    if(bestScore === 0) return fallback;
    return best;
  }

  function activateInlineParts(root){
    root.querySelectorAll('.mb-inline-part.is-bloom .mb-part-media').forEach(observeBloom);
  }

  function inlinePartsUseCurrentAssets(root, parts){
    var nodes=Array.prototype.slice.call(root.querySelectorAll('.mb-inline-part'));
    if(!nodes.length) return false;
    return nodes.every(function(node){
      var idx=(node.getAttribute('data-inline-part') || '').match(/-(\d+)$/);
      idx=idx ? parseInt(idx[1],10) : -1;
      var part=parts[idx];
      return part && node.getAttribute('data-inline-src') === (part.src || 'svg');
    });
  }

  function clearInlineParts(root, marker){
    root.querySelectorAll('.mb-inline-part').forEach(function(node){
      if(node.parentNode) node.parentNode.removeChild(node);
    });
    root.removeAttribute(marker);
  }

  function injectReaderParts(){
    var reader=document.querySelector('#readerModal .reader[data-reader]');
    if(!reader) return;
    var bookId=reader.getAttribute('data-reader');
    var parts=ensureAssetParts(bookId);
    if(!parts || parts.some(function(part){ return !hasPartVisual(part); })) return;
    var flow=reader.querySelector('.rd-flow.horizontal');
    if(!flow) return;
    if(flow.getAttribute('data-inline-parts-reader') === '1'){
      if(inlinePartsUseCurrentAssets(flow, parts)) return;
      clearInlineParts(flow, 'data-inline-parts-reader');
    }
    var paras=flow.querySelectorAll('p');
    if(!paras.length) return;
    flow.setAttribute('data-inline-parts-reader','1');
    var chapterIndex=readerChapterIndex(reader);
    var partIndex=chooseReaderPart(parts, paras, chapterIndex);
    var part=parts[partIndex];
    var anchors=chooseAnchors(paras, [part], 1);
    var wrap=document.createElement('div');
    wrap.innerHTML=partMarkup(bookId, part, partIndex, false);
    var node=wrap.firstChild;
    var anchor=paras[anchors[0]];
    if(anchor.nextSibling) flow.insertBefore(node, anchor.nextSibling);
    else flow.appendChild(node);
    activateInlineParts(flow);
  }

  function injectPreviewParts(){
    var idMatch = location.hash.match(/\/book\/((?:b|jp)\d{2})/);
    if(!idMatch) return;
    var bookId=idMatch[1], parts=ensureAssetParts(bookId);
    if(!parts || parts.some(function(part){ return !hasPartVisual(part); })) return;
    var pv=document.querySelector('.preview-box .pv-text');
    if(!pv) return;
    if(pv.getAttribute('data-inline-parts-preview') === '1'){
      if(inlinePartsUseCurrentAssets(pv, parts)) return;
      clearInlineParts(pv, 'data-inline-parts-preview');
    }
    var paras=pv.querySelectorAll('p');
    if(paras.length < 1) return;
    pv.setAttribute('data-inline-parts-preview','1');
    var previewParts=parts.slice(0, Math.min(parts.length, Math.max(1, Math.min(3, paras.length))));
    var anchors=chooseAnchors(paras, previewParts, previewParts.length);
    previewParts.forEach(function(part,i){
      var wrap=document.createElement('div');
      wrap.innerHTML=partMarkup(bookId, part, i, true);
      var node=wrap.firstChild;
      var anchor=paras[anchors[i]];
      if(anchor.nextSibling) pv.insertBefore(node, anchor.nextSibling);
      else pv.appendChild(node);
    });
    activateInlineParts(pv);
  }

  function observeBloom(el){
    if(!el || el.getAttribute('data-bloom-observed') === '1') return;
    el.setAttribute('data-bloom-observed','1');
    function play(){ el.classList.remove('play'); void el.offsetWidth; el.classList.add('play'); }
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            play();
            io.disconnect();
          }
        });
      }, {threshold:.45});
      io.observe(el);
    } else {
      setTimeout(play, 500);
    }
  }

  window.__MOODBOOK_B14_BLUEPRINT_PATCH=patch;
  var scheduled=false;
  function schedule(){ if(scheduled) return; scheduled=true; requestAnimationFrame(function(){ scheduled=false; patch(); }); }
  window.addEventListener('hashchange',function(){setTimeout(schedule,80);setTimeout(schedule,350);});
  document.addEventListener('click',function(){setTimeout(schedule,120);setTimeout(schedule,420);},true);
  document.addEventListener('click',function(e){
    var btn=e.target.closest && e.target.closest('[data-bloom-replay]');
    if(!btn) return;
    var box=btn.closest('.mb-inline-part');
    box=box ? box.querySelector('.bp-bloom-wrap') : document.querySelector('#mbBloomFeatureB05 .mb-bloom-canvas');
    if(box){ box.classList.remove('play'); void box.offsetWidth; box.classList.add('play'); }
  });
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  setTimeout(schedule,700);
  setTimeout(schedule,1600);
  setTimeout(function(){
    document.querySelectorAll('.bp-bloom-wrap:not(.play)').forEach(function(el){
      var r=el.getBoundingClientRect();
      if(r.top < innerHeight && r.bottom > 0) el.classList.add('play');
    });
  },2200);
})();

}catch(e){console.error("moodbook image patch failed",e);}