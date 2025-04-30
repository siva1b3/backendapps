--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.4

-- Started on 2025-04-06 13:36:59 UTC

-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET transaction_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

-- DROP DATABASE IF EXISTS task_manager_app_db;
-- --
-- TOC entry 3419 (class 1262 OID 16384)
-- Name: task_manager_app_db; Type: DATABASE; Schema: -; Owner: admin_user
--

-- CREATE DATABASE task_manager_app_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


-- ALTER DATABASE task_manager_app_db OWNER TO admin_user;

-- \connect task_manager_app_db

-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET transaction_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

-- CREATE SCHEMA public;


-- ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3420 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
-- --

-- COMMENT ON SCHEMA public IS 'standard public schema';


-- SET default_tablespace = '';

-- SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 16506)
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
-- TOC entry 3421 (class 0 OID 0)
-- Dependencies: 221
-- Name: TABLE a0_task; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.a0_task IS 'Central task management table that tracks all tasks with their status, priority, and category';


--
-- TOC entry 3422 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.task_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_id IS 'Auto-incrementing unique task identifier';


--
-- TOC entry 3423 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.task_title; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_title IS 'Short descriptive title of the task';


--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.task_description; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_description IS 'Detailed explanation of task requirements';


--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.task_date; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_date IS 'Timestamp when task was need to completed';


--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.task_status; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_status IS 'Current workflow state (FK to stc_status)';


--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.task_priority; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_priority IS 'Importance level (FK to stc_priority)';


--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.task_category; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.task_category IS 'Classification group (FK to stc_category)';


--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.created_date; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.created_date IS 'Timestamp when task was first created';


--
-- TOC entry 3430 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN a0_task.updated_date; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.a0_task.updated_date IS 'Timestamp when task was last modified';


--
-- TOC entry 220 (class 1259 OID 16505)
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
-- TOC entry 3431 (class 0 OID 0)
-- Dependencies: 220
-- Name: a0_task_task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public.a0_task_task_id_seq OWNED BY public.a0_task.task_id;


--
-- TOC entry 225 (class 1259 OID 16553)
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
-- TOC entry 3432 (class 0 OID 0)
-- Dependencies: 225
-- Name: TABLE b1_comment; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.b1_comment IS 'Stores task comments with referential integrity to a0_task';


--
-- TOC entry 3433 (class 0 OID 0)
-- Dependencies: 225
-- Name: COLUMN b1_comment.comment_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.comment_id IS 'Auto-incrementing primary key for comments';


--
-- TOC entry 3434 (class 0 OID 0)
-- Dependencies: 225
-- Name: COLUMN b1_comment.task_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.task_id IS 'Foreign key reference to parent task in a0_task';


--
-- TOC entry 3435 (class 0 OID 0)
-- Dependencies: 225
-- Name: COLUMN b1_comment.comment_text; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.comment_text IS 'The full text content of the comment';


--
-- TOC entry 3436 (class 0 OID 0)
-- Dependencies: 225
-- Name: COLUMN b1_comment.created_at; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.created_at IS 'Timestamp when comment was initially created';


--
-- TOC entry 3437 (class 0 OID 0)
-- Dependencies: 225
-- Name: COLUMN b1_comment.updated_at; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.b1_comment.updated_at IS 'Timestamp when comment was last modified (NULL if never updated)';


--
-- TOC entry 224 (class 1259 OID 16552)
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
-- TOC entry 3438 (class 0 OID 0)
-- Dependencies: 224
-- Name: b1_comment_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public.b1_comment_comment_id_seq OWNED BY public.b1_comment.comment_id;


--
-- TOC entry 219 (class 1259 OID 16408)
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
-- TOC entry 3439 (class 0 OID 0)
-- Dependencies: 219
-- Name: TABLE stc_category; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.stc_category IS 'Stores different categories for classification';


--
-- TOC entry 218 (class 1259 OID 16400)
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
-- TOC entry 3440 (class 0 OID 0)
-- Dependencies: 218
-- Name: TABLE stc_priority; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.stc_priority IS 'Stores priority information for applications';


--
-- TOC entry 217 (class 1259 OID 16392)
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
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 217
-- Name: TABLE stc_status; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.stc_status IS 'Stores status information for applications';


