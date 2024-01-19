--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cs_adjectives; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.cs_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_adjectives OWNER TO cptkidd;

--
-- Name: cs_adverbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.cs_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_adverbs OWNER TO cptkidd;

--
-- Name: cs_nouns; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.cs_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_nouns OWNER TO cptkidd;

--
-- Name: cs_numerals; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.cs_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_numerals OWNER TO cptkidd;

--
-- Name: cs_verbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.cs_verbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_verbs OWNER TO cptkidd;

--
-- Name: en_adjectives; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.en_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.en_adjectives OWNER TO cptkidd;

--
-- Name: en_adverbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.en_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.en_adverbs OWNER TO cptkidd;

--
-- Name: en_nouns; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.en_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL,
    plural character varying,
    loc_prep character varying
);


ALTER TABLE public.en_nouns OWNER TO cptkidd;

--
-- Name: en_numerals; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.en_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.en_numerals OWNER TO cptkidd;

--
-- Name: en_verbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.en_verbs (
    v_id integer NOT NULL,
    present character varying NOT NULL,
    third character varying NOT NULL,
    gerund character varying NOT NULL,
    past character varying NOT NULL,
    prep character varying,
    word character varying
);


ALTER TABLE public.en_verbs OWNER TO cptkidd;

--
-- Name: langs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.langs (
    l_id integer NOT NULL,
    l_code character varying NOT NULL,
    l_propname character varying NOT NULL
);


ALTER TABLE public.langs OWNER TO cptkidd;

--
-- Name: langs_l_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd
--

CREATE SEQUENCE public.langs_l_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.langs_l_id_seq OWNER TO cptkidd;

--
-- Name: langs_l_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd
--

ALTER SEQUENCE public.langs_l_id_seq OWNED BY public.langs.l_id;


--
-- Name: pl_adjectives; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.pl_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_adjectives OWNER TO cptkidd;

--
-- Name: pl_adverbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.pl_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_adverbs OWNER TO cptkidd;

--
-- Name: pl_nouns; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.pl_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_nouns OWNER TO cptkidd;

--
-- Name: pl_numerals; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.pl_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_numerals OWNER TO cptkidd;

--
-- Name: pl_verbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.pl_verbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_verbs OWNER TO cptkidd;

--
-- Name: topics_grammar; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.topics_grammar (
    tg_id integer NOT NULL,
    tg_name character varying NOT NULL,
    tg_type character varying NOT NULL
);


ALTER TABLE public.topics_grammar OWNER TO cptkidd;

--
-- Name: topics_grammar_tg_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd
--

CREATE SEQUENCE public.topics_grammar_tg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topics_grammar_tg_id_seq OWNER TO cptkidd;

--
-- Name: topics_grammar_tg_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd
--

ALTER SEQUENCE public.topics_grammar_tg_id_seq OWNED BY public.topics_grammar.tg_id;


--
-- Name: topics_lexical; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.topics_lexical (
    tl_id integer NOT NULL,
    tl_name character varying NOT NULL,
    tl_type character varying NOT NULL
);


ALTER TABLE public.topics_lexical OWNER TO cptkidd;

--
-- Name: topics_lexical_tl_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd
--

CREATE SEQUENCE public.topics_lexical_tl_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topics_lexical_tl_id_seq OWNER TO cptkidd;

--
-- Name: topics_lexical_tl_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd
--

ALTER SEQUENCE public.topics_lexical_tl_id_seq OWNED BY public.topics_lexical.tl_id;


--
-- Name: tr_adjectives; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.tr_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_adjectives OWNER TO cptkidd;

--
-- Name: tr_adverbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.tr_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_adverbs OWNER TO cptkidd;

--
-- Name: tr_nouns; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.tr_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_nouns OWNER TO cptkidd;

--
-- Name: tr_numerals; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.tr_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_numerals OWNER TO cptkidd;

--
-- Name: tr_verbs; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.tr_verbs (
    v_id integer NOT NULL,
    root character varying NOT NULL,
    "case" character varying,
    aorist character varying,
    word character varying
);


ALTER TABLE public.tr_verbs OWNER TO cptkidd;

--
-- Name: user_courses; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.user_courses (
    u_id integer NOT NULL,
    learn_id integer NOT NULL,
    from_id integer NOT NULL
);


ALTER TABLE public.user_courses OWNER TO cptkidd;

