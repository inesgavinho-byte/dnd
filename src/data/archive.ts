export type Section = 'essay' | 'interview' | 'note' | 'agenda';

export interface ArchiveEntry {
  iss: string;
  sec: Section;
  ttl: { en: string; pt: string };
  auth: { en: string; pt: string };
  when: { en: string; pt: string };
  slug?: string;
}

export const ARCHIVE: ArchiveEntry[] = [
  {
    iss: '003',
    sec: 'essay',
    slug: 'the-long-shelf-life-of-a-good-chair',
    ttl: {
      en: 'The long shelf life of a <em>good chair.</em>',
      pt: 'A longa vida de uma <em>boa cadeira.</em>',
    },
    auth: { en: 'Mariana Cabral', pt: 'Mariana Cabral' },
    when: { en: '12 Mar 2026', pt: '12 Mar 2026' },
  },
  {
    iss: '003',
    sec: 'interview',
    ttl: {
      en: 'A conversation with <em>Lola Vicente</em>.',
      pt: 'Uma conversa com <em>Lola Vicente</em>.',
    },
    auth: { en: 'with Tomás Real', pt: 'com Tomás Real' },
    when: { en: '12 Mar 2026', pt: '12 Mar 2026' },
  },
  {
    iss: '003',
    sec: 'note',
    ttl: {
      en: 'On the new António Bolota at Galeria Pedro Cera.',
      pt: 'Sobre o novo António Bolota na Galeria Pedro Cera.',
    },
    auth: { en: 'Joana Sequeira', pt: 'Joana Sequeira' },
    when: { en: '12 Mar 2026', pt: '12 Mar 2026' },
  },
  {
    iss: '003',
    sec: 'note',
    ttl: {
      en: 'Antwerp, in passing: a show that should not have travelled.',
      pt: 'Antuérpia, de passagem: uma exposição que não devia ter viajado.',
    },
    auth: { en: 'Hugo Maertens', pt: 'Hugo Maertens' },
    when: { en: '12 Mar 2026', pt: '12 Mar 2026' },
  },
  {
    iss: '003',
    sec: 'note',
    ttl: {
      en: 'Mexico City: an EWE edition that quietly says everything.',
      pt: 'Cidade do México: uma edição da EWE que diz silenciosamente tudo.',
    },
    auth: { en: 'Sofía Núñez', pt: 'Sofía Núñez' },
    when: { en: '12 Mar 2026', pt: '12 Mar 2026' },
  },
  {
    iss: '003',
    sec: 'note',
    ttl: {
      en: 'Athens, in winter: when the object becomes a position.',
      pt: 'Atenas, no Inverno: quando o objecto se torna uma posição.',
    },
    auth: { en: 'Eleni Karagianni', pt: 'Eleni Karagianni' },
    when: { en: '12 Mar 2026', pt: '12 Mar 2026' },
  },
  {
    iss: '002',
    sec: 'essay',
    ttl: {
      en: 'The auction room as a private museum.',
      pt: 'A sala de leilões como museu privado.',
    },
    auth: { en: 'Tomás Real', pt: 'Tomás Real' },
    when: { en: '27 Feb 2026', pt: '27 Fev 2026' },
  },
  {
    iss: '002',
    sec: 'interview',
    ttl: {
      en: 'A long conversation with the lighting maker Pedro Sousa.',
      pt: 'Uma conversa longa com o autor de luminárias Pedro Sousa.',
    },
    auth: { en: 'with Inês Gavinho', pt: 'com Inês Gavinho' },
    when: { en: '27 Feb 2026', pt: '27 Fev 2026' },
  },
  {
    iss: '002',
    sec: 'note',
    ttl: {
      en: 'Stockholm, briefly: a fair that has decided to be smaller.',
      pt: 'Estocolmo, brevemente: uma feira que decidiu ser mais pequena.',
    },
    auth: { en: 'Klara Lindqvist', pt: 'Klara Lindqvist' },
    when: { en: '27 Feb 2026', pt: '27 Fev 2026' },
  },
  {
    iss: '002',
    sec: 'note',
    ttl: {
      en: 'On the André Sousa edition for Galeria Foco.',
      pt: 'Sobre a edição de André Sousa para a Galeria Foco.',
    },
    auth: { en: 'Catarina Almeida', pt: 'Catarina Almeida' },
    when: { en: '27 Feb 2026', pt: '27 Fev 2026' },
  },
  {
    iss: '002',
    sec: 'note',
    ttl: {
      en: 'A book by Charlotte Perriand we should be reading again.',
      pt: 'Um livro de Charlotte Perriand que devíamos voltar a ler.',
    },
    auth: { en: 'Mariana Cabral', pt: 'Mariana Cabral' },
    when: { en: '27 Feb 2026', pt: '27 Fev 2026' },
  },
  {
    iss: '002',
    sec: 'agenda',
    ttl: {
      en: 'Spring at THE HOUSE: a programme of slow openings.',
      pt: 'Primavera na THE HOUSE: um programa de inaugurações lentas.',
    },
    auth: { en: 'The Editors', pt: 'Os Editores' },
    when: { en: '27 Feb 2026', pt: '27 Fev 2026' },
  },
  {
    iss: '001',
    sec: 'essay',
    ttl: {
      en: 'Beginning slowly: a programme of <em>refusal.</em>',
      pt: 'Começar devagar: um programa de <em>recusa.</em>',
    },
    auth: { en: 'Inês Gavinho', pt: 'Inês Gavinho' },
    when: { en: '13 Feb 2026', pt: '13 Fev 2026' },
  },
  {
    iss: '001',
    sec: 'interview',
    ttl: {
      en: 'On the workshop, the apprenticeship and the patience of the maker.',
      pt: 'Sobre a oficina, a aprendizagem e a paciência do autor.',
    },
    auth: { en: 'with Joaquim Vieira', pt: 'com Joaquim Vieira' },
    when: { en: '13 Feb 2026', pt: '13 Fev 2026' },
  },
  {
    iss: '001',
    sec: 'note',
    ttl: {
      en: 'Madrid: the new Gabriel Orozco at Kurimanzutto.',
      pt: 'Madrid: o novo Gabriel Orozco na Kurimanzutto.',
    },
    auth: { en: 'Sofía Núñez', pt: 'Sofía Núñez' },
    when: { en: '13 Feb 2026', pt: '13 Fev 2026' },
  },
  {
    iss: '001',
    sec: 'note',
    ttl: {
      en: 'Two recent editions by Studio Anastasia.',
      pt: 'Duas edições recentes do Studio Anastasia.',
    },
    auth: { en: 'Eleni Karagianni', pt: 'Eleni Karagianni' },
    when: { en: '13 Feb 2026', pt: '13 Fev 2026' },
  },
  {
    iss: '001',
    sec: 'note',
    ttl: {
      en: 'On the closure, and reopening, of a small bookshop in Chiado.',
      pt: 'Sobre o encerramento, e reabertura, de uma pequena livraria no Chiado.',
    },
    auth: { en: 'The Editors', pt: 'Os Editores' },
    when: { en: '13 Feb 2026', pt: '13 Fev 2026' },
  },
  {
    iss: '001',
    sec: 'agenda',
    ttl: {
      en: 'Founding programme: a list of intentions, dated.',
      pt: 'Programa de fundação: uma lista de intenções, datada.',
    },
    auth: { en: 'The Editors', pt: 'Os Editores' },
    when: { en: '13 Feb 2026', pt: '13 Fev 2026' },
  },
];
