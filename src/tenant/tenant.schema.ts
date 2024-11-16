import { SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Tenant extends Document{

}

export const TenantSchema = SchemaFactory.createForClass(
    Tenant
)