--
-- Name: user_grammar_progress; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.user_grammar_progress (
    u_id integer NOT NULL,
    tg_id integer NOT NULL,
    progress integer,
    next_review date
);


ALTER TABLE public.user_grammar_progress OWNER TO cptkidd;

--
-- Name: users; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.users (
    u_id integer NOT NULL,
    u_login character varying NOT NULL,
    u_displayname character varying NOT NULL,
    u_email character varying NOT NULL,
    u_password character varying NOT NULL
);


ALTER TABLE public.users OWNER TO cptkidd;

--
-- Name: user_user_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd
--

CREATE SEQUENCE public.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_user_id_seq OWNER TO cptkidd;

--
-- Name: user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd
--

ALTER SEQUENCE public.user_user_id_seq OWNED BY public.users.u_id;


--
-- Name: user_vocab_progress; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.user_vocab_progress (
    u_id integer NOT NULL,
    v_id integer NOT NULL,
    progress integer DEFAULT 1 NOT NULL,
    next_review date DEFAULT CURRENT_TIMESTAMP NOT NULL,
    l_id integer NOT NULL
);


ALTER TABLE public.user_vocab_progress OWNER TO cptkidd;

--
-- Name: vocab; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.vocab (
    v_id integer NOT NULL,
    v_word character varying NOT NULL,
    v_speechpart character varying NOT NULL
);


ALTER TABLE public.vocab OWNER TO cptkidd;

--
-- Name: vocab_topics; Type: TABLE; Schema: public; Owner: cptkidd
--

CREATE TABLE public.vocab_topics (
    v_id integer NOT NULL,
    tl_id integer NOT NULL
);


ALTER TABLE public.vocab_topics OWNER TO cptkidd;

--
-- Name: vocab_v_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd
--

CREATE SEQUENCE public.vocab_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.vocab_v_id_seq OWNER TO cptkidd;

--
-- Name: vocab_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd
--

ALTER SEQUENCE public.vocab_v_id_seq OWNED BY public.vocab.v_id;


--
-- Name: langs l_id; Type: DEFAULT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.langs ALTER COLUMN l_id SET DEFAULT nextval('public.langs_l_id_seq'::regclass);


--
-- Name: topics_grammar tg_id; Type: DEFAULT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.topics_grammar ALTER COLUMN tg_id SET DEFAULT nextval('public.topics_grammar_tg_id_seq'::regclass);


--
-- Name: topics_lexical tl_id; Type: DEFAULT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.topics_lexical ALTER COLUMN tl_id SET DEFAULT nextval('public.topics_lexical_tl_id_seq'::regclass);


--
-- Name: users u_id; Type: DEFAULT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.users ALTER COLUMN u_id SET DEFAULT nextval('public.user_user_id_seq'::regclass);


--
-- Name: vocab v_id; Type: DEFAULT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.vocab ALTER COLUMN v_id SET DEFAULT nextval('public.vocab_v_id_seq'::regclass);


--
-- Data for Name: cs_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.cs_adjectives (v_id, word) FROM stdin;
1	červený
2	žlutý
3	modrý
4	zelený
5	oranžový
6	černý
7	bílý
8	fialový
9	růžový
10	šedý
11	hnědý
12	barevný
13	vysoký
14	malý
15	otylý
16	štíhly
17	hezký
18	ošklivý
19	šťastný
20	smutný
21	nervózní
22	tvrdohlavý
23	rozzlobený
24	dobrý
25	špatný
26	směšný
27	unavený
28	mladý
29	starý
30	velký
31	malý
32	levný
33	drahý
34	nový
35	starý
36	zajímavý
37	nudný
38	dlouhý
39	krátký
\.


--
-- Data for Name: cs_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.cs_adverbs (v_id, word) FROM stdin;
129	tady
130	tam
131	teď
132	tehdy
133	pozdě
134	brzy
135	včera
136	dnes
137	zítra
138	loni
139	minulý týden
140	příští rok
141	příští týden
142	rychle
143	pomalu
144	hodně
145	špatně
\.


