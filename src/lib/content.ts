import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '~/i18n/dictionary';

export type Piece = CollectionEntry<'pieces'>;
export type Issue = CollectionEntry<'issues'>;

export async function getCurrentIssue(): Promise<Issue> {
  const issues = await getCollection('issues');
  const current = issues.find((i) => i.data.isCurrent);
  if (!current) throw new Error('No issue marked isCurrent in src/content/issues');
  return current;
}

export async function getAllIssues(): Promise<Issue[]> {
  const issues = await getCollection('issues');
  return issues.sort((a, b) => b.data.number.localeCompare(a.data.number));
}

export async function getPiecesForIssue(issueNumber: string, lang: Lang): Promise<Piece[]> {
  const all = await getCollection('pieces');
  return all
    .filter((p) => p.data.issue === issueNumber && p.data.locale === lang)
    .sort((a, b) => (a.data.pieceNumber ?? 99) - (b.data.pieceNumber ?? 99));
}

export async function getAllPieces(lang: Lang): Promise<Piece[]> {
  const all = await getCollection('pieces');
  return all
    .filter((p) => p.data.locale === lang)
    .sort((a, b) => {
      const issue = b.data.issue.localeCompare(a.data.issue);
      if (issue !== 0) return issue;
      return (a.data.pieceNumber ?? 99) - (b.data.pieceNumber ?? 99);
    });
}

export async function getPiece(slug: string, lang: Lang): Promise<Piece | undefined> {
  const all = await getCollection('pieces');
  return all.find((p) => p.data.pieceSlug === slug && p.data.locale === lang);
}

export async function getPieceSlugs(): Promise<string[]> {
  const all = await getCollection('pieces');
  const set = new Set<string>();
  for (const p of all) if (p.data.hasBody) set.add(p.data.pieceSlug);
  return Array.from(set);
}

const SECTION_LABEL_KEY: Record<Piece['data']['section'], string> = {
  essay: 'sec-essay',
  interview: 'sec-int',
  note: 'sec-note',
  agenda: 'sec-agenda',
};

export function sectionLabelKey(section: Piece['data']['section']): string {
  return SECTION_LABEL_KEY[section];
}

export function formatIssueLabel(issueNumber: string, lang: Lang): string {
  return lang === 'pt' ? `N.º ${issueNumber}` : `No. ${issueNumber}`;
}

export function formatDate(date: Date, lang: Lang): string {
  const m = lang === 'pt'
    ? ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${d} ${m[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function formatDateNumeric(date: Date): string {
  const d = String(date.getUTCDate()).padStart(2, '0');
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const y = date.getUTCFullYear();
  return `${d}.${m}.${y}`;
}

export function formatWords(n: number, lang: Lang): string {
  return `${n.toLocaleString(lang === 'pt' ? 'pt-PT' : 'en-GB')} ${lang === 'pt' ? 'palavras' : 'words'}`;
}
