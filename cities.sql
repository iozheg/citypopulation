--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.6
-- Dumped by pg_dump version 9.6.6

-- Started on 2017-11-28 15:07:20 +05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 205 (class 1259 OID 16564)
-- Name: citypopulation_citymodel; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE citypopulation_citymodel (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    population integer NOT NULL
);


ALTER TABLE citypopulation_citymodel OWNER TO alex;

--
-- TOC entry 204 (class 1259 OID 16562)
-- Name: citypopulation_citymodel_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE citypopulation_citymodel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE citypopulation_citymodel_id_seq OWNER TO alex;

--
-- TOC entry 2220 (class 0 OID 0)
-- Dependencies: 204
-- Name: citypopulation_citymodel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE citypopulation_citymodel_id_seq OWNED BY citypopulation_citymodel.id;


--
-- TOC entry 2094 (class 2604 OID 16567)
-- Name: citypopulation_citymodel id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY citypopulation_citymodel ALTER COLUMN id SET DEFAULT nextval('citypopulation_citymodel_id_seq'::regclass);


--
-- TOC entry 2215 (class 0 OID 16564)
-- Dependencies: 205
-- Data for Name: citypopulation_citymodel; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY citypopulation_citymodel (id, name, population) FROM stdin;
3	Новосибирск	1603
5	Нижний Новгород	1262
6	Казань	1232
7	Челябинск	1199
8	Омск	1178
9	Самара	1170
10	Ростов-на-Дону	1125
1	Уфа	1116
4	Екатеринбург	1456
2	Красноярск	1083
\.


--
-- TOC entry 2221 (class 0 OID 0)
-- Dependencies: 204
-- Name: citypopulation_citymodel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('citypopulation_citymodel_id_seq', 10, true);


--
-- TOC entry 2096 (class 2606 OID 16569)
-- Name: citypopulation_citymodel citypopulation_citymodel_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY citypopulation_citymodel
    ADD CONSTRAINT citypopulation_citymodel_pkey PRIMARY KEY (id);


-- Completed on 2017-11-28 15:07:21 +05

--
-- PostgreSQL database dump complete
--