--
-- Data for Name: cs_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.cs_nouns (v_id, word) FROM stdin;
40	škola
41	univerzita
42	obhod
43	supermarket
44	dům
45	letiště
46	nádraží
47	bazén
48	posilovna
49	pláž
50	hotel
51	museum
52	matka
53	otec
54	babička
55	dědeček
56	těta
57	strýc
58	dcera
59	syn
60	sestra
61	bratr
62	sestřenice
63	manžel
64	manželka
65	polévka
66	maso
67	jablko
68	banán
69	hruška
70	švestka
71	mrkev
72	brambor
73	rajče
74	chleba
75	ryba
76	sendvič
77	hamburger
78	vejce
79	sýr
80	voda
81	káva
82	čaj
83	džus
84	mléko
85	pivo
86	víno
87	kola
88	kniha
89	sešit
90	učebnice
91	propiska
92	tužka
93	nůžky
94	pravítko
95	kalkulačka
96	telefon
97	počítač
98	auto
99	židle
100	lampa
101	psací stůl
102	postel
103	taška
104	krabice
105	hra
106	film
107	hudba
108	komiks
\.


--
-- Data for Name: cs_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.cs_numerals (v_id, word) FROM stdin;
146	nula
147	jeden
148	dva
149	tři
150	čtyři
151	pět
152	šest
153	sedm
154	osm
155	devět
156	deset
\.


--
-- Data for Name: cs_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.cs_verbs (v_id, word) FROM stdin;
109	mít rád
110	nenávidět
111	milovat
112	adorovat
113	jít
114	běhat
115	jet
116	chodit
117	plavat
118	přichodit
119	poslouchat
120	slyšet
121	vidět
122	podívat se
123	jíst
124	pít
125	kupovat
126	prodávat
127	brát
128	používat
\.


--
-- Data for Name: en_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.en_adjectives (v_id, word) FROM stdin;
1	red
2	yellow
3	blue
4	green
5	orange
6	black
7	white
8	violet
9	pink
10	gray
11	brown
12	colorful
13	tall
14	short
15	obese
16	slim
17	pretty
18	ugly
19	happy
20	sad
21	nervous
22	stubborn
23	angry
24	good
25	bad
26	funny
27	tired
28	young
29	old
30	big
31	small
32	cheap
33	expensive
34	new
35	old
36	interesting
37	boring
38	long
39	short
\.


--
-- Data for Name: en_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.en_adverbs (v_id, word) FROM stdin;
129	here
130	there
131	now
132	then
133	late
134	early
135	yesterday
136	today
137	tomorrow
138	last year
139	last week
140	next year
141	next week
142	quickly
143	slowly
144	well
145	badly
\.


--
-- Data for Name: en_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.en_nouns (v_id, word, plural, loc_prep) FROM stdin;
40	school	schools	at
41	university	universities	at
42	store	stores	in
43	supermarket	supermarkets	in
44	house	houses	in
45	airport	airports	at
46	railroad station	railroad stations	at
47	swimming pool	swimming pools	at
48	gym	gyms	in
49	beach	beaches	on
50	hotel	hotels	in
51	museum	museums	in
52	mother	mothers	\N
53	father	fathers	\N
54	grandmother	grandmothers	\N
55	grandfather	grandfathers	\N
56	aunt	aunts	\N
57	uncle	uncles	\N
58	daughter	daughters	\N
59	son	sons	\N
60	sister	sisters	\N
61	brother	brothers	\N
62	cousin	cousins	\N
63	husband	husbands	\N
64	wife	wives	\N
67	apple	apples	\N
68	banana	bananas	\N
69	pear	pears	\N
70	plum	plums	\N
71	carrot	carrots	\N
72	potato	potatoes	\N
73	tomato	tomatoes	\N
76	sandwich	sandwiches	\N
77	hamburger	hamburgers	\N
78	egg	eggs	\N
88	book	books	\N
89	notebook	notebooks	\N
90	school book	school books	\N
91	pen	pens	\N
92	pencil	pencils	\N
93	scissors	scissors	\N
94	ruler	rulers	\N
95	calculator	calculators	\N
96	phone	phones	\N
97	computer	computers	\N
98	car	cars	\N
99	chair	chairs	\N
100	lamp	lamps	\N
101	desk	desks	\N
102	bed	beds	\N
103	bag	bags	\N
104	box	boxes	\N
105	game	games	\N
106	movie	movies	\N
108	comic book	comic books	\N
75	fish	fish	\N
65	soup	\N	\N
66	meat	\N	\N
74	bread	\N	\N
79	cheese	\N	\N
80	water	\N	\N
81	coffee	\N	\N
82	tea	\N	\N
83	juice	\N	\N
84	milk	\N	\N
85	beer	\N	\N
86	wine	\N	\N
87	coke	\N	\N
107	music	\N	\N
\.


