const mongoose = require('mongoose');

module.exports = async() => {
    try {
        const connectionParams = {
            useNewUrlParse: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };

        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to database")

    } catch (error) {
        console.log("Cou;d not connect to database", error)
    }

}