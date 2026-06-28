ALTER TABLE visitors ALTER COLUMN id SET DEFAULT gen_random_uuid();
ALTER TABLE visitors ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE votes ALTER COLUMN id SET DEFAULT gen_random_uuid();
ALTER TABLE votes ALTER COLUMN created_at SET DEFAULT now();
