function setTheme(name) {
  document.documentElement.setAttribute('data-theme', name);
  try { localStorage.setItem('kb-theme', name); } catch (e) {}
  document.querySelectorAll('.theme-opt').forEach(function(el) {
    el.classList.toggle('active', el.dataset.theme === name);
  });
}

function toggleThemePanel(){
  document.getElementById('theme-panel').classList.toggle('open');
}
document.addEventListener('click', function(e){
  const sw = document.getElementById('theme-switcher');
  if(sw && !sw.contains(e.target)){
    document.getElementById('theme-panel').classList.remove('open');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var saved = 'midnight'; try { saved = localStorage.getItem('kb-theme') || 'midnight'; } catch (e) {}
  document.querySelectorAll('.theme-opt').forEach(function(el) {
    el.classList.toggle('active', el.dataset.theme === saved);
  });
  document.querySelectorAll('button:not([type])').forEach(function(btn) {
    btn.setAttribute('type','button');
  });
  document.querySelectorAll('.pso-o').forEach(function(label) {
    var row = label.closest('.pso-row');
    if (row) row.classList.add('pso-outcome-row');
  });

  // Accessibility: wire aria-expanded/aria-controls on all disclosure widgets
  document.querySelectorAll('.svc-learn-btn').forEach(function(btn, i) {
    var wrap = btn.nextElementSibling;
    if (wrap) { wrap.id = wrap.id || ('svc-detail-' + i); btn.setAttribute('aria-controls', wrap.id); }
    btn.setAttribute('aria-expanded', 'false');
  });
  document.querySelectorAll('.beyond-read').forEach(function(btn, i) {
    var extra = btn.nextElementSibling;
    if (extra) { extra.id = extra.id || ('beyond-extra-' + i); btn.setAttribute('aria-controls', extra.id); }
    btn.setAttribute('aria-expanded', 'false');
  });
  document.querySelectorAll('.proj-expand-btn').forEach(function(btn, i) {
    var card = btn.closest('.proj-card');
    var detail = card ? card.querySelector('.proj-detail') : null;
    if (detail) { detail.id = detail.id || ('proj-detail-' + i); btn.setAttribute('aria-controls', detail.id); }
    btn.setAttribute('aria-expanded', 'false');
  });
  var aboutRm = document.getElementById('about-rm');
  if (aboutRm) { aboutRm.setAttribute('aria-controls', 'about-extra-wrap'); aboutRm.setAttribute('aria-expanded', 'false'); }

  // Accessibility: make the career timeline keyboard-operable (was click-only)
  document.querySelectorAll('.tl-head').forEach(function(head, i) {
    var tlCard = head.closest('.tl-card');
    var detail = tlCard ? tlCard.querySelector('.tl-detail') : null;
    head.setAttribute('role', 'button');
    head.setAttribute('tabindex', '0');
    head.setAttribute('aria-expanded', 'false');
    if (detail) { detail.id = detail.id || ('tl-detail-' + i); head.setAttribute('aria-controls', detail.id); }
    head.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var entry = head.closest('.tl-entry');
        if (entry) toggleTL(entry);
      }
    });
  });
});

/* Removed unused Three.js globe block: no #three-canvas-wrap markup and no Three.js runtime loaded. */

var kbAOSdone=false;
function kbAOS(){if(kbAOSdone||!window.AOS)return;kbAOSdone=true;AOS.init({duration:650,easing:'ease-out-cubic',once:true,offset:50,disable:function(){return window.innerWidth<=768;}});}
if (window.AOS) {
  if(document.documentElement.classList.contains('kb-skip-loader')) kbAOS();
  else { document.addEventListener('kb:loader-done',kbAOS,{once:true}); setTimeout(kbAOS,4500); }
  window.addEventListener('load',function(){ if(window.AOS) AOS.refreshHard(); });
  window.addEventListener('hashchange',function(){ if(window.AOS) AOS.refreshHard(); });
} else {
  document.querySelectorAll('[data-aos]').forEach(function(e){e.removeAttribute('data-aos');});
}
setTimeout(function(){if(!document.querySelector('.aos-init'))document.querySelectorAll('[data-aos]').forEach(function(e){e.removeAttribute('data-aos');});},6000);

(function(){
  var typedEl=document.getElementById('typed-text');
  if(typedEl&&!window.Typed){typedEl.textContent='Products, Dashboards & Controls';return;}
  if(!(window.Typed && typedEl)) return;
  if(window.innerWidth>600){
    new Typed('#typed-text',{strings:[
      'Fraud Prevention for DRS',
      'CEO, CFO & CXO Dashboards',
      'A Half-Day Financial Close',
      'Products Clients Use',
      'Founder’s Office Systems',
      'Tools with AI Agents'
    ],typeSpeed:50,backSpeed:26,backDelay:2200,loop:true,showCursor:true,cursorChar:'|'});
  } else {
    typedEl.textContent='Products, Dashboards & Controls';
  }
})();

/* Cycling role/skill chips around hero photo */
(function(){
  var slots=[
    {sel:'.hero-chip-0',items:['CA · 5th Rank','Chartered Accountant','Finance Depth']},
    {sel:'.hero-chip-1',items:['AI Product Manager','Systems Builder','Fraud Prevention']},
    {sel:'.hero-chip-2',items:['Builds with AI','CXO Dashboards','Founder’s Office']},
    {sel:'.hero-chip-3',items:['1,700+ Trained','ICSI AI4CS Faculty','Educator & Author','Portrait Artist']}
  ];
  slots.forEach(function(s,i){
    var el=document.querySelector(s.sel);
    if(!el) return;
    var idx=0;
    setTimeout(function(){
      setInterval(function(){
        el.style.opacity='0';
        setTimeout(function(){
          idx=(idx+1)%s.items.length;
          el.textContent=s.items[idx];
          el.style.opacity='';
        },400);
      },3200);
    },i*800);
  });
})();

if(window.VanillaTilt && !('ontouchstart' in window) && window.matchMedia('(pointer:fine)').matches) {
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'),{max:7,speed:400,glare:true,'max-glare':0.08,scale:1.015});
}

/* Magnetic hover on primary CTA buttons - fine-pointer, motion-safe devices only */
if(!('ontouchstart' in window) && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
  document.querySelectorAll('.btn-gold, .btn-ghost').forEach(function(btn){
    btn.addEventListener('mousemove', function(e){
      var r = btn.getBoundingClientRect();
      var x = e.clientX - r.left - r.width / 2;
      var y = e.clientY - r.top - r.height / 2;
      btn.style.transform = 'translate(' + (x * 0.15) + 'px,' + (y * 0.3 - 3) + 'px)';
    }, {passive:true});
    btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
  });
}

const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0,cursorQueued=false;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  if(cursorQueued)return;
  cursorQueued=true;
  cur.style.opacity=ring.style.opacity='1';requestAnimationFrame(()=>{cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;cursorQueued=false});
},{passive:true});
if(window.matchMedia('(pointer:fine)').matches){(function animCur(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(animCur)})();}
document.querySelectorAll('a,button,[data-tilt]').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='5px';cur.style.height='5px';ring.style.width='48px';ring.style.height='48px';ring.style.borderColor='rgba(232,184,75,.6)'});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';ring.style.width='34px';ring.style.height='34px';ring.style.borderColor='rgba(232,184,75,.35)'});
});
document.addEventListener('mouseleave',()=>{cur.style.opacity='0';ring.style.opacity='0'});
document.addEventListener('mouseenter',()=>{cur.style.opacity='1';ring.style.opacity='1'});

