--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5
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

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: cptkidd62
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO cptkidd62;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cs_adjectives; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.cs_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_adjectives OWNER TO cptkidd62;

--
-- Name: cs_adverbs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.cs_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_adverbs OWNER TO cptkidd62;

--
-- Name: cs_nouns; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.cs_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_nouns OWNER TO cptkidd62;

--
-- Name: cs_numerals; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.cs_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_numerals OWNER TO cptkidd62;

--
-- Name: cs_verbs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.cs_verbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.cs_verbs OWNER TO cptkidd62;

--
-- Name: en_adjectives; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.en_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.en_adjectives OWNER TO cptkidd62;

--
-- Name: en_adverbs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.en_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.en_adverbs OWNER TO cptkidd62;

--
-- Name: en_nouns; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.en_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL,
    plural character varying,
    loc_prep character varying
);


ALTER TABLE public.en_nouns OWNER TO cptkidd62;

--
-- Name: en_numerals; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.en_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.en_numerals OWNER TO cptkidd62;

--
-- Name: en_verbs; Type: TABLE; Schema: public; Owner: cptkidd62
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


ALTER TABLE public.en_verbs OWNER TO cptkidd62;

--
-- Name: langs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.langs (
    l_code character varying NOT NULL,
    l_propname character varying NOT NULL
);


ALTER TABLE public.langs OWNER TO cptkidd62;

--
-- Name: noun_adj_constraints; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.noun_adj_constraints (
    noun_id integer NOT NULL,
    adj_id integer NOT NULL
);


ALTER TABLE public.noun_adj_constraints OWNER TO cptkidd62;

--
-- Name: pl_adjectives; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.pl_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_adjectives OWNER TO cptkidd62;

--
-- Name: pl_adverbs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.pl_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_adverbs OWNER TO cptkidd62;

--
-- Name: pl_nouns; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.pl_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_nouns OWNER TO cptkidd62;

--
-- Name: pl_numerals; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.pl_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_numerals OWNER TO cptkidd62;

--
-- Name: pl_verbs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.pl_verbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.pl_verbs OWNER TO cptkidd62;

--
-- Name: topics_grammar; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.topics_grammar (
    tg_id integer NOT NULL,
    tg_name character varying NOT NULL,
    tg_type character varying NOT NULL
);


ALTER TABLE public.topics_grammar OWNER TO cptkidd62;

--
-- Name: topics_grammar_tg_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd62
--

CREATE SEQUENCE public.topics_grammar_tg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topics_grammar_tg_id_seq OWNER TO cptkidd62;

--
-- Name: topics_grammar_tg_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd62
--

ALTER SEQUENCE public.topics_grammar_tg_id_seq OWNED BY public.topics_grammar.tg_id;


--
-- Name: topics_lexical; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.topics_lexical (
    tl_id integer NOT NULL,
    tl_name character varying NOT NULL,
    tl_type character varying NOT NULL
);


ALTER TABLE public.topics_lexical OWNER TO cptkidd62;

--
-- Name: topics_lexical_tl_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd62
--

CREATE SEQUENCE public.topics_lexical_tl_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topics_lexical_tl_id_seq OWNER TO cptkidd62;

--
-- Name: topics_lexical_tl_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd62
--

ALTER SEQUENCE public.topics_lexical_tl_id_seq OWNED BY public.topics_lexical.tl_id;


