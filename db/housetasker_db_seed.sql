
INSERT INTO house (id, address_line_1, postcode)
VALUES ('00000000-0000-0000-0000-000000000001', '77 Melbourne Avenue', 'HA89 5HD');



INSERT INTO housemates (id, house_id, display_name, avatar_url) VALUES
('00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', 'Louie Morais', 'https://api.dicebear.com/8.x/personas/svg?seed=louiemorais'),
('00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000001', 'Anna Hailstone', 'https://api.dicebear.com/8.x/personas/svg?seed=annahailstone'),
('00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000001', 'Ryan Abif', 'https://api.dicebear.com/8.x/personas/svg?seed=ryanabif'),
('00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000001', 'Sean Hutchinson', 'https://api.dicebear.com/8.x/personas/svg?seed=seanhutchinson');



INSERT INTO rooms (id, house_id, name) VALUES
('00000000-0000-0000-0000-000000000111', '00000000-0000-0000-0000-000000000001', 'Stairs'),
('00000000-0000-0000-0000-000000000112', '00000000-0000-0000-0000-000000000001', 'Bins'),
('00000000-0000-0000-0000-000000000113', '00000000-0000-0000-0000-000000000001', 'Living Room'),
('00000000-0000-0000-0000-000000000114', '00000000-0000-0000-0000-000000000001', 'Bathroom'),
('00000000-0000-0000-0000-000000000115', '00000000-0000-0000-0000-000000000001', 'Conservatory'),
('00000000-0000-0000-0000-000000000116', '00000000-0000-0000-0000-000000000001', 'Bedroom - Anna'),
('00000000-0000-0000-0000-000000000117', '00000000-0000-0000-0000-000000000001', 'Garage'),
('00000000-0000-0000-0000-000000000118', '00000000-0000-0000-0000-000000000001', 'Kitchen'),
('00000000-0000-0000-0000-000000000119', '00000000-0000-0000-0000-000000000001', 'Front Garden'),
('00000000-0000-0000-0000-000000000120', '00000000-0000-0000-0000-000000000001', 'Dining Room'),
('00000000-0000-0000-0000-000000000121', '00000000-0000-0000-0000-000000000001', 'Washroom'),
('00000000-0000-0000-0000-000000000122', '00000000-0000-0000-0000-000000000001', 'Bedroom - Sean');



INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  '1f5e0e3b-f561-4752-8c1e-7f3a0b265614',
  '00000000-0000-0000-0000-000000000001',
  'Vacuum the Stairs New Carpet: Sweep Fibre Build-Up First',
  'Hi, Louie! We got a new carpet and it is shedding a lot of fibres. I called the landlord and he said that it is normal with new carpets but we need to clean up the build up frequently so that we do not breath it in.

Before vacuuming, please make sure you remove as much as possible with the broom, please see a photo for reference – expect to remove that much when you broom before using the vacuum cleaner.',
  '00000000-0000-0000-0000-000000000115',
  '00000000-0000-0000-0000-000000000011',
  10,
  'open',
  '2025-06-09 12:00:00',
  null,
  'https://images.unsplash.com/photo-1615874959474-b26d86b7be15',
  '2025-06-07 12:00:00'
);


INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  'ec6ace07-a663-461d-a0e4-218fa6bacffc',
  '00000000-0000-0000-0000-000000000001',
  'Take Out All Rubbish Before Bin Day',
  'Ryan, please check all bins around the house, including the kitchen, bathroom, and bedrooms. Make sure all bags are tied up and put into the outside bins. Collection is tomorrow early morning!',
  '00000000-0000-0000-0000-000000000112',
  '00000000-0000-0000-0000-000000000013',
  12,
  'open',
  '2025-06-10 09:00:00',
  null,
  'https://images.unsplash.com/photo-1581578017424-3a4b197e3c50',
  '2025-06-07 12:00:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  'b5196557-d47d-4d0e-862e-2dc2661f45dd',
  '00000000-0000-0000-0000-000000000001',
  'Wipe Down Living Room Table and TV Stand',
  'Hey Anna, just a heads-up that the TV stand and table have built up quite a bit of dust. A quick wipe with the polish cloth will do the trick. Thanks!',
  '00000000-0000-0000-0000-000000000113',
  '00000000-0000-0000-0000-000000000012',
  5,
  'completed',
  '2025-06-10 09:00:00',
  '2025-06-10 09:00:00',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  '2025-06-07 12:10:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  'b1e4322c-882e-4768-8f0b-273d3a7c336e',
  '00000000-0000-0000-0000-000000000001',
  'Clean the Bathroom Mirror and Sink',
  'Sean, the mirror and sink in the bathroom need a good clean. There’s toothpaste splatter and water stains. Use the glass spray and wipe cloth under the sink cabinet.',
  '00000000-0000-0000-0000-000000000114',
  '00000000-0000-0000-0000-000000000014',
  10,
  'open',
  '2025-06-09 18:00:00',
  null,
  'https://images.unsplash.com/photo-1615873968403-89a1cfdf2c94',
  '2025-06-07 12:20:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  '37bc5c5f-3277-41fb-97aa-0c96ae036d88',
  '00000000-0000-0000-0000-000000000001',
  'Water the Plants in the Conservatory',
  'Louie, can you please water all the plants in the conservatory today? Don’t forget the hanging ones behind the curtain too. Thanks mate!',
  '00000000-0000-0000-0000-000000000115',
  '00000000-0000-0000-0000-000000000011',
  15,
  'open',
  '2025-06-10 01:00:00',
  null,
  'https://images.unsplash.com/photo-1592154960675-2ba13c0c00b7',
  '2025-06-07 12:30:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  '7bf9dcd5-4609-4c92-b3aa-ea507ca5e9e4',
  '00000000-0000-0000-0000-000000000001',
  'Change Bedsheets - Anna''s Room',
  'Anna, your bedsheets need changing this week. Clean sheets are in the airing cupboard. Please pop the old ones in the laundry basket after. ❤️',
  '00000000-0000-0000-0000-000000000116',
  '00000000-0000-0000-0000-000000000012',
  7,
  'late',
  '2025-06-09 21:00:00',
  null,
  'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
  '2025-06-07 12:40:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  'c9414d78-a663-43c2-807d-6e4d7a9705d1',
  '00000000-0000-0000-0000-000000000001',
  'Sweep Garage Floor – Too Much Dust',
  'Sean, the garage floor is caked with dust. A quick sweep and mop would really help – especially near the bike stands where it piles up.',
  '00000000-0000-0000-0000-000000000117',
  '00000000-0000-0000-0000-000000000014',
  10,
  'completed',
  '2025-06-10 07:00:00',
  '2025-06-10 07:00:00',
  'https://images.unsplash.com/photo-1626785774573-4b7993153452',
  '2025-06-07 12:50:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  '73a9e961-fed6-456f-8e9a-9bf1a214defc',
  '00000000-0000-0000-0000-000000000001',
  'Empty the Fridge of Expired Food',
  'Ryan, can you do a quick fridge check today? Throw out anything expired and wipe any spills on the shelves. It’s getting grim in there!',
  '00000000-0000-0000-0000-000000000118',
  '00000000-0000-0000-0000-000000000013',
  12,
  'open',
  '2025-06-10 05:00:00',
  null,
  'https://images.unsplash.com/photo-1600891963933-96053a1557d3',
  '2025-06-07 13:00:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  '379dc969-2302-4dfe-96e6-55580a9aee42',
  '00000000-0000-0000-0000-000000000001',
  'Trim the Hedges in Front Garden',
  'Hey Sean, the front hedge is overgrowing onto the footpath again. Could you please trim it before the weekend? The shears are in the garage.',
  '00000000-0000-0000-0000-000000000119',
  '00000000-0000-0000-0000-000000000014',
  5,
  'open',
  '2025-06-09 15:00:00',
  null,
  'https://images.unsplash.com/photo-1597009122166-c52d3c89a9fc',
  '2025-06-07 13:10:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  'd1d17447-89fb-429d-a0ff-b8cedca33314',
  '00000000-0000-0000-0000-000000000001',
  'Vacuum Dining Room Floor',
  'Louie, the dining room floor was left a bit crumbly after last night’s dinner. Quick vacuum job, especially under the table and by the radiator.',
  '00000000-0000-0000-0000-000000000120',
  '00000000-0000-0000-0000-000000000011',
  5,
  'completed',
  '2025-06-09 20:00:00',
  '2025-06-09 20:00:00',
  'https://images.unsplash.com/photo-1616627987555-94f3e90564b0',
  '2025-06-07 13:20:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  'ff561b26-9326-4b5c-bc43-63ac97c169fd',
  '00000000-0000-0000-0000-000000000001',
  'Wipe Down Washing Machine and Top Shelf',
  'Anna, the washroom has lint and detergent spills again – especially around the machine. A quick wipe down should sort it!',
  '00000000-0000-0000-0000-000000000121',
  '00000000-0000-0000-0000-000000000012',
  5,
  'open',
  '2025-06-10 04:00:00',
  null,
  'https://images.unsplash.com/photo-1581579185169-096ae9b8f5c7',
  '2025-06-07 13:30:00'
);

INSERT INTO tasks (
  id, house_id, title, description, room_id, assigned_to, points,
  status, due_date, completed_at, photo_url, created_at
) VALUES (
  'a7b8bcb0-c497-4fa1-a937-4f03996925f5',
  '00000000-0000-0000-0000-000000000001',
  'Make Ryan’s Bed After Sheets Wash',
  'Ryan, after the sheets come out of the dryer, could you please make your bed properly? The duvet always ends up lumpy otherwise!',
  '00000000-0000-0000-0000-000000000122',
  '00000000-0000-0000-0000-000000000013',
  15,
  'open',
  '2025-06-09 15:00:00',
  null,
  'https://images.unsplash.com/photo-1598300055112-e3495c6e0c2a',
  '2025-06-07 13:40:00'
);