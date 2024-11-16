import { Injectable } from '@nestjs/common';
import { Tenant } from './tenant.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TenantService {
    constructor(
        @InjectModel(Tenant.name)
        private TenantModal :Model<Tenant>
    ){}
}
