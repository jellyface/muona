import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Recipe } from './recipe.entity'

@Injectable()
export class FoodItemRepository extends Repository<Recipe> {
  constructor(
    @InjectRepository(Recipe)
    repository: Repository<Recipe>
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
}
