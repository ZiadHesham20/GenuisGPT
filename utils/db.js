import { createKysely } from "@vercel/postgres-kysely";

interface Database {
  person: PersonTable; // see github.com/kysely-org/kysely
  pet: PetTable;
  movie: MovieTable;
}

const db = createKysely<Database>();

const person = await db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select(['first_name', 'pet.name as pet_name'])
  .where('person.id', '=', id)
  .executeTakeFirst();