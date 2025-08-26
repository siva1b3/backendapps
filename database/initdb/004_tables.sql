-- Set the default schema search path to 'basic_curd'
SET search_path TO main_app;


----------------------------------------------------------------------------------------------------
-- Main Application Tables (within 'main_app' schema)
----------------------------------------------------------------------------------------------------

CREATE TABLE users (
    user_id BIGSERIAL NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    password_hash TEXT NOT NULL,
    user_role VARCHAR(50) NOT NULL,
    user_status VARCHAR(50) NOT NULL,
    user_start_date DATE NOT NULL,
    user_end_date DATE,
    failed_login_attempts INT NOT NULL DEFAULT 0,
    profile_picture_url TEXT,
    phone_number VARCHAR(20),
    created_by_id BIGINT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_users__user_id" PRIMARY KEY (user_id),
    CONSTRAINT "UK_users__user_email" UNIQUE NULLS NOT DISTINCT (user_email),
    CONSTRAINT "FK_users__user_role" FOREIGN KEY (user_role) REFERENCES static_data.user_roles (role_name),
    CONSTRAINT "FK_users__user_status" FOREIGN KEY (user_status) REFERENCES static_data.user_statuses (user_status),
    CONSTRAINT "FK_users__created_by_id" FOREIGN KEY (created_by_id) REFERENCES users (user_id)
);
ALTER TABLE users OWNER TO admin;

CREATE TABLE login_sessions (
    login_session_id BIGSERIAL NOT NULL,
    user_id BIGINT NOT NULL,
    token TEXT NOT NULL,
    ip_address VARCHAR(45),
    is_active BOOLEAN NOT NULL DEFAULT true,
    logout_reason VARCHAR(255),
    session_start_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    session_end_time TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    CONSTRAINT "PK_login_sessions__login_session_id" PRIMARY KEY (login_session_id),
    CONSTRAINT "UK_login_sessions__token" UNIQUE NULLS NOT DISTINCT (token),
    CONSTRAINT "FK_login_sessions__user_id" FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT "FK_login_sessions__logout_reason" FOREIGN KEY (logout_reason) REFERENCES static_data.logout_reasons (logout_reason)
);
ALTER TABLE login_sessions OWNER to admin;

CREATE TABLE projects (
    project_id BIGSERIAL NOT NULL,
    owner_id BIGINT NOT NULL,
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT,
    project_status VARCHAR(50) NOT NULL,
    project_creation_date DATE NOT NULL,
    project_start_date DATE,
    project_end_date DATE,
    template_type VARCHAR(50) NOT NULL,
    project_priority_level VARCHAR(50) NOT NULL,
    project_visibility VARCHAR(50) NOT NULL,
    project_category VARCHAR(50) NOT NULL,
    budget DECIMAL(15, 2),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_projects__project_id" PRIMARY KEY (project_id),
    CONSTRAINT "FK_projects__owner_id" FOREIGN KEY (owner_id) REFERENCES users (user_id),
    CONSTRAINT "FK_projects__project_status" FOREIGN KEY (project_status) REFERENCES static_data.project_statuses (project_status),
    CONSTRAINT "FK_projects__template_type" FOREIGN KEY (template_type) REFERENCES static_data.template_types (template_type),
    CONSTRAINT "FK_projects__project_priority_level" FOREIGN KEY (project_priority_level) REFERENCES static_data.project_priority_levels (project_priority_level),
    CONSTRAINT "FK_projects__project_visibility" FOREIGN KEY (project_visibility) REFERENCES static_data.project_visibilities (project_visibility),
    CONSTRAINT "FK_projects__project_category" FOREIGN KEY (project_category) REFERENCES static_data.project_categories (project_category)
);
ALTER TABLE projects OWNER to admin;

CREATE TABLE project_members (
    project_member_id BIGSERIAL NOT NULL,
    project_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    added_by_user_id BIGINT NOT NULL,
    user_added_date DATE,
    user_removed_date DATE,
    user_role_in_project VARCHAR(50) NOT NULL,
    invitation_status VARCHAR(50) NOT NULL,
    is_active_in_project BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_members__project_member_id" PRIMARY KEY (project_member_id),
    CONSTRAINT "UK_project_members__project_id_user_id" UNIQUE NULLS NOT DISTINCT (project_id, user_id),
    CONSTRAINT "FK_project_members__project_id" FOREIGN KEY (project_id) REFERENCES projects (project_id),
    CONSTRAINT "FK_project_members__user_id" FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT "FK_project_members__added_by_user_id" FOREIGN KEY (added_by_user_id) REFERENCES users (user_id),
    CONSTRAINT "FK_project_members__user_role_in_project" FOREIGN KEY (user_role_in_project) REFERENCES static_data.project_member_roles (project_member_role),
    CONSTRAINT "FK_project_members__invitation_status" FOREIGN KEY (invitation_status) REFERENCES static_data.invitation_statuses (invitation_status)
);
ALTER TABLE project_members OWNER to admin;

