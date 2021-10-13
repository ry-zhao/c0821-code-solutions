select "films"."title",
       sum("films"."replacementCost") as "cost"
  from "inventory"
  join "films" using ("filmId")
  group by "films"."title"