--
-- Data for Name: en_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.en_numerals (v_id, word) FROM stdin;
146	zero
147	one
148	two
149	three
150	four
151	five
152	six
153	seven
154	eight
155	nine
156	ten
\.


--
-- Data for Name: en_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.en_verbs (v_id, present, third, gerund, past, prep, word) FROM stdin;
109	like	likes	liking	liked	\N	like
110	hate	hates	hating	hated	\N	hate
111	love	loves	loving	loved	\N	love
112	adore	adores	adoring	adored	\N	adore
113	go	goes	going	went	to	go
114	run	runs	running	ran	to	run
115	drive	drives	driving	drove	to	drive
116	walk	walks	walking	walked	to	walk
117	swim	swims	swimming	swam	to	swim
118	come	comes	coming	came	to	come
119	listen	listens	listening	listened	to	listen
120	hear	hear	hearing	heard	\N	hear
121	see	sees	seeing	saw	\N	see
122	watch	watches	watching	watched	\N	watch
123	eat	eats	eating	ate	\N	eat
124	drink	drinks	drinking	drank	\N	drink
125	buy	buys	buying	bought	\N	buy
126	sell	sells	selling	sold	\N	sell
127	take	takes	taking	took	\N	take
128	use	uses	using	used	\N	use
\.


--
-- Data for Name: langs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.langs (l_id, l_code, l_propname) FROM stdin;
1	tr	türkçe
2	en	English
3	pl	polski
4	cs	čeština
\.


--
-- Data for Name: pl_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.pl_adjectives (v_id, word) FROM stdin;
1	czerwony
2	żółty
3	niebieski
4	zielony
5	pomarańczowy
6	czarny
7	biały
8	fioletowy
9	różowy
10	szary
11	brązowy
12	kolorowy
13	wysoki
14	niski
15	otyły
16	szczupły
17	ładny
18	brzydki
19	szczęśliwy
20	smutny
21	nerwowy
22	uparty
23	wściekły
24	dobry
25	zły
26	zabawny
27	zmęczony
28	młody
29	stary
30	duży
31	mały
32	tani
33	drogi
34	nowy
35	stary
36	ciekawy
37	nudny
38	długi
39	krótki
\.


--
-- Data for Name: pl_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.pl_adverbs (v_id, word) FROM stdin;
129	tutaj
130	tam
131	teraz
132	wtedy
133	późno
134	wcześnie
135	wczoraj
136	dzisiaj
137	jutro
138	w zeszłym roku
139	w zeszłym tygodniu
140	w przyszłym roku
141	w przyszłym tygodniu
142	szybko
143	powoli
144	dobrze
145	źle
\.


--
-- Data for Name: pl_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.pl_nouns (v_id, word) FROM stdin;
40	szkoła
41	uniwersytet
42	sklep
43	supermarket
44	dom
45	lotnisko
46	dworzec kolejowy
47	basen
48	siłownia
49	plaża
50	hotel
51	muzeum
52	matka
53	ojciec
54	babcia
55	dziadek
56	ciotka
57	wujek
58	córka
59	syn
60	siostra
61	brat
62	kuzyn
63	mąż
64	żona
65	zupa
66	mięso
67	jabłko
68	banan
69	gruszka
70	śliwka
71	marchewka
72	ziemniak
73	pomidor
74	chleb
75	ryba
76	kanapka
77	hamburger
78	jajko
79	ser
80	woda
81	kawa
82	herbata
83	sok
84	mleko
85	piwo
86	wino
87	cola
88	książka
89	zeszyt
90	podręcznik
91	długopis
92	ołówek
93	nożyczki
94	linijka
95	kalkulator
96	telefon
97	komputer
98	auto
99	krzesło
100	lampa
101	biurko
102	łóżko
103	torba
104	pudełko
105	gra
106	film
107	muzyka
108	komiks
\.


--
-- Data for Name: pl_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.pl_numerals (v_id, word) FROM stdin;
146	zero
147	jeden
148	dwa
149	trzy
150	cztery
151	pięć
152	sześć
153	siedem
154	osiem
155	dziewięć
156	dziesięć
\.


