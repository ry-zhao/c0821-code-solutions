select "a"."firstName",
       "a"."lastName"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  where "filmId" = '485';
