select "f"."releaseYear",
       "c"."name" as "filmCategory",
       "f"."title"
  from "films" as "f"
  join "filmCategory" as "fc" using ("filmId")
  join "categories" as "c" using ("categoryId");