--
-- Data for Name: pl_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.pl_verbs (v_id, word) FROM stdin;
109	lubić
110	nienawidzić
111	kochać
112	uwielbiać
113	iść
114	biec
115	jechać
116	chodzić
117	pływać
118	przychodzić
119	słuchać
120	słyszeć
121	widzieć
122	oglądać
123	jeść
124	pić
125	kupować
126	sprzedawać
127	brać
128	używać
\.


--
-- Data for Name: topics_grammar; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.topics_grammar (tg_id, tg_name, tg_type) FROM stdin;
1	To Be	pattern
2	To Have	pattern
3	To Do	pattern
4	Noun Dative	nouncases
5	Noun Accusative	nouncases
6	Noun Locative	nouncases
7	Possessives	possessives
8	Adjectives	noundesc
9	Numerals	noundesc
10	Past Simple	verbtenses
11	Past Continuous	verbtenses
12	Present Simple	verbtenses
13	Present Continuous	verbtenses
14	Future Simple	verbtenses
15	Adverbs	verbdesc
\.


--
-- Data for Name: topics_lexical; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.topics_lexical (tl_id, tl_name, tl_type) FROM stdin;
1	Colors	adjectives
2	Human Appearance	adjectives
3	Human Traits & Emotions	adjectives
4	Objects Traits	adjectives
5	Places	nouns
6	Family	nouns
7	Food	nouns
8	Drinks	nouns
9	School Objects	nouns
10	Everyday Objects	nouns
11	Media	nouns
12	Like/Dislike Verbs	verbs
13	Motion Verbs	verbs
14	General Verbs	verbs
15	Place Adverbs	adverbs
16	Time Adverbs	adverbs
17	Manner Adverbs	adverbs
18	Numbers	numerals
\.


--
-- Data for Name: tr_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.tr_adjectives (v_id, word) FROM stdin;
1	kırmızı
2	sarı
3	mavi
4	yeşil
5	turuncu
6	siyah
7	beyaz
8	mor
9	pembe
10	gri
11	kahverengi
12	rengarenk
13	uzun
14	kısa
15	şişman
16	zayıf
17	gözel
18	çirkin
19	mutlu
20	üzgün
21	gergin
22	inatçı
23	kızgın
24	iyi
25	kötü
26	komik
27	yorgun
28	genç
29	yaşlı
30	büyük
31	küçük
32	ucuz
33	pahalı
34	yeni
35	eski
36	ilginç
37	sıkıcı
38	uzun
39	kısa
\.


--
-- Data for Name: tr_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.tr_adverbs (v_id, word) FROM stdin;
129	burada
130	orada
131	şimdi
132	o zaman
133	geç
134	erken
135	dün
136	bugün
137	yarın
138	geçen sene
139	geçen hafta
140	gelecek yıl
141	gelecek hafta
142	çabuk
143	yavaşça
144	iyi
145	kötü
\.


--
-- Data for Name: tr_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.tr_nouns (v_id, word) FROM stdin;
40	okul
41	üniversite
42	mağaza
43	süpermarket
44	ev
45	havalimanı
46	tren istasyonu
47	yüzme havuzu
48	spor salonu
49	kumsal
50	otel
51	müze
52	anne
53	baba
54	büyükanne
55	büyükbaba
56	hala
57	amca
58	kız
59	oğul
60	abla
61	abi
62	kuzen
63	koca
64	karı
65	çorba
66	et
67	elma
68	muz
69	armut
70	erik
71	havuç
72	patates
73	domates
74	ekmek
75	balık
76	sandviç
77	hamburger
78	yumurta
79	peynir
80	su
81	kahve
82	çay
83	meyve suyu
84	süt
85	bira
86	şarap
87	kola
88	kitap
89	defter
90	ders kitabı
91	kalem
92	kurşunkalem
93	makas
94	cetvel
95	hesap makinesi
96	telefon
97	bilgisayar
98	araba
99	sandalye
100	lamba
101	çalışma masası
102	yatak
103	çanta
104	kutu
105	oyun
106	film
107	müzik
108	çizgi roman
\.


--
-- Data for Name: tr_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.tr_numerals (v_id, word) FROM stdin;
146	sıfır
147	bir
148	iki
149	üç
150	dört
151	beş
152	altı
153	yedi
154	sekiz
155	dokuz
156	on
\.


