import { Field, ObjectType } from 'type-graphql';

import { Film } from '@/schema/typeDefs/Film';
import { Person } from '@/schema/typeDefs/Person';
import Pagination from '@/schema/typeDefs/Pagination';

@ObjectType({ description: 'A Star Wars starship.' })
export class Starship {
    @Field(() => String, { description: 'The name of this starship. The common name, such as "Death Star".' })
    public name!: string;

    @Field(() => String, {
        description:
            'The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".'
    })
    public model!: string;

    @Field(() => String, { description: 'The manufacturer of this starship. Comma separated if more than one.' })
    public manufacturer!: string;

    @Field(() => String, { description: 'The cost of this starship new, in galactic credits.' })
    public cost_in_credits!: string;

    @Field(() => String, { description: 'The length of this starship in meters.' })
    public length!: string;

    @Field(() => String, {
        description:
            'The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.'
    })
    public max_atmosphering_speed!: string;

    @Field(() => String, { description: 'The number of personnel needed to run or pilot this starship.' })
    public crew!: string;

    @Field(() => String, { description: 'The number of non-essential people this starship can transport.' })
    public passengers!: string;

    @Field(() => String, { description: 'The maximum number of kilograms that this starship can transport.' })
    public cargo_capacity!: string;

    @Field(() => String, {
        description:
            'The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.'
    })
    public consumables!: string;

    @Field(() => String, { description: 'The class of this starships hyperdrive.' })
    public hyperdrive_rating!: string;

    @Field(() => String, {
        description:
            'The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.'
    })
    public MGLT!: string;

    @Field(() => String, {
        description: 'The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"'
    })
    public starship_class!: string;

    @Field(() => [Person], { description: 'An array of people that this starship has been piloted by.' })
    public pilots!: string[];

    @Field(() => [Film], { description: 'An array of films that this starship has appeared in.' })
    public films!: string[];
}

@ObjectType({ description: 'Paginated starships data.' })
export class AllStarships {
    @Field(() => Pagination, {
        description: 'Pagination metadata.'
    })
    public pagination!: Pagination;

    @Field(() => [Starship], {
        description: 'Starships data.'
    })
    public data!: Starship[];
}