--
-- TOC entry 223 (class 1259 OID 16534)
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
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 223
-- Name: TABLE z_task_history; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON TABLE public.z_task_history IS 'Comprehensive audit trail for all changes to tasks (creates/updates/deletes)';


--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.history_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.history_id IS 'Auto-incrementing audit record identifier';


--
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.task_id; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_id IS 'Original task ID reference to a0_task';


--
-- TOC entry 3445 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.task_title; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_title IS 'Task title at time of change';


--
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.task_description; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_description IS 'Full task description when recorded';


--
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.task_status; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_status IS 'Status value when change occurred';


--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.task_priority; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_priority IS 'Priority level when change occurred';


--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.task_category; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.task_category IS 'Category when change occurred';


--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.change_timestamp; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.change_timestamp IS 'Exact time when change was recorded';


--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 223
-- Name: COLUMN z_task_history.operation_type; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON COLUMN public.z_task_history.operation_type IS 'Type of operation: INSERT/UPDATE/DELETE';


--
-- TOC entry 222 (class 1259 OID 16533)
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
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 222
-- Name: z_task_history_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin_user
--

ALTER SEQUENCE public.z_task_history_history_id_seq OWNED BY public.z_task_history.history_id;


--
-- TOC entry 3235 (class 2604 OID 16509)
-- Name: a0_task task_id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task ALTER COLUMN task_id SET DEFAULT nextval('public.a0_task_task_id_seq'::regclass);


--
-- TOC entry 3239 (class 2604 OID 16556)
-- Name: b1_comment comment_id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.b1_comment ALTER COLUMN comment_id SET DEFAULT nextval('public.b1_comment_comment_id_seq'::regclass);


--
-- TOC entry 3237 (class 2604 OID 16537)
-- Name: z_task_history history_id; Type: DEFAULT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.z_task_history ALTER COLUMN history_id SET DEFAULT nextval('public.z_task_history_history_id_seq'::regclass);


--
-- TOC entry 3409 (class 0 OID 16506)
-- Dependencies: 221
-- Data for Name: a0_task; Type: TABLE DATA; Schema: public; Owner: admin_user
--

