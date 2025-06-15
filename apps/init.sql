--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-03 04:26:26 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 217 (class 1259 OID 16389)
-- Name: a0_task; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public.a0_task (
    task_id bigint NOT NULL,
    task_title character varying(255) NOT NULL,
    task_description text NOT NULL,
    task_date timestamp without time zone,
    task_status character varying(50) NOT NULL,
    task_priority character varying(50) NOT NULL,
    task_category character varying(50) NOT NULL,
    created_date timestamp without time zone DEFAULT now() NOT NULL,
    updated_date timestamp without time zone
);


ALTER TABLE public.a0_task OWNER TO admin_user;

--
-- TOC entry 3419 (class 0 OID 0)
-- Dependencies: 217
-- Name: TABLE a0_task; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.a0_task IS 'Central task management table that tracks all tasks with their status, priority, and category';


--
-- TOC entry 3420 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.task_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_id IS 'Auto-incrementing unique task identifier';


--
-- TOC entry 3421 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.task_title; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_title IS 'Short descriptive title of the task';


--
-- TOC entry 3422 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.task_description; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_description IS 'Detailed explanation of task requirements';


--
-- TOC entry 3423 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.task_date; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_date IS 'Timestamp when task was need to completed';


--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.task_status; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_status IS 'Current workflow state (FK to stc_status)';


--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.task_priority; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_priority IS 'Importance level (FK to stc_priority)';


--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.task_category; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_category IS 'Classification group (FK to stc_category)';


--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.created_date; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.created_date IS 'Timestamp when task was first created';


--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN a0_task.updated_date; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.updated_date IS 'Timestamp when task was last modified';


--
-- TOC entry 218 (class 1259 OID 16395)
-- Name: a0_task_task_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public.a0_task_task_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.a0_task_task_id_seq OWNER TO admin_user;

--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 218
-- Name: a0_task_task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public.a0_task_task_id_seq OWNED BY public.a0_task.task_id;


--
-- TOC entry 219 (class 1259 OID 16396)
-- Name: b1_comment; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public.b1_comment (
    comment_id bigint NOT NULL,
    task_id bigint NOT NULL,
    comment_text text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone
);


ALTER TABLE public.b1_comment OWNER TO admin_user;

--
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 219
-- Name: TABLE b1_comment; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.b1_comment IS 'Stores task comments with referential integrity to a0_task';


--
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN b1_comment.comment_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.comment_id IS 'Auto-incrementing primary key for comments';


--
-- TOC entry 3432 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN b1_comment.task_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.task_id IS 'Foreign key reference to parent task in a0_task';


--
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN b1_comment.comment_text; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.comment_text IS 'The full text content of the comment';


--
-- TOC entry 3434 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN b1_comment.created_at; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.created_at IS 'Timestamp when comment was initially created';


--
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 219
-- Name: COLUMN b1_comment.updated_at; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.updated_at IS 'Timestamp when comment was last modified (NULL if never updated)';


--
-- TOC entry 220 (class 1259 OID 16402)
-- Name: b1_comment_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public.b1_comment_comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.b1_comment_comment_id_seq OWNER TO admin_user;

--
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 220
-- Name: b1_comment_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public.b1_comment_comment_id_seq OWNED BY public.b1_comment.comment_id;


--
-- TOC entry 221 (class 1259 OID 16403)
-- Name: stc_category; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public.stc_category (
    category_name character varying(50) NOT NULL,
    created_date timestamp without time zone DEFAULT now() NOT NULL,
    updated_date timestamp without time zone,
    update_reason character varying
);


ALTER TABLE public.stc_category OWNER TO admin_user;

--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 221
-- Name: TABLE stc_category; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.stc_category IS 'Stores different categories for classification';


--
-- TOC entry 222 (class 1259 OID 16409)
-- Name: stc_priority; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public.stc_priority (
    app_priority character varying(50) NOT NULL,
    created_date timestamp without time zone DEFAULT now() NOT NULL,
    updated_date timestamp without time zone,
    update_reason character varying
);


ALTER TABLE public.stc_priority OWNER TO admin_user;

--
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 222
-- Name: TABLE stc_priority; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.stc_priority IS 'Stores priority information for applications';


