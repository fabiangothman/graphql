import { tasks } from "./sample.js";
import UserSchema from "./models/User.js";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world con GraphQL";
        },
        /*greet: (root, args) => {
            //console.log(args);
            return `Hello ${args.name}!`;
        }*/
        greet: (_, {name}, cntxt) => {
            console.log(cntxt);
            return `Hello ${name}!`;
        },
        tasks: () => {
            return tasks;
        },
        Users: async () => {
            return await UserSchema.find();
        }
    },

    Mutation: {
        createTask: (_, { input }) => {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        createUser: async (_, { input }) => {
            const newUser = new UserSchema(input);
            await newUser.save();
            return newUser;
        },
        deleteUser: async (_, { _id }) => {
            return await UserSchema.findByIdAndDelete(_id);
        },
        updateUser: async (_, { _id, input }) => {
            return await UserSchema.findByIdAndUpdate(_id, input, {new: true});
        },
    },
};