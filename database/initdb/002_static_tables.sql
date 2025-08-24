-- Set the default schema search path to 'basic_curd'
SET search_path TO basic_curd;

CREATE TABLE stc_roles
(
    role_name VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_roles__role_name" PRIMARY KEY (role_name)
);

ALTER TABLE IF EXISTS stc_roles OWNER TO admin;


CREATE TABLE stc_permissions
(
    permission VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_permissions__permission" PRIMARY KEY (permission)
);

ALTER TABLE IF EXISTS stc_permissions OWNER TO admin;


CREATE TABLE stc_role_permissions
(
    role_name VARCHAR NOT NULL,
    permission VARCHAR NOT NULL,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    CONSTRAINT "PK_stc_role_permissions" PRIMARY KEY (role_name, permission),
    CONSTRAINT "FK_stc_role_permissions_stc_roles__role_name" FOREIGN KEY (role_name) REFERENCES stc_roles (role_name) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE,
    CONSTRAINT "FK_stc_role_permissions_stc_permissions__permission" FOREIGN KEY (permission) REFERENCES stc_permissions (permission) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

ALTER TABLE IF EXISTS stc_role_permissions OWNER TO admin;


CREATE TABLE stc_status_types
(
    status_type VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_status_types__status_type" PRIMARY KEY (status_type)
);

ALTER TABLE IF EXISTS stc_status_types OWNER TO admin;


CREATE TABLE stc_priority_levels
(
    prioritylevel VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_priority_levels__prioritylevel" PRIMARY KEY (prioritylevel)
);

ALTER TABLE IF EXISTS stc_priority_levels OWNER TO admin;

CREATE TABLE stc_task_types
(
    task_type VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_task_types__task_type" PRIMARY KEY (task_type)
);

ALTER TABLE IF EXISTS stc_task_types OWNER TO admin;

CREATE TABLE stc_recurrence_patterns
(
    recurrence_pattern VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_recurrence_patterns__recurrence_pattern" PRIMARY KEY (recurrence_pattern)
);

ALTER TABLE IF EXISTS stc_recurrence_patterns OWNER TO admin;

CREATE TABLE stc_notification_types
(
    notification_type VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_notification_types__notification_type" PRIMARY KEY (notification_type)
);

ALTER TABLE IF EXISTS stc_notification_types OWNER TO admin;

CREATE TABLE stc_project_templates
(
    template_type VARCHAR NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_project_templates__template_type" PRIMARY KEY (template_type)
);

ALTER TABLE IF EXISTS stc_project_templates OWNER TO admin;


CREATE TABLE stc_system_settings
(
    setting_key VARCHAR NOT NULL,
    setting_value TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_time timestamp without time zone NOT NULL DEFAULT NOW(),
    modified_time timestamp without time zone,
    modified_reason TEXT,
    CONSTRAINT "PK_stc_system_settings__setting_key" PRIMARY KEY (setting_key)
);

ALTER TABLE IF EXISTS stc_system_settings OWNER TO admin;