--
-- TOC entry 223 (class 1259 OID 16415)
-- Name: stc_status; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public.stc_status (
    app_status character varying(50) NOT NULL,
    created_date timestamp without time zone DEFAULT now() NOT NULL,
    updated_date timestamp without time zone,
    update_reason character varying
);


ALTER TABLE public.stc_status OWNER TO admin_user;

--
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 223
-- Name: TABLE stc_status; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.stc_status IS 'Stores status information for applications';


--
-- TOC entry 224 (class 1259 OID 16421)
-- Name: z_task_history; Type: TABLE; Schema: public; Owner: admin_user
--

CREATE TABLE public.z_task_history (
    history_id bigint NOT NULL,
    task_id bigint NOT NULL,
    task_title character varying(255) NOT NULL,
    task_description text NOT NULL,
    task_date timestamp without time zone,
    task_status character varying(50) NOT NULL,
    task_priority character varying(50) NOT NULL,
    task_category character varying(50) NOT NULL,
    change_timestamp timestamp without time zone DEFAULT now() NOT NULL,
    operation_type character varying(10) NOT NULL
);


ALTER TABLE public.z_task_history OWNER TO admin_user;

--
-- TOC entry 3440 (class 0 OID 0)
-- Dependencies: 224
-- Name: TABLE z_task_history; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.z_task_history IS 'Comprehensive audit trail for all changes to tasks (creates/updates/deletes)';


--
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.history_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.history_id IS 'Auto-incrementing audit record identifier';


--
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.task_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_id IS 'Original task ID reference to a0_task';


--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.task_title; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_title IS 'Task title at time of change';


--
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.task_description; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_description IS 'Full task description when recorded';


--
-- TOC entry 3445 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.task_status; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_status IS 'Status value when change occurred';


--
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.task_priority; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_priority IS 'Priority level when change occurred';


--
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.task_category; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_category IS 'Category when change occurred';


--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.change_timestamp; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.change_timestamp IS 'Exact time when change was recorded';


--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 224
-- Name: COLUMN z_task_history.operation_type; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.operation_type IS 'Type of operation: INSERT/UPDATE/DELETE';


--
-- TOC entry 225 (class 1259 OID 16427)
-- Name: z_task_history_history_id_seq; Type: SEQUENCE; Schema: public; Owner: admin_user
--

CREATE SEQUENCE public.z_task_history_history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.z_task_history_history_id_seq OWNER TO admin_user;

--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 225
-- Name: z_task_history_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public.z_task_history_history_id_seq OWNED BY public.z_task_history.history_id;


--
-- TOC entry 3232 (class 2604 OID 16428)
-- Name: a0_task task_id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task ALTER COLUMN task_id SET DEFAULT nextval('public.a0_task_task_id_seq'::regclass);


--
-- TOC entry 3234 (class 2604 OID 16429)
-- Name: b1_comment comment_id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.b1_comment ALTER COLUMN comment_id SET DEFAULT nextval('public.b1_comment_comment_id_seq'::regclass);


--
-- TOC entry 3239 (class 2604 OID 16430)
-- Name: z_task_history history_id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.z_task_history ALTER COLUMN history_id SET DEFAULT nextval('public.z_task_history_history_id_seq'::regclass);


