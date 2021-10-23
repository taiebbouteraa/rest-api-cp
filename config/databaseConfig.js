const mongoose = require("mongoose");

const databaseConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db Connected")
    } catch (error) {
        console.error(error)
    }
}

module.exports = databaseConfig