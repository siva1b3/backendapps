-- Set the default schema search path to 'basic_curd'
SET search_path TO basic_curd;

DROP TYPE IF EXISTS user_status_enum;

CREATE TYPE user_status_enum AS ENUM ('active', 'inactive', 'suspended');

ALTER TYPE user_status_enum
    OWNER TO admin;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id bigserial NOT NULL,
    user_name VARCHAR NOT NULL,
    user_email VARCHAR NOT NULL,
    password_hash TEXT NOT NULL,
    user_role VARCHAR,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    user_status user_status_enum NOT NULL,
    CONSTRAINT "PK_users__user_id" PRIMARY KEY (user_id),
    CONSTRAINT "UK_users__user_email" UNIQUE NULLS NOT DISTINCT (user_email),
    CONSTRAINT "FK_users_stc_roles__user_role__role_name" FOREIGN KEY (user_role)
        REFERENCES stc_roles (role_name)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

ALTER TABLE users OWNER TO admin;

CREATE INDEX IF NOT EXISTS "fki_FK_users_stc_roles__user_role__role_name"
    ON users USING btree
    (user_role ASC NULLS LAST);

DROP TABLE IF EXISTS user_sessions;

CREATE TABLE user_sessions
(
    session_id bigserial NOT NULL,
    user_id bigint NOT NULL,
    token text NOT NULL,
    ip_address character varying,
    revoked boolean DEFAULT false,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_user_sessions__session_id" PRIMARY KEY (session_id),
    CONSTRAINT "UK_user_sessions__token" UNIQUE NULLS NOT DISTINCT (token),
    CONSTRAINT "FK_user_sessions_users__user_id" FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS user_sessions
    OWNER to admin;

CREATE INDEX IF NOT EXISTS "fki_FK_user_sessions_users__user_id"
    ON user_sessions USING btree
    (user_id ASC NULLS LAST);