--
-- TOC entry 3405 (class 0 OID 16389)
-- Dependencies: 217
-- Data for Name: a0_task; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public.a0_task (task_id, task_title, task_description, task_date, task_status, task_priority, task_category, created_date, updated_date) FROM stdin;
5	siva	siva	2025-04-06 06:49:55.610807	completed	urgent	Others	2025-04-06 06:49:55.610807	\N
6	siva	siva	2025-04-06 06:49:55.773915	completed	urgent	Others	2025-04-06 06:49:55.773915	\N
7	siva	siva	2025-04-06 06:49:55.943309	completed	urgent	Others	2025-04-06 06:49:55.943309	\N
8	siva	siva	2025-04-06 06:49:56.110204	completed	urgent	Others	2025-04-06 06:49:56.110204	\N
9	siva	siva	2025-04-06 06:49:56.272057	completed	urgent	Others	2025-04-06 06:49:56.272057	\N
10	siva	siva	2025-04-06 06:49:56.482109	completed	urgent	Others	2025-04-06 06:49:56.482109	\N
12	siva	siva	2025-04-06 06:49:59.370273	completed	urgent	Others	2025-04-06 06:49:59.370273	\N
13	siva	siva	2025-04-06 06:49:59.537203	completed	urgent	Others	2025-04-06 06:49:59.537203	\N
14	siva	siva	2025-04-06 06:49:59.694809	completed	urgent	Others	2025-04-06 06:49:59.694809	\N
15	siva	siva	2025-04-06 06:49:59.848534	completed	urgent	Others	2025-04-06 06:49:59.848534	\N
16	siva	siva	2025-04-06 06:50:00.00464	completed	urgent	Others	2025-04-06 06:50:00.00464	\N
17	siva	siva	2025-04-06 06:50:00.141127	completed	urgent	Others	2025-04-06 06:50:00.141127	\N
18	siva	siva	2025-04-06 06:50:00.303207	completed	urgent	Others	2025-04-06 06:50:00.303207	\N
19	siva	siva	2025-04-06 06:50:00.447217	completed	urgent	Others	2025-04-06 06:50:00.447217	\N
20	siva	siva	2025-04-06 06:50:00.59126	completed	urgent	Others	2025-04-06 06:50:00.59126	\N
21	siva	siva	2025-04-06 06:50:00.742759	completed	urgent	Others	2025-04-06 06:50:00.742759	\N
22	siva	siva	2025-04-06 06:50:01.057461	completed	urgent	Others	2025-04-06 06:50:01.057461	\N
23	siva	siva	2025-04-06 06:50:01.204972	completed	urgent	Others	2025-04-06 06:50:01.204972	\N
24	siva	siva	2025-04-06 06:50:01.388562	completed	urgent	Others	2025-04-06 06:50:01.388562	\N
25	siva	siva	2025-04-06 06:50:01.607993	completed	urgent	Others	2025-04-06 06:50:01.607993	\N
26	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:58:04.057	\N
27	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:58:07.067	\N
28	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:58:08.024	\N
29	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:58:08.897	\N
30	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:58:09.789	\N
31	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:58:11.914	\N
32	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:58:12.864	\N
33	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 10:03:11.15	\N
34	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 10:04:36.358	\N
35	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 11:57:30.963	\N
36	siva	siva	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 12:06:31.946	\N
11	siva2112	siva1212	2025-04-06 06:49:53.405	completed	urgent	Others	2025-04-06 06:49:59.212002	\N
\.


