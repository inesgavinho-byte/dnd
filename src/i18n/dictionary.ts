export type Lang = 'en' | 'pt';

export const LANGS: Lang[] = ['en', 'pt'];

type Dict = Record<string, string>;

// UI strings only. Editorial copy lives in src/content/issues + src/content/pieces.
export const I18N: Record<Lang, Dict> = {
  en: {
    'mast-l1': 'No. 003 · Spring 2026',
    'mast-l2': 'Biweekly · Free · Lisboa',
    'mast-c': 'a publication on collectible design & material culture',
    search: 'Search',

    'nav-current': 'Current Issue',
    'nav-essay': 'The Essay',
    'nav-archive': 'Archive',
    'nav-about': 'About',
    'nav-newsletter': 'Newsletter',

    'sub-l': 'established 2026 · Lisboa',
    'sub-c': 'a publication of THE HOUSE',
    'sub-r': 'issue 003 of 026',

    'cover-kick-r': 'Now reading',
    'figcap-l': 'Tiago Casanova · Caminha · 2026',

    'meta-by': 'By',
    'meta-pub': 'Published',
    'meta-len': 'Length',
    'meta-read': 'Read',

    'contents-l': 'Contents',

    'sec-essay': 'The Essay',
    'sec-int': 'The Interview',
    'sec-note': 'The Notes',
    'sec-agenda': 'The Agenda',

    'agenda-l': 'Agenda',
    'agenda-r': 'spring 2026 · selected dates',

    'arch-h': 'The Archive',
    'filt-all': 'All',
    'filt-e': 'Essays',
    'filt-i': 'Interviews',
    'filt-n': 'Notes',
    'filt-a': 'Agenda',

    'about-lab': 'A publication of THE HOUSE',
    'about-h':
      '<em>Do Not Disturb</em> is a publication on collectible design and contemporary material culture.',
    'about-p1':
      '<span class="lead">Founded in early 2026</span> and published by THE HOUSE — the cultural foundation of the GAVINHO atelier in Lisboa — Do Not Disturb appears every two weeks. It is open, free, and bilingual from the first issue.',
    'about-p2':
      'We publish one essay, one short interview, three to five critical notes, and a small agenda. We do not publish press releases, we do not run sponsored content, and we have no calendar to defend.',
    'about-p3':
      '<span class="lead">The position is editorial</span>, not institutional. The editor and the contributors sign their work and take their positions. We aim to occupy, in the field of collectible design, the room that thoughtful publications occupy in adjacent fields — without the institutional throat-clearing that often replaces an argument.',
    'about-p4':
      'The publication is conceived as an autonomous editorial object. The relationship to THE HOUSE is endorsing, not restrictive: Do Not Disturb keeps its editorial autonomy; THE HOUSE keeps its quiet.',
    'about-pr-1': 'Thinking, <em>not communicating.</em>',
    'about-pr-1p':
      'We are not the press office of an institution. We are an editorial position with an opinion, signed and dated.',
    'about-pr-2': 'Authorial, <em>not corporate.</em>',
    'about-pr-2p':
      "The editor has an identity. The contributors sign. The texts have positions, and the positions are the writers'.",
    'about-pr-3': 'International, <em>from day one.</em>',
    'about-pr-3p':
      'The field is collectible design, globally. The contributors write from where they are. The questions are not bound by passport.',

    'news-h': 'The Letter',
    'news-l':
      'A short letter, every other Thursday, with the new issue and almost nothing else.',
    'news-ph': 'your.email@here',
    'news-btn': 'Subscribe →',
    'foot-pub': 'The publication',
    'foot-current': 'Current issue',
    'foot-archive': 'Archive',
    'foot-auth': 'Authors',
    'foot-rss': 'RSS',
    'foot-house': 'THE HOUSE',
    'foot-about': 'About',
    'foot-prog': 'Programme',
    'foot-cont': 'Contact',
    'foot-pra': 'Praça da Alegria 66A',
    'foot-leg': 'Legal',
    'foot-pri': 'Privacy',
    'foot-tre': 'Terms',
    'foot-coo': 'Cookies',
    'foot-acc': 'Accessibility',
    'foot-tag': 'a publication of THE HOUSE',
    'foot-set': 'set in cormorant & quattrocento',
    'foot-rights': '© 2026 Do Not Disturb · Lisboa',
  },

  pt: {
    'mast-l1': 'N.º 003 · Primavera 2026',
    'mast-l2': 'Quinzenal · Gratuita · Lisboa',
    'mast-c': 'uma publicação sobre design coleccionável e cultura material',
    search: 'Pesquisar',

    'nav-current': 'Edição actual',
    'nav-essay': 'O Ensaio',
    'nav-archive': 'Arquivo',
    'nav-about': 'Sobre',
    'nav-newsletter': 'Newsletter',

    'sub-l': 'fundada em 2026 · Lisboa',
    'sub-c': 'uma edição da THE HOUSE',
    'sub-r': 'edição 003 de 026',

    'cover-kick-r': 'A ler',
    'figcap-l': 'Tiago Casanova · Caminha · 2026',

    'meta-by': 'Por',
    'meta-pub': 'Publicado',
    'meta-len': 'Extensão',
    'meta-read': 'Leitura',

    'contents-l': 'Índice',

    'sec-essay': 'O Ensaio',
    'sec-int': 'A Entrevista',
    'sec-note': 'As Notas',
    'sec-agenda': 'A Agenda',

    'agenda-l': 'Agenda',
    'agenda-r': 'primavera 2026 · selecção',

    'arch-h': 'O Arquivo',
    'filt-all': 'Tudo',
    'filt-e': 'Ensaios',
    'filt-i': 'Entrevistas',
    'filt-n': 'Notas',
    'filt-a': 'Agenda',

    'about-lab': 'Uma edição da THE HOUSE',
    'about-h':
      '<em>Do Not Disturb</em> é uma publicação sobre design coleccionável e cultura material contemporânea.',
    'about-p1':
      '<span class="lead">Fundada no início de 2026</span> e publicada pela THE HOUSE — a fundação cultural do atelier GAVINHO em Lisboa — a Do Not Disturb sai quinzenalmente. É aberta, gratuita e bilingue desde a primeira edição.',
    'about-p2':
      'Publicamos um ensaio, uma entrevista breve, três a cinco notas críticas e uma pequena agenda. Não publicamos press releases, não temos conteúdos patrocinados, e não temos calendário a defender.',
    'about-p3':
      '<span class="lead">A posição é editorial</span>, não institucional. O editor e os colaboradores assinam o trabalho e tomam posições. Procuramos ocupar, no campo do design coleccionável, o lugar que as publicações sérias ocupam em campos adjacentes — sem o pigarrear institucional que tantas vezes substitui um argumento.',
    'about-p4':
      'A publicação é concebida como objecto editorial autónomo. A relação com a THE HOUSE é endossante, não restritiva: a Do Not Disturb mantém autonomia editorial; a THE HOUSE mantém o seu silêncio.',
    'about-pr-1': 'Pensar, <em>não comunicar.</em>',
    'about-pr-1p':
      'Não somos o gabinete de imprensa de uma instituição. Somos uma posição editorial com opinião, assinada e datada.',
    'about-pr-2': 'Autoral, <em>não corporativo.</em>',
    'about-pr-2p':
      'O editor tem identidade. Os colaboradores assinam. Os textos têm posição, e a posição é dos autores.',
    'about-pr-3': 'Internacional, <em>desde o primeiro dia.</em>',
    'about-pr-3p':
      'O campo é o design coleccionável, globalmente. Os colaboradores escrevem de onde estão. As perguntas não estão presas ao passaporte.',

    'news-h': 'A Carta',
    'news-l':
      'Uma carta breve, em quintas-feiras alternadas, com a nova edição e quase nada mais.',
    'news-ph': 'o.seu.email@aqui',
    'news-btn': 'Subscrever →',
    'foot-pub': 'A publicação',
    'foot-current': 'Edição actual',
    'foot-archive': 'Arquivo',
    'foot-auth': 'Autores',
    'foot-rss': 'RSS',
    'foot-house': 'THE HOUSE',
    'foot-about': 'Sobre',
    'foot-prog': 'Programa',
    'foot-cont': 'Contacto',
    'foot-pra': 'Praça da Alegria 66A',
    'foot-leg': 'Legal',
    'foot-pri': 'Privacidade',
    'foot-tre': 'Termos',
    'foot-coo': 'Cookies',
    'foot-acc': 'Acessibilidade',
    'foot-tag': 'uma edição da THE HOUSE',
    'foot-set': 'composto em cormorant & quattrocento',
    'foot-rights': '© 2026 Do Not Disturb · Lisboa',
  },
};

export function t(lang: Lang, key: string): string {
  return I18N[lang][key] ?? I18N.en[key] ?? key;
}

export function pathFor(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/pt' : `/pt${clean}`;
}
