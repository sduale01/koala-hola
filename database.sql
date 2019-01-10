--database is named Koala_Holla--

CREATE TABLE "inventory" ("id" SERIAL PRIMARY KEY,
						 "koala_name" VARCHAR(80),
						 "koala_gender" VARCHAR(80),
						 "koala_age" INTEGER,
						 "ready_to_transfer"VARCHAR(3),
						 "koala_notes" VARCHAR(80));