--
-- TOC entry 3407 (class 0 OID 16396)
-- Dependencies: 219
-- Data for Name: b1_comment; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public.b1_comment (comment_id, task_id, comment_text, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3409 (class 0 OID 16403)
-- Dependencies: 221
-- Data for Name: stc_category; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public.stc_category (category_name, created_date, updated_date, update_reason) FROM stdin;
Work	2025-04-05 15:36:59.322888	\N	\N
Personal	2025-04-05 15:36:59.322888	\N	\N
Shopping	2025-04-05 15:36:59.322888	\N	\N
Health	2025-04-05 15:36:59.322888	\N	\N
Others	2025-04-05 15:36:59.322888	\N	\N
\.


--
-- TOC entry 3410 (class 0 OID 16409)
-- Dependencies: 222
-- Data for Name: stc_priority; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public.stc_priority (app_priority, created_date, updated_date, update_reason) FROM stdin;
low	2025-04-05 15:35:04.678662	\N	\N
medium	2025-04-05 15:35:04.678662	\N	\N
high	2025-04-05 15:35:04.678662	\N	\N
urgent	2025-04-05 15:35:04.678662	\N	\N
\.


--
-- TOC entry 3411 (class 0 OID 16415)
-- Dependencies: 223
-- Data for Name: stc_status; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public.stc_status (app_status, created_date, updated_date, update_reason) FROM stdin;
pending	2025-04-05 15:34:35.891506	\N	\N
in_progress	2025-04-05 15:34:35.891506	\N	\N
completed	2025-04-05 15:34:35.891506	\N	\N
cancelled	2025-04-05 15:34:35.891506	\N	\N
\.


--
-- TOC entry 3412 (class 0 OID 16421)
-- Dependencies: 224
-- Data for Name: z_task_history; Type: TABLE DATA; Schema: public; Owner: admin_user
--

COPY public.z_task_history (history_id, task_id, task_title, task_description, task_date, task_status, task_priority, task_category, change_timestamp, operation_type) FROM stdin;
\.


--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 218
-- Name: a0_task_task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public.a0_task_task_id_seq', 36, true);


--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 220
-- Name: b1_comment_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public.b1_comment_comment_id_seq', 1, false);


--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 225
-- Name: z_task_history_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public.z_task_history_history_id_seq', 1, false);


--
-- TOC entry 3242 (class 2606 OID 16432)
-- Name: a0_task PK_a0_task__task_id; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "PK_a0_task__task_id" PRIMARY KEY (task_id);


--
-- TOC entry 3245 (class 2606 OID 16434)
-- Name: b1_comment PK_b1_comment__comment_id; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.b1_comment
    ADD CONSTRAINT "PK_b1_comment__comment_id" PRIMARY KEY (comment_id);


--
-- TOC entry 3247 (class 2606 OID 16436)
-- Name: stc_category PK_stc_category__category_name; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.stc_category
    ADD CONSTRAINT "PK_stc_category__category_name" PRIMARY KEY (category_name);


--
-- TOC entry 3249 (class 2606 OID 16438)
-- Name: stc_priority PK_stc_priority__app_priority; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.stc_priority
    ADD CONSTRAINT "PK_stc_priority__app_priority" PRIMARY KEY (app_priority);


--
-- TOC entry 3251 (class 2606 OID 16440)
-- Name: stc_status PK_stc_status__app_status; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.stc_status
    ADD CONSTRAINT "PK_stc_status__app_status" PRIMARY KEY (app_status);


--
-- TOC entry 3254 (class 2606 OID 16442)
-- Name: z_task_history PK_z_task_history__history_id; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.z_task_history
    ADD CONSTRAINT "PK_z_task_history__history_id" PRIMARY KEY (history_id);


--
-- TOC entry 3243 (class 1259 OID 16443)
-- Name: IX_b1_comment__task_id; Type: INDEX; Schema: public; Owner: admin_user
--

CREATE INDEX "IX_b1_comment__task_id" ON public.b1_comment USING btree (task_id);


--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 3243
-- Name: INDEX "IX_b1_comment__task_id"; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON INDEX public."IX_b1_comment__task_id" IS 'Optimizes queries filtering comments by task_id';


--
-- TOC entry 3252 (class 1259 OID 16444)
-- Name: IX_z_task_history__task_id; Type: INDEX; Schema: public; Owner: admin_user
--

CREATE INDEX "IX_z_task_history__task_id" ON public.z_task_history USING btree (task_id);


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 3252
-- Name: INDEX "IX_z_task_history__task_id"; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON INDEX public."IX_z_task_history__task_id" IS 'Optimizes queries filtering by original task ID';


--
-- TOC entry 3255 (class 2606 OID 16445)
-- Name: a0_task FK_a0_task_stc_category__task_category__category_name; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "FK_a0_task_stc_category__task_category__category_name" FOREIGN KEY (task_category) REFERENCES public.stc_category(category_name) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3256 (class 2606 OID 16450)
-- Name: a0_task FK_a0_task_stc_priority__task_priority__priority_level; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "FK_a0_task_stc_priority__task_priority__priority_level" FOREIGN KEY (task_priority) REFERENCES public.stc_priority(app_priority) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3257 (class 2606 OID 16455)
-- Name: a0_task FK_a0_task_stc_status__task_status__app_status; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "FK_a0_task_stc_status__task_status__app_status" FOREIGN KEY (task_status) REFERENCES public.stc_status(app_status) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3258 (class 2606 OID 16460)
-- Name: b1_comment FK_b1_comment_a0_task__task_id; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.b1_comment
    ADD CONSTRAINT "FK_b1_comment_a0_task__task_id" FOREIGN KEY (task_id) REFERENCES public.a0_task(task_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3259 (class 2606 OID 16465)
-- Name: z_task_history FK_z_task_history_a0_task__task_id; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.z_task_history
    ADD CONSTRAINT "FK_z_task_history_a0_task__task_id" FOREIGN KEY (task_id) REFERENCES public.a0_task(task_id);


-- Completed on 2025-05-03 04:26:26 UTC

--
-- PostgreSQL database dump complete
--