--
-- Data for Name: tr_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.tr_verbs (v_id, root, "case", aorist, word) FROM stdin;
109	sev	acc	e	sevmek
110	nefret et	abl	e	nefret etmek
111	beğen	acc	i	beğenmek
112	tap	acc	ı	tapmak
113	git	dat	e	gitmek
114	koş	dat	a	koşmak
115	sür	dat	e	sürmek
116	yürü	dat	ü	yürümek
117	yüz	dat	e	yüzmek
118	gel	dat	i	gelmek
119	dinle	acc	e	dinlemek
120	duy	acc	a	duymak
121	gör	acc	ü	görmek
122	izle	acc	e	izlemek
123	ye	acc	e	yemek
124	iç	acc	e	içmek
125	al	acc	ı	almak
126	sat	acc	a	satmak
127	al	acc	ı	almak
128	kullan	acc	ı	kullanmak
\.


--
-- Data for Name: user_courses; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.user_courses (u_id, learn_id, from_id) FROM stdin;
1	1	2
2	2	1
3	2	1
4	1	2
\.


--
-- Data for Name: user_grammar_progress; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.user_grammar_progress (u_id, tg_id, progress, next_review) FROM stdin;
\.


--
-- Data for Name: user_vocab_progress; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.user_vocab_progress (u_id, v_id, progress, next_review, l_id) FROM stdin;
1	9	6	2024-02-11	1
1	112	1	2024-01-17	1
1	110	1	2024-01-17	1
1	1	3	2024-01-18	1
2	1	4	2024-01-17	1
1	2	2	2024-01-18	1
1	5	6	2024-01-19	1
1	6	4	2024-01-19	1
1	7	5	2024-01-19	1
1	8	5	2024-01-19	1
1	11	2	2024-01-20	1
1	10	1	2024-01-17	1
1	12	3	2024-01-20	1
1	3	3	2024-01-21	1
1	111	2	2024-01-18	1
1	4	3	2024-01-21	1
1	109	3	2024-01-21	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.users (u_id, u_login, u_displayname, u_email, u_password) FROM stdin;
1	lucy00	Lucy Stilman	lucys@mail.com	$2a$12$/sAcmjwfy0agTumH9B4MpeVHKunNJenzg51Ph59x4xspdSMpvwMc.
2	adam	Adam Erkek	erad@ben.tr	$2a$12$DxLwm3b3ckIGauOk9F/Xp.Jlo145Qxq03Z/uXCkOurlpMmK7J7GLy
3	tina12	Tina T	tina@mail.com	$2a$12$v08dv5EKmtIy4jaTQgJVC.56n4mJ.1FILxPaCnkABAcpCqhk7BoxW
4	livia	Liwia	liwia@mail.com	$2b$12$WtsE6y3209T48AGKBeDt3up6kUe3e9hRvjUh7eaYdq18eKFio.3uS
\.


