select "categories"."name",
       count("categories"."name")
  from "categories"
  join "filmCategory" using ("categoryId")
  join "films" using ("filmId")
  join "castMembers" using ("filmId")
  where "castMembers"."actorId" = 178
  group by "categories"."name";
