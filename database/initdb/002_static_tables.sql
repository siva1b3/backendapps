
-- Set the default schema search path to 'basic_curd'
SET search_path TO static_data;


-- Table for static data: User Roles
CREATE TABLE user_roles (
    role_name VARCHAR(50) NOT NULL,
    role_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_user_roles__role_name" PRIMARY KEY (role_name)
);
ALTER TABLE user_roles OWNER TO admin;



-- Table for static data: User Statuses
CREATE TABLE user_statuses (
    user_status VARCHAR(50) NOT NULL,
    user_status_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_user_statuses__user_status" PRIMARY KEY (user_status)
);
ALTER TABLE user_statuses OWNER TO admin;



-- Table for static data: Logout Reasons
CREATE TABLE logout_reasons (
    logout_reason VARCHAR(255) NOT NULL,
    logout_reason_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_logout_reasons__logout_reason" PRIMARY KEY (logout_reason)
);
ALTER TABLE logout_reasons OWNER TO admin;



-- Table for static data: Project Statuses
CREATE TABLE project_statuses (
    project_status VARCHAR(50) NOT NULL,
    project_status_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_statuses__project_status" PRIMARY KEY (project_status)
);
ALTER TABLE project_statuses OWNER TO admin;



-- Table for static data: Template Types
CREATE TABLE template_types (
    template_type VARCHAR(50) NOT NULL,
    template_type_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_template_types__template_type" PRIMARY KEY (template_type)
);
ALTER TABLE template_types OWNER TO admin;



-- Table for static data: Project Priority Levels
CREATE TABLE project_priority_levels (
    project_priority_level VARCHAR(50) NOT NULL,
    project_priority_level_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_priority_levels__project_priority_level" PRIMARY KEY (project_priority_level)
);
ALTER TABLE project_priority_levels OWNER TO admin;



-- Table for static data: Project Visibilities
CREATE TABLE project_visibilities (
    project_visibility VARCHAR(50) NOT NULL,
    project_visibility_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_visibilities__project_visibility" PRIMARY KEY (project_visibility)
);
ALTER TABLE project_visibilities OWNER TO admin;


-- Table for static data: Project Categories
CREATE TABLE project_categories (
    project_category VARCHAR(50) NOT NULL,
    project_category_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_categories__project_category" PRIMARY KEY (project_category)
);
ALTER TABLE project_categories OWNER TO admin;



-- Table for static data: Project Member Roles
CREATE TABLE project_member_roles (
    project_member_role VARCHAR(50) NOT NULL,
    project_member_role_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_project_member_roles__project_member_role" PRIMARY KEY (project_member_role)
);
ALTER TABLE project_member_roles OWNER TO admin;



-- Table for static data: Invitation Statuses
CREATE TABLE invitation_statuses (
    invitation_status VARCHAR(50) NOT NULL,
    invitation_status_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_invitation_statuses__invitation_status" PRIMARY KEY (invitation_status)
);
ALTER TABLE invitation_statuses OWNER TO admin;



-- Table for static data: Task Types
CREATE TABLE task_types (
    task_type VARCHAR(50) NOT NULL,
    task_type_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_task_types__task_type" PRIMARY KEY (task_type)
);
ALTER TABLE task_types OWNER TO admin;



-- Table for static data: Task Statuses
CREATE TABLE task_statuses (
    task_status VARCHAR(50) NOT NULL,
    task_status_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_task_statuses__task_status" PRIMARY KEY (task_status)
);
ALTER TABLE task_statuses OWNER TO admin;



-- Table for static data: Task Priority Levels
CREATE TABLE task_priority_levels (
    task_priority_level VARCHAR(50) NOT NULL,
    task_priority_level_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_task_priority_levels__task_priority_level" PRIMARY KEY (task_priority_level)
);
ALTER TABLE task_priority_levels OWNER TO admin;


-- Table for static data: Notification Events
CREATE TABLE notification_events (
    notification_event VARCHAR(255) NOT NULL,
    notification_event_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_notification_events__notification_event" PRIMARY KEY (notification_event)
);
ALTER TABLE notification_events OWNER TO admin;



-- Table for static data: Notification Platforms
CREATE TABLE notification_platforms (
    notification_platform VARCHAR(50) NOT NULL,
    notification_platform_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_notification_platforms__notification_platform" PRIMARY KEY (notification_platform)
);
ALTER TABLE notification_platforms OWNER TO admin;



-- Table for static data: Notification Priorities
CREATE TABLE notification_priorities (
    notification_priority VARCHAR(50) NOT NULL,
    notification_priority_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_notification_priorities__notification_priority" PRIMARY KEY (notification_priority)
);
ALTER TABLE notification_priorities OWNER TO admin;


-- Table for static data: Attachment Types
CREATE TABLE attachment_types (
    file_type VARCHAR(50) NOT NULL,
    file_type_description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    modified_time TIMESTAMP WITHOUT TIME ZONE,
    modified_reason TEXT,
    CONSTRAINT "PK_attachment_types__file_type" PRIMARY KEY (file_type)
);
ALTER TABLE attachment_types OWNER TO admin;

