// Concrete Projects - interactieve functies (NL)
 
const projectSummaries = {
  1:  'Constructie van een duurzame betonnenkelder voor residentieel gebruik .',
  2:  'Realisatie van een betonnen vloer inclusief wapening en bekisting. Fase 1(links) en fase 2 (rechts) aanwezig.',
  3:  'Betonnen vloer mooi gepolijst, aangelegd en gestructureerd.',
  4:  'Een alleenstaande betonnen muur afgewerkt met precisie.',
  5:  'Uitvoering van funderingswerken voor een industrieel project.',
  6:  'Betonnen kelder bekist, bewapend en professioneel afgewerkt.',
  7:  'Duurzaam betonwerk voor een magazijnvloer met precisie-afwerking.',
  8:  'Constructieve betonkelder samen met binnenwanden uitgebouwd.',
  9:  'Betonnen kelder voor een halfopen residentieel project afgewerkt.',
  10: 'Een betonnen inrit voorzien van hoogwaardige wapening en kwalitatieve bekisting.',
  11: 'Professionele betonwerken uitgevoerd met duurzame afwerking.',
  12: 'Aanleg en afwerking van een betonnen zwembadconstructie.',
  13: 'Fundering volledig aangelegd met netten en bekist via houten bekisting.',
  14: 'Professioneel funderingswerk bekist en aangelegd met netten bij een tankstation.',
  15: 'Grote betonkelder uitgebouwd met constructieve bewapening en bekisting.',
  16: 'Betonnen inrit afgewerkt en mooi gepolijst.',
  17: 'Fundering met stalen wapening, kimplaat en bekisting afgewerkt.',
  18: 'Kwalitatieve betonnen vloer bekist, afgewerkt en gepolijst.',
  19: 'Betonkelder voorzien met precisie en oog voor detail.',
  20: 'Betonnen zwembad project voorzien voor een lokale klant.',
  21: 'Constructie met precisie-afwerking voor een duurzame bedrijf en opslagtank voor een batterij met zonne-energie.'
}

const projectTitles = {
  1: 'Betonnen kelder ',
  2: 'Industriele vloeren',
  3: 'Betonnen vloer voor fabriek',
  4: 'Betonnen muur',
  5: 'Funderingsproject',
  6: 'Betonnen kelder in Geleen',
  7: 'Magazijnvloer betonproject in Lanaken',
  8: 'Betonkelder met binnenwanden',
  9: 'Residentiële betonkelder',
  10: 'Betonnen inrit in Houthalen-Helchteren',
  11: 'Duurzaam betonproject',
  12: 'Zwembadconstructie in Paal',
  13: 'Fundering met netten & bekisting',
  14: 'Funderingswerk bij tankstation',
  15: 'Residentieel betonkelder ',
  16: 'Gepolijste inrit',
  17: 'Fundering in Wommelgem',
  18: 'Betonnen vloer',
  19: 'Uitgebreid betonkelder',
  20: 'Betonnen zwembad',
  21: 'Betonnen opslagtank voor duurzame batterij'
};

const projectServices = {
  1: ['Betonnen kelder', 'Bekisting', 'Netten'],
  2: ['Betonnen vloer', 'Wapening', 'Bekisting','Polijsten'],
  3: ['Betonnen vloer', 'Polijsten', 'Structureren'],
  4: ['Betonnen muur', 'Afwerking', 'Bekisting'],
  5: ['Fundering', 'Industrieel betonwerk', 'Bekisting'],
  6: ['Betonnen kelder', 'Wapening', 'Afwerking'],
  7: ['Magazijnvloer', 'Polijsten'],
  8: ['Constructieve kelder', 'Binnenwanden', 'Bekisting'],
  9: ['Residentiële kelder', 'Afwerking', 'Polieren'],
  10: ['Betonnen inrit', 'Wapening', 'Bekisting'],
  11: ['Afwerking', 'Polieren'],
  12: ['Zwembadconstructie', 'Betonbekisting', 'Afwerking'],
  13: ['Fundering', 'Netten', 'Bekisting'],
  14: ['Funderingswerk', 'Bekisting', 'Netten'],
  15: ['Grote kelder', 'Bewapening', 'Bekisting'],
  16: ['Inrit', 'Afwerking', 'Polijsten'],
  17: ['Fundering', 'Stalen wapening', 'Bekisting'],
  18: ['Betonnen vloer', 'Bekisting', 'Polijsten'],
  19: ['Betonkelder', 'Bekisting'],
  20: ['Zwembad', 'Betonbekisting'],
  21: ['Betonconstructie','Bekisting','Wapening']
};

// Voeg hier uw echte foto's toe in de map /images en pas titles/descr/addresses aan.
const projects = Array.from({length:21}, (_, i) => {
  const id = i + 1;
  return {
    id,
    title: projectTitles[id] || `Project ${id}`,
    image: `images/project-${id}.jpg`, // verwacht afbeeldingen project-1.jpg ... project-6.jpg
    summary: projectSummaries[id] || 'Professionele betonwerken met duurzame afwerking.',
    services: projectServices[id] || []
  };
});

// --- CONFIG ---
const PORTFOLIO_PAGE_SIZE = 9;