--
-- Data for Name: vocab; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.vocab (v_id, v_word, v_speechpart) FROM stdin;
1	red	adjective
2	yellow	adjective
3	blue	adjective
4	green	adjective
5	orange	adjective
6	black	adjective
7	white	adjective
8	violet	adjective
9	pink	adjective
10	gray	adjective
11	brown	adjective
12	colorful	adjective
13	tall	adjective
14	short (height)	adjective
15	obese	adjective
16	slim	adjective
17	pretty	adjective
18	ugly	adjective
19	happy	adjective
20	sad	adjective
21	nervous	adjective
22	stubborn	adjective
23	angry	adjective
24	good	adjective
25	bad	adjective
26	funny	adjective
27	tired	adjective
28	young	adjective
29	old (human)	adjective
30	big	adjective
31	small	adjective
32	cheap	adjective
33	expensive	adjective
34	new	adjective
35	old (object)	adjective
36	interesting	adjective
37	boring	adjective
38	long	adjective
39	short (length)	adjective
40	school	noun
41	university	noun
42	store	noun
43	supermarket	noun
44	house	noun
45	airport	noun
46	railroad station	noun
47	(swimming) pool	noun
48	gym	noun
49	beach	noun
50	hotel	noun
51	museum	noun
52	mother	noun
53	father	noun
54	grandmother	noun
55	grandfather	noun
56	aunt	noun
57	uncle	noun
58	daughter	noun
59	son	noun
60	sister	noun
61	brother	noun
62	cousin	noun
63	husband	noun
64	wife	noun
65	soup	noun
66	meat	noun
67	apple	noun
68	banana	noun
69	pear	noun
70	plum	noun
71	carrot	noun
72	potato	noun
73	tomato	noun
74	bread	noun
75	fish	noun
76	sandwich	noun
77	hamburger	noun
78	egg	noun
79	cheese	noun
80	water	noun
81	coffee	noun
82	tea	noun
83	juice	noun
84	milk	noun
85	beer	noun
86	wine	noun
87	coke	noun
88	book	noun
89	notebook	noun
90	school book	noun
91	pen	noun
92	pencil	noun
93	scissors	noun
94	ruler (measuring)	noun
95	calculator	noun
96	phone	noun
97	computer	noun
98	car	noun
99	chair	noun
100	lamp	noun
101	desk	noun
102	bed	noun
103	bag	noun
104	box	noun
105	game	noun
106	movie	noun
107	music	noun
108	comic book	noun
109	to like	verb
110	to hate	verb
111	to love	verb
112	to adore	verb
113	to go	verb
114	to run	verb
115	to drive	verb
116	to walk	verb
117	to swim	verb
118	to come	verb
119	to listen	verb
120	to hear	verb
121	to see	verb
122	to watch	verb
123	to eat	verb
124	to drink	verb
125	to buy	verb
126	to sell	verb
127	to take	verb
128	to use	verb
129	here	adverb
130	there	adverb
131	now	adverb
132	then	adverb
133	late	adverb
134	early	adverb
135	yesterday	adverb
136	today	adverb
137	tomorrow	adverb
138	last year	adverb
139	last week	adverb
140	next year	adverb
141	next week	adverb
142	quickly	adverb
143	slowly	adverb
144	well	adverb
145	badly	adverb
146	zero	numeral
147	one	numeral
148	two	numeral
149	three	numeral
150	four	numeral
151	five	numeral
152	six	numeral
153	seven	numeral
154	eight	numeral
155	nine	numeral
156	ten	numeral
\.


--
-- Data for Name: vocab_topics; Type: TABLE DATA; Schema: public; Owner: cptkidd
--

COPY public.vocab_topics (v_id, tl_id) FROM stdin;
1	1
2	1
3	1
4	1
5	1
6	1
7	1
8	1
9	1
10	1
11	1
12	1
13	2
14	2
15	2
16	2
17	2
18	2
19	3
20	3
21	3
22	3
23	3
24	3
25	3
26	3
27	3
28	3
29	3
30	4
31	4
32	4
33	4
34	4
35	4
36	4
37	4
38	4
39	4
17	4
18	4
40	5
41	5
42	5
43	5
44	5
45	5
46	5
47	5
48	5
49	5
50	5
51	5
52	6
53	6
54	6
55	6
56	6
57	6
58	6
59	6
60	6
61	6
62	6
63	6
64	6
65	7
66	7
67	7
68	7
69	7
70	7
71	7
72	7
73	7
74	7
75	7
76	7
77	7
78	7
79	7
80	8
81	8
82	8
83	8
84	8
85	8
86	8
87	8
88	9
89	9
90	9
91	9
92	9
93	9
94	9
95	9
96	10
97	10
98	10
99	10
100	10
101	10
102	10
103	10
104	10
88	11
105	11
106	11
107	11
108	11
109	12
110	12
111	12
112	12
113	13
114	13
115	13
116	13
117	13
118	13
119	14
120	14
121	14
122	14
123	14
124	14
125	14
126	14
127	14
128	14
129	15
130	15
131	16
132	16
133	16
134	16
135	16
136	16
137	16
138	16
139	16
140	16
141	16
142	17
143	17
144	17
145	17
146	18
147	18
148	18
149	18
150	18
151	18
152	18
153	18
154	18
155	18
156	18
\.


--
-- Name: langs_l_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd
--

SELECT pg_catalog.setval('public.langs_l_id_seq', 4, true);


--
-- Name: topics_grammar_tg_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd
--

SELECT pg_catalog.setval('public.topics_grammar_tg_id_seq', 15, true);


--
-- Name: topics_lexical_tl_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd
--

