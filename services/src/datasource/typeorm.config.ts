import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'abc123',
    database: 'sql_medium',
    entities: ["dist/**/*.entity.{ts,js}"],
    synchronize: true
}