select "a"."line1",
       "a"."district",
       "c"."name" as "cityName",
       "co"."name" as "countryName"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "co" using ("countryId");