const navEl=document.getElementById('main-nav'),progressEl=document.getElementById('progress'),bttEl=document.getElementById('btt');
const scrollSections=document.querySelectorAll('section[id]');
let scrollQueued=false;
function updateScrollState(){
  const s=document.documentElement,h=s.scrollHeight-s.clientHeight;
  progressEl.style.width=h>0?((window.scrollY/h)*100)+'%':'0%';
  navEl.classList.toggle('scrolled',window.scrollY>40);
  bttEl.classList.toggle('show',window.scrollY>600);
  const y=window.scrollY+90;
  scrollSections.forEach(sec=>{
    const inView=y>=sec.offsetTop&&y<sec.offsetTop+sec.offsetHeight;
    const link=document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if(link)link.classList.toggle('active',inView);
    const spLink=document.querySelector(`.sp-link[href="#${sec.id}"]`);
    if(spLink)spLink.classList.toggle('active',inView);
  });
  scrollQueued=false;
}
window.addEventListener('scroll',()=>{
  if(scrollQueued)return;
  scrollQueued=true;
  requestAnimationFrame(updateScrollState);
},{passive:true});

var sidePanelTrigger = null;
function toggleSidePanel() {
  var opening = !document.body.classList.contains('sp-open');
  if (opening) { sidePanelTrigger = document.activeElement; }
  document.body.classList.toggle('sp-open');
  if (opening) {
    var closeBtn = document.getElementById('side-close');
    if (closeBtn) closeBtn.focus();
  } else if (sidePanelTrigger) { sidePanelTrigger.focus(); sidePanelTrigger = null; }
}

function toggleMenu() { toggleSidePanel(); }

function animCount(el){
  const t=+el.dataset.target,s=el.dataset.suffix||'';
  const dur=1800,step=t/(dur/16);let c=0;
  const iv=setInterval(()=>{c=Math.min(c+step,t);el.textContent=Math.floor(c).toLocaleString()+s;if(c>=t)clearInterval(iv)},16);
}
const cObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('counting');animCount(e.target);setTimeout(()=>{e.target.classList.remove('counting');e.target.classList.add('counted')},350);cObs.unobserve(e.target)}}),{threshold:.3});

const mcpFlowObs=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){
    const path=e.target.querySelector('.mcp-flow-path');
    if(path)path.classList.add('drawn');
    mcpFlowObs.unobserve(e.target);
  }
}),{threshold:.4});
document.querySelectorAll('.mcp-flow').forEach(el=>mcpFlowObs.observe(el));
document.querySelectorAll('.counter-num[data-target]').forEach(el=>cObs.observe(el));
document.querySelectorAll('.stat-num[data-target]').forEach(el=>cObs.observe(el));

const tlTrack = document.getElementById('tl-track-line');
const tlNodes = document.querySelectorAll('.tl-node');
if(tlTrack && tlNodes.length) {
  setTimeout(() => {
    const tlLen = tlTrack.getTotalLength();
    tlTrack.style.setProperty('--total-len', tlLen);
  }, 500);
  
  const tlObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        if(e.target.id === 'career-timeline') {
          tlTrack.classList.add('drawn');
        } else if(e.target.classList.contains('tl-entry')) {
          const n = e.target.querySelector('.tl-node');
          if(n) n.classList.add('pulsing');
        }
      }
    });
  }, { threshold: 0.3 });
  if(document.getElementById('career-timeline')) tlObs.observe(document.getElementById('career-timeline'));
  document.querySelectorAll('.tl-entry').forEach(el => tlObs.observe(el));
}

function toggleTL(el){
  const was=el.classList.contains('open');
  document.querySelectorAll('.tl-entry').forEach(e=>{
    e.classList.remove('open');
    const h=e.querySelector('.tl-head');
    if(h)h.setAttribute('aria-expanded','false');
  });
  if(!was){
    el.classList.add('open');
    const h=el.querySelector('.tl-head');
    if(h)h.setAttribute('aria-expanded','true');
  }
}

function toggleProj(card){
  if(!card || !card.classList.contains('proj-card')) card = card.closest('.proj-card');
  if(!card) return;
  const detail=card.querySelector('.proj-detail');
  const btn=card.querySelector('.proj-expand-btn');
  if(!detail || !btn) return;
  const isOpen=detail.classList.contains('open');
  document.querySelectorAll('#impact .proj-card.open').forEach(c=>c.classList.remove('open'));
  document.querySelectorAll('#impact .proj-detail.open').forEach(d=>d.classList.remove('open'));
  document.querySelectorAll('#impact .proj-expand-btn.open').forEach(b=>{b.classList.remove('open');b.querySelector('span:first-child').textContent='Full Detail';b.setAttribute('aria-expanded','false');});
  if(!isOpen){card.classList.add('open');detail.classList.add('open');btn.classList.add('open');btn.querySelector('span:first-child').textContent='Close Detail';btn.setAttribute('aria-expanded','true');}
}

// PROJECT FILTER
function filterProj(cat, btn) {
  document.querySelectorAll('.pf-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#impact .proj-card').forEach(function(card){
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('pf-hidden');
    } else {
      card.classList.add('pf-hidden');
      const detail = card.querySelector('.proj-detail');
      const expand = card.querySelector('.proj-expand-btn');
      card.classList.remove('open');
      if(detail) detail.classList.remove('open');
      if(expand) { expand.classList.remove('open'); expand.querySelector('span:first-child').textContent='Full Detail'; }
    }
  });
}

function toggleAbout(){
  const wrap=document.getElementById('about-extra-wrap'),btn=document.getElementById('about-rm');
  const open=wrap.classList.toggle('open');
  btn.classList.toggle('open',open);
  btn.setAttribute('aria-expanded',String(open));
  const arrow=btn.querySelector('.about-rm-arrow');
  btn.childNodes[0].textContent=open?'Show Less ':'Read More ';
  if(arrow)arrow.textContent=open?'\u25B4':'\u25BE';
}

function toggleSvc(btn){
  const card=btn.closest('.svc-card');
  const wrap=card.querySelector('.svc-detail-wrap');
  const isOpen=wrap.classList.contains('open');
  // Close all others
  document.querySelectorAll('.svc-detail-wrap.open').forEach(w=>w.classList.remove('open'));
  document.querySelectorAll('.svc-learn-btn.open').forEach(b=>{b.classList.remove('open');b.childNodes[0].textContent='Learn More ';b.setAttribute('aria-expanded','false');});
  if(!isOpen){
    wrap.classList.add('open');
    btn.classList.add('open');
    btn.childNodes[0].textContent='Show Less ';
    btn.setAttribute('aria-expanded','true');
  }
}

function toggleBeyond(btn){
  const extra=btn.nextElementSibling;
  const open=extra.classList.toggle('open');
  btn.classList.toggle('open',open);
  btn.setAttribute('aria-expanded',String(open));
  const arrow=btn.querySelector('.br-arrow');
  const textNode=btn.childNodes[0];
  if(textNode)textNode.textContent=open?'Show Less ':'Read More ';
  if(arrow)arrow.textContent=open?'\u25B4':'\u25BE';
}



