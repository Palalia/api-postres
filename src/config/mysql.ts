import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    process.env.DATABASE_MYSQL || 'mysql',
    process.env.USER_MYSQL || 'root',
    process.env.PASSWORD_MYSQL,
    {
        host: process.env.SERVER_MYSQL,
        dialect: 'mysql',
        timezone: '-06:00',
        retry: {
            match: [/Deadlock/i],
            max: 3
        }
    }
);
sequelize.authenticate().then(() => {
    console.log("conexion exitosa")
}).catch((err: any) => {
    console.log(err)
})
export default sequelize;