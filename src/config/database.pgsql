--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5 (Ubuntu 10.5-0ubuntu0.18.04)
-- Dumped by pg_dump version 10.5 (Ubuntu 10.5-0ubuntu0.18.04)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: evaluation; Type: TYPE; Schema: public; Owner: tinyrick
--

CREATE TYPE public.evaluation AS ENUM (
    'like',
    'dislike'
);


ALTER TYPE public.evaluation OWNER TO tinyrick;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: category; Type: TABLE; Schema: public; Owner: tinyrick
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.category OWNER TO tinyrick;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: tinyrick
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO tinyrick;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tinyrick
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: meme; Type: TABLE; Schema: public; Owner: tinyrick
--

CREATE TABLE public.meme (
    id integer NOT NULL,
    src text NOT NULL,
    title character varying(50) NOT NULL,
    owner character varying(20),
    category_name character varying(30),
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.meme OWNER TO tinyrick;

--
-- Name: meme_id_seq; Type: SEQUENCE; Schema: public; Owner: tinyrick
--

CREATE SEQUENCE public.meme_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.meme_id_seq OWNER TO tinyrick;

--
-- Name: meme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tinyrick
--

ALTER SEQUENCE public.meme_id_seq OWNED BY public.meme.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tinyrick
--

CREATE TABLE public.users (
    username character varying(20) NOT NULL,
    password_digest character varying(64) NOT NULL,
    id integer NOT NULL,
    created_at date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.users OWNER TO tinyrick;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tinyrick
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tinyrick;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tinyrick
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: vote; Type: TABLE; Schema: public; Owner: tinyrick
--

CREATE TABLE public.vote (
    id integer NOT NULL,
    memeid integer NOT NULL,
    username character varying(20),
    which public.evaluation,
    meme_owner character varying(20) NOT NULL
);


ALTER TABLE public.vote OWNER TO tinyrick;

--
-- Name: vote_id_seq; Type: SEQUENCE; Schema: public; Owner: tinyrick
--

CREATE SEQUENCE public.vote_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vote_id_seq OWNER TO tinyrick;

--
-- Name: vote_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tinyrick
--

ALTER SEQUENCE public.vote_id_seq OWNED BY public.vote.id;


--
-- Name: vote_memeid_seq; Type: SEQUENCE; Schema: public; Owner: tinyrick
--

CREATE SEQUENCE public.vote_memeid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vote_memeid_seq OWNER TO tinyrick;

--
-- Name: vote_memeid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tinyrick
--

ALTER SEQUENCE public.vote_memeid_seq OWNED BY public.vote.memeid;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: meme id; Type: DEFAULT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.meme ALTER COLUMN id SET DEFAULT nextval('public.meme_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: vote id; Type: DEFAULT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.vote ALTER COLUMN id SET DEFAULT nextval('public.vote_id_seq'::regclass);


--
-- Name: vote memeid; Type: DEFAULT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.vote ALTER COLUMN memeid SET DEFAULT nextval('public.vote_memeid_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: tinyrick
--

COPY public.category (id, name) FROM stdin;
1	Games
3	Black humor
11	Other
\.


--
-- Data for Name: meme; Type: TABLE DATA; Schema: public; Owner: tinyrick
--

COPY public.meme (id, src, title, owner, category_name, created_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tinyrick
--

COPY public.users (username, password_digest, id, created_at) FROM stdin;
\.


--
-- Data for Name: vote; Type: TABLE DATA; Schema: public; Owner: tinyrick
--

COPY public.vote (id, memeid, username, which, meme_owner) FROM stdin;
\.


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tinyrick
--

SELECT pg_catalog.setval('public.category_id_seq', 11, true);


--
-- Name: meme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tinyrick
--

SELECT pg_catalog.setval('public.meme_id_seq', 91, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tinyrick
--

SELECT pg_catalog.setval('public.users_id_seq', 200, true);


--
-- Name: vote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tinyrick
--

SELECT pg_catalog.setval('public.vote_id_seq', 39, true);


--
-- Name: vote_memeid_seq; Type: SEQUENCE SET; Schema: public; Owner: tinyrick
--

SELECT pg_catalog.setval('public.vote_memeid_seq', 1, false);


--
-- Name: category category_name_key; Type: CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_name_key UNIQUE (name);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: meme meme_pkey; Type: CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.meme
    ADD CONSTRAINT meme_pkey PRIMARY KEY (id);


--
-- Name: meme meme_src_key; Type: CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.meme
    ADD CONSTRAINT meme_src_key UNIQUE (src);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: vote vote_pkey; Type: CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.vote
    ADD CONSTRAINT vote_pkey PRIMARY KEY (id);


--
-- Name: vote delete_vote; Type: RULE; Schema: public; Owner: tinyrick
--

CREATE RULE delete_vote AS
    ON UPDATE TO public.vote
   WHERE (new.which = old.which) DO  DELETE FROM public.vote
  WHERE (vote.id = new.id);


--
-- Name: meme meme_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.meme
    ADD CONSTRAINT meme_category_fkey FOREIGN KEY (category_name) REFERENCES public.category(name);


--
-- Name: meme meme_owner_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.meme
    ADD CONSTRAINT meme_owner_fkey FOREIGN KEY (owner) REFERENCES public.users(username);


--
-- Name: vote vote_username_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tinyrick
--

ALTER TABLE ONLY public.vote
    ADD CONSTRAINT vote_username_fkey FOREIGN KEY (username) REFERENCES public.users(username);


--
-- PostgreSQL database dump complete
--

