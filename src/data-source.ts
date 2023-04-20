import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Bills } from "./entity/Bills"
import { PostSubscriber } from "./subscribers/Subscribers"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "viderpaydb",
    synchronize: true,
    logging: false,
    entities: [User,Bills],
    migrations: [],
    subscribers: [PostSubscriber]
})
