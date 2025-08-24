-- Set the default schema search path to 'basic_curd'
SET search_path TO basic_curd;

INSERT INTO stc_roles (role_name) VALUES
('Admin'),
('Manager'),
('Member'),
('Guest');


INSERT INTO stc_permissions (permission) VALUES
('create_project'),
('edit_project'),
('delete_project'),
('view_project'),
('create_task'),
('edit_task'),
('delete_task'),
('assign_task'),
('comment_task'),
('view_reports'),
('manage_users');


-- Admin → all permissions
INSERT INTO stc_role_permissions (role_name, permission)
SELECT 'Admin', permission FROM stc_permissions;

-- Manager permissions
INSERT INTO stc_role_permissions (role_name, permission) VALUES
('Manager', 'create_project'),
('Manager', 'edit_project'),
('Manager', 'delete_project'),
('Manager', 'create_task'),
('Manager', 'edit_task'),
('Manager', 'delete_task'),
('Manager', 'assign_task'),
('Manager', 'comment_task'),
('Manager', 'view_reports');

-- Member permissions
INSERT INTO stc_role_permissions (role_name, permission) VALUES
('Member', 'create_task'),
('Member', 'edit_task'),
('Member', 'comment_task');

-- Guest permissions
INSERT INTO stc_role_permissions (role_name, permission) VALUES
('Guest', 'view_project');


INSERT INTO stc_status_types (status_type) VALUES
('To Do'),
('In Progress'),
('Blocked'),
('In Review'),
('Completed'),
('Archived');

INSERT INTO stc_priority_levels (prioritylevel) VALUES
('Low'),
('Medium'),
('High'),
('Urgent');

INSERT INTO stc_task_types (task_type) VALUES
('Bug'),
('Feature'),
('Improvement'),
('Chore');

INSERT INTO stc_recurrence_patterns (recurrence_pattern) VALUES
('None'),
('Daily'),
('Weekly'),
('Biweekly'),
('Monthly'),
('Quarterly'),
('Yearly'),
('Custom');

INSERT INTO stc_notification_types (notification_type) VALUES
('Assignment'),
('Mention'),
('Reminder'),
('Status Change'),
('System');

INSERT INTO stc_project_templates (template_type) VALUES
('Kanban Board'),
('Scrum Sprint Board'),
('Simple To-Do List'),
('Bug Tracker');

INSERT INTO stc_system_settings (setting_key, setting_value) VALUES
('default_language', 'English'),
('timezone', 'UTC'),
('date_format', 'YYYY-MM-DD'),
('time_format', '24h'),
('default_task_status', 'To Do'),
('max_file_upload_size_mb', '25');
