-- Set the default schema search path to 'basic_curd'
SET search_path TO basic_curd;

CREATE TABLE users (
    user_id BIGSERIAL NOT NULL,
    user_name VARCHAR NOT NULL,
    user_email VARCHAR NOT NULL,
    password_hash TEXT NOT NULL,
    user_role VARCHAR NOT NULL,
    user_status VARCHAR NOT NULL,
    user_start_date DATE NOT NULL,
    user_end_date DATE,
    failed_login_attempts INT NOT NULL DEFAULT 0,
    profile_picture_url TEXT,
    phone_number VARCHAR,
    created_by_id BIGINT,
    user_is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_users__user_id" PRIMARY KEY (user_id),
    CONSTRAINT "UK_users__user_email" UNIQUE NULLS NOT DISTINCT (user_email)
);

ALTER TABLE users OWNER TO admin;

CREATE TABLE login_session_details
(
    session_id BIGSERIAL NOT NULL,
    user_id BIGINT NOT NULL,
    token text NOT NULL,
    ip_address character varying,
    session_is_active BOOLEAN NOT NULL DEFAULT true,
    logout_reason VARCHAR,
    session_start_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    session_end_time TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    CONSTRAINT "PK_login_session_details__session_id" PRIMARY KEY (session_id),
    CONSTRAINT "UK_login_session_details__token" UNIQUE NULLS NOT DISTINCT (token)
)

ALTER TABLE IF EXISTS login_session_details OWNER to admin;

CREATE TABLE projects
(
    project_id BIGSERIAL NOT NULL,
    owner_id BIGINT NOT NULL,
    project_name VARCHAR NOT NULL,
    project_description TEXT,
    project_status VARCHAR NOT NULL,
    project_creation_date DATE NOT NULL,
    project_start_date DATE,
    project_end_date DATE,
    template_type VARCHAR NOT NULL,
    project_priority_level VARCHAR NOT NULL,
    project_visibility VARCHAR NOT NULL,
    project_category VARCHAR NOT NULL,
    budget DECIMAL(15, 2),
    project_is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_projects__project_id" PRIMARY KEY (project_id)
)


ALTER TABLE IF EXISTS projects OWNER to admin;


CREATE TABLE project_members
(
    project_members_id BIGSERIAL NOT NULL,
    project_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    added_by_user_id BIGINT NOT NULL,
    user_added_date DATE,
    user_removed_date DATE,
    user_role_in_project VARCHAR NOT NULL,
    invitation_status VARCHAR NOT NULL,
    user_active_in_project BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_members__project_members_id" PRIMARY KEY (project_members_id),
    CONSTRAINT "UK_project_members__project_id_user_id" UNIQUE NULLS NOT DISTINCT (project_id, user_id)
)

ALTER TABLE IF EXISTS project_members OWNER to admin;

CREATE TABLE tasks
(
    task_id BIGSERIAL NOT NULL,
    project_id BIGINT NOT NULL,
    task_name VARCHAR NOT NULL,
    task_description TEXT,
    task_type VARCHAR NOT NULL,
    task_status VARCHAR NOT NULL,
    task_priority_level VARCHAR NOT NULL,
    task_creation_date DATE NOT NULL,
    task_start_date DATE,
    task_completion_date DATE,
    estimated_hours DECIMAL(10, 2),
    dependencies TEXT,
    recurrence_pattern VARCHAR,
    parent_task_id BIGINT,
    task_is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_tasks__task_id" PRIMARY KEY (task_id)
)

ALTER TABLE IF EXISTS tasks OWNER to admin;

CREATE TABLE task_assignees
(
    task_assignee_id BIGSERIAL NOT NULL,
    task_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    assigned_by_user_id BIGINT NOT NULL,
    assignment_date DATE NOT NULL,
    unassignment_date DATE,
    assignee_is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_task_assignees__task_assignee_id" PRIMARY KEY (task_assignee_id),
    CONSTRAINT "UK_task_assignees__task_id_user_id" UNIQUE NULLS NOT DISTINCT (task_id, user_id)
)

ALTER TABLE IF EXISTS task_assignees OWNER to admin;

CREATE TABLE task_comments
(
    comment_id BIGSERIAL NOT NULL,
    task_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    comment_text TEXT NOT NULL,
    comment_creation_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    is_edited BOOLEAN NOT NULL DEFAULT false,
    comment_edited_time TIMESTAMP WITHOUT TIME ZONE,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_task_comments__comment_id" PRIMARY KEY (comment_id)
)

ALTER TABLE IF EXISTS task_comments OWNER to admin;

CREATE TABLE project_notifications
(
    notification_id BIGSERIAL NOT NULL,
    project_id BIGINT NOT NULL,
    broadcast_user_id BIGINT NOT NULL,
    notification_event VARCHAR NOT NULL,
    notification_platfrom VARCHAR NOT NULL,
    notification_message TEXT NOT NULL,
    notification_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    notification_priority VARCHAR NOT NULL,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_notifications__notification_id" PRIMARY KEY (notification_id)
)

ALTER TABLE IF EXISTS project_notifications OWNER to admin;

CREATE TABLE attachments (
    attachment_id BIGSERIAL NOT NULL,
    task_id BIGINT,
    project_id BIGINT,
    uploaded_by_user_id BIGINT NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR NOT NULL,
    uploaded_time TIMESTAMP DEFAULT NOW(),
    description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "PK_attachments__attachment_id" PRIMARY KEY (attachment_id)
);

ALTER TABLE IF EXISTS attachments OWNER to admin;