CREATE TABLE tasks (
    task_id BIGSERIAL NOT NULL,
    project_id BIGINT NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    task_description TEXT,
    task_type VARCHAR(50) NOT NULL,
    task_status VARCHAR(50) NOT NULL,
    task_priority_level VARCHAR(50) NOT NULL,
    task_creation_date DATE NOT NULL,
    task_start_date DATE,
    task_completion_date DATE,
    estimated_hours DECIMAL(10, 2),
    dependencies TEXT,
    recurrence_pattern VARCHAR(255),
    parent_task_id BIGINT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_tasks__task_id" PRIMARY KEY (task_id),
    CONSTRAINT "FK_tasks__project_id" FOREIGN KEY (project_id) REFERENCES projects (project_id),
    CONSTRAINT "FK_tasks__task_type" FOREIGN KEY (task_type) REFERENCES static_data.task_types (task_type),
    CONSTRAINT "FK_tasks__task_status" FOREIGN KEY (task_status) REFERENCES static_data.task_statuses (task_status),
    CONSTRAINT "FK_tasks__task_priority_level" FOREIGN KEY (task_priority_level) REFERENCES static_data.task_priority_levels (task_priority_level),
    CONSTRAINT "FK_tasks__parent_task_id" FOREIGN KEY (parent_task_id) REFERENCES tasks (task_id)
);
ALTER TABLE tasks OWNER to admin;

CREATE TABLE task_assignees (
    task_assignee_id BIGSERIAL NOT NULL,
    task_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    assigned_by_user_id BIGINT NOT NULL,
    assignment_date DATE NOT NULL,
    unassignment_date DATE,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_task_assignees__task_assignee_id" PRIMARY KEY (task_assignee_id),
    CONSTRAINT "UK_task_assignees__task_id_user_id" UNIQUE NULLS NOT DISTINCT (task_id, user_id),
    CONSTRAINT "FK_task_assignees__task_id" FOREIGN KEY (task_id) REFERENCES tasks (task_id),
    CONSTRAINT "FK_task_assignees__user_id" FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT "FK_task_assignees__assigned_by_user_id" FOREIGN KEY (assigned_by_user_id) REFERENCES users (user_id)
);
ALTER TABLE task_assignees OWNER to admin;

CREATE TABLE task_comments (
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
    CONSTRAINT "PK_task_comments__comment_id" PRIMARY KEY (comment_id),
    CONSTRAINT "FK_task_comments__task_id" FOREIGN KEY (task_id) REFERENCES tasks (task_id),
    CONSTRAINT "FK_task_comments__user_id" FOREIGN KEY (user_id) REFERENCES users (user_id)
);
ALTER TABLE task_comments OWNER to admin;

CREATE TABLE project_notifications (
    notification_id BIGSERIAL NOT NULL,
    project_id BIGINT NOT NULL,
    broadcast_user_id BIGINT NOT NULL,
    notification_event VARCHAR(255) NOT NULL,
    notification_platform VARCHAR(50) NOT NULL,
    notification_message TEXT NOT NULL,
    notification_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    notification_priority VARCHAR(50) NOT NULL,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_notifications__notification_id" PRIMARY KEY (notification_id),
    CONSTRAINT "FK_project_notifications__project_id" FOREIGN KEY (project_id) REFERENCES projects (project_id),
    CONSTRAINT "FK_project_notifications__broadcast_user_id" FOREIGN KEY (broadcast_user_id) REFERENCES users (user_id),
    CONSTRAINT "FK_project_notifications__notification_event" FOREIGN KEY (notification_event) REFERENCES static_data.notification_events (notification_event),
    CONSTRAINT "FK_project_notifications__notification_platform" FOREIGN KEY (notification_platform) REFERENCES static_data.notification_platforms (notification_platform),
    CONSTRAINT "FK_project_notifications__notification_priority" FOREIGN KEY (notification_priority) REFERENCES static_data.notification_priorities (notification_priority)
);
ALTER TABLE project_notifications OWNER to admin;

CREATE TABLE attachments (
    attachment_id BIGSERIAL NOT NULL,
    task_id BIGINT,
    project_id BIGINT,
    uploaded_by_user_id BIGINT NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    uploaded_time TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "PK_attachments__attachment_id" PRIMARY KEY (attachment_id),
    CONSTRAINT "FK_attachments__task_id" FOREIGN KEY (task_id) REFERENCES tasks (task_id),
    CONSTRAINT "FK_attachments__project_id" FOREIGN KEY (project_id) REFERENCES projects (project_id),
    CONSTRAINT "FK_attachments__uploaded_by_user_id" FOREIGN KEY (uploaded_by_user_id) REFERENCES users (user_id),
    CONSTRAINT "FK_attachments__file_type" FOREIGN KEY (file_type) REFERENCES static_data.attachment_types (file_type)
);
ALTER TABLE attachments OWNER to admin;

