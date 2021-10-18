with "filmCosts" as (
  select "films"."title",
       sum("films"."replacementCost") from "inventory"
  join "films" using ("filmId")
  group by ("filmId")
)
-- with "filmRev" as (
--   select "films"."title",
--          sum("payments"."amount") from "payments"
--   join "rentals" using ("rentalId")
--   join "inventory" using ("inventoryId")
--   join "films" using ("filmId")
--   group by ("filmId")
-- )
select * from "filmCosts"
