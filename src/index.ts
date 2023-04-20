// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"
// import { Bills } from "./entity/Bills"
// import { PostSubscriber } from "./subscribers/Subscribers"


// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "vikas"
//     user.lastName = "vider"
//     user.age = 24

 


    
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     // console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     // console.log("Loaded users: ", users)


//     // // const bill = new Bills();
//     // const users = await AppDataSource.manager.find(User)
//     // console.log("Loaded users: ", users)

//     // console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Bills } from "./entity/Bills"
import { PostSubscriber } from "./subscribers/Subscribers"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "vikas"
    user.lastName = "vider"
    user.age = 24
    
    // console.log('Before user inserted', user)
    user.createDate = new Date()

    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // // const bill = new Bills();
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
