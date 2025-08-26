-- Drop schemas 'main_app' and 'static_data' if they exist within
-- Note: In PostgreSQL, schemas are generally top-level objects, not nested.
-- We'll create main_app and static_data as distinct schemas.
DROP SCHEMA IF EXISTS main_app CASCADE;
DROP SCHEMA IF EXISTS static_data CASCADE;


-- Create the 'main_app' schema for primary application tables
CREATE SCHEMA IF NOT EXISTS main_app
    AUTHORIZATION admin;

-- Create the 'static_data' schema for lookup/static data tables
CREATE SCHEMA IF NOT EXISTS static_data
    AUTHORIZATION admin;

-- Set the default schema search path to 'basic_curd'
SET search_path TO static_data;

