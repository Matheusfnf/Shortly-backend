--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

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
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-12-22 14:56:56.922529'::timestamp without time zone NOT NULL,
    "userSignature" text NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-12-22 14:34:40.611019'::timestamp without time zone NOT NULL,
    signature text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "shortUrl", url, "visitCount", "userId", "createdAt", "userSignature") FROM stdin;
22	LLRBF6	https://www.youtube.com.br/	0	23	2022-12-22 14:56:56.922529	matheuscerto@ccadsa.com
24	s_4jlL	https://www.youtube.com.br/	0	24	2022-12-22 14:56:56.922529	matheusfortunatoaw@hotmail.com
23	zJ1om-	https://www.youtube.com.br/	5	23	2022-12-22 14:56:56.922529	matheuscerto@ccadsa.com
25	61Lldn	https://www.youtube.com.br/	3	25	2022-12-22 14:56:56.922529	matheusfortunatoaw@hotmaill.com
26	ExSaX0	https://www.youtube.com.br/	2	26	2022-12-22 14:56:56.922529	matheusfortunatoaw@hotmailll.com
27	dG1Iif	https://www.youtube.com.br/	1	27	2022-12-22 14:56:56.922529	matheusfortunatoaw@hotm.com
28	euStfH	https://www.youtube.com.br/	1	28	2022-12-22 14:56:56.922529	mari@hotm.com
29	zvO-SY	https://www.youtube.com.br/	1	29	2022-12-22 14:56:56.922529	marim@hotm.com
30	jLH9oB	https://www.youtube.com.br/	2	30	2022-12-22 14:56:56.922529	marimmm@hotm.com
31	E4tMpS	https://www.youtube.com.br/	5	31	2022-12-22 14:56:56.922529	diogo@hotm.com
32	Q-K-_a	https://www.youtube.com.br/	8	32	2022-12-22 14:56:56.922529	arte@arte.com
33	wGYH1f	https://www.youtube.com.br/	3	33	2022-12-22 14:56:56.922529	aparecer@aparecer.com
34	zYqYku	https://www.youtube.com.br/	6	34	2022-12-22 14:56:56.922529	oioi@oioi.com
35	KN9vEu	https://www.driven.com.br/	0	34	2022-12-22 14:56:56.922529	oioi@oioi.com
36	-DJi2U	https://www.driven.com.br/	0	34	2022-12-22 14:56:56.922529	oioi@oioi.com
37	2Jfmsy	https://www.driven.com.br/	0	34	2022-12-22 14:56:56.922529	oioi@oioi.com
38	G3rYid	https://www.driven.com.br/	2	34	2022-12-22 14:56:56.922529	oioi@oioi.com
39	w9MA_C	https://www.driven.com.br/	0	34	2022-12-22 14:56:56.922529	oioi@oioi.com
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, name, password, "createdAt", signature) FROM stdin;
18	matheuscerto@certoo.com	matheus4	$2b$10$G9.u/1of1baaYQNzviQOPe4MWlDfrGPQz3YWgR6XpOM9RFOZXcNlq	2022-12-22 14:34:40.611019	matheuscerto@certoo.com
19	matheuscerto@certooo.com	matheus4	$2b$10$5Q5t0GS2a94HHmFhwiBdZ.SjjIeEY3qs7ne.ASWs.3lJth694cYky	2022-12-22 14:34:40.611019	matheuscerto@certooo.com
20	matheuscerto@cca.com	matheus4	$2b$10$JNcXdAfy056YQMGgr.D7MO3VDAl2Ucn8w2Tsdbg6AN/ljlWPoZrQ.	2022-12-22 14:34:40.611019	matheuscerto@cca.com
21	matheuscerto@ccda.com	matheus3423	$2b$10$ZmUxs0rQadzBYFQNPYLYiuKIyM7tOgOgZeCnRKYUvVJpPOSvZ1GX2	2022-12-22 14:34:40.611019	matheuscerto@ccda.com
22	matheuscerto@ccada.com	matheus3423	$2b$10$BnKAcY6uNHG8smOQ9qIbKOdILj7AJCtPXDKoej2PcKm1nziNTuxua	2022-12-22 14:34:40.611019	matheuscerto@ccada.com
23	matheuscerto@ccadsa.com	matheus342d3	$2b$10$hT9eHbezGaqaOtycygSvn.iecgQ7adoZUeM1CTh7769Nnjusl7VxK	2022-12-22 14:34:40.611019	matheuscerto@ccadsa.com
24	matheusfortunatoaw@hotmail.com	matheus	$2b$10$yA/7XKHdnkFiU9lFvwWfLOb2a.3WspX/r8ZdZesFAi1fwBrLW7F.K	2022-12-22 14:34:40.611019	matheusfortunatoaw@hotmail.com
25	matheusfortunatoaw@hotmaill.com	matheus	$2b$10$ETL4jrREFtKzmKoESkPWL.7xOtpdcSy7wFFjrtwMftE1nlpYYNUH.	2022-12-22 14:34:40.611019	matheusfortunatoaw@hotmaill.com
26	matheusfortunatoaw@hotmailll.com	matheus	$2b$10$./zsMM4dLvVJAYHzaam6OOPmuKNnqPVmV3XMNOv0.mPoOMOzs.REG	2022-12-22 14:34:40.611019	matheusfortunatoaw@hotmailll.com
27	matheusfortunatoaw@hotm.com	matheus	$2b$10$qLtflBxd2zxtVUsPgec5f.qBSCo0ex9Qg7.zUg1QVKfHYmpo0ydIK	2022-12-22 14:34:40.611019	matheusfortunatoaw@hotm.com
28	mari@hotm.com	matheus	$2b$10$D8j3/7sT/z221VGWVbbl5.owXL2JNbTE4imqDOrtsGgrxgIHiRGWW	2022-12-22 14:34:40.611019	mari@hotm.com
29	marim@hotm.com	matheus	$2b$10$Zy1VekXET7gxZJoRWE.lh.AJ1MONnDZe6H.afBIw8sN/NNJ4.1TKm	2022-12-22 14:34:40.611019	marim@hotm.com
30	marimmm@hotm.com	matheus	$2b$10$re5sOhio/7OaQ0gKIL55YeC/Mr2BUULQZo8k3CwT.zTi7L2qgLhBK	2022-12-22 14:34:40.611019	marimmm@hotm.com
31	diogo@hotm.com	matheus	$2b$10$0fnpyKYqKkjrenGrpa5ZpuyXBKK2iLIMU.W4j.LKcGzp5D6g.pPeG	2022-12-22 14:34:40.611019	diogo@hotm.com
32	arte@arte.com	Arte	$2b$10$Mqp2AF5SKlzULX9P7hS8HehLtHG8mdE3qPRXuX2gwiuRm9EKc17.O	2022-12-22 14:34:40.611019	arte@arte.com
33	aparecer@aparecer.com	vouaparecer	$2b$10$oRtp7fctEoLQSCfWwoPkWOxfFeY1L3m7enUMWbv9AugJMSJiLTGbq	2022-12-22 14:34:40.611019	aparecer@aparecer.com
34	oioi@oioi.com	oioi	$2b$10$A9/BmJqHcCEWVRuj/AYN8.FIAITi8noUHtQCEBFgfTkqLy0U40rbu	2022-12-22 14:34:40.611019	oioi@oioi.com
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 39, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 34, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

