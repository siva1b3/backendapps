-- Set the default schema search path to 'basic_curd'
SET search_path TO static_data;


-- Insert static data into the user_roles table
INSERT INTO user_roles (role_name, role_description) VALUES
('Admin', 'Can manage users, projects, and other administrative settings.'),
('Project Manager', 'Can create and manage projects, tasks, and members.'),
('Member', 'Can view project details, be assigned to tasks, and comment.'),
('Viewer', 'Can only view projects and tasks, with no edit permissions.');

INSERT INTO user_statuses (user_status, user_status_description) VALUES
('Active', 'The user account is currently active.'),
('Inactive', 'The user account is temporarily inactive.'),
('Suspended', 'The user account has been suspended due to policy violations.'),
('Deleted', 'The user account has been soft-deleted.');


INSERT INTO logout_reasons (logout_reason, logout_reason_description) VALUES
('User Logout', 'The user actively logged out.'),
('Session Timeout', 'The session expired due to inactivity.'),
('Forced Logout', 'The session was terminated by an administrator.');

INSERT INTO project_statuses (project_status, project_status_description) VALUES
('Planning', 'The project is in the initial planning phase.'),
('In Progress', 'The project is currently being worked on.'),
('On Hold', 'The project is temporarily paused.'),
('Completed', 'The project has been successfully finished.'),
('Cancelled', 'The project has been cancelled.');

INSERT INTO template_types (template_type, template_type_description) VALUES
('Agile', 'A project following an agile methodology (e.g., Scrum, Kanban).'),
('Waterfall', 'A project following a linear, sequential approach.'),
('Basic', 'A simple, unstructured project template.'),
('kanban', 'A project using the Kanban methodology.'),
('Custom', 'A user-defined project template.');


INSERT INTO project_priority_levels (project_priority_level, project_priority_level_description) VALUES
('Critical', 'The highest priority; requires immediate attention.'),
('High', 'Important; should be addressed soon.'),
('Medium', 'Standard priority.'),
('Low', 'Lowest priority.');

INSERT INTO project_visibilities (project_visibility, project_visibility_description) VALUES
('Public', 'Visible to all users within the organization.'),
('Private', 'Visible only to project members.'),
('Confidential', 'Visible only to selected users with special permissions.');


INSERT INTO project_categories (project_category, project_category_description) VALUES
('Software Development', 'Projects related to building software.'),
('Marketing Campaign', 'Projects for marketing and advertising.'),
('Event Planning', 'Projects for organizing events.'),
('Research & Development', 'Projects focused on R&D.'),
('Design', 'Projects related to graphic or product design.'),
('Consulting', 'Projects for consulting services.'),
('Construction', 'Projects in the construction industry.'),
('Education', 'Projects related to educational programs.'),
('Healthcare', 'Projects in the healthcare sector.'),
('Finance', 'Projects related to financial services.'),
('Human Resources', 'Projects for HR initiatives.'),
('Legal', 'Projects involving legal work.'),
('Sales', 'Projects focused on sales activities.'),
('Customer Support', 'Projects to improve customer support services.'),
('IT Services', 'Projects related to IT infrastructure and services.'),
('Operations', 'Projects to enhance operational efficiency.'),
('Product Management', 'Projects for managing product lifecycles.'),
('Quality Assurance', 'Projects focused on quality control and assurance.'),
('Supply Chain', 'Projects related to supply chain management.'),
('Other', 'For miscellaneous project types.');


INSERT INTO project_member_roles (project_member_role, project_member_role_description) VALUES
('Project Owner', 'The person who created the project.'),
('Admin', 'Has full control over the project.'),
('Member', 'A standard team member with task-related permissions.'),
('Guest', 'Limited access, typically for external collaborators.');

INSERT INTO invitation_statuses (invitation_status, invitation_status_description) VALUES
('Pending', 'Invitation has been sent but not yet accepted.'),
('Accepted', 'The user has accepted the invitation.'),
('Rejected', 'The user has declined the invitation.'),
('Revoked', 'The invitation was cancelled by an admin.');

INSERT INTO task_types (task_type, task_type_description) VALUES
('Feature', 'A new functionality to be developed.'),
('Bug', 'An issue or defect that needs to be fixed.'),
('Documentation', 'A task related to creating or updating documents.'),
('Testing', 'A task for quality assurance.'),
('Research', 'A task for gathering information.');

INSERT INTO task_statuses (task_status, task_status_description) VALUES
('To Do', 'The task is created and ready to be started.'),
('In Progress', 'The task is currently being worked on.'),
('In Review', 'The task is completed and awaiting review.'),
('Done', 'The task has been completed and approved.'),
('Blocked', 'The task cannot proceed due to an external dependency.'),
('Archived', 'The task has been soft-deleted.');

INSERT INTO task_priority_levels (task_priority_level, task_priority_level_description) VALUES
('High', 'The highest priority; should be addressed first.'),
('Medium', 'Standard priority.'),
('Low', 'Lowest priority.');

INSERT INTO notification_events (notification_event, notification_event_description) VALUES
('Task Created', 'A new task has been added to the project.'),
('Task Assigned', 'A task has been assigned to a user.'),
('Task Status Changed', 'The status of a task has been updated.'),
('Comment Added', 'A new comment has been posted on a task.'),
('Project Member Added', 'A new member has joined the project.');

INSERT INTO notification_platforms (notification_platform, notification_platform_description) VALUES
('Web App', 'The notification is delivered through the web application.'),
('Email', 'The notification is sent via email.'),
('SMS', 'The notification is sent as a text message.'),
('In-App', 'The notification appears within the application interface.'),
('MobilePush', 'The notification is sent to the user''s mobile device.'),
('Desktop', 'The notification is sent to the user''s desktop application.');


INSERT INTO notification_priorities (notification_priority, notification_priority_description) VALUES
('Urgent', 'Critical notification requiring immediate attention.'),
('High', 'Important notification.'),
('Medium', 'Standard notification.'),
('Low', 'Low-priority notification.');

INSERT INTO attachment_types (file_type, file_type_description) VALUES
('Image', 'JPG, PNG, GIF, etc.'),
('Document', 'PDF, DOCX, XLSX, etc.'),
('Video', 'MP4, MOV, etc.'),
('Audio', 'MP3, WAV, etc.'),
('Other', 'Any other file type.');

