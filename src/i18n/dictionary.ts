export type Lang = 'en' | 'pt';

export const LANGS: Lang[] = ['en', 'pt'];

type Dict = Record<string, string>;

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

    'cover-kick-l': 'The Essay · No. 003',
    'cover-kick-r': 'Now reading',
    'cover-lede': 'The long shelf life of a <em>good chair.</em>',
    'cover-deck':
      'A piece of furniture, properly made, has a longer civic life than most of the institutions that house it. On collectibility, repair, and what the auction room remembers when the catalogue forgets.',
    'meta-by': 'By',
    'meta-pub': 'Published',
    'meta-len': 'Length',
    'meta-read': 'Read',
    'figcap-l': 'Tiago Casanova · Caminha · 2026',

    'contents-l': 'Contents',
    'contents-c': 'six pieces · one fortnight',
    'contents-r': 'pp. 001 — 048',
    'sec-essay': 'The Essay',
    'sec-int': 'The Interview',
    'sec-note': 'The Notes',

    'toc-1': 'The long shelf life of a <em>good chair.</em>',
    'toc-2':
      'A conversation with <em>Lola Vicente</em>, who has stopped buying things that need to be photographed.',
    'toc-3': 'On the new António Bolota at Galeria Pedro Cera.',
    'toc-4': 'Antwerp, in passing: a show that should not have travelled.',
    'toc-5': 'Mexico City: an EWE edition that quietly says <em>everything.</em>',
    'toc-6': 'Athens, in winter: when the object becomes <em>a position.</em>',

    'fob-l1': 'From the editor',
    'fob-h1': 'A note on what we have decided <em>not</em> to write about.',
    'fob-p1':
      'Each issue of Do Not Disturb begins with the same exercise. We list the announcements we will not be covering this fortnight — the openings, the launches, the press notes that arrived urgently. The list is longer than the issue.',
    'fob-by1': '— Inês Gavinho, editor',
    'fob-l2': 'Contributors',
    'fob-h2': 'Six writers, four cities, one shared <em>conviction.</em>',
    'fob-p2':
      'Mariana Cabral writes from Porto. Tomás Real from Madrid. Joana Sequeira and Hugo Maertens contribute from Lisboa and Antwerp. Sofía Núñez sends notes from Mexico City; Eleni Karagianni from Athens.',
    'fob-by2': '— full bios in the Authors page',
    'fob-l3': 'Forthcoming',
    'fob-h3': 'No. 004 is being assembled around the question of <em>the commission.</em>',
    'fob-p3':
      'A long essay on the economics of being asked to make. An interview with a foundation that has decided to commission less, and slower. Three notes from a season of fairs we are choosing not to attend.',
    'fob-by3': '— 26 March 2026',

    'agenda-l': 'Agenda',
    'agenda-r': 'spring 2026 · selected dates',
    'ag-1-when': '14 — 28 March',
    'ag-1-where': 'THE HOUSE · Lisboa',
    'ag-1': 'A reading room of recent acquisitions, open Thursdays only, by appointment.',
    'ag-2-when': '02 April · 19h',
    'ag-2-where': 'Conversation',
    'ag-2': '<em>Repair as practice</em>: Mariana Cabral with the bookbinder Júlia Mota.',
    'ag-3-when': '19 April · 18h30',
    'ag-3-where': 'Lecture',
    'ag-3': 'Lola Vicente: <em>“The first thing I bought was a mistake.”</em>',
    'ag-4-when': 'May, all month',
    'ag-4-where': 'Closed for installation',
    'ag-4': 'No. 005 will be filed from inside the construction.',

    'crumb-iss': 'No. 003',
    'crumb-no': 'no. 01',
    'art-title': 'The long shelf life of a <em>good chair.</em>',
    'art-deck':
      'On collectibility, repair, and what the auction room remembers when the catalogue forgets.',
    'art-first':
      'A chair is the only piece of furniture that has to keep its promise every time it is sat upon. The bed forgives. The table tolerates. The chair, alone among the household objects, must succeed at the work of its name without ceremony, without apology, and without the option of refusal — and it must do so for fifty years if it intends to mean anything.',
    'art-p1':
      'There is a chair in the back room of THE HOUSE, an early Joaquim Tenreiro from 1948, that has held perhaps thirty thousand bodies. Curators, photographers, electricians, the woman who delivered the wine, two of its successive owners, one small dog. It has been re-caned twice. The left rear leg was repaired, badly, in 1971, and then re-repaired, properly, in 2019 by a craftsman in Caminha who has since closed his workshop. The chair is still a chair. It would be possible, in fact, to argue that it is more chair now than when it was new.',
    'fn-1':
      'Tenreiro himself, in a 1972 letter to his daughter, makes precisely this argument about a different piece. The letter is in the SAMP archive in São Paulo and remains, regrettably, untranslated.',
    'art-p2':
      'The collectible-design market, as currently organised, has very little vocabulary for this kind of accumulation. The auction catalogue prefers the language of provenance — single-owner, original finish, untouched — as if the highest condition a chair could attain were the condition of having been least used. The galleries prefer the rhetoric of the limited edition, six of eight, numbered on the underside, sealed against the future. The fairs reward what photographs well in the booth.',
    'art-h-1': 'The mistake of the untouched.',
    'art-p3':
      'A chair that has not been sat upon is a hypothesis. A chair that has been re-caned, re-glued, re-finished and returned to use is an argument. The market, in its present form, is willing to pay a premium for the hypothesis and discount the argument — a position which, applied consistently to any other field, would result in absurdity. We do not value an unread book above one whose spine has cracked open at the right page. We do not pay more for a violin no one has played.',
    'art-p4':
      'The argument is not for sentimentality. The argument is for legibility. A repaired chair is a chair that can be read — by the next maker, by the conservator, by the person who buys it next. The intervention is part of the document. To erase it, in the name of an originalism the object itself never asked for, is to erase the only thing about the object that is still being written.',
    'fn-2':
      'See Salvatore Settis, <em>The Future of the Classical</em>, Polity 2006, on the related question of what we are doing when we restore a broken statue to a state it never quite occupied.',
    'fig-1':
      'Joaquim Tenreiro, side chair, 1948, jacarandá and caned seat. Photographed in the back room of THE HOUSE, March 2026, after its second re-caning.',
    'art-p5':
      "In the studios of the better contemporary makers — Manuel Aires Mateus's quieter pieces in the Alentejo, Studio MK27's domestic objects in São Paulo, the slow output of the Anversa workshop in Antwerp — there is an emerging consciousness that the object should be designed for its eventual repair. Joints that can be opened. Finishes that can be re-laid. Stocks of the original timber, dried and stored, against the day in 2074 when a leg gives way.",
    'art-pull':
      'The market values the unread book. The shelf values the spine that has cracked open at the <em>right page.</em>',
    'art-h-2': 'Repair as a curatorial gesture.',
    'art-p6':
      "If we accept the argument — that a piece of collectible design accrues legibility through use, and that the repair is part of its document — then the curator's task changes. The exhibition is no longer the staging of the object in its first condition. It is the presentation of the object as it currently exists, including its history, including its losses. The wall text becomes a longer, slower piece of writing.",
    'art-p7':
      "A small example. The exhibition <em>Lisboa, em casa</em>, currently showing in two rooms at THE HOUSE, includes seventeen objects from the foundation's nascent collection. Each is shown with two labels. The first is conventional — maker, date, materials, dimensions. The second is the object's repair record: every intervention, dated, attributed, and photographed at the moment of completion. The second label is, on average, longer than the first. It is, we would argue, the more useful one.",
    'art-p8':
      'This is not a rejection of the original. It is a refusal to pretend that the original is the only state the object has the right to occupy. The Tenreiro chair of 1948 is also the Tenreiro chair of 1971 (badly repaired) and the Tenreiro chair of 2019 (properly repaired). All three are real. The auction catalogue, by privileging only the first, is in the business of producing a fiction.',
    'fn-3':
      'A version of this argument was first made to the author in conversation with the conservator João Alberto, at THE HOUSE, December 2025.',
    'art-h-3': 'What the slow market would look like.',
    'art-p9':
      "A slow market in collectible design is not a smaller market. It is a differently organised one. It would publish, alongside each transaction, the object's complete service history. It would price the well-repaired piece above the merely original one. It would treat the workshop that maintains a maker's pieces, decades after the maker has died, as part of the maker's estate. It would consider the conservator a co-author.",
    'art-p10':
      'None of this is impossible. Most of it has, in fact, been the practice of the better instrument dealers for two centuries. A 1742 Guarneri violin is sold not in spite of its repairs but because of them, and the repairs are documented to a degree that makes the contemporary auction catalogue look reckless. The collectible-design market has the room, and arguably the obligation, to learn from the violin trade.',
    'art-p11':
      'The chair in the back room is not for sale. We do not, in any case, intend to sell it. But if we did, we would write its catalogue entry the long way. <em>Joaquim Tenreiro, side chair, jacarandá and cane, 1948. Provenance: continuous use. Condition: thirty thousand sittings, two re-canings, one good repair. Currently a chair.</em>',
    'bio-mc':
      'Mariana Cabral is a writer based in Porto. She is the author of <em>Quiet Inventories</em> (Pierrot, 2023) and contributes regularly to Apartamento and PIN-UP. This is her first piece for Do Not Disturb.',

    'arch-h': 'The Archive',
    'arch-c': '3 issues · 18 pieces',
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

    'cover-kick-l': 'O Ensaio · N.º 003',
    'cover-kick-r': 'A ler',
    'cover-lede': 'A longa vida de uma <em>boa cadeira.</em>',
    'cover-deck':
      'Uma peça de mobiliário, bem feita, tem uma vida cívica mais longa do que a maioria das instituições que a alojam. Sobre coleccionabilidade, restauro, e o que a sala de leilões recorda quando o catálogo esquece.',
    'meta-by': 'Por',
    'meta-pub': 'Publicado',
    'meta-len': 'Extensão',
    'meta-read': 'Leitura',
    'figcap-l': 'Tiago Casanova · Caminha · 2026',

    'contents-l': 'Índice',
    'contents-c': 'seis peças · uma quinzena',
    'contents-r': 'pp. 001 — 048',
    'sec-essay': 'O Ensaio',
    'sec-int': 'A Entrevista',
    'sec-note': 'As Notas',

    'toc-1': 'A longa vida de uma <em>boa cadeira.</em>',
    'toc-2':
      'Uma conversa com <em>Lola Vicente</em>, que deixou de comprar coisas que precisam de ser fotografadas.',
    'toc-3': 'Sobre o novo António Bolota na Galeria Pedro Cera.',
    'toc-4': 'Antuérpia, de passagem: uma exposição que não devia ter viajado.',
    'toc-5': 'Cidade do México: uma edição da EWE que diz silenciosamente <em>tudo.</em>',
    'toc-6': 'Atenas, no Inverno: quando o objecto se torna <em>uma posição.</em>',

    'fob-l1': 'Do editor',
    'fob-h1': 'Uma nota sobre aquilo que decidimos <em>não</em> escrever.',
    'fob-p1':
      'Cada edição da Do Not Disturb começa pelo mesmo exercício. Listamos os anúncios que não cobriremos esta quinzena — as inaugurações, os lançamentos, os press notes que chegaram com urgência. A lista é mais longa do que a edição.',
    'fob-by1': '— Inês Gavinho, editora',
    'fob-l2': 'Colaboradores',
    'fob-h2': 'Seis autores, quatro cidades, uma <em>convicção</em> partilhada.',
    'fob-p2':
      'Mariana Cabral escreve do Porto. Tomás Real de Madrid. Joana Sequeira e Hugo Maertens contribuem de Lisboa e Antuérpia. Sofía Núñez envia notas da Cidade do México; Eleni Karagianni de Atenas.',
    'fob-by2': '— biografias na página de autores',
    'fob-l3': 'A publicar',
    'fob-h3': 'A N.º 004 está a ser organizada em torno da questão da <em>encomenda.</em>',
    'fob-p3':
      'Um ensaio longo sobre a economia de ser-se convidado a fazer. Uma entrevista com uma fundação que decidiu encomendar menos, e mais devagar. Três notas de uma temporada de feiras que escolhemos não visitar.',
    'fob-by3': '— 26 de Março de 2026',

    'agenda-l': 'Agenda',
    'agenda-r': 'primavera 2026 · selecção',
    'ag-1-when': '14 — 28 Março',
    'ag-1-where': 'THE HOUSE · Lisboa',
    'ag-1':
      'Uma sala de leitura de aquisições recentes, aberta apenas às quintas-feiras, por marcação.',
    'ag-2-when': '02 Abril · 19h',
    'ag-2-where': 'Conversa',
    'ag-2': '<em>Restauro como prática</em>: Mariana Cabral com a encadernadora Júlia Mota.',
    'ag-3-when': '19 Abril · 18h30',
    'ag-3-where': 'Conferência',
    'ag-3': 'Lola Vicente: <em>“A primeira coisa que comprei foi um erro.”</em>',
    'ag-4-when': 'Maio, todo o mês',
    'ag-4-where': 'Encerrado para instalação',
    'ag-4': 'A N.º 005 será composta de dentro da obra.',

    'crumb-iss': 'N.º 003',
    'crumb-no': 'n.º 01',
    'art-title': 'A longa vida de uma <em>boa cadeira.</em>',
    'art-deck':
      'Sobre coleccionabilidade, restauro, e o que a sala de leilões recorda quando o catálogo esquece.',
    'art-first':
      'Uma cadeira é a única peça de mobiliário que tem de cumprir a sua promessa de cada vez que alguém nela se senta. A cama perdoa. A mesa tolera. A cadeira, sozinha entre os objectos da casa, tem de cumprir o trabalho do seu nome sem cerimónia, sem desculpa e sem opção de recusa — e tem de o fazer durante cinquenta anos se quiser significar alguma coisa.',
    'art-p1':
      'Há uma cadeira na sala dos fundos da THE HOUSE, um Joaquim Tenreiro inicial de 1948, que terá amparado talvez trinta mil corpos. Curadores, fotógrafos, electricistas, a senhora que entregou o vinho, dois dos seus sucessivos donos, um cão pequeno. Foi empalhada duas vezes. A perna traseira esquerda foi reparada, mal, em 1971, e re-reparada, bem, em 2019, por um artesão de Caminha que entretanto fechou a oficina. A cadeira continua cadeira. Pode-se, aliás, argumentar que é hoje mais cadeira do que em novo.',
    'fn-1':
      'O próprio Tenreiro, numa carta de 1972 à filha, defende precisamente este argumento a propósito de outra peça. A carta encontra-se no arquivo SAMP em São Paulo e permanece, lamentavelmente, por traduzir.',
    'art-p2':
      'O mercado do design coleccionável, na sua organização actual, dispõe de muito pouco vocabulário para este tipo de acumulação. O catálogo de leilão prefere a linguagem da proveniência — único proprietário, acabamento original, intacto — como se a condição mais alta a que uma cadeira pudesse aspirar fosse a de ter sido o menos usada possível. As galerias preferem a retórica da edição limitada, seis de oito, numerada na base, selada contra o futuro. As feiras premeiam aquilo que se fotografa bem no stand.',
    'art-h-1': 'O equívoco do intacto.',
    'art-p3':
      'Uma cadeira em que ninguém se sentou é uma hipótese. Uma cadeira que foi empalhada, recolada, refinida e devolvida ao uso é um argumento. O mercado, na forma actual, está disposto a pagar um prémio pela hipótese e a desvalorizar o argumento — uma posição que, aplicada consistentemente a qualquer outro campo, resultaria em absurdo. Não valorizamos um livro por ler acima de outro cuja lombada se abriu na página certa. Não pagamos mais por um violino que ninguém tocou.',
    'art-p4':
      'O argumento não é a favor do sentimentalismo. É a favor da legibilidade. Uma cadeira reparada é uma cadeira que pode ser lida — pelo próximo fazedor, pelo conservador, por quem a comprar a seguir. A intervenção faz parte do documento. Apagá-la, em nome de um originalismo que o objecto nunca pediu, é apagar a única coisa que ainda continua a ser escrita sobre o objecto.',
    'fn-2':
      'Ver Salvatore Settis, <em>O Futuro do Clássico</em>, Polity 2006, sobre a questão correlata daquilo que fazemos quando restauramos uma estátua partida a um estado que nunca chegou a ocupar.',
    'fig-1':
      'Joaquim Tenreiro, cadeira, 1948, jacarandá e palhinha. Fotografada na sala dos fundos da THE HOUSE, Março de 2026, após o segundo restauro.',
    'art-p5':
      'Nos ateliers dos melhores autores contemporâneos — as peças mais sóbrias de Manuel Aires Mateus no Alentejo, os objectos domésticos do Studio MK27 em São Paulo, a produção lenta da oficina Anversa em Antuérpia — emerge uma consciência: o objecto deve ser projectado para o seu próprio restauro. Junções que se possam abrir. Acabamentos que se possam refazer. Reservas da madeira original, secas e arrumadas, contra o dia em 2074 em que uma perna ceda.',
    'art-pull':
      'O mercado valoriza o livro por ler. A estante valoriza a lombada que se abriu na <em>página certa.</em>',
    'art-h-2': 'Restauro como gesto curatorial.',
    'art-p6':
      'Se aceitarmos o argumento — de que uma peça de design coleccionável ganha legibilidade pelo uso, e de que o restauro faz parte do seu documento — então a tarefa do curador muda. A exposição deixa de ser a encenação do objecto na sua primeira condição. Passa a ser a apresentação do objecto tal como existe hoje, incluindo a sua história, incluindo as suas perdas. O texto de parede torna-se um trabalho de escrita mais longo, mais lento.',
    'art-p7':
      'Um pequeno exemplo. A exposição <em>Lisboa, em casa</em>, actualmente patente em duas salas da THE HOUSE, reúne dezassete objectos da colecção em formação da fundação. Cada um surge com duas legendas. A primeira é convencional — autor, data, materiais, dimensões. A segunda é o registo de restauro do objecto: cada intervenção, datada, atribuída, e fotografada no momento da conclusão. A segunda legenda é, em média, mais longa do que a primeira. Defendemos que é a mais útil.',
    'art-p8':
      'Não é uma rejeição do original. É a recusa de fingir que o original é o único estado que o objecto tem o direito de ocupar. A cadeira Tenreiro de 1948 é também a cadeira Tenreiro de 1971 (mal reparada) e a cadeira Tenreiro de 2019 (bem reparada). Todas são reais. O catálogo de leilão, ao privilegiar apenas a primeira, dedica-se à produção de uma ficção.',
    'fn-3':
      'Uma versão deste argumento foi formulada à autora em conversa com o conservador João Alberto, na THE HOUSE, em Dezembro de 2025.',
    'art-h-3': 'O aspecto de um mercado lento.',
    'art-p9':
      'Um mercado lento em design coleccionável não é um mercado mais pequeno. É um mercado organizado de outra maneira. Publicaria, junto de cada transacção, o histórico completo de serviço do objecto. Pagaria mais pela peça bem reparada do que pela meramente original. Trataria a oficina que cuida das peças de um autor, décadas depois da morte do autor, como parte do seu espólio. Consideraria o conservador um co-autor.',
    'art-p10':
      'Nada disto é impossível. A maior parte é, aliás, prática dos melhores comerciantes de instrumentos há dois séculos. Um Guarneri de 1742 vende-se não apesar dos restauros, mas por causa deles, e os restauros estão documentados a um nível que faz o catálogo de leilão contemporâneo parecer leviano. O mercado do design coleccionável tem espaço, e provavelmente o dever, de aprender com o ofício do violino.',
    'art-p11':
      'A cadeira da sala dos fundos não está à venda. Em qualquer caso, não a tencionamos vender. Mas, se vendêssemos, escreveríamos a sua entrada de catálogo do modo longo. <em>Joaquim Tenreiro, cadeira, jacarandá e palhinha, 1948. Proveniência: uso contínuo. Condição: trinta mil sentadas, dois empalhamentos, um bom restauro. Actualmente uma cadeira.</em>',
    'bio-mc':
      'Mariana Cabral é escritora, vive no Porto. É autora de <em>Inventários Silenciosos</em> (Pierrot, 2023) e colabora com a Apartamento e a PIN-UP. Este é o seu primeiro texto para a Do Not Disturb.',

    'arch-h': 'O Arquivo',
    'arch-c': '3 edições · 18 peças',
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
