import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Ingredient } from './ingredient.entity'

@Injectable()
export class IngredientRepository extends Repository<Ingredient> {
  constructor(
    @InjectRepository(Ingredient)
    repository: Repository<Ingredient>
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
}
