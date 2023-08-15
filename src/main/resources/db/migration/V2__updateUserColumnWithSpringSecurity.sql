-- Add new columns
ALTER TABLE users
    ADD COLUMN is_account_non_expired BOOLEAN,
    ADD COLUMN is_account_non_locked BOOLEAN,
    ADD COLUMN is_credentials_non_expired BOOLEAN,
    ADD COLUMN is_enabled BOOLEAN;

UPDATE users
SET is_account_non_expired = true,
    is_account_non_locked = true,
    is_credentials_non_expired = true,
    is_enabled = true;