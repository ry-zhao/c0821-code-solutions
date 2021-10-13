select "countries"."name",
       count("countries"."name")
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
