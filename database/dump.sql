--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

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

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
1	2	1	2999
2	39	2	2595
3	40	2	2595
4	41	2	2595
5	42	2	2595
6	43	3	2900
7	44	3	2900
8	45	3	2900
9	46	3	2900
10	47	3	2900
11	48	3	2900
12	49	3	2900
13	50	3	2900
14	51	3	2900
15	52	3	2900
16	53	3	2900
17	54	3	2900
18	55	3	2900
20	56	2	2595
22	57	2	2595
24	58	1	2999
26	59	1	2999
28	60	1	2999
30	61	1	2999
32	62	1	2999
34	63	1	2999
36	64	1	2999
38	65	1	2999
40	66	1	2999
42	67	1	2999
44	68	1	2999
46	69	1	2999
47	69	1	2999
48	69	1	2999
49	69	1	2999
50	69	2	2595
51	69	3	2900
52	70	5	9900
53	70	4	999
54	70	3	2900
55	70	2	2595
56	70	1	2999
57	71	1	2999
58	72	1	2999
59	72	2	2595
60	72	3	2900
61	73	1	2999
62	74	1	2999
63	75	1	2999
64	76	1	2999
65	77	1	2999
66	78	1	2999
67	79	1	2999
68	78	2	2595
69	80	2	2595
70	80	3	2900
71	81	1	2999
72	82	3	2900
73	83	1	2999
74	83	2	2595
75	84	1	2999
76	84	3	2900
77	85	1	2999
78	85	3	2900
79	86	3	2900
80	86	1	2999
81	86	3	2900
82	86	4	999
83	87	2	2595
84	87	4	999
85	87	6	830
86	88	3	2900
87	88	2	2595
88	88	1	2999
89	88	1	2999
90	89	2	2595
91	89	2	2595
92	89	2	2595
93	89	2	2595
94	89	2	2595
95	89	2	2595
96	90	1	2999
97	90	2	2595
98	90	6	830
99	91	1	2999
100	91	2	2595
101	91	3	2900
102	91	3	2900
103	91	3	2900
104	91	3	2900
105	92	3	2900
106	92	2	2595
107	93	1	599
108	93	8	830
109	93	1	599
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-04-29 12:46:34.795366-07
2	2020-04-29 12:47:35.184174-07
3	2020-04-29 12:49:18.255289-07
4	2020-04-29 12:50:39.581927-07
5	2020-04-29 12:54:19.390197-07
6	2020-04-29 12:55:25.650712-07
7	2020-04-29 12:55:41.957534-07
8	2020-04-29 12:57:50.535813-07
9	2020-04-29 12:58:23.70415-07
10	2020-04-29 12:58:55.858282-07
11	2020-04-29 12:59:49.088921-07
12	2020-04-29 13:00:05.64351-07
13	2020-04-29 13:03:22.840096-07
14	2020-04-29 13:10:30.78324-07
15	2020-04-29 13:10:51.650137-07
16	2020-04-29 13:13:45.563926-07
17	2020-04-29 13:13:58.036826-07
18	2020-04-29 13:14:37.229924-07
19	2020-04-29 13:18:05.748748-07
20	2020-04-29 13:18:45.107202-07
21	2020-04-29 13:19:20.075043-07
22	2020-04-29 13:20:00.539969-07
23	2020-04-29 13:20:27.217051-07
24	2020-04-29 13:21:32.183116-07
25	2020-04-29 13:21:50.755961-07
26	2020-04-29 13:22:14.798655-07
27	2020-04-29 13:22:51.967659-07
28	2020-04-29 13:23:15.512991-07
29	2020-04-29 13:23:54.770351-07
30	2020-04-29 13:26:08.58348-07
31	2020-04-29 13:26:24.689037-07
32	2020-04-29 13:26:52.683088-07
33	2020-04-29 14:38:48.915102-07
34	2020-04-29 14:41:22.233579-07
35	2020-04-29 18:54:04.20067-07
36	2020-04-29 18:54:16.862929-07
37	2020-04-29 18:55:46.740074-07
38	2020-04-29 18:58:04.22413-07
39	2020-04-29 18:58:24.801031-07
40	2020-04-29 18:58:59.135287-07
41	2020-04-29 18:59:33.215708-07
42	2020-04-29 18:59:39.617242-07
43	2020-04-29 19:16:32.766842-07
44	2020-04-29 19:18:04.159073-07
45	2020-04-29 19:18:36.452931-07
46	2020-04-29 19:21:14.967752-07
47	2020-04-29 19:21:36.36033-07
48	2020-04-29 19:22:02.555144-07
49	2020-04-29 19:22:32.622219-07
50	2020-04-29 19:23:08.923788-07
51	2020-04-29 19:23:29.162554-07
52	2020-04-29 19:23:41.885986-07
53	2020-04-29 19:24:23.633659-07
54	2020-04-29 19:25:14.140658-07
55	2020-04-29 19:26:14.907569-07
56	2020-04-29 19:42:57.991975-07
57	2020-04-29 19:48:22.380717-07
58	2020-04-29 19:48:41.687524-07
59	2020-04-29 19:50:59.967022-07
60	2020-04-29 19:51:06.916308-07
61	2020-04-29 19:52:57.199727-07
62	2020-04-29 19:56:17.687842-07
63	2020-04-29 19:58:18.139724-07
64	2020-04-29 20:00:01.985965-07
65	2020-04-29 20:01:11.375684-07
66	2020-04-29 20:02:07.688621-07
67	2020-04-29 20:04:08.312138-07
68	2020-04-29 20:05:49.108746-07
69	2020-04-29 20:06:51.864855-07
70	2020-04-29 20:20:07.463525-07
71	2020-04-29 20:48:04.98675-07
72	2020-04-29 20:57:33.507876-07
73	2020-05-19 13:02:59.387597-07
74	2020-05-19 13:08:05.217899-07
75	2020-05-19 13:34:57.586527-07
76	2020-05-19 13:44:36.572054-07
77	2020-05-19 13:45:05.445904-07
78	2020-05-19 13:46:38.646138-07
79	2020-05-19 13:50:38.502364-07
80	2020-05-19 16:19:45.250993-07
81	2020-05-19 16:37:50.78749-07
82	2020-05-22 14:50:01.126153-07
83	2020-05-22 15:12:38.333301-07
84	2020-05-22 15:45:14.046043-07
85	2020-05-25 11:51:18.555281-07
86	2020-05-25 12:14:43.112549-07
87	2020-05-25 12:28:17.3389-07
88	2020-05-26 11:02:57.960785-07
89	2020-05-26 11:10:55.775508-07
90	2020-05-26 11:25:50.514481-07
91	2020-05-28 12:09:20.842465-07
92	2020-05-28 17:53:00.67981-07
93	2020-05-30 18:22:27.274488-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	74	John Doe	000 000 0000	9200 Irvine Drive	2020-05-19 13:34:15.74207-07
2	75	John Doe	000 000 0000	9200 Irvine Drive	2020-05-19 13:38:50.906339-07
3	76	John Doe	000 000 0000	9200 Irvine Driv	2020-05-19 13:44:43.897966-07
4	77	John Doe	000 000 0000	9200 Irvine Driv	2020-05-19 13:45:14.712641-07
5	78	John Smit	000 000 0000	9200 Irvine Center Drive	2020-05-19 16:19:37.040129-07
6	80	James Doe	000 000 0000	9200 Irvine Center Drive	2020-05-19 16:37:46.802779-07
7	82	f	f	ffff	2020-05-22 14:50:07.990245-07
8	83	Kevin Tolentino	000-000-0000	1234 Warren Drive	2020-05-22 15:39:13.414125-07
9	84	John	000 000 0000	1234 Warren Way	2020-05-22 15:46:11.51784-07
10	85	Kevin Tolentino	000 000 0000	1234 Warren Drive	2020-05-25 11:51:44.007281-07
11	86	Kevin Tolentino	0000 000 000	1234 Warren Way	2020-05-25 12:26:06.064198-07
12	87	John Doe	0000 0000 0000	1234 Warren Way	2020-05-25 12:28:45.035005-07
13	91	Kevin Tolentino	000 000 0000	Warren Way	2020-05-28 17:52:25.868812-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Aeonium Greenstar	599	/images/aeonium-greenstar.jpg	 A feature which distinguishes this genus from many of its relatives is the manner in which the flowers bear free petals, and are divided into 6 or 12 sections.	Aeonium, the tree houseleeks, is a genus of about 35 species of succulent, subtropical plants of the family Crassulaceae. Many species are popular in horticulture. The genus name comes from the ancient Greek "aionos" (ageless). While most of them are native to the Canary Islands, some are found in Madeira, Morocco, and in East Africa (for example in the Semien Mountains of Ethiopia). The succulent leaves are typically arranged on a basal stem, in a dense, spreading rosette. A feature which distinguishes this genus from many of its relatives is the manner in which the flowers bear free petals, and are divided into 6 or 12 sections. Each rosette produces a central inflorescence only once, and then dies back (though it will usually branch or offset to produce ensuing rosettes).
2	Aloe Brevifolia	799	/images/aloe-brevifolia.jpg	As it requires winter heat, in temperate regions it is grown under glass or as a houseplant.	Aloe brevifolia, the short-leaved aloe, is a species of flowering plant in the family Asphodelaceae. It is a tiny, compact, blue-green evergreen succulent perennial, that is native to the Western Cape, South Africa. Listed as Vulnerable on IUCN's global Red List, it is threatened in its natural habitat, but is also widely popular as an ornamental plant in rockeries and desert gardens worldwide. As it requires winter heat, in temperate regions it is grown under glass or as a houseplant. In the wild, this diminutive species is completely confined to the dry clay soil of Rens Shale Renosterveld a critically endangered and rapidly disappearing vegetation type. Small populations are normally found growing on inaccessible rocky slopes and cliffs, especially near the coast, but it is thought that these are merely relics of what was once a much wider distribution. There are several subspecies, which are now separated from each other by farmland and other development.
3	Aloe Ciliaris	699	/images/aloe-ciliaris.jpg	The fleshy leaves themselves are strongly recurved (helping to anchor the tall stems in dense thickets and assist the plant in climbing).	They can be differentiated from other Aloiampelos species by the way that the soft, white, hair-like teeth that grow along the margins of the leaves, extend all the way around the stem, at the base of the leaf. The fleshy leaves themselves are strongly recurved (helping to anchor the tall stems in dense thickets and assist the plant in climbing). The leaf sheaths are conspicuously striped green and white. These plants grow very quickly, producing long, thin, untidy stems that shoot upwards, producing large bright orange-red flowers once they reach the sun. If there are no nearby trees to act as host and support, it just forms a straggly shrub. The red flowers appear mostly from November to April.
4	Cleistocactus Strausi	599	/images/cleistocactus-strausi.jpg	It is native to mountainous regions of Department Tarija, Bolivia between 1,500 m (4,921 ft) and 3,000 m (9,843 ft).	Cleistocactus strausii, the silver torch or wooly torch, is a perennial cactus of the family Cactaceae. It is native to mountainous regions of Department Tarija, Bolivia between 1,500 m (4,921 ft) and 3,000 m (9,843 ft). Its slender, erect, grey-green columns can reach a height of 3 m (9.8 ft), but are only about 6 cm (2.5 in) across. The columns are formed from around 25 ribs and are densely covered with areoles, supporting four yellow-brown spines up to 4 cm (1.5 in) long and 20 shorter white radials. The cactus prefers free draining soils, strong sunlight, but not high temperatures in fact it can withstand hard frosts down to -10C. In its natural habitat it receives plenty of water during the summer, but almost none over the winter. 
5	Crassula Arborescens Silver Dollar	999	/images/crassula-arborescens-silver-dollar.jpg	It has round gray "Silver Dollar" leaves. It blooms in winter, with white to pink flowers.	Crassula arborescens, the silver jade plant, silver dollar plant, beestebul, Chinese jade, money plant, or money tree, is a species of succulent plant in the family Crassulaceae. It is an endemic plant of the Western Cape, South Africa. It is a 2 to 4 ft (0.6 to 1.2 m) succulent shrub. It has round gray "Silver Dollar" leaves. It blooms in winter, with white to pink flowers. It is cultivated as an ornamental plant for use in drought tolerant and succulent gardens, and in container gardens. It is also suitable for growing indoors as a houseplant.
6	First Lady Echeveria	899	/images/first-lady-echeveria.jpg	It is drought tolerant and deer resistant and attracts hummingbirds when it flowers.	First Lady Echeveria is a very decorative succulent perennial for the rock garden or containers, growing as blue green rosettes with frilly pink edges. It is drought tolerant and deer resistant and attracts hummingbirds when it flowers. The color may very due to light or cooler temperatures. Not frost tolerant. Plants may be evergreen or deciduous. Flowers on short stalks (cymes) arise from compact rosettes of succulent fleshy, often brightly coloured leaves. Species are polycarpic, meaning that they may flower and set seed many times over the course of their lifetimes.
7	Haworthia Turgida	799	/images/haworthia-turgida.jpg	It grows in dense clusters of offsets from the base, and in its native habitat prefers rocky limestone or slate cliffs.	Haworthia turgida, also sometimes known as the windowpane plant, is a species of Haworthia native to the Cape Provinces. Its common name comes from the translucent panes on its leaves, which are similar to those of Haworthia cooperi and some other species in the genus. It grows in dense clusters of offsets from the base, and in its native habitat prefers rocky limestone or slate cliffs. The main type has pale green leaves but varies widely. Varieties include Haworthia turgida var. longibracteata (M.B.Bayer) and Haworthia turgida var. suberecta (Poelln.).
8	Peperomia Dolabriformis Maxi	899	/images/peperomia-maxi.jpg	Most of them are compact, small perennial epiphytes growing on rotten wood. More than 1500 species have been recorded.	Peperomia (radiator plant) is one of the two large genera of the family Piperaceae, with more than 1000 recorded species. Most of them are compact, small perennial epiphytes growing on rotten wood. More than 1500 species have been recorded, occurring in all tropical and subtropical regions of the world, though concentrated in Central America and northern South America. A limited number of species (around 17) are found in Africa. These tropical perennials are grown for their ornamental foliage. They are mostly natives of tropical America. They are compact and usually do not exceed 12 inches (30 cm) in height. They vary considerably in appearance. Some have threadlike, trailing stems and some have fleshy, stout stems.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 109, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 93, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 13, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

