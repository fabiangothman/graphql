# Install express to serve a modern server (ES6)
- npm i express
- Use nodemon to auto-update changes
    - npm i nodemon
    - Create a script inside package.json

# Install GraphQL dependencies
- npm i graphql express-graphql graphql-tools

# Querys / Mutations(CRUD)
- On the GraphiQL tool execute:
    - For Querys:
        - ```javascript
            query{
                tasks {
                    _id
                    number
                }
            }
            /*  -----------------   */
            {
                tasks {
                    _id
                    number
                }
            }
    - For Mutatios:
        - ```javascript
            mutation{
                createTask(input: {
                    title: "Tarea agregada"
                    description: "tarea descripcion"
                }) {
                    _id
                    title
                    description
                    number
                }
            }

# MongoDB
- npm i mongoose
- Start database server
    - On windows (If is not already installed as a service):
        - Open cmd and go to mongo's path
        - C:\Program Files\MongoDB\Server\4.4\bin
        - ```mongodb
            run mongod
- Start client server:
    - On windows:
        - Open cmd and go to mongo's path
        - C:\Program Files\MongoDB\Server\4.4\bin
        - ```mongodb
            run mongo
- Codes:
    - Show databases (Works only if database is not empty):
        - ```mongodb
            show dbs;
    - Use a database:
        -  ```mongodb
            use 'db_name';
    - Create collection (Insert new data)
        - ```mongodb
            db.usuarios.insert({"firstname": "Fabian", "lastname": "Murillo"});
    - Show collections
        - ```mongodb
            show collections;
    - List all data of a collecion:
        - ```mongodb
            db.usuarios.find();