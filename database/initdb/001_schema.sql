-- Drop the schema 'basic_curd' if it exists, along with all its objects
DROP SCHEMA IF EXISTS basic_curd CASCADE;

-- Create the schema 'basic_curd' if it does not exist, owned by 'admin'
CREATE SCHEMA IF NOT EXISTS basic_curd
    AUTHORIZATION admin;

-- Set the default schema search path to 'basic_curd'
SET search_path TO basic_curd;
