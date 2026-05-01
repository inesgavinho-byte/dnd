#!/usr/bin/env node
// One-shot generator: writes stub MDX files for pieces that don't yet
// have full bodies. Each stub carries full bilingual frontmatter so it
// shows up correctly in the archive and TOC; the body is intentionally
// empty until the writer files copy.
//
// Re-run with: node scripts/generate-piece-stubs.mjs

import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'src/content/pieces');
mkdirSync(OUT, { recursive: true });

const PIECES = [
  // ── Issue 003 (the chair essay is a real piece, written separately)
  {
    pieceSlug: '003-lola-vicente-interview',
    issue: '003', section: 'interview', pieceNumber: 2, date: '2026-03-12',
    title: { en: 'A conversation with <em>Lola Vicente</em>, who has stopped buying things that need to be photographed.',
             pt: 'Uma conversa com <em>Lola Vicente</em>, que deixou de comprar coisas que precisam de ser fotografadas.' },
    author: { en: 'with Tomás Real', pt: 'com Tomás Real' },
    lengthWords: 980,
  },
  {
    pieceSlug: '003-bolota-pedro-cera',
    issue: '003', section: 'note', pieceNumber: 3, date: '2026-03-12',
    title: { en: 'On the new António Bolota at Galeria Pedro Cera.',
             pt: 'Sobre o novo António Bolota na Galeria Pedro Cera.' },
    author: { en: 'Joana Sequeira', pt: 'Joana Sequeira' },
    lengthWords: 410,
  },
  {
    pieceSlug: '003-antwerp-in-passing',
    issue: '003', section: 'note', pieceNumber: 4, date: '2026-03-12',
    title: { en: 'Antwerp, in passing: a show that should not have travelled.',
             pt: 'Antuérpia, de passagem: uma exposição que não devia ter viajado.' },
    author: { en: 'Hugo Maertens', pt: 'Hugo Maertens' },
    lengthWords: 390,
  },
  {
    pieceSlug: '003-mexico-ewe',
    issue: '003', section: 'note', pieceNumber: 5, date: '2026-03-12',
    title: { en: 'Mexico City: an EWE edition that quietly says <em>everything.</em>',
             pt: 'Cidade do México: uma edição da EWE que diz silenciosamente <em>tudo.</em>' },
    author: { en: 'Sofía Núñez', pt: 'Sofía Núñez' },
    lengthWords: 340,
  },
  {
    pieceSlug: '003-athens-in-winter',
    issue: '003', section: 'note', pieceNumber: 6, date: '2026-03-12',
    title: { en: 'Athens, in winter: when the object becomes <em>a position.</em>',
             pt: 'Atenas, no Inverno: quando o objecto se torna <em>uma posição.</em>' },
    author: { en: 'Eleni Karagianni', pt: 'Eleni Karagianni' },
    lengthWords: 450,
  },

  // ── Issue 002
  {
    pieceSlug: 'the-auction-room-as-a-private-museum',
    issue: '002', section: 'essay', pieceNumber: 1, date: '2026-02-27',
    title: { en: 'The auction room as a private museum.',
             pt: 'A sala de leilões como museu privado.' },
    author: { en: 'Tomás Real', pt: 'Tomás Real' },
    lengthWords: 2150, readMinutes: 12,
  },
  {
    pieceSlug: '002-pedro-sousa-interview',
    issue: '002', section: 'interview', pieceNumber: 2, date: '2026-02-27',
    title: { en: 'A long conversation with the lighting maker Pedro Sousa.',
             pt: 'Uma conversa longa com o autor de luminárias Pedro Sousa.' },
    author: { en: 'with Inês Gavinho', pt: 'com Inês Gavinho' },
    lengthWords: 1480,
  },
  {
    pieceSlug: '002-stockholm-smaller-fair',
    issue: '002', section: 'note', pieceNumber: 3, date: '2026-02-27',
    title: { en: 'Stockholm, briefly: a fair that has decided to be smaller.',
             pt: 'Estocolmo, brevemente: uma feira que decidiu ser mais pequena.' },
    author: { en: 'Klara Lindqvist', pt: 'Klara Lindqvist' },
    lengthWords: 380,
  },
  {
    pieceSlug: '002-andre-sousa-foco',
    issue: '002', section: 'note', pieceNumber: 4, date: '2026-02-27',
    title: { en: 'On the André Sousa edition for Galeria Foco.',
             pt: 'Sobre a edição de André Sousa para a Galeria Foco.' },
    author: { en: 'Catarina Almeida', pt: 'Catarina Almeida' },
    lengthWords: 420,
  },
  {
    pieceSlug: '002-perriand-reading',
    issue: '002', section: 'note', pieceNumber: 5, date: '2026-02-27',
    title: { en: 'A book by Charlotte Perriand we should be reading again.',
             pt: 'Um livro de Charlotte Perriand que devíamos voltar a ler.' },
    author: { en: 'Mariana Cabral', pt: 'Mariana Cabral' },
    lengthWords: 360,
  },
  {
    pieceSlug: '002-spring-programme',
    issue: '002', section: 'agenda', pieceNumber: 6, date: '2026-02-27',
    title: { en: 'Spring at THE HOUSE: a programme of slow openings.',
             pt: 'Primavera na THE HOUSE: um programa de inaugurações lentas.' },
    author: { en: 'The Editors', pt: 'Os Editores' },
    lengthWords: 290,
  },

  // ── Issue 001
  {
    pieceSlug: 'beginning-slowly-a-programme-of-refusal',
    issue: '001', section: 'essay', pieceNumber: 1, date: '2026-02-13',
    title: { en: 'Beginning slowly: a programme of <em>refusal.</em>',
             pt: 'Começar devagar: um programa de <em>recusa.</em>' },
    author: { en: 'Inês Gavinho', pt: 'Inês Gavinho' },
    lengthWords: 1980, readMinutes: 11,
  },
  {
    pieceSlug: '001-joaquim-vieira-interview',
    issue: '001', section: 'interview', pieceNumber: 2, date: '2026-02-13',
    title: { en: 'On the workshop, the apprenticeship and the patience of the maker.',
             pt: 'Sobre a oficina, a aprendizagem e a paciência do autor.' },
    author: { en: 'with Joaquim Vieira', pt: 'com Joaquim Vieira' },
    lengthWords: 1240,
  },
  {
    pieceSlug: '001-orozco-kurimanzutto',
    issue: '001', section: 'note', pieceNumber: 3, date: '2026-02-13',
    title: { en: 'Madrid: the new Gabriel Orozco at Kurimanzutto.',
             pt: 'Madrid: o novo Gabriel Orozco na Kurimanzutto.' },
    author: { en: 'Sofía Núñez', pt: 'Sofía Núñez' },
    lengthWords: 320,
  },
  {
    pieceSlug: '001-studio-anastasia',
    issue: '001', section: 'note', pieceNumber: 4, date: '2026-02-13',
    title: { en: 'Two recent editions by Studio Anastasia.',
             pt: 'Duas edições recentes do Studio Anastasia.' },
    author: { en: 'Eleni Karagianni', pt: 'Eleni Karagianni' },
    lengthWords: 290,
  },
  {
    pieceSlug: '001-chiado-bookshop',
    issue: '001', section: 'note', pieceNumber: 5, date: '2026-02-13',
    title: { en: 'On the closure, and reopening, of a small bookshop in Chiado.',
             pt: 'Sobre o encerramento, e reabertura, de uma pequena livraria no Chiado.' },
    author: { en: 'The Editors', pt: 'Os Editores' },
    lengthWords: 380,
  },
  {
    pieceSlug: '001-founding-programme',
    issue: '001', section: 'agenda', pieceNumber: 6, date: '2026-02-13',
    title: { en: 'Founding programme: a list of intentions, dated.',
             pt: 'Programa de fundação: uma lista de intenções, datada.' },
    author: { en: 'The Editors', pt: 'Os Editores' },
    lengthWords: 240,
  },
];

function quoted(s) {
  // YAML-safe single-line: wrap in single quotes, escape single quotes by doubling.
  return `'${String(s).replace(/'/g, "''")}'`;
}

function frontmatter(p, locale) {
  const lines = [
    `pieceSlug: ${quoted(p.pieceSlug)}`,
    `locale: ${locale}`,
    `issue: '${p.issue}'`,
    `section: ${p.section}`,
    `pieceNumber: ${p.pieceNumber}`,
    `title: ${quoted(p.title[locale])}`,
    `author: ${quoted(p.author[locale])}`,
    `date: ${p.date}`,
    p.lengthWords ? `lengthWords: ${p.lengthWords}` : null,
    p.readMinutes ? `readMinutes: ${p.readMinutes}` : null,
    `hasBody: false`,
  ].filter(Boolean);
  return `---\n${lines.join('\n')}\n---\n`;
}

let written = 0;
for (const p of PIECES) {
  for (const locale of ['en', 'pt']) {
    const path = resolve(OUT, `${p.pieceSlug}.${locale}.mdx`);
    if (existsSync(path)) continue;
    writeFileSync(path, frontmatter(p, locale));
    written++;
  }
}
console.log(`wrote ${written} stub piece files`);