// --- HELPERS ---
function qs(selector, scope=document){ return scope.querySelector(selector) }
function qsa(selector, scope=document){ return Array.from(scope.querySelectorAll(selector)) }

// Smooth scroll and active link handling
function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth', block:'start'});
}

// --- NAVIGATION ---
const navLinks = qsa('.nav-link');
navLinks.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = a.dataset.target;
    document.getElementById('mainNav')?.classList.remove('open');
    document.getElementById('menuToggle')?.setAttribute('aria-expanded', 'false');
    scrollToSection(target);
    setActiveNav(target);
  });
});

function setActiveNav(targetId){
  navLinks.forEach(n => n.classList.toggle('active', n.dataset.target === targetId));
}

// Mobile menu
const menuToggle = qs('#menuToggle');
const mainNav = qs('#mainNav');
if(menuToggle){
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// --- RECENTE PROJECTEN (eerste 3) ---
function renderRecent(){
  const recentGrid = qs('#recentGrid');
  recentGrid.innerHTML = '';
  const recent = projects.slice(0,3);
  recent.forEach(p => {
    const card = document.createElement('article');
    card.className = 'recent-card';
    card.innerHTML = `
      <img loading="lazy" src="${p.image}" alt="${p.title}">
      <div class="rc-body">
        <h4>${p.title}</h4>
        <p>${p.summary}</p>
      </div>
    `;
    card.addEventListener('click', () => {
      // Ga naar portfolio en open project
      scrollToSection('portfolio');
      // laten renderen en openen nadat portfolio gerenderd is:
      setTimeout(() => { openProject(p.id); }, 500);
    });
    recentGrid.appendChild(card);
  });
}

// --- PORTFOLIO RENDER & PAGINATIE ---
let currentPortfolioPage = 1;
function renderPortfolio(page=1){
  currentPortfolioPage = page;
  const grid = qs('#portfolioGrid');
  grid.innerHTML = '';
  const start = (page-1) * PORTFOLIO_PAGE_SIZE;
  const pageItems = projects.slice(start, start + PORTFOLIO_PAGE_SIZE);

  pageItems.forEach(p => {
    const card = document.createElement('article');
    card.className = 'portfolio-card';
    card.innerHTML = `
      <img loading="lazy" src="${p.image}" alt="${p.title}">
      <div class="pc-body">
        <h4>${p.title}</h4>
        <p class="muted">${p.summary}</p>
      </div>
    `;
    card.addEventListener('click', () => openProject(p.id));
    grid.appendChild(card);
  });

  renderPagination();
}

function renderPagination(){
  const pagination = qs('#portfolioPagination');
  pagination.innerHTML = '';
  const totalPages = Math.ceil(projects.length / PORTFOLIO_PAGE_SIZE);
  for(let i=1;i<=totalPages;i++){
    const btn = document.createElement('button');
    btn.textContent = String(i);
    btn.className = (i === currentPortfolioPage) ? 'active' : '';
    btn.addEventListener('click', () => {
      renderPortfolio(i);
      scrollToSection('portfolio');
    });
    pagination.appendChild(btn);
  }
  // prev/next
  if(totalPages > 1){
    const prev = document.createElement('button');
    prev.textContent = '◀';
    prev.addEventListener('click', () => renderPortfolio(Math.max(1, currentPortfolioPage - 1)));
    pagination.insertBefore(prev, pagination.firstChild);

    const next = document.createElement('button');
    next.textContent = '▶';
    next.addEventListener('click', () => renderPortfolio(Math.min(totalPages, currentPortfolioPage + 1)));
    pagination.appendChild(next);
  }
}

// --- PROJECT MODAL ---
const modal = qs('#projectModal');
const modalBody = qs('#modalBody');
const modalClose = qs('#modalClose');

function openProject(id){
  const p = projects.find(x => x.id === id);
  if(!p) return;
  modalBody.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p class="muted">${p.summary}</p>
    ${p.address ? `<p><strong>Adres:</strong> ${p.address}</p>` : ''}
    <p><strong>Uitgevoerde diensten:</strong> ${p.services.join(', ')}</p>
    <div style="margin-top:.8rem;">
      <a class="btn primary" href="mailto: concreteprojects.bv@gmail.com?subject=Vraag over ${encodeURIComponent(p.title)}&body=Beste medewerker, ik zou graag meer informatie over ${encodeURIComponent(p.title)} willen.">Contacteer ons</a>
      <button id="openCloseBtn" class="btn">Sluiten</button>
    </div>
  `;
  modal.setAttribute('aria-hidden','false');
  // update URL hash voor deep linking
  history.replaceState(null, '', `#project-${p.id}`);
  qs('#openCloseBtn').addEventListener('click', closeModal);
}

function closeModal(){
  modal.setAttribute('aria-hidden','true');
  // verwijder project hash
  if(location.hash && location.hash.startsWith('#project-')){
    history.replaceState(null, '', location.pathname + location.search + '#portfolio');
  }
}
modalClose.addEventListener('click', closeModal);
// close on overlay click
modal.addEventListener('click', (e) => {
  if(e.target === modal) closeModal();
});
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
});

