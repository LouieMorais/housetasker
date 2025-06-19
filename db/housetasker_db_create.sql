-- Enable UUID generation
create extension if not exists "pgcrypto";

-- Create core table: house
create table if not exists house (
  id uuid primary key default gen_random_uuid(),
  address_line_1 text,
  postcode text
);

-- Create housemates
create table if not exists housemates (
  id uuid primary key default gen_random_uuid(),
  house_id uuid not null references house(id) on delete cascade,
  display_name text not null,
  avatar_url text
);

-- Create rooms
create table if not exists rooms (
  id uuid primary key default gen_random_uuid(),
  house_id uuid not null references house(id) on delete cascade,
  name text not null
);

-- Create tasks
create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  house_id uuid not null references house(id) on delete cascade,
  title text not null,
  description text,
  room_id uuid not null references rooms(id) on delete cascade,
  assigned_to uuid not null references housemates(id) on delete cascade,
  points integer not null default 10,
  status text not null check (status in ('open', 'late', 'completed')),
  due_date timestamp,
  completed_at timestamp,
  photo_url text
);
