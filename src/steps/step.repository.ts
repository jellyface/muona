import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Step } from './step.entity'

@Injectable()
export class SteRepository extends Repository<Step> {
  constructor(
    @InjectRepository(Step)
    repository: Repository<Step>
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
}