// --- CONTACT FORM ---
// Simpele benadering: open mailto: link zodat gebruiker email kan verzenden via eigen mailclient.
// We valideren en vullen subject/body voor eenvoud.
const contactForm = qs('#contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = qs('#name').value.trim();
    const phone = qs('#phone').value.trim();
    const email = qs('#email').value.trim();
    const message = qs('#message').value.trim();

    if(!name || !email || !message){
      alert('Vul alstublieft naam, e-mail en bericht in.');
      return;
    }

    const subject = encodeURIComponent(`Aanvraag via website van ${name}`);
    const bodyParts = [
      `Naam: ${name}`,
      `Telefoon: ${phone}`,
      `E-mail: ${email}`,
      '',
      `Bericht:`,
      message
    ];
    const body = encodeURIComponent(bodyParts.join('\n'));
    // open mailto
    window.location.href = `mailto:concreteprojects.bv@gmail.com?subject=${subject}&body=${body}`;

    // bewaar concept in localStorage als backup
    try {
      localStorage.setItem('contactDraft', JSON.stringify({name, phone, email, message, ts: Date.now()}));
    } catch(e){}
  });

  qs('#resetForm').addEventListener('click', (e) => {
    contactForm.reset();
  });
}

// Offerte formulier handler
const quoteForm = qs('#quoteForm');
if(quoteForm){
  // Configure a server endpoint to receive offerte submissions.
  // Using FormSubmit (no server required): the form will be POSTed to your email via Formsubmit.co.
  // Note: you must verify the email after the first submission (FormSubmit will send a verification link).
  const QUOTE_ENDPOINT = 'https://formsubmit.co/concreteprojects.bv@gmail.com';

  quoteForm.addEventListener('submit', (e) => {
    const name = qs('#quoteName').value.trim();
    const phone = qs('#quotePhone').value.trim();
    const email = qs('#quoteEmail').value.trim();
    const description = qs('#quoteDescription').value.trim();
    const services = Array.from(qsa('input[name="services"]:checked')).map(cb => cb.value);
    const filesInput = qs('#quoteFiles');

    if(!name || !email || !description){
      e.preventDefault();
      alert('Vul alstublieft naam, e-mail en beschrijving in.');
      return;
    }
    if(services.length === 0){
      e.preventDefault();
      alert('Selecteer alstublieft minstens één dienst.');
      return;
    }

    // Save draft locally
    try { localStorage.setItem('quoteDraft', JSON.stringify({name, phone, email, services, description, ts: Date.now()})); } catch(e){}

    // If QUOTE_ENDPOINT is set, set form attributes and allow native submit (files will be included)
    if(QUOTE_ENDPOINT){
      // ensure control fields exist and update subject
      const subjInput = quoteForm.querySelector('input[name="_subject"]');
      if(subjInput) subjInput.value = `Offerte-aanvraag van ${name}`;
      const captchaInput = quoteForm.querySelector('input[name="_captcha"]');
      if(captchaInput) captchaInput.value = 'false';

      quoteForm.action = QUOTE_ENDPOINT;
      quoteForm.method = 'POST';
      quoteForm.enctype = 'multipart/form-data';
      // allow default submission to proceed (open in new tab because form has target="_blank")
      return;
    }

    // Otherwise, fallback to mailto (attachments cannot be attached)
    e.preventDefault();
    const subject = encodeURIComponent(`Offerte-aanvraag van ${name}`);
    const bodyParts = [
      `Naam: ${name}`,
      `Telefoon: ${phone}`,
      `E-mail: ${email}`,
      '',
      `Gewenste Diensten:`,
      services.map(s => `- ${s}`).join('\n'),
      '',
      `Beschrijving:`,
      description,
      '',
      'Bijlagen: Controleer of u eventuele foto\'s of documenten heeft bijgevoegd.'
    ];
    const mailBody = encodeURIComponent(bodyParts.join('\n'));
    window.location.href = `mailto:concreteprojects.bv@gmail.com?subject=${subject}&body=${mailBody}`;
  });

  qs('#resetQuoteForm').addEventListener('click', (e) => {
    quoteForm.reset();
  });
}
function init(){
  console.log('init: running');
  renderRecent();
  renderPortfolio(1);

  // als er een hash is met project-#, open die
  if(location.hash && location.hash.startsWith('#project-')){
    const id = parseInt(location.hash.replace('#project-',''), 10);
    // zorg dat portfolio gerenderd is en open na korte timeout
    setTimeout(() => openProject(id), 350);
  }

  // Update active nav on scroll (basic)
  const sections = qsa('main section[id]');
  const sectionTops = () => sections.map(s => ({id: s.id, top: s.getBoundingClientRect().top}));
  window.addEventListener('scroll', () => {
    const sc = sectionTops();
    let nearest = sc.reduce((acc,cur) => Math.abs(cur.top) < Math.abs(acc.top) ? cur : acc, sc[0]);
    if(nearest && Math.abs(nearest.top) < window.innerHeight/2){
      setActiveNav(nearest.id);
    }
  }, {passive:true});
}

document.addEventListener('DOMContentLoaded', init);
