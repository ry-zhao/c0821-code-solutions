with "filmCost" as (
  select "films"."filmId",
         "films"."title",
         sum("films"."replacementCost") as "cost" from "inventory"
  join "films" using ("filmId")
  group by ("filmId")
  ),"filmRev" as (
    select "films"."filmId",
           "films"."title",
           sum("payments"."amount") as "rev" from "payments"
    join "rentals" using ("rentalId")
    join "inventory" using ("inventoryId")
    join "films" using ("filmId")
    group by ("filmId")
  )
select "films"."title",
       "filmRev"."rev" - "filmCost"."cost" as "profit" from "films"
  join "filmCost" using ("filmId")
  join "filmRev" using ("filmId")
  order by ("profit") desc;