var chatHistory = [];
var chatOpen = false;
var chatInitialized = false;
var isLoading = false;
var KIRAN_CONTACT_HTML = 'You can reach Kiran directly:<br><br><strong>Email:</strong> <a href="mailto:cakiranbora@gmail.com">cakiranbora@gmail.com</a><br><strong>Phone:</strong> <a href="tel:+917020679009">+91 70206 79009</a><br><strong>WhatsApp:</strong> <a href="https://wa.me/917020679009?text=Hi%20Kiran%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer">Message Kiran on WhatsApp</a><br><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/CAKiBo" target="_blank" rel="noopener noreferrer">linkedin.com/in/CAKiBo</a>';

// Profile Guide knowledge base. Each topic: id, chip label, answer (trusted HTML),
// phrases (matched as whole phrases, strong signal), kw (word stems; 4+ letters also match longer words), related topic ids.
var KB = [
  { id: 'greet', label: 'Hello', phrases: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'hii', 'hiya'], kw: [],
    answer: 'Hi! I\'m Kiran\'s Profile Guide. Ask me about his work at Recykal, his finance transformation work at Contetra, what he has built, or his CA background.',
    related: ['about', 'achievements', 'recykal'] },
  { id: 'help', label: 'What can you do?', phrases: ['what can you do', 'what can i ask', 'help', 'menu', 'topics', 'options', 'questions', 'how does this work', 'what do you know'], kw: [],
    answer: 'I answer questions about Kiran\'s work and background. For example: <strong>What does he do at Recykal?</strong>, <strong>How did he cut the close to half a day?</strong>, <strong>What has he built with AI?</strong> or <strong>How can I contact him?</strong> Pick a topic below or type your own question.',
    related: [] },
  { id: 'thanks', label: 'Thanks', phrases: ['thanks', 'thank you', 'thank u', 'thx', 'great', 'cool', 'awesome', 'nice', 'ok', 'okay', 'got it', 'perfect'], kw: [],
    answer: 'Happy to help. Anything else you would like to know about Kiran\'s work?',
    related: ['achievements', 'contact', 'resume'] },
  { id: 'about', label: 'About Kiran', w: 0.7, phrases: ['who is', 'about kiran', 'about him', 'tell me about kiran', 'introduce', 'introduction', 'who are you talking about'], kw: ['summary', 'overview', 'profile', 'introduc', 'kiran bora'],
    answer: 'Kiran Bora is a <strong>Chartered Accountant</strong> (CA Final in the first attempt, 5th Rank in Chhatrapati Sambhajinagar) and <strong>AI Product Manager at Recykal</strong>, Hyderabad. Over 6+ years, including articleship, he has worked across audit, corporate banking, finance transformation and product. He understands how a business runs end to end, finds what breaks, and builds the fix.',
    related: ['achievements', 'career', 'hire'] },
  { id: 'hire', label: 'Why Kiran?', phrases: ['why should', 'why hire', 'why kiran', 'what makes him', 'stand out', 'unique', 'value add', 'good fit', 'right fit', 'strengths'], kw: ['hire', 'hiring', 'strength', 'differen', 'usp'],
    answer: 'Kiran brings a rare mix: a <strong>Chartered Accountant</strong> who understands how a business runs end to end, and an <strong>AI Product Manager</strong> who builds the fix. Proof: financial close cut from ~15 days to under half a day, a PMO for a ₹600 Cr EPC enterprise, two products now used by clients, and DRS fraud and settlement logic, while leading teams and working directly with CEOs, CFOs and founders.',
    related: ['achievements', 'founders', 'contact'] },
  { id: 'recykal', label: 'Current role at Recykal', phrases: ['current role', 'current job', 'current company', 'where does he work', 'where is he working', 'what does he do now', 'present role', 'right now', 'deposit return'], kw: ['recykal', 'rapidue', 'current', 'drs', 'presently', 'currently'],
    answer: 'Since <strong>July 2026</strong>, Kiran is AI Product Manager at <strong>Recykal</strong> (Rapidue Technologies Pvt Ltd), Hyderabad, working on <strong>Deposit Return Schemes (DRS)</strong>. He owns process improvement and gap identification across the DRS platform, fraud prevention design, finance and settlement logic, and tender analysis, and leads cross-functional delivery with <strong>20+ people</strong> across AI/ML, development and QA teams, guiding 2 APMs. The platform is live for TASMAC (Tamil Nadu) and Goa\'s DRS, and has been pitched in Poland, Moldova and 2 other markets.',
    related: ['fraud', 'settlement', 'tender'] },
  { id: 'fraud', label: 'DRS fraud controls', phrases: ['exception hub', 'entity 360', 'sla monitor', 'risk score', 'graph neural', 'vector similarity', 'gnn', 'machine learning', 'ml model', 'ai model'], kw: ['fraud', 'scenario', 'detection', 'simulator', 'proactive', 'reactive', 'exception', 'alert'],
    answer: 'Kiran mapped <strong>58 fraud scenarios across 5 detection areas</strong> for Deposit Return Schemes. <strong>Reactive controls</strong> catch a fraud fast and learn the pattern; <strong>proactive controls</strong> stop it before it happens; a <strong>transaction simulator</strong> stress-tests the rules. He also designed the wireframes for the Exception Hub, Entity 360 and SLA monitor, where every alert has a risk score, an owner, a deadline and a status. With the AI/ML team he chose the modelling approach (<strong>vector similarity and graph neural networks</strong>), set expected outputs and reviewed the solution.',
    related: ['settlement', 'recykal', 'team'] },
  { id: 'settlement', label: 'DRS settlement and collections', phrases: ['how does drs work', 'what is drs', 'what is a deposit return scheme', 'manual collection', 'bag id'], kw: ['settlement', 'deposit', 'refund', 'clawback', 'liabilit', 'rvm', 'reverse vending', 'collection', 'container', 'bags', 'retailer', 'producer'],
    answer: 'In a Deposit Return Scheme, consumers pay a small deposit on a drink container and get it back when they return it. Kiran defined the refund, settlement and fee logic (retailer handling and producer fees) with <strong>consumer deposits treated as liabilities, not income</strong>, plus unclaimed deposits and fraud clawbacks. He also defined how RVM (reverse vending machine) returns and manual collections, counted at the counter and packed in bags tracked by bag ID, are reconciled: counter vs counting centre, RVM data vs physical bags, and refunds vs containers.',
    related: ['fraud', 'recykal', 'tender'] },
  { id: 'tender', label: 'Moldova tender', phrases: ['national tender'], kw: ['tender', 'moldova', 'bid', 'rfp', 'poland', 'tasmac', 'goa', 'market', 'countries', 'country'],
    answer: 'Kiran analysed the <strong>Moldova national DRS tender</strong> for Recykal\'s bid: what the platform already covers, where the gaps are, and a <strong>time-bound, prioritised plan</strong> so the most important items are delivered in the fewest days. The platform is live for TASMAC (Tamil Nadu) and Goa\'s DRS, and has been pitched in Poland, Moldova and 2 other markets.',
    related: ['recykal', 'fraud', 'pm'] },
  { id: 'contetra', label: 'Contetra', phrases: ['previous job', 'previous role', 'last job', 'last company', 'previous company', 'consulting work'], kw: ['contetra', 'consult', 'engagement', 'mumbai'],
    answer: 'At <strong>Contetra</strong>, Mumbai (Jan 2025 to Jun 2026), Kiran was Assistant Manager, Finance &amp; Digital Transformation, with Founder\'s Office execution. He was the client-facing lead and project manager across <strong>15 engagements</strong> (₹50 Cr to ₹1,200 Cr annual turnover), led parallel teams of 15+ and presented to CEOs, CFOs, COOs and founders. Highlights: close cut from ~15 days to under half a day, a PMO for a ₹600 Cr EPC enterprise, O&amp;M billing cut from 25-30 days to 7, and two products now used by clients.',
    related: ['close', 'pmo', 'products'] },
  { id: 'close', label: 'Close and consolidation tool', phrases: ['half a day', 'trial balance', 'month end', 'book closure', 'notes to accounts', 'schedule iii', '15 days', 'financial close', '21 branches'], kw: ['close', 'closing', 'consolidat', 'elimination', 'intercompany', 'branch', 'tb'],
    answer: 'For a client with <strong>21 branches in 15 states</strong>, Kiran built a financial close and consolidation tool alone in under a month (Excel, VBA, Power Query). It maps trial balances from any system, consolidates them with intercompany and branch eliminations, and produces financial statements with notes to accounts. The close fell from <strong>~15 days to under half a day</strong>, and the tool scaled to multiple clients.',
    related: ['dashboards', 'automation', 'contetra'] },
  { id: 'fpa', label: 'FP&A and fractional CFO', phrases: ['fractional cfo', 'virtual cfo', 'part time cfo', 'cfo services', 'financial model', 'financial models', 'saas model', 'trading model', 'ecommerce model', 'e commerce model', 'fp and a', 'fpa', 'runway', 'unit economics', 'cash flow forecast', 'fund raising', 'fundraising'], kw: ['model', 'forecast', 'runway', 'fundrais', 'investor', 'scenario', 'sensitivity', 'driver', 'lever', 'ecommerce', 'budget', 'planning'],
    answer: 'At Contetra, Kiran acted as <strong>fractional CFO</strong> for clients, supporting their CEOs and CFOs, and built automated, <strong>driver-based financial models</strong> for <strong>SaaS, trading and e-commerce</strong> clients: monthly forecast and budget, unit economics and KPIs, working capital, scenarios and sensitivity, and <strong>forecast and runway analysis for fundraising</strong>. Files dropped into a folder refresh the Excel/VBA models and linked Power BI views, so founders can see how each lever moves performance.',
    related: ['dashboards', 'close', 'founders'] },
  { id: 'dashboards', label: 'CXO dashboards and MIS', phrases: ['power bi', 'budget vs actual', 'variance analysis', 'management reporting', 'cost sheet'], kw: ['dashboard', 'mis', 'report', 'kpi', 'variance', 'analytics', 'tableau', 'drill'],
    answer: 'Kiran built Power BI dashboards for the <strong>CEO, CFO, CXOs and HODs</strong>: cost sheets, variable costing P&amp;L, budget vs actual, variance analysis, vertical-wise performance and operational KPIs. Every view drills down from the headline number to the ledger, so the reason behind each variance is visible.',
    related: ['close', 'founders', 'tools'] },
  { id: 'pmo', label: 'PMO for ₹600 Cr EPC', phrases: ['600 cr', 'project management office', 'project management'], kw: ['pmo', 'epc', 'wbs', 'raci', 'escalation'],
    answer: 'For a <strong>₹600 Cr EPC enterprise</strong> with unclear project ownership, little visibility of costs or the reasons for delays, and slow collections, Kiran built the PMO from scratch: WBS, RACI, SOPs, approval workflows, escalation mechanisms, project accounting, contract billing and revenue recognition. It was adopted by the founding team.',
    related: ['founders', 'billing', 'process'] },
  { id: 'billing', label: 'O&M billing redesign', phrases: ['o and m', 'billing cycle', 'water treatment', '25 30 days', '7 days'], kw: ['billing', 'invoice', 'invoicing', 'collections', 'receivable'],
    answer: 'For a water treatment client, O&amp;M billing ran on manual confirmations, with disputes, ERP gaps and double entry in Excel. Kiran redesigned the billing and confirmation workflow and cut the billing cycle from <strong>25-30 days to 7 days</strong>, speeding up collections. The insight later became the base of the Revenue Assurance product.',
    related: ['products', 'pmo', 'process'] },
  { id: 'founders', label: 'Founder\'s Office work', phrases: ['founders office', 'founder s office', 'chief of staff', 'ceo office', 'cxo office', 'work with founders', 'work with ceo'], kw: ['founder', 'cos', 'cxo', 'leadership', 'strategy', 'strategic', 'ceo', 'cfo', 'coo'],
    answer: 'Kiran\'s work sits close to founders and CXOs. At Contetra he ran Founder\'s Office execution: diagnosing what breaks together with the founders, agreeing the fix and delivering it. Examples: a PMO for a ₹600 Cr EPC enterprise, CEO and CFO dashboards, review cadences, governance trackers, automation roadmaps and cross-functional follow-ups, presented directly to CEOs, CFOs, COOs and founders.',
    related: ['pmo', 'process', 'dashboards'] },
  { id: 'process', label: 'Process design and diagnostics', phrases: ['as is', 'to be', 'operating model', 'process design', 'process improvement', 'internal control'], kw: ['process', 'diagnos', 'sop', 'o2c', 'p2p', 'r2r', 'h2r', 'governance', 'control', 'workflow', 'approval', 'gap'],
    answer: 'Kiran led <strong>5 AS-IS diagnostics</strong> across CRM, O2C, P2P, R2R, H2R, master data, financial close, GST/TDS, reporting and controls, then designed TO-BE operating models: SOPs, approval matrices, workflow automation, ticketing and centralised teams for PMO, Procurement and Master Data Management, so every process has a clear owner. At Recykal he does the same for the DRS platform: mapping flows end to end and finding process and platform gaps.',
    related: ['erp', 'founders', 'pmo'] },
  { id: 'erp', label: 'ERP experience', phrases: ['master data', 'data migration', 'post erp', 's 4hana', 's4 hana'], kw: ['erp', 'sap', 'oracle', 'erpnext', 'tally', 'crp', 'uat', 'migration', 'implementation', 'reconcil'],
    answer: 'Kiran turns finance and operations requirements into ERP workflows and supports the ERP lifecycle: CRP sessions, scenario definition, UAT design, statutory validation and data migration checks, on SAP ECC and S/4HANA, Oracle, ERPNext and Tally. After go-live he set up data validation and reconciliation frameworks and master data cleanup (vendor, customer, item and finance masters), and rescued a stalled Power BI project, delivering it on time with client sign-off.',
    related: ['process', 'automation', 'dashboards'] },
  { id: 'products', label: 'Products built', phrases: ['revenue assurance', 'vendor management', 'products built', 'saas'], kw: ['product', 'p2p', 'vendor', 'mvp', 'saas', 'purchase'],
    answer: 'Kiran turned recurring gaps seen across client diagnostics into <strong>two products now used by clients</strong>: a <strong>P2P and Vendor Management</strong> product (vendor onboarding, approvals, purchase-to-pay tracking, payment visibility) and a <strong>Revenue Assurance</strong> product for project businesses (contracts, WBS, milestones, multi-type billing, invoicing, reconciliation). He owned both from idea to market and built working modules with AI-assisted coding for client pitches.',
    related: ['pm', 'billing', 'ai'] },
  { id: 'pm', label: 'How he works as a PM', phrases: ['product management', 'product manager', 'user stories', 'user story', 'go to market', 'how does he work', 'approach', 'requirement'], kw: ['prd', 'brd', 'wireframe', 'roadmap', 'discovery', 'prioriti', 'sprint', 'agile', 'stakeholder', 'requirement'],
    answer: 'As a product manager Kiran owns the full chain: problem discovery, market analysis, white paper, BRD and PRD, user stories, wireframes, business logic, MVP scope, testing, UAT, client demos and go-to-market. He builds working prototypes with AI coding agents, walks engineers through the business flow and finance logic behind every screen, and signs off releases after UAT.',
    related: ['products', 'flow', 'team'] },
  { id: 'ai', label: 'AI and what he builds', phrases: ['artificial intelligence', 'generative ai', 'gen ai', 'claude code', 'built with ai', 'ai tools', 'vibe coding'], kw: ['ai', 'claude', 'mcp', 'agent', 'gpt', 'chatgpt', 'gemini', 'llm', 'prompt', 'copilot', 'notebooklm', 'coding'],
    answer: 'Kiran builds with AI every day: <strong>Claude Code, MCP and AI coding agents</strong> to turn business logic into working tools such as Flowchart Studio, TestKit, the CS Compliance Command Center and product modules for client pitches, plus custom GPTs and Gems for consulting delivery. He also teaches AI: 1,700+ professionals trained and ICSI AI4CS faculty.',
    related: ['flow', 'cs', 'automation'] },
  { id: 'flow', label: 'Flowchart Studio and TestKit', phrases: ['flowchart studio', 'pm tool', 'test kit'], kw: ['flowchart', 'studio', 'testkit', 'swimlane', 'testing'],
    answer: '<strong>Flowchart Studio</strong> turns a rough idea into a validated swimlane flowchart, flags dead ends and ownership gaps, and links each step to the screens, database tables and code behind it. <strong>TestKit</strong> runs repeatable, role-based checks with no AI judgement. Kiran built both with AI coding agents and used them to test the DRS platform.',
    related: ['ai', 'pm', 'recykal'] },
  { id: 'automation', label: 'Automation', phrases: ['power query', 'power automate', 'excel vba', 'automation', 'automations', 'automate', 'automated', 'automating'], kw: ['automat', 'vba', 'macro', 'excel', 'efficien', 'rpa', 'script'],
    answer: 'Kiran automates finance and operations work: the <strong>close and consolidation tool</strong> (Excel, VBA, Power Query) that cut close from ~15 days to under half a day; Excel/VBA reconciliation tools during articleship (~50% efficiency gain); post-ERP validation and reconciliation checks; Power BI dashboards; and AI assistants for consulting delivery.',
    related: ['close', 'ai', 'tools'] },
  { id: 'cs', label: 'Work for Company Secretaries', phrases: ['company secretary', 'company secretaries', 'command center', 'command centre', 'related party', 'cs work', 'for cs'], kw: ['cs', 'icsi', 'lodr', 'sebi', 'roc', 'rpt', 'masterclass', 'secretarial', 'compliance'],
    answer: 'For Company Secretaries, Kiran is <strong>ICSI AI4CS faculty</strong> (400+ CS in Indore, 100+ in Thane). He built the <strong>AI for CS Masterclass</strong> (13 modules, live demos, exercises and practice company files) and the <strong>CS Compliance Command Center</strong>, an offline app for ROC and SEBI LODR deadlines, director disqualification risk, penalty exposure and Related Party Transaction approvals (Sec 188, Reg 23), with client data kept on the laptop.',
    related: ['training', 'ai', 'articleship'] },
  { id: 'training', label: 'Training and faculty', phrases: ['study circle', 'smart investment'], kw: ['train', 'teach', 'faculty', 'session', 'workshop', 'judge', 'mentor', 'speaker', 'curriculum', 'singapore', 'icai', 'lecture'],
    answer: 'Kiran has trained <strong>1,700+ professionals</strong> in AI tools, Excel and Power BI. He is ICSI AI4CS faculty (400+ Company Secretaries in Indore, 100+ in Thane), has served as a Judge at ICSI AI4CS, Mumbai (evaluating participants’ AI-built solutions), trained 100+ CAs at an ICAI study circle, and wrote Smart Investment study material for a Singapore-based wealth firm.',
    related: ['cs', 'beyond', 'education'] },
  { id: 'idfc', label: 'IDFC FIRST Bank', phrases: ['corporate banking', 'relationship manager', 'credit appraisal', 'working capital'], kw: ['idfc', 'bank', 'credit', 'cam', 'appraisal', 'loan', 'borrower', 'covenant', 'lending', 'pune', 'promot'],
    answer: 'At <strong>IDFC FIRST Bank</strong>, Pune (Mar 2023 to Jan 2025), Kiran worked in Corporate Banking and was promoted from Credit Analyst to Associate Relationship Manager in April 2024. He owned credit analysis and relationships for <strong>20+ corporate clients</strong> in Manufacturing, Renewable Energy and Automobile, built financial models and forecasts, and presented Credit Appraisal Memoranda to credit committees, resulting in sanctioned facilities.',
    related: ['career', 'articleship', 'skills'] },
  { id: 'articleship', label: 'CA articleship', phrases: ['rb sharma', 'tax audit', 'bank audit', 'statutory audit', 'gst compliance', 'tax compliance'], kw: ['article', 'audit', 'gst', 'tds', 'statutory', 'taxation', 'income tax', 'star performer'],
    answer: 'Kiran did his CA articleship at <strong>RB Sharma</strong>, Chhatrapati Sambhajinagar (Feb 2020 to Feb 2023): statutory, tax and concurrent bank audits across Manufacturing, Pharma, Hospitals, Media and Construction, financial statements, income tax and GST compliance. He built Excel/VBA reconciliation tools (~50% efficiency gain), trained 100+ professionals, and won the Star Performer and Best Article awards.',
    related: ['education', 'idfc', 'automation'] },
  { id: 'education', label: 'Education', phrases: ['ca final', 'chartered accountant', 'ind as', 'ca inter', 'ca intermediate', 'what did he study'], kw: ['education', 'qualif', 'degree', 'study', 'studies', 'rank', 'cpt', 'intermediate', 'exemption', 'certific', 'ca', 'icai', 'marks', 'score', 'exam'],
    answer: 'Kiran is a <strong>Chartered Accountant</strong> (Nov 2022). CA Final: both groups in the first attempt, <strong>416/800</strong>, 5th Rank in Chhatrapati Sambhajinagar, with an exemption in Economic Laws. CA Intermediate: 472/800 with exemptions in Accounting, Advanced Accounting, Costing, Taxation, and Financial Management &amp; Economics for Finance. CPT: 132/200. Certifications: AI Fluency (Anthropic) and Ind AS (CRISIL).',
    related: ['school', 'articleship', 'training'] },
  { id: 'school', label: 'School (10th and 12th)', phrases: ['10th', '12th', 'class 10', 'class 12', 'deogiri', 'sboa'], kw: ['school', 'ssc', 'hsc', 'college', 'percentage', 'sanskrit', 'board'],
    answer: 'Kiran scored <strong>93.08%</strong> in HSC (2017, Deogiri College, 3rd in his batch) and <strong>92.80%</strong> in SSC (2015, SBOA School, Chhatrapati Sambhajinagar), with 100/100 in Sanskrit.',
    related: ['education', 'beyond', 'about'] },
  { id: 'career', label: 'Career path', w: 0.6, phrases: ['work experience', 'how many years', 'years of experience', 'career path', 'previous companies', 'where has he worked', 'past roles'], kw: ['experience', 'career', 'journey', 'background', 'history', 'companies', 'jobs', 'worked', 'timeline'],
    answer: 'Kiran\'s path: CA articleship at RB Sharma (audit and tax, 2020 to 2023), corporate banking at IDFC FIRST Bank (2023 to 2025), finance transformation and Founder\'s Office execution at Contetra (2025 to 2026), and now AI Product Manager at Recykal (since July 2026). That is <strong>6+ years</strong> including articleship.',
    related: ['recykal', 'contetra', 'idfc'] },
  { id: 'skills', label: 'Skills', w: 0.7, phrases: ['good at', 'core skills', 'key skills', 'skill set'], kw: ['skill', 'expertise', 'competenc', 'capabilit', 'specialis', 'specializ'],
    answer: '<strong>Finance:</strong> close, consolidation, MIS, budgeting and variance analysis, reconciliations, audit, GST/TDS, credit appraisal. <strong>Product:</strong> discovery, PRDs, user stories, wireframes, UAT, go-to-market. <strong>Operations:</strong> AS-IS and TO-BE design, SOPs, PMO, controls, ERP lifecycle. <strong>Building:</strong> Power BI, Excel/VBA, Power Query, Claude Code and AI agents. Plus leading cross-functional teams and training.',
    related: ['tools', 'achievements', 'hire'] },
  { id: 'tools', label: 'Tools and tech stack', w: 0.8, phrases: ['tech stack', 'which software', 'what tools'], kw: ['tool', 'stack', 'software', 'technolog', 'tech', 'platform', 'jira', 'playwright'],
    answer: 'Kiran works with Power BI, Excel, VBA, Power Query, Power Automate, Tally, SAP ECC and S/4HANA, Oracle and ERPNext, and builds with Claude Code, MCP, Claude, ChatGPT, Gemini and JIRA.',
    related: ['automation', 'ai', 'skills'] },
  { id: 'achievements', label: 'Key achievements', phrases: ['biggest achievement', 'proud of', 'key result', 'best work', 'top achievement', 'what has he built', 'what did he build', 'what has he done'], w: 0.7, kw: ['achiev', 'highlight', 'impact', 'result', 'accomplish', 'award', 'outcome', 'success', 'project', 'portfolio'],
    answer: 'Highlights: financial close cut from <strong>~15 days to under half a day</strong> across 21 branches; O&amp;M billing cut from <strong>25-30 days to 7</strong>; a PMO for a <strong>₹600 Cr</strong> EPC enterprise; <strong>two products</strong> now used by clients; <strong>58 DRS fraud scenarios</strong> mapped; <strong>1,700+</strong> professionals trained; and CA Final in the first attempt with 5th Rank in Chhatrapati Sambhajinagar.',
    related: ['close', 'pmo', 'products'] },
  { id: 'team', label: 'Team leadership', w: 0.8, phrases: ['team size', 'how many people', 'does he lead', 'people management', 'direct reports'], kw: ['team', 'lead', 'manag', 'engineer', 'developer', 'people', 'cross functional'],
    answer: 'At Recykal Kiran leads cross-functional delivery with <strong>20+ people</strong> across AI/ML, development and QA teams and guides 2 APMs: running Agile sprints, assigning and tracking work, explaining flows and finance logic, and running UAT and sign-off. At Contetra he led parallel teams of 15+ (analysts, outsourced developers and tech partners) across client engagements.',
    related: ['recykal', 'pm', 'founders'] },
  { id: 'sectors', label: 'Industries', phrases: [], kw: ['sector', 'industr', 'domain', 'vertical', 'manufactur', 'pharma', 'renewable'],
    answer: 'Kiran has worked across Manufacturing, EPC, Trading, D2C, QSR, Pharma, Renewable Energy, IT, corporate banking, audit (including Hospitals, Media and Construction) and Deposit Return Schemes.',
    related: ['contetra', 'idfc', 'recykal'] },
  { id: 'location', label: 'Location', phrases: ['where is he', 'where does he live', 'which city', 'where based'], kw: ['location', 'located', 'based', 'city', 'hyderabad'],
    answer: 'Kiran is based in <strong>Hyderabad, India</strong>. Earlier he worked in Mumbai (Contetra) and Pune (IDFC FIRST Bank).',
    related: ['contact', 'recykal', 'about'] },
  { id: 'personal', label: 'Availability', phrases: ['notice period', 'open to', 'looking for', 'job change', 'expected salary', 'current salary'], kw: ['salary', 'ctc', 'compensation', 'package', 'notice', 'availab', 'relocat', 'remote', 'opportunit', 'joining', 'join'],
    answer: 'That is best discussed with Kiran directly.<br><br>' + KIRAN_CONTACT_HTML,
    related: ['resume', 'about'] },
  { id: 'contact', label: 'Contact Kiran', phrases: ['get in touch', 'reach him', 'talk to him', 'speak to him', 'contact details', 'phone number'], kw: ['contact', 'email', 'mail', 'phone', 'call', 'number', 'whatsapp', 'linkedin', 'reach', 'connect', 'meet', 'message'],
    answer: KIRAN_CONTACT_HTML,
    related: ['resume', 'location'] },
  { id: 'resume', label: 'Resume', phrases: [], kw: ['resume', 'cv', 'pdf', 'download'],
    answer: 'You can view or download Kiran\'s two-page resume on the <strong>Resume</strong> page in the top menu.',
    related: ['contact', 'achievements'] },
  { id: 'beyond', label: 'Beyond work', phrases: ['free time', 'outside work', 'beyond work', 'personal life'], kw: ['hobb', 'art', 'artist', 'sketch', 'portrait', 'paint', 'draw', 'sport', 'athlet', 'yoga', 'interest', 'wicasa', 'passion'],
    answer: 'Outside work, Kiran is a <strong>portrait artist</strong> who has sold 100+ sketches and won First Prize at the WICASA Art Competition. He has competed at district level in yoga, tennikoit and athletics, and built a personal finance tracker app for himself.',
    related: ['training', 'school', 'about'] }
];

