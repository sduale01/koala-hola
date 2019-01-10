--database is named Koala_Holla--

CREATE TABLE "inventory"
(
	"id" SERIAL PRIMARY KEY,
	"koala_name" VARCHAR(80),
	"koala_age" INTEGER,
	"koala_gender" VARCHAR(80),
	"ready_to_transfer" BOOL,
	"koala_notes" VARCHAR(80)
);
INSERT INTO "inventory"
	("koala_name","koala_age","koala_gender",
	"ready_to_transfer","koala_notes")
VALUES
	('Scotty', 4, 'M', true, 'Born in Guatemala'),
	('Jean', 5, 'F', true, 'Allergic to lots of lava'),
	('Ororo', 7, 'F', false, 'Loves listening to Paula(Abdul)'),
	('Logan', 15, 'M', false, 'Love the sauna'),
	('Charlie', 9, 'M', true, 'Favorite band is Nirvana'),
	('Betsy', 4, 'F', true, 'Has a pet iguana');
