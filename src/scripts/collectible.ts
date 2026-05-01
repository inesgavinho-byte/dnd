// ─────────────────────────────────────────────────────────────────────
// Collectible-object behaviour, layered on top of the editorial site.
//
// Adds:
//   · a persistent serial number per visitor (localStorage `dnd:copy`)
//   · margin-note rendering of footnotes on wide viewports
//   · the issue-number → colophon overlay
//   · placement of the received-stamp date
// ─────────────────────────────────────────────────────────────────────

const KEY = 'dnd:copy';
const FIRST_VISIT_KEY = 'dnd:firstVisit';

function ensureCopyNumber(): { num: string; isReturning: boolean } {
  let n = localStorage.getItem(KEY);
  let isReturning = !!n;
  if (!n) {
    const r = Math.floor(1 + Math.random() * 9999);
    n = String(r).padStart(4, '0');
    localStorage.setItem(KEY, n);
    localStorage.setItem(FIRST_VISIT_KEY, new Date().toISOString());
  }
  return { num: n, isReturning };
}

function format(num: string): string {
  return `${num}/∞`;
}

function placeCopyMark(num: string, isReturning: boolean) {
  const isPT = document.documentElement.lang === 'pt';
  const greet = isReturning
    ? isPT
      ? 'bem-vindo de volta, cópia n.º'
      : 'welcome back, copy nº'
    : isPT
      ? 'esta é a sua cópia n.º'
      : 'this is your copy, nº';

  // Tiny mark anchored to the cover kicker on the home page.
  const kicker = document.querySelector('.cover-lead .kicker');
  if (kicker && !document.querySelector('.copy-mark')) {
    const mark = document.createElement('div');
    mark.className = 'copy-mark';
    mark.innerHTML = `<span class="copy-greet">${greet}</span> <span class="copy-num">${format(num)}</span>`;
    kicker.parentElement?.insertBefore(mark, kicker.nextSibling);
  }

  // A second mark in the article foot (received-stamp).
  const foot = document.querySelector('.article-foot .author-card');
  if (foot && !document.querySelector('.received-stamp')) {
    const stamp = document.createElement('div');
    stamp.className = 'received-stamp';
    const date = isPT ? '12·iii·mmxxvi' : '12·iii·mmxxvi';
    stamp.innerHTML = `
      <div class="rs-ring">
        <div class="rs-l">${isPT ? 'recebido' : 'received'}</div>
        <div class="rs-c">${date}</div>
        <div class="rs-r">THE HOUSE</div>
        <div class="rs-num">n.º ${format(num)}</div>
      </div>
    `;
    foot.parentElement?.insertBefore(stamp, foot);
  }

  // Mirror the number into the colophon overlay if mounted.
  const cn = document.getElementById('copy-num-colophon');
  if (cn) cn.textContent = format(num);
  const bp = document.getElementById('bookplate-num');
  if (bp) bp.textContent = format(num);
}

function wireColophon() {
  const overlay = document.getElementById('colophon');
  if (!overlay) return;
  const trigger = document.querySelector<HTMLElement>('.mast-substrip > div:last-child');
  const close = overlay.querySelector('.colophon-close');
  const open = () => {
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('open'));
  };
  const dismiss = () => {
    overlay.classList.remove('open');
    setTimeout(() => (overlay.hidden = true), 300);
  };
  trigger?.addEventListener('click', open);
  close?.addEventListener('click', dismiss);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) dismiss();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) dismiss();
  });
}

// ─── margin notes ───────────────────────────────────────────────────
function wireMarginNotes() {
  const article = document.querySelector<HTMLElement>('.article-body');
  if (!article) return;

  const notes: { sup: HTMLElement; aside: HTMLElement }[] = [];

  document.querySelectorAll<HTMLElement>('sup.fn').forEach((sup) => {
    const pop = sup.querySelector<HTMLElement>('.fn-pop');
    if (!pop) return;
    const num = (sup.firstChild?.textContent ?? '').trim() || sup.textContent?.match(/\d+/)?.[0] || '';
    const aside = document.createElement('aside');
    aside.className = 'margin-note';
    aside.innerHTML = `<span class="num">${num}</span><span class="body">${pop.innerHTML}</span>`;
    article.appendChild(aside);
    notes.push({ sup, aside });
  });

  const place = () => {
    const wide = window.matchMedia('(min-width: 1100px)').matches;
    document.body.classList.toggle('with-margin-notes', wide);
    if (!wide) {
      notes.forEach(({ aside }) => (aside.style.top = ''));
      return;
    }
    const articleTop = article.getBoundingClientRect().top + window.scrollY;
    notes.forEach(({ sup, aside }) => {
      const supTop = sup.getBoundingClientRect().top + window.scrollY;
      aside.style.top = `${supTop - articleTop}px`;
    });
  };

  place();
  window.addEventListener('resize', place);
  // Re-place after fonts settle and on full load.
  window.addEventListener('load', place);
  if ('fonts' in document) (document as any).fonts.ready.then(place);
}

// ─── boot ───────────────────────────────────────────────────────────
(function init() {
  const { num, isReturning } = ensureCopyNumber();
  placeCopyMark(num, isReturning);
  wireColophon();
  wireMarginNotes();
})();