SELECT pg_catalog.setval('public.topics_lexical_tl_id_seq', 18, true);


--
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd
--

SELECT pg_catalog.setval('public.user_user_id_seq', 5, true);


--
-- Name: vocab_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd
--

SELECT pg_catalog.setval('public.vocab_v_id_seq', 156, true);


--
-- Name: langs langs_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.langs
    ADD CONSTRAINT langs_pk PRIMARY KEY (l_id);


--
-- Name: topics_grammar topics_grammar_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.topics_grammar
    ADD CONSTRAINT topics_grammar_pk PRIMARY KEY (tg_id);


--
-- Name: topics_lexical topics_lexical_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.topics_lexical
    ADD CONSTRAINT topics_lexical_pk PRIMARY KEY (tl_id);


--
-- Name: user_vocab_progress user_vocab_progress_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_vocab_progress_pk PRIMARY KEY (u_id, v_id, l_id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (u_id);


--
-- Name: vocab vocab_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.vocab
    ADD CONSTRAINT vocab_pk PRIMARY KEY (v_id);


--
-- Name: cs_adjectives cs_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.cs_adjectives
    ADD CONSTRAINT cs_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_adverbs cs_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.cs_adverbs
    ADD CONSTRAINT cs_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_nouns cs_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.cs_nouns
    ADD CONSTRAINT cs_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_numerals cs_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.cs_numerals
    ADD CONSTRAINT cs_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_verbs cs_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.cs_verbs
    ADD CONSTRAINT cs_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_adjectives en_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.en_adjectives
    ADD CONSTRAINT en_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_adverbs en_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.en_adverbs
    ADD CONSTRAINT en_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_nouns en_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.en_nouns
    ADD CONSTRAINT en_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_numerals en_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.en_numerals
    ADD CONSTRAINT en_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_verbs en_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.en_verbs
    ADD CONSTRAINT en_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_adjectives pl_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.pl_adjectives
    ADD CONSTRAINT pl_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_adverbs pl_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.pl_adverbs
    ADD CONSTRAINT pl_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_nouns pl_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.pl_nouns
    ADD CONSTRAINT pl_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_numerals pl_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.pl_numerals
    ADD CONSTRAINT pl_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_verbs pl_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.pl_verbs
    ADD CONSTRAINT pl_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_adjectives tr_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.tr_adjectives
    ADD CONSTRAINT tr_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_adverbs tr_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.tr_adverbs
    ADD CONSTRAINT tr_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_nouns tr_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.tr_nouns
    ADD CONSTRAINT tr_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_numerals tr_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.tr_numerals
    ADD CONSTRAINT tr_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_verbs tr_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.tr_verbs
    ADD CONSTRAINT tr_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_courses user_courses_langs_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_courses
    ADD CONSTRAINT user_courses_langs_fk FOREIGN KEY (learn_id) REFERENCES public.langs(l_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_courses user_courses_langs_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_courses
    ADD CONSTRAINT user_courses_langs_fk_1 FOREIGN KEY (from_id) REFERENCES public.langs(l_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_courses user_courses_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_courses
    ADD CONSTRAINT user_courses_users_fk FOREIGN KEY (u_id) REFERENCES public.users(u_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_grammar_progress user_grammar_vocab_topics_grammar_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_grammar_progress
    ADD CONSTRAINT user_grammar_vocab_topics_grammar_fk FOREIGN KEY (tg_id) REFERENCES public.topics_grammar(tg_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_grammar_progress user_grammar_vocab_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_grammar_progress
    ADD CONSTRAINT user_grammar_vocab_users_fk FOREIGN KEY (u_id) REFERENCES public.users(u_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_vocab_progress user_progress_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_progress_users_fk FOREIGN KEY (u_id) REFERENCES public.users(u_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_vocab_progress user_progress_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_progress_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_vocab_progress user_vocab_progress_langs_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_vocab_progress_langs_fk FOREIGN KEY (l_id) REFERENCES public.langs(l_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: vocab_topics vocab_topics_topics_lexical_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.vocab_topics
    ADD CONSTRAINT vocab_topics_topics_lexical_fk FOREIGN KEY (tl_id) REFERENCES public.topics_lexical(tl_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: vocab_topics vocab_topics_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd
--

ALTER TABLE ONLY public.vocab_topics
    ADD CONSTRAINT vocab_topics_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