var KB_BY_ID = {};
KB.forEach(function(t) { KB_BY_ID[t.id] = t; });

var KB_STOP = ' a an the is are was were be been of in on at to for and or with by from his him he her she it its this that what whats which who whom how does did do can could would should will tell me about please kiran bora kirans i you your us we our any some more much give show share know explain describe there their them has have had as so if into than then also just like '.split(' ');

function kbNorm(text) {
  return (' ' + String(text).toLowerCase().replace(/&/g, ' and ').replace(/['’]/g, '').replace(/[^a-z0-9₹+]+/g, ' ').replace(/\s+/g, ' ').trim() + ' ');
}
function kbLev(a, b) {
  if (Math.abs(a.length - b.length) > 1) return 2;
  var prev = [], cur, i, j;
  for (j = 0; j <= b.length; j++) prev[j] = j;
  for (i = 1; i <= a.length; i++) {
    cur = [i];
    for (j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[b.length];
}
function kbTokenHit(tok, kw) {
  if (kw.indexOf(' ') !== -1) return false;
  if (tok === kw) return true;
  if (kw.length >= 4 && tok.indexOf(kw) === 0) return true;
  if (kw.length >= 5 && tok.length >= 5 && kbLev(tok, kw) <= 1) return true;
  return false;
}
function kbMatch(text) {
  var norm = kbNorm(text);
  var toks = norm.trim().split(' ').filter(function(t) { return t && KB_STOP.indexOf(t) === -1; });
  var best = null, bestScore = 0;
  var SHORT_ONLY = { greet: 1, thanks: 2, help: 3 };
  KB.forEach(function(t) {
    if (SHORT_ONLY[t.id] && toks.length > SHORT_ONLY[t.id]) return;
    var score = 0, w = t.w || 1;
    t.phrases.forEach(function(p) { if (norm.indexOf(' ' + kbNorm(p).trim() + ' ') !== -1) score += 3 + p.split(' ').length * 0.5; });
    t.kw.forEach(function(k) {
      if (k.indexOf(' ') !== -1) { if (norm.indexOf(' ' + k + ' ') !== -1) score += 2.5 * w; return; }
      for (var i = 0; i < toks.length; i++) { if (kbTokenHit(toks[i], k)) { score += (k.length >= 6 ? 2 : 1.5) * w; break; } }
    });
    if (score > bestScore) { bestScore = score; best = t; }
  });
  return bestScore >= 1 ? best : null;
}

var KB_FALLBACK = 'I don\'t have that detail on this site. Try one of the topics below, or ask Kiran directly at <a href="mailto:cakiranbora@gmail.com">cakiranbora@gmail.com</a>.';

// FAQ menu: topic ids grouped for the chat window

var FAQ_MENU = [
  { cat: 'Current work', ids: ['recykal', 'fraud', 'settlement', 'tender'] },
  { cat: 'Finance and Founder\'s Office', ids: ['contetra', 'close', 'fpa', 'dashboards', 'pmo', 'billing', 'founders'] },
  { cat: 'Products and AI', ids: ['products', 'pm', 'ai', 'flow', 'cs', 'automation'] },
  { cat: 'Background', ids: ['about', 'achievements', 'career', 'education', 'idfc', 'training', 'beyond'] },
  { cat: 'Connect', ids: ['contact', 'resume', 'location'] }
];

function getTime() {
  var d = new Date();
  return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
}

var chatTrigger = null;
function toggleChat() {
  chatOpen = !chatOpen;
  var win = document.getElementById('chat-win');
  if (chatOpen) {
    chatTrigger = document.activeElement;
    win.style.display = 'flex';
    setTimeout(function() { win.classList.add('open'); }, 10);
    if (!chatInitialized) { initChat(); }
    document.getElementById('cw-input').focus();
  } else {
    win.classList.remove('open');
    setTimeout(function() { win.style.display = 'none'; }, 250);
    if (chatTrigger) { chatTrigger.focus(); chatTrigger = null; }
  }
}



function showFAQMenu() {
  var chips = document.getElementById('cw-chips');
  chips.style.display = 'block';
  var html = '<div class="cw-faq-menu">';
  FAQ_MENU.forEach(function(cat) {
    html += '<div class="cw-faq-cat">' + escapeHTML(cat.cat) + '</div>';
    cat.ids.forEach(function(id) {
      var t = KB_BY_ID[id];
      if (t) html += '<button type="button" class="cw-faq-btn" data-faq="' + id + '">' + escapeHTML(t.label) + '</button>';
    });
  });
  html += '</div>';
  chips.innerHTML = html;
}

function hideFAQMenu() {
  var chips = document.getElementById('cw-chips');
  if (!chips) return;
  chips.style.display = 'none';
  chips.innerHTML = '';
}

function escapeHTML(text) {
  return text.replace(/[&<>"']/g, function(ch) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
  });
}

function sanitizeTrustedBotHTML(html) {
  var template = document.createElement('template');
  template.innerHTML = html;
  var allowedTags = ['A','BR','STRONG','EM','B'];
  template.content.querySelectorAll('*').forEach(function(node) {
    if (allowedTags.indexOf(node.tagName) === -1) {
      node.replaceWith(document.createTextNode(node.textContent || ''));
      return;
    }
    Array.from(node.attributes).forEach(function(attr) {
      var name = attr.name.toLowerCase();
      var value = attr.value || '';
      if (node.tagName === 'A' && name === 'href') {
        if (!/^(https?:|mailto:|tel:)/i.test(value)) node.removeAttribute(attr.name);
        return;
      }
      if (node.tagName === 'A' && (name === 'target' || name === 'rel')) return;
      node.removeAttribute(attr.name);
    });
    if (node.tagName === 'A' && !node.getAttribute('rel')) {
      node.setAttribute('rel','noopener noreferrer');
    }
  });
  return template.innerHTML;
}

function showRelated(ids) {
  var chips = document.getElementById('cw-chips');
  if (!chips) return;
  var html = '<div class="cw-related">';
  (ids || []).forEach(function(id) {
    var t = KB_BY_ID[id];
    if (t) html += '<button type="button" class="cw-faq-btn cw-rel-btn" data-faq="' + id + '">' + escapeHTML(t.label) + '</button>';
  });
  html += '<button type="button" class="cw-faq-btn cw-rel-btn cw-rel-all" data-faq="__menu">All topics</button></div>';
  chips.innerHTML = html;
  chips.style.display = 'block';
}

function answerTopic(t) {
  if (t && t.id === 'help') { addBotMessage(t.answer, true); showFAQMenu(); return; }
  if (t) { addBotMessage(t.answer, true); showRelated(t.related); return; }
  addBotMessage(KB_FALLBACK, true);
  showRelated(['about', 'achievements', 'contact']);
}

function sendFAQ(id) {
  hideFAQMenu();
  if (id === '__menu') { showFAQMenu(); return; }
  var t = KB_BY_ID[id];
  if (!t) return;
  addUserMessage(t.label);
  showTyping();
  setTimeout(function() {
    hideTyping();
    answerTopic(t);
  }, 600);
}

function initChat() {
  chatInitialized = true;
  addBotMessage("Hello! I'm Kiran's <strong>Profile Guide</strong>. Ask anything about his work, or pick a topic below. Type <strong>menu</strong> anytime to see all topics.", true);
  setTimeout(showFAQMenu, 300);
}

function addBotMessage(text, allowTrustedHtml) {
  var msgs = document.getElementById('cw-messages');
  var div = document.createElement('div');
  div.className = 'cw-msg bot';
  var bubble = document.createElement('div');
  bubble.className = 'cw-bubble';
  if (allowTrustedHtml) {
    bubble.innerHTML = sanitizeTrustedBotHTML(String(text).replace(/\n/g, '<br>'));
  } else {
    bubble.textContent = String(text);
    bubble.innerHTML = bubble.innerHTML.replace(/\n/g, '<br>');
  }
  var time = document.createElement('div');
  time.className = 'cw-time';
  time.textContent = getTime();
  div.appendChild(bubble);
  div.appendChild(time);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  var msgs = document.getElementById('cw-messages');
  var div = document.createElement('div');
  div.className = 'cw-msg user';
  div.innerHTML = '<div class="cw-bubble">' + escapeHTML(text) + '</div><div class="cw-time">' + getTime() + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  var msgs = document.getElementById('cw-messages');
  var div = document.createElement('div');
  div.id = 'cw-typing-indicator';
  div.className = 'cw-typing';
  div.innerHTML = '<span></span><span></span><span></span>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() {
  var el = document.getElementById('cw-typing-indicator');
  if (el) el.remove();
}

function setLoading(val) {
  isLoading = val;
  var btn = document.getElementById('cw-send-btn');
  if (btn) btn.disabled = val;
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
  // Auto-resize textarea
  var el = document.getElementById('cw-input');
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 90) + 'px';
}

function sendChip(btn) {
  var text = btn.textContent.trim();
  hideFAQMenu();
  sendUserInput(text);
}

function sendMessage() {
  var input = document.getElementById('cw-input');
  var text = input.value.trim();
  if (!text || isLoading) return;
  input.value = '';
  input.style.height = 'auto';
  hideFAQMenu();
  sendUserInput(text);
}

function sendUserInput(text) {
  hideFAQMenu();
  addUserMessage(text);
  chatHistory.push({ role: 'user', content: text });
  setLoading(true);
  showTyping();
  setTimeout(function() {
    hideTyping();
    var t = kbMatch(text);
    answerTopic(t);
    chatHistory.push({ role: 'assistant', content: t ? t.id : 'fallback' });
    setLoading(false);
  }, 700);
}

// EMAIL MODAL
var emailTrigger = null;
function openEmail(e){
  if(e)e.preventDefault();
  emailTrigger=document.activeElement;
  document.getElementById('em-overlay').classList.add('open');
  document.body.style.overflow='hidden';
  var closeBtn=document.querySelector('.em-x');
  if(closeBtn)closeBtn.focus();
}
function closeEmail(){
  document.getElementById('em-overlay').classList.remove('open');
  document.body.style.overflow='';
  document.getElementById('em-copied').classList.remove('show');
  if(emailTrigger){emailTrigger.focus();emailTrigger=null;}
}
function openDefaultMail(){window.location.href='mailto:cakiranbora@gmail.com';closeEmail();}
function copyEmail(){
  var addr='cakiranbora@gmail.com';
  function showCopied(){document.getElementById('em-copied').classList.add('show');setTimeout(closeEmail,1800);}
  function fallbackCopy(){
    var t=document.createElement('textarea');t.value=addr;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();document.execCommand('copy');document.body.removeChild(t);
    showCopied();
  }
  if(navigator.clipboard){
    navigator.clipboard.writeText(addr).then(showCopied).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  var name = document.getElementById('contact-name').value.trim();
  var email = document.getElementById('contact-email').value.trim();
  var message = document.getElementById('contact-message').value.trim();
  if (!name || !email || !message) return;
  var subject = encodeURIComponent('Portfolio enquiry from ' + name);
  var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
  window.location.href = 'mailto:cakiranbora@gmail.com?subject=' + subject + '&body=' + body;
  e.target.reset();
}

function getFocusable(container) {
  if (!container) return [];
  return Array.prototype.slice.call(
    container.querySelectorAll('a[href],button:not([disabled]),input,textarea,[tabindex]:not([tabindex="-1"])')
  ).filter(function(el){ return el.offsetParent !== null; });
}
function trapTabKey(e, container) {
  var focusable = getFocusable(container);
  if (!focusable.length) return;
  var first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}
document.addEventListener('keydown', function(e) {
  const emailOverlay = document.getElementById('em-overlay');
  const emailOpen = emailOverlay && emailOverlay.classList.contains('open');
  const sidePanelOpen = document.body.classList.contains('sp-open');
  const themePanel = document.getElementById('theme-panel');
  const themePanelOpen = themePanel && themePanel.classList.contains('open');
  const chatWin = document.getElementById('chat-win');

  if (e.key === 'Escape') {
    if (emailOpen) { closeEmail(); return; }
    if (chatOpen) { toggleChat(); return; }
    if (sidePanelOpen) { toggleSidePanel(); return; }
    if (themePanelOpen) { toggleThemePanel(); return; }
  }
  if (e.key === 'Tab') {
    if (emailOpen) { trapTabKey(e, document.getElementById('em-modal')); }
    else if (chatOpen && chatWin) { trapTabKey(e, chatWin); }
    else if (sidePanelOpen) { trapTabKey(e, document.getElementById('side-panel')); }
  }
});

document.addEventListener('click', function(e) {
  var themeBtn = e.target.closest('.theme-opt[data-theme], .sp-swatch[data-theme]');
  if (themeBtn) {
    setTheme(themeBtn.dataset.theme);
    return;
  }

  if (e.target.closest('#theme-toggle-btn')) {
    toggleThemePanel();
    return;
  }

  if (e.target.closest('#side-open, #side-close')) {
    toggleSidePanel();
    return;
  }

  if (e.target.id === 'side-overlay') {
    toggleSidePanel();
    return;
  }

  if (e.target.closest('#mobile-menu a, .sp-logo, .sp-link')) {
    toggleSidePanel();
    return;
  }

  if (e.target.closest('#about-rm')) {
    toggleAbout();
    return;
  }

  var svcBtn = e.target.closest('.svc-learn-btn');
  if (svcBtn) {
    toggleSvc(svcBtn);
    return;
  }

  var filterBtn = e.target.closest('.pf-btn[data-filter]');
  if (filterBtn) {
    filterProj(filterBtn.dataset.filter, filterBtn);
    return;
  }

  var projectCard = e.target.closest('#impact .proj-card');
  if (projectCard) {
    toggleProj(projectCard);
    return;
  }

  var timelineHeader = e.target.closest('.tl-head, .tl-node');
  if (timelineHeader) {
    var timelineEntry = timelineHeader.closest('.tl-entry');
    if (timelineEntry) {
      toggleTL(timelineEntry);
      return;
    }
  }

  var beyondBtn = e.target.closest('.beyond-read');
  if (beyondBtn) {
    toggleBeyond(beyondBtn);
    return;
  }

  var faqBtn = e.target.closest('.cw-faq-btn[data-faq]');
  if (faqBtn) {
    sendFAQ(faqBtn.dataset.faq);
    return;
  }

  if (e.target.closest('#chat-toggle, .cw-close')) {
    toggleChat();
    return;
  }

  if (e.target.closest('#cw-send-btn')) {
    sendMessage();
    return;
  }

  if (e.target.closest('#btt')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (e.target.closest('[data-email-trigger="true"]')) {
    openEmail(e);
    return;
  }

  if (e.target.id === 'em-overlay' || e.target.closest('.em-x')) {
    closeEmail();
    return;
  }

  if (e.target.closest('[data-email-close="true"]')) {
    closeEmail();
    return;
  }

  if (e.target.closest('[data-email-default="true"]')) {
    openDefaultMail();
    return;
  }

  if (e.target.closest('[data-email-copy="true"]')) {
    copyEmail();
  }
});