--
-- Name: tr_adjectives; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.tr_adjectives (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_adjectives OWNER TO cptkidd62;

--
-- Name: tr_adverbs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.tr_adverbs (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_adverbs OWNER TO cptkidd62;

--
-- Name: tr_nouns; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.tr_nouns (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_nouns OWNER TO cptkidd62;

--
-- Name: tr_numerals; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.tr_numerals (
    v_id integer NOT NULL,
    word character varying NOT NULL
);


ALTER TABLE public.tr_numerals OWNER TO cptkidd62;

--
-- Name: tr_verbs; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.tr_verbs (
    v_id integer NOT NULL,
    root character varying NOT NULL,
    "case" character varying,
    aorist character varying,
    word character varying
);


ALTER TABLE public.tr_verbs OWNER TO cptkidd62;

--
-- Name: user_grammar_progress; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.user_grammar_progress (
    u_id integer NOT NULL,
    tg_id integer NOT NULL,
    progress integer,
    next_review date
);


ALTER TABLE public.user_grammar_progress OWNER TO cptkidd62;

--
-- Name: user_preferences; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.user_preferences (
    u_id integer NOT NULL,
    last_course_code character varying,
    ui_code character varying
);


ALTER TABLE public.user_preferences OWNER TO cptkidd62;

--
-- Name: users; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.users (
    u_id integer NOT NULL,
    u_login character varying NOT NULL,
    u_displayname character varying NOT NULL,
    u_email character varying NOT NULL,
    u_password character varying NOT NULL
);


ALTER TABLE public.users OWNER TO cptkidd62;

--
-- Name: user_user_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd62
--

CREATE SEQUENCE public.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_user_id_seq OWNER TO cptkidd62;

--
-- Name: user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd62
--

ALTER SEQUENCE public.user_user_id_seq OWNED BY public.users.u_id;


--
-- Name: user_vocab_progress; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.user_vocab_progress (
    u_id integer NOT NULL,
    v_id integer NOT NULL,
    progress integer DEFAULT 1 NOT NULL,
    next_review date DEFAULT CURRENT_TIMESTAMP NOT NULL,
    l_code character varying NOT NULL
);


ALTER TABLE public.user_vocab_progress OWNER TO cptkidd62;

--
-- Name: verb_noun_constraints; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.verb_noun_constraints (
    verb_id integer NOT NULL,
    noun_id integer NOT NULL
);


ALTER TABLE public.verb_noun_constraints OWNER TO cptkidd62;

--
-- Name: vocab; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.vocab (
    v_id integer NOT NULL,
    v_word character varying NOT NULL,
    v_speechpart character varying NOT NULL
);


ALTER TABLE public.vocab OWNER TO cptkidd62;

--
-- Name: vocab_topics; Type: TABLE; Schema: public; Owner: cptkidd62
--

CREATE TABLE public.vocab_topics (
    v_id integer NOT NULL,
    tl_id integer NOT NULL
);


ALTER TABLE public.vocab_topics OWNER TO cptkidd62;

--
-- Name: vocab_v_id_seq; Type: SEQUENCE; Schema: public; Owner: cptkidd62
--

CREATE SEQUENCE public.vocab_v_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.vocab_v_id_seq OWNER TO cptkidd62;

--
-- Name: vocab_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptkidd62
--

ALTER SEQUENCE public.vocab_v_id_seq OWNED BY public.vocab.v_id;


--
-- Name: topics_grammar tg_id; Type: DEFAULT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.topics_grammar ALTER COLUMN tg_id SET DEFAULT nextval('public.topics_grammar_tg_id_seq'::regclass);


--
-- Name: topics_lexical tl_id; Type: DEFAULT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.topics_lexical ALTER COLUMN tl_id SET DEFAULT nextval('public.topics_lexical_tl_id_seq'::regclass);


--
-- Name: users u_id; Type: DEFAULT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.users ALTER COLUMN u_id SET DEFAULT nextval('public.user_user_id_seq'::regclass);


--
-- Name: vocab v_id; Type: DEFAULT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.vocab ALTER COLUMN v_id SET DEFAULT nextval('public.vocab_v_id_seq'::regclass);


--
-- Data for Name: cs_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: cs_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: cs_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: cs_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: cs_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: en_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: en_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: en_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: en_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: en_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
121	see	sees	seeing	saw	\N	see
122	watch	watches	watching	watched	\N	watch
123	eat	eats	eating	ate	\N	eat
124	drink	drinks	drinking	drank	\N	drink
125	buy	buys	buying	bought	\N	buy
126	sell	sells	selling	sold	\N	sell
127	take	takes	taking	took	\N	take
128	use	uses	using	used	\N	use
120	hear	hears	hearing	heard	\N	hear
\.


--
-- Data for Name: langs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.langs (l_code, l_propname) FROM stdin;
tr	türkçe
en	English
pl	polski
cs	čeština
\.


--
-- Data for Name: noun_adj_constraints; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.noun_adj_constraints (noun_id, adj_id) FROM stdin;
40	1
40	2
40	3
40	4
40	5
40	6
40	7
40	8
40	9
40	10
40	11
40	12
40	24
40	25
40	30
40	31
40	32
40	33
40	34
40	35
40	36
40	37
40	38
40	39
41	1
41	2
41	3
41	4
41	5
41	6
41	7
41	8
41	9
41	10
41	11
41	12
41	24
41	25
41	30
41	31
41	32
41	33
41	34
41	35
41	36
41	37
41	38
41	39
42	1
42	2
42	3
42	4
42	5
42	6
42	7
42	8
42	9
42	10
42	11
42	12
42	24
42	25
42	30
42	31
42	32
42	33
42	34
42	35
42	36
42	37
42	38
42	39
43	1
43	2
43	3
43	4
43	5
43	6
43	7
43	8
43	9
43	10
43	11
43	12
43	24
43	25
43	30
43	31
43	32
43	33
43	34
43	35
43	36
43	37
43	38
43	39
44	1
44	2
44	3
44	4
44	5
44	6
44	7
44	8
44	9
44	10
44	11
44	12
44	24
44	25
44	30
44	31
44	32
44	33
44	34
44	35
44	36
44	37
44	38
44	39
45	1
45	2
45	3
45	4
45	5
45	6
45	7
45	8
45	9
45	10
45	11
45	12
45	24
45	25
45	30
45	31
45	32
45	33
45	34
45	35
45	36
45	37
45	38
45	39
46	1
46	2
46	3
46	4
46	5
46	6
46	7
46	8
46	9
46	10
46	11
46	12
46	24
46	25
46	30
46	31
46	32
46	33
46	34
46	35
46	36
46	37
46	38
46	39
47	1
47	2
47	3
47	4
47	5
47	6
47	7
47	8
47	9
47	10
47	11
47	12
47	24
47	25
47	30
47	31
47	32
47	33
47	34
47	35
47	36
47	37
47	38
47	39
48	1
48	2
48	3
48	4
48	5
48	6
48	7
48	8
48	9
48	10
48	11
48	12
48	24
48	25
48	30
48	31
48	32
48	33
48	34
48	35
48	36
48	37
48	38
48	39
49	24
49	25
49	30
49	31
49	34
49	35
49	38
49	39
52	13
52	14
52	15
52	16
52	17
52	18
52	19
52	20
52	21
52	22
52	23
52	24
52	25
52	26
52	27
52	28
52	29
53	13
53	14
53	15
53	16
53	17
53	18
53	19
53	20
53	21
53	22
53	23
53	24
53	25
53	26
53	27
53	28
53	29
54	13
54	14
54	15
54	16
54	17
54	18
54	19
54	20
54	21
54	22
54	23
54	24
54	25
54	26
54	27
54	28
54	29
55	13
55	14
55	15
55	16
55	17
55	18
55	19
55	20
55	21
55	22
55	23
55	24
55	25
55	26
55	27
55	28
55	29
56	13
56	14
56	15
56	16
56	17
56	18
56	19
56	20
56	21
56	22
56	23
56	24
56	25
56	26
56	27
56	28
56	29
57	13
57	14
57	15
57	16
57	17
57	18
57	19
57	20
57	21
57	22
57	23
57	24
57	25
57	26
57	27
57	28
57	29
58	13
58	14
58	15
58	16
58	17
58	18
58	19
58	20
58	21
58	22
58	23
58	24
58	25
58	26
58	27
58	28
58	29
59	13
59	14
59	15
59	16
59	17
59	18
59	19
59	20
59	21
59	22
59	23
59	24
59	25
59	26
59	27
59	28
59	29
60	13
60	14
60	15
60	16
60	17
60	18
60	19
60	20
60	21
60	22
60	23
60	24
60	25
60	26
60	27
60	28
60	29
61	13
61	14
61	15
61	16
61	17
61	18
61	19
61	20
61	21
61	22
61	23
61	24
61	25
61	26
61	27
61	28
61	29
62	13
62	14
62	15
62	16
62	17
62	18
62	19
62	20
62	21
62	22
62	23
62	24
62	25
62	26
62	27
62	28
62	29
63	13
63	14
63	15
63	16
63	17
63	18
63	19
63	20
63	21
63	22
63	23
63	24
63	25
63	26
63	27
63	28
63	29
64	13
64	14
64	15
64	16
64	17
64	18
64	19
64	20
64	21
64	22
64	23
64	24
64	25
64	26
64	27
64	28
64	29
65	24
65	25
65	32
65	33
66	24
66	25
66	32
66	33
67	24
67	25
67	32
67	33
68	24
68	25
68	32
68	33
69	24
69	25
69	32
69	33
70	24
70	25
70	32
70	33
71	24
71	25
71	32
71	33
72	24
72	25
72	32
72	33
73	24
73	25
73	32
73	33
74	24
81	24
81	25
81	25
81	32
81	32
81	33
81	33
82	24
82	24
82	25
82	25
82	32
82	32
82	33
82	33
83	24
83	24
83	25
83	25
83	32
83	32
83	33
83	33
84	24
84	24
84	25
84	25
84	32
84	32
84	33
84	33
85	24
85	24
85	25
85	25
85	32
85	32
85	33
85	33
86	24
86	24
86	25
86	25
86	32
86	32
86	33
86	33
87	24
87	24
87	25
87	25
87	32
87	32
87	33
87	33
88	1
88	2
88	3
88	4
88	5
88	6
88	7
88	8
88	9
88	10
88	11
88	12
88	24
88	25
88	30
88	31
88	32
88	33
88	34
88	35
88	36
88	37
88	38
88	39
89	1
89	2
89	3
89	4
89	5
89	6
89	7
89	8
89	9
89	10
89	11
89	12
89	24
89	25
89	30
89	31
89	32
89	33
89	34
89	35
89	36
89	37
89	38
89	39
90	1
90	2
90	3
90	4
90	5
90	6
90	7
90	8
90	9
90	10
90	11
90	12
90	24
90	25
90	30
90	31
90	32
90	33
90	34
90	35
90	36
90	37
90	38
90	39
91	1
91	2
91	3
91	4
91	5
91	6
91	7
91	8
91	9
91	10
91	11
91	12
91	24
91	25
91	30
91	31
91	32
91	33
91	34
91	35
91	38
91	39
92	1
92	2
92	3
92	4
92	5
92	6
92	7
92	8
92	9
92	10
92	11
92	12
92	24
92	25
92	30
92	31
92	32
92	33
92	34
92	35
92	38
92	39
93	1
93	2
93	3
93	4
93	5
93	6
93	7
93	8
93	9
93	10
93	11
93	12
93	24
93	25
93	30
93	31
93	32
93	33
93	34
93	35
93	38
93	39
94	1
94	2
94	3
94	4
94	5
94	6
94	7
94	8
94	9
94	10
94	11
94	12
94	24
94	25
94	30
94	31
94	32
94	33
94	34
94	35
94	38
94	39
95	1
95	2
95	3
95	4
95	5
95	6
95	7
95	8
95	9
95	10
95	11
95	12
95	24
95	25
95	30
95	31
95	32
95	33
95	34
95	35
96	1
96	2
96	3
96	4
96	5
96	6
96	7
96	8
96	9
96	10
96	11
96	12
96	24
96	25
96	30
96	31
96	32
96	33
96	34
96	35
97	1
97	2
97	3
97	4
97	5
97	6
97	7
97	8
97	9
97	10
97	11
97	12
97	24
97	25
97	30
97	31
97	32
97	33
97	34
97	35
98	1
98	2
98	3
98	4
98	5
98	6
98	7
98	8
98	9
98	10
98	11
98	12
98	24
98	25
98	30
98	31
98	32
98	33
98	34
98	35
99	1
99	2
99	3
99	4
99	5
99	6
99	7
99	8
99	9
99	10
99	11
99	12
99	24
99	25
99	30
99	31
99	32
99	33
99	34
99	35
100	1
100	2
100	3
100	4
100	5
100	6
100	7
100	8
100	9
100	10
100	11
100	12
100	24
100	25
100	30
100	31
100	32
100	33
100	34
100	35
101	1
101	2
101	3
101	4
101	5
101	6
101	7
101	8
101	9
101	10
101	11
101	12
101	24
101	25
101	30
101	31
101	32
101	33
101	34
101	35
102	1
102	2
102	3
102	4
102	5
102	6
102	7
102	8
102	9
102	10
102	11
102	12
102	24
102	25
102	30
102	31
102	32
102	33
102	34
102	35
103	1
103	2
103	3
103	4
103	5
103	6
103	7
103	8
103	9
103	10
103	11
103	12
103	24
103	25
103	30
103	31
103	32
103	33
103	34
103	35
104	1
104	2
104	3
104	4
104	5
104	6
104	7
104	8
104	9
104	10
104	11
104	12
104	24
104	25
104	30
104	31
104	32
104	33
104	34
104	35
105	24
105	25
105	32
105	33
105	34
105	35
105	36
105	37
106	24
106	25
106	32
106	33
106	34
106	35
106	36
106	37
107	24
107	25
107	32
107	33
107	34
107	35
107	36
107	37
108	24
108	25
108	32
108	33
108	34
108	35
108	36
108	37
\.


--
-- Data for Name: pl_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: pl_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: pl_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: pl_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: pl_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: topics_grammar; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: topics_lexical; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: tr_adjectives; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: tr_adverbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: tr_nouns; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: tr_numerals; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: tr_verbs; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.tr_verbs (v_id, root, "case", aorist, word) FROM stdin;
110	nefret et	abl	e	nefret etmek
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
109	beğen	acc	i	beğenmek
111	sev	acc	e	sevmek
\.


--
-- Data for Name: user_grammar_progress; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.user_grammar_progress (u_id, tg_id, progress, next_review) FROM stdin;
\.


--
-- Data for Name: user_preferences; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.user_preferences (u_id, last_course_code, ui_code) FROM stdin;
3	cs	tr
4	en	pl
11	pl	en
12	cs	en
13	pl	en
2	tr	cs
16	tr	cs
17	en	en
1	tr	en
\.


--
-- Data for Name: user_vocab_progress; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.user_vocab_progress (u_id, v_id, progress, next_review, l_code) FROM stdin;
1	9	6	2024-02-11	tr
1	112	1	2024-01-17	tr
1	110	1	2024-01-17	tr
1	5	6	2024-01-19	tr
1	7	5	2024-01-19	tr
1	12	3	2024-01-20	tr
1	129	1	2024-01-21	tr
1	11	1	2024-01-21	tr
11	109	1	2024-01-21	cs
11	110	1	2024-01-21	cs
11	111	1	2024-01-21	cs
11	112	1	2024-01-21	cs
1	115	2	2024-01-22	pl
1	117	2	2024-01-22	pl
1	113	2	2024-01-22	pl
1	114	2	2024-01-22	pl
1	10	2	2024-01-22	tr
1	118	2	2024-01-22	pl
1	116	2	2024-01-22	pl
1	130	1	2024-01-21	pl
1	129	1	2024-01-21	pl
1	119	1	2024-01-22	en
1	121	1	2024-01-22	en
1	122	1	2024-01-22	en
1	123	1	2024-01-22	en
1	124	1	2024-01-22	en
1	126	1	2024-01-22	en
1	128	1	2024-01-22	en
1	127	1	2024-01-22	en
11	1	1	2024-01-23	tr
11	2	1	2024-01-23	tr
11	3	1	2024-01-23	tr
11	4	1	2024-01-23	tr
11	5	1	2024-01-23	tr
11	6	1	2024-01-23	tr
11	7	1	2024-01-23	tr
11	8	1	2024-01-23	tr
11	10	1	2024-01-23	tr
11	11	1	2024-01-23	tr
11	12	1	2024-01-23	tr
11	9	1	2024-01-23	tr
1	120	2	2024-01-23	en
2	1	5	2024-02-02	tr
2	2	1	2024-01-23	tr
2	3	1	2024-01-23	tr
2	4	1	2024-01-23	tr
2	5	1	2024-01-23	tr
2	6	1	2024-01-23	tr
2	7	1	2024-01-23	tr
2	9	1	2024-01-23	tr
2	10	1	2024-01-23	tr
2	11	1	2024-01-23	tr
2	12	1	2024-01-23	tr
2	8	2	2024-01-24	tr
16	88	1	2024-01-23	tr
16	105	1	2024-01-23	tr
16	106	1	2024-01-23	tr
16	107	1	2024-01-23	tr
16	108	1	2024-01-23	tr
1	130	3	2024-01-26	cs
1	129	3	2024-01-26	cs
1	6	5	2024-02-04	tr
1	8	1	2024-01-24	tr
1	3	4	2024-01-30	tr
1	111	3	2024-01-22	tr
1	130	1	2024-01-24	tr
1	1	1	2024-01-24	tr
1	4	4	2024-01-30	tr
1	109	2	2024-01-22	tr
1	2	1	2024-01-24	tr
1	125	2	2024-01-23	en
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.users (u_id, u_login, u_displayname, u_email, u_password) FROM stdin;
2	adam	Adam Erkek	erad@ben.tr	$2a$12$DxLwm3b3ckIGauOk9F/Xp.Jlo145Qxq03Z/uXCkOurlpMmK7J7GLy
3	tina12	Tina T	tina@mail.com	$2a$12$v08dv5EKmtIy4jaTQgJVC.56n4mJ.1FILxPaCnkABAcpCqhk7BoxW
4	livia	Liwia	liwia@mail.com	$2b$12$WtsE6y3209T48AGKBeDt3up6kUe3e9hRvjUh7eaYdq18eKFio.3uS
11	anna	Anna B	anna@mail.com	$2b$12$00W1.qmkqCjLwRo91/.GLuqkDJ/stpvQa3HXcxo2hq4m/ISoDmUsC
12	johnny	johnny	johnny@mail.com	$2b$12$qz.qNj6k.f08dUr6RMnFA.9HKcY0ogkTwsyEkSBCjhkm0cxoQwN5K
13	mati	mati	maslo.mm@gmail.com	$2b$12$/mlJCrBJbECQQfwobQyeWuApJqOmSJnYw5IB7XX1D0UQYCFOzfzSy
14	mati2	Mateusz	dev.mironczuk@gmail.com	$2b$12$9NZhe37OonRyZ4GKFhqtFOH8YaW8Mio/jnk4SpLRA7ZivhP9qKJRG
15	mati3	Mateusz	maximinus2000@wp.pl	$2b$12$m1K2mSOvrfeQm/ZjalhQ6efBOtwaDUk6MO21cDkE9AFMxcAEa74y.
16	janek	janek	janek@posta.cz	$2b$12$e15LrWdA1OeqcVVRzDy59OZOyPrT403Z9gVDRsUfLM8SyiSQNssvS
17	andyy	Andy	andyy@mail.com	$2b$12$AbvyohqqAq8K/6PVtbUs..a8lUOMKZfH4tWDHO4wuQsGlsDoI/Zhu
1	lucy00	Lucy Stilman	lucys@mail.com	$2b$12$eVZN1qcqP96OpqqkbRc1NudKdqP3yWzwAyhsZpPDSkvhjBZzeoPKK
\.


--
-- Data for Name: verb_noun_constraints; Type: TABLE DATA; Schema: public; Owner: cptkidd62
--

COPY public.verb_noun_constraints (verb_id, noun_id) FROM stdin;
113	40
113	41
113	42
113	43
113	44
113	45
113	46
113	47
113	48
113	49
113	50
113	51
113	52
113	53
113	54
113	55
113	56
113	57
113	58
113	59
113	60
113	61
113	62
113	63
113	64
114	40
114	41
114	42
114	43
114	44
114	45
114	46
114	47
114	48
114	49
114	50
114	51
114	52
114	53
114	54
114	55
114	56
114	57
114	58
114	59
114	60
114	61
114	62
114	63
114	64
115	40
115	41
115	42
115	43
115	44
115	45
115	46
115	47
115	48
115	49
115	50
115	51
115	52
115	53
115	54
115	55
115	56
115	57
115	58
115	59
115	60
115	61
115	62
115	63
115	64
116	40
116	41
116	42
116	43
116	44
116	45
116	46
116	47
116	48
116	49
116	50
116	51
116	52
116	53
116	54
116	55
116	56
116	57
116	58
116	59
116	60
116	61
116	62
116	63
116	64
117	40
117	41
117	42
117	43
117	44
117	45
117	46
117	47
117	48
117	49
117	50
117	51
117	52
117	53
117	54
117	55
117	56
117	57
117	58
117	59
117	60
117	61
117	62
117	63
117	64
118	40
118	41
118	42
118	43
118	44
118	45
118	46
118	47
118	48
118	49
118	50
118	51
118	52
118	53
118	54
118	55
118	56
118	57
118	58
118	59
118	60
118	61
118	62
118	63
118	64
119	52
119	53
119	54
119	55
119	56
119	57
119	58
119	59
119	60
119	61
119	62
119	63
119	64
119	107
120	52
120	53
120	54
120	55
120	56
120	57
120	58
120	59
120	60
120	61
120	62
120	63
120	64
120	107
120	106
120	105
120	97
120	96
123	65
123	66
123	67
123	68
123	69
123	70
123	71
123	72
123	73
123	74
123	75
123	76
123	77
123	78
123	79
124	80
124	81
124	82
124	83
124	84
124	85
124	86
124	87
125	40
125	41
125	42
125	43
125	44
125	45
125	46
125	47
125	48
125	49
125	50
125	51
125	65
125	66
125	67
125	68
125	69
125	70
125	71
125	72
125	73
125	74
125	75
125	76
125	77
125	78
125	79
125	80
125	81
125	82
125	83
125	84
125	85
125	86
125	87
125	88
125	89
125	90
125	91
125	92
125	93
125	94
125	95
125	96
125	97
125	98
125	99
125	100
125	101
125	102
125	103
125	104
125	105
125	106
125	107
125	108
126	40
126	41
126	42
126	43
126	44
126	45
126	46
126	47
126	48
126	49
126	50
126	51
126	65
126	66
126	67
126	68
126	69
126	70
126	71
126	72
126	73
126	74
126	75
126	76
126	77
126	78
126	79
126	80
126	81
126	82
126	83
126	84
126	85
126	86
126	87
126	88
126	89
126	90
126	91
126	92
126	93
126	94
126	95
126	96
126	97
126	98
126	99
126	100
126	101
126	102
126	103
126	104
126	105
126	106
126	107
126	108
127	65
127	66
127	67
127	68
127	69
127	70
127	71
127	72
127	73
127	74
127	75
127	76
127	77
127	78
127	79
127	80
127	81
127	82
127	83
127	84
127	85
127	86
127	87
127	88
127	89
127	90
127	91
127	92
127	93
127	94
127	95
127	96
127	97
127	98
127	99
127	100
127	101
127	102
127	103
127	104
127	105
127	106
127	107
127	108
128	89
128	90
128	91
128	92
128	93
128	94
128	95
128	96
128	97
128	98
128	99
128	100
128	101
128	102
128	103
128	104
\.


--
-- Data for Name: vocab; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Data for Name: vocab_topics; Type: TABLE DATA; Schema: public; Owner: cptkidd62
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
-- Name: topics_grammar_tg_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd62
--

SELECT pg_catalog.setval('public.topics_grammar_tg_id_seq', 15, true);


--
-- Name: topics_lexical_tl_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd62
--

SELECT pg_catalog.setval('public.topics_lexical_tl_id_seq', 18, true);


--
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd62
--

SELECT pg_catalog.setval('public.user_user_id_seq', 17, true);


--
-- Name: vocab_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptkidd62
--

SELECT pg_catalog.setval('public.vocab_v_id_seq', 156, true);


--
-- Name: langs langs_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.langs
    ADD CONSTRAINT langs_pk PRIMARY KEY (l_code);


--
-- Name: topics_grammar topics_grammar_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.topics_grammar
    ADD CONSTRAINT topics_grammar_pk PRIMARY KEY (tg_id);


--
-- Name: topics_lexical topics_lexical_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.topics_lexical
    ADD CONSTRAINT topics_lexical_pk PRIMARY KEY (tl_id);


--
-- Name: user_preferences user_preferences_un; Type: CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_preferences
    ADD CONSTRAINT user_preferences_un UNIQUE (u_id);


--
-- Name: user_vocab_progress user_vocab_progress_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_vocab_progress_pk PRIMARY KEY (u_id, v_id, l_code);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (u_id);


--
-- Name: vocab vocab_pk; Type: CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.vocab
    ADD CONSTRAINT vocab_pk PRIMARY KEY (v_id);


--
-- Name: cs_adjectives cs_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.cs_adjectives
    ADD CONSTRAINT cs_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_adverbs cs_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.cs_adverbs
    ADD CONSTRAINT cs_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_nouns cs_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.cs_nouns
    ADD CONSTRAINT cs_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_numerals cs_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.cs_numerals
    ADD CONSTRAINT cs_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cs_verbs cs_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.cs_verbs
    ADD CONSTRAINT cs_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_adjectives en_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.en_adjectives
    ADD CONSTRAINT en_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_adverbs en_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.en_adverbs
    ADD CONSTRAINT en_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_nouns en_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.en_nouns
    ADD CONSTRAINT en_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_numerals en_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.en_numerals
    ADD CONSTRAINT en_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: en_verbs en_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.en_verbs
    ADD CONSTRAINT en_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: noun_adj_constraints noun_adj_constraints_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.noun_adj_constraints
    ADD CONSTRAINT noun_adj_constraints_vocab_fk FOREIGN KEY (noun_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: noun_adj_constraints noun_adj_constraints_vocab_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.noun_adj_constraints
    ADD CONSTRAINT noun_adj_constraints_vocab_fk_1 FOREIGN KEY (adj_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_adjectives pl_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.pl_adjectives
    ADD CONSTRAINT pl_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_adverbs pl_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.pl_adverbs
    ADD CONSTRAINT pl_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_nouns pl_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.pl_nouns
    ADD CONSTRAINT pl_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_numerals pl_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.pl_numerals
    ADD CONSTRAINT pl_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pl_verbs pl_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.pl_verbs
    ADD CONSTRAINT pl_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_adjectives tr_adjectives_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.tr_adjectives
    ADD CONSTRAINT tr_adjectives_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_adverbs tr_adverbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.tr_adverbs
    ADD CONSTRAINT tr_adverbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_nouns tr_nouns_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.tr_nouns
    ADD CONSTRAINT tr_nouns_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_numerals tr_numerals_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.tr_numerals
    ADD CONSTRAINT tr_numerals_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tr_verbs tr_verbs_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.tr_verbs
    ADD CONSTRAINT tr_verbs_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_grammar_progress user_grammar_vocab_topics_grammar_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_grammar_progress
    ADD CONSTRAINT user_grammar_vocab_topics_grammar_fk FOREIGN KEY (tg_id) REFERENCES public.topics_grammar(tg_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_grammar_progress user_grammar_vocab_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_grammar_progress
    ADD CONSTRAINT user_grammar_vocab_users_fk FOREIGN KEY (u_id) REFERENCES public.users(u_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_preferences user_preferences_langs_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_preferences
    ADD CONSTRAINT user_preferences_langs_fk FOREIGN KEY (last_course_code) REFERENCES public.langs(l_code) ON UPDATE SET NULL ON DELETE SET NULL;


--
-- Name: user_preferences user_preferences_langs_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_preferences
    ADD CONSTRAINT user_preferences_langs_fk_1 FOREIGN KEY (ui_code) REFERENCES public.langs(l_code) ON UPDATE SET NULL ON DELETE SET NULL;


--
-- Name: user_preferences user_preferences_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_preferences
    ADD CONSTRAINT user_preferences_users_fk FOREIGN KEY (u_id) REFERENCES public.users(u_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_vocab_progress user_progress_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_progress_users_fk FOREIGN KEY (u_id) REFERENCES public.users(u_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_vocab_progress user_progress_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_progress_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_vocab_progress user_vocab_progress_langs_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.user_vocab_progress
    ADD CONSTRAINT user_vocab_progress_langs_fk FOREIGN KEY (l_code) REFERENCES public.langs(l_code) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: verb_noun_constraints verb_noun_constraints_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.verb_noun_constraints
    ADD CONSTRAINT verb_noun_constraints_vocab_fk FOREIGN KEY (verb_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: verb_noun_constraints verb_noun_constraints_vocab_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.verb_noun_constraints
    ADD CONSTRAINT verb_noun_constraints_vocab_fk_1 FOREIGN KEY (noun_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: vocab_topics vocab_topics_topics_lexical_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.vocab_topics
    ADD CONSTRAINT vocab_topics_topics_lexical_fk FOREIGN KEY (tl_id) REFERENCES public.topics_lexical(tl_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: vocab_topics vocab_topics_vocab_fk; Type: FK CONSTRAINT; Schema: public; Owner: cptkidd62
--

ALTER TABLE ONLY public.vocab_topics
    ADD CONSTRAINT vocab_topics_vocab_fk FOREIGN KEY (v_id) REFERENCES public.vocab(v_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO cptkidd62;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO cptkidd62;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO cptkidd62;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO cptkidd62;


--
-- PostgreSQL database dump complete
--