INSERT INTO public.a0_task VALUES (5, 'siva', 'siva', '2025-04-06 06:49:55.610807', 'completed', 'urgent', 'Others', '2025-04-06 06:49:55.610807', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (6, 'siva', 'siva', '2025-04-06 06:49:55.773915', 'completed', 'urgent', 'Others', '2025-04-06 06:49:55.773915', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (7, 'siva', 'siva', '2025-04-06 06:49:55.943309', 'completed', 'urgent', 'Others', '2025-04-06 06:49:55.943309', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (8, 'siva', 'siva', '2025-04-06 06:49:56.110204', 'completed', 'urgent', 'Others', '2025-04-06 06:49:56.110204', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (9, 'siva', 'siva', '2025-04-06 06:49:56.272057', 'completed', 'urgent', 'Others', '2025-04-06 06:49:56.272057', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (10, 'siva', 'siva', '2025-04-06 06:49:56.482109', 'completed', 'urgent', 'Others', '2025-04-06 06:49:56.482109', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (12, 'siva', 'siva', '2025-04-06 06:49:59.370273', 'completed', 'urgent', 'Others', '2025-04-06 06:49:59.370273', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (13, 'siva', 'siva', '2025-04-06 06:49:59.537203', 'completed', 'urgent', 'Others', '2025-04-06 06:49:59.537203', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (14, 'siva', 'siva', '2025-04-06 06:49:59.694809', 'completed', 'urgent', 'Others', '2025-04-06 06:49:59.694809', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (15, 'siva', 'siva', '2025-04-06 06:49:59.848534', 'completed', 'urgent', 'Others', '2025-04-06 06:49:59.848534', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (16, 'siva', 'siva', '2025-04-06 06:50:00.00464', 'completed', 'urgent', 'Others', '2025-04-06 06:50:00.00464', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (17, 'siva', 'siva', '2025-04-06 06:50:00.141127', 'completed', 'urgent', 'Others', '2025-04-06 06:50:00.141127', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (18, 'siva', 'siva', '2025-04-06 06:50:00.303207', 'completed', 'urgent', 'Others', '2025-04-06 06:50:00.303207', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (19, 'siva', 'siva', '2025-04-06 06:50:00.447217', 'completed', 'urgent', 'Others', '2025-04-06 06:50:00.447217', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (20, 'siva', 'siva', '2025-04-06 06:50:00.59126', 'completed', 'urgent', 'Others', '2025-04-06 06:50:00.59126', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (21, 'siva', 'siva', '2025-04-06 06:50:00.742759', 'completed', 'urgent', 'Others', '2025-04-06 06:50:00.742759', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (22, 'siva', 'siva', '2025-04-06 06:50:01.057461', 'completed', 'urgent', 'Others', '2025-04-06 06:50:01.057461', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (23, 'siva', 'siva', '2025-04-06 06:50:01.204972', 'completed', 'urgent', 'Others', '2025-04-06 06:50:01.204972', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (24, 'siva', 'siva', '2025-04-06 06:50:01.388562', 'completed', 'urgent', 'Others', '2025-04-06 06:50:01.388562', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (25, 'siva', 'siva', '2025-04-06 06:50:01.607993', 'completed', 'urgent', 'Others', '2025-04-06 06:50:01.607993', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (26, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:58:04.057', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (27, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:58:07.067', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (28, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:58:08.024', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (29, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:58:08.897', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (30, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:58:09.789', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (31, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:58:11.914', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (32, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:58:12.864', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (33, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 10:03:11.15', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (34, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 10:04:36.358', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (35, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 11:57:30.963', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (36, 'siva', 'siva', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 12:06:31.946', NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.a0_task VALUES (11, 'siva2112', 'siva1212', '2025-04-06 06:49:53.405', 'completed', 'urgent', 'Others', '2025-04-06 06:49:59.212002', NULL) ON CONFLICT DO NOTHING;


--
-- TOC entry 3413 (class 0 OID 16553)
-- Dependencies: 225
-- Data for Name: b1_comment; Type: TABLE DATA; Schema: public; Owner: admin_user
--



--
-- TOC entry 3407 (class 0 OID 16408)
-- Dependencies: 219
-- Data for Name: stc_category; Type: TABLE DATA; Schema: public; Owner: admin_user
--

INSERT INTO public.stc_category VALUES ('Work', '2025-04-05 15:36:59.322888', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_category VALUES ('Personal', '2025-04-05 15:36:59.322888', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_category VALUES ('Shopping', '2025-04-05 15:36:59.322888', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_category VALUES ('Health', '2025-04-05 15:36:59.322888', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_category VALUES ('Others', '2025-04-05 15:36:59.322888', NULL, NULL) ON CONFLICT DO NOTHING;


--
-- TOC entry 3406 (class 0 OID 16400)
-- Dependencies: 218
-- Data for Name: stc_priority; Type: TABLE DATA; Schema: public; Owner: admin_user
--

INSERT INTO public.stc_priority VALUES ('low', '2025-04-05 15:35:04.678662', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_priority VALUES ('medium', '2025-04-05 15:35:04.678662', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_priority VALUES ('high', '2025-04-05 15:35:04.678662', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_priority VALUES ('urgent', '2025-04-05 15:35:04.678662', NULL, NULL) ON CONFLICT DO NOTHING;


--
-- TOC entry 3405 (class 0 OID 16392)
-- Dependencies: 217
-- Data for Name: stc_status; Type: TABLE DATA; Schema: public; Owner: admin_user
--

INSERT INTO public.stc_status VALUES ('pending', '2025-04-05 15:34:35.891506', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_status VALUES ('in_progress', '2025-04-05 15:34:35.891506', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_status VALUES ('completed', '2025-04-05 15:34:35.891506', NULL, NULL) ON CONFLICT DO NOTHING;
INSERT INTO public.stc_status VALUES ('cancelled', '2025-04-05 15:34:35.891506', NULL, NULL) ON CONFLICT DO NOTHING;


--
-- TOC entry 3411 (class 0 OID 16534)
-- Dependencies: 223
-- Data for Name: z_task_history; Type: TABLE DATA; Schema: public; Owner: admin_user
--



--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 220
-- Name: a0_task_task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public.a0_task_task_id_seq', 36, true);


--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 224
-- Name: b1_comment_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public.b1_comment_comment_id_seq', 1, false);


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 222
-- Name: z_task_history_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin_user
--

SELECT pg_catalog.setval('public.z_task_history_history_id_seq', 1, false);


--
-- TOC entry 3248 (class 2606 OID 16514)
-- Name: a0_task PK_a0_task__task_id; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "PK_a0_task__task_id" PRIMARY KEY (task_id);


--
-- TOC entry 3254 (class 2606 OID 16561)
-- Name: b1_comment PK_b1_comment__comment_id; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.b1_comment
    ADD CONSTRAINT "PK_b1_comment__comment_id" PRIMARY KEY (comment_id);


--
-- TOC entry 3246 (class 2606 OID 16415)
-- Name: stc_category PK_stc_category__category_name; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.stc_category
    ADD CONSTRAINT "PK_stc_category__category_name" PRIMARY KEY (category_name);


--
-- TOC entry 3244 (class 2606 OID 16407)
-- Name: stc_priority PK_stc_priority__app_priority; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.stc_priority
    ADD CONSTRAINT "PK_stc_priority__app_priority" PRIMARY KEY (app_priority);


--
-- TOC entry 3242 (class 2606 OID 16399)
-- Name: stc_status PK_stc_status__app_status; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.stc_status
    ADD CONSTRAINT "PK_stc_status__app_status" PRIMARY KEY (app_status);


--
-- TOC entry 3251 (class 2606 OID 16542)
-- Name: z_task_history PK_z_task_history__history_id; Type: CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.z_task_history
    ADD CONSTRAINT "PK_z_task_history__history_id" PRIMARY KEY (history_id);


--
-- TOC entry 3252 (class 1259 OID 16567)
-- Name: IX_b1_comment__task_id; Type: INDEX; Schema: public; Owner: admin_user
--

CREATE INDEX "IX_b1_comment__task_id" ON public.b1_comment USING btree (task_id);


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 3252
-- Name: INDEX "IX_b1_comment__task_id"; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON INDEX public."IX_b1_comment__task_id" IS 'Optimizes queries filtering comments by task_id';


--
-- TOC entry 3249 (class 1259 OID 16548)
-- Name: IX_z_task_history__task_id; Type: INDEX; Schema: public; Owner: admin_user
--

CREATE INDEX "IX_z_task_history__task_id" ON public.z_task_history USING btree (task_id);


--
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 3249
-- Name: INDEX "IX_z_task_history__task_id"; Type: COMMENT; Schema: public; Owner: admin_user
--

COMMENT ON INDEX public."IX_z_task_history__task_id" IS 'Optimizes queries filtering by original task ID';


--
-- TOC entry 3255 (class 2606 OID 16515)
-- Name: a0_task FK_a0_task_stc_category__task_category__category_name; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "FK_a0_task_stc_category__task_category__category_name" FOREIGN KEY (task_category) REFERENCES public.stc_category(category_name) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3256 (class 2606 OID 16520)
-- Name: a0_task FK_a0_task_stc_priority__task_priority__priority_level; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "FK_a0_task_stc_priority__task_priority__priority_level" FOREIGN KEY (task_priority) REFERENCES public.stc_priority(app_priority) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3257 (class 2606 OID 16525)
-- Name: a0_task FK_a0_task_stc_status__task_status__app_status; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.a0_task
    ADD CONSTRAINT "FK_a0_task_stc_status__task_status__app_status" FOREIGN KEY (task_status) REFERENCES public.stc_status(app_status) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3259 (class 2606 OID 16562)
-- Name: b1_comment FK_b1_comment_a0_task__task_id; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.b1_comment
    ADD CONSTRAINT "FK_b1_comment_a0_task__task_id" FOREIGN KEY (task_id) REFERENCES public.a0_task(task_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3258 (class 2606 OID 16543)
-- Name: z_task_history FK_z_task_history_a0_task__task_id; Type: FK CONSTRAINT; Schema: public; Owner: admin_user
--

ALTER TABLE ONLY public.z_task_history
    ADD CONSTRAINT "FK_z_task_history_a0_task__task_id" FOREIGN KEY (task_id) REFERENCES public.a0_task(task_id);


-- Completed on 2025-04-06 13:36:59 UTC

--
-- PostgreSQL database dump complete
--

