import { Service } from 'typedi';
import { Query, Resolver, Arg } from 'type-graphql';

import Species from '@/schema/typeDefs/Species';
import { DataService } from '@/services/DataService';

@Service()
@Resolver(Species)
export default class SpeciesResolver {
    constructor(private readonly dataService: DataService) {}
    @Query(() => [Species], {
        description: 'Gets all species of all Star Wars films'
    })
    public async allSpecies(): Promise<[Species]> {
        const species = await this.dataService.getAll('species');

        return species;
    }

    @Query(() => Species, {
        description: 'Gets one Star Wars species by ID'
    })
    public async species(@Arg('id') id: number): Promise<Species> {
        const species = await this.dataService.getOne('species', id);

        return species;
    }
}