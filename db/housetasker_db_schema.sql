Project house_tasker {
  database_type: "PostgreSQL"
  note: "Supabase-ready DBML schema for HouseTasker MVP"
}

Table house {
  id uuid [pk, not null, default: `gen_random_uuid()`]
  address_line_1 text
  postcode text

  Note: "Single shared household context. Required by all tasks, rooms, and housemates."
}

Table housemates {
  id uuid [pk, not null, default: `gen_random_uuid()`]
  house_id uuid [not null, ref: > house.id]
  display_name text [not null]
  avatar_url text

  Note: "Four fixed users, all linked to the same house."
}

Table rooms {
  id uuid [pk, not null, default: `gen_random_uuid()`]
  house_id uuid [not null, ref: > house.id]
  name text [not null]

  Note: "Static list of 17 rooms belonging to a single house."
}

Table tasks {
  id uuid [pk, not null, default: `gen_random_uuid()`]
  house_id uuid [not null, ref: > house.id]
  title text [not null]
  description text
  room_id uuid [not null, ref: > rooms.id]
  assigned_to uuid [not null, ref: > housemates.id]
  points integer [not null, default: 10]
  status text [not null]
  due_date timestamp
  completed_at timestamp
  photo_url text

  Note: "Twelve fixed tasks. Assignment, filtering and scoring are based on these fields."
}

Table housemate_points {
  housemate_id uuid [not null, ref: > housemates.id]
  total_points integer [not null]

  Note: "Derived view (not a real table) used for leaderboard-style point tracking."
}