// app.js modile is designated for establishing a connection to the database
const express = require("express")
const app = express()
const logger = require("./utils/logger")
const config = require("./utils/config")
const campgroundsRouter = require("./controllers/campgrounds")
const middleware = require("./utils/middleware")
const mongoose = require("mongoose")

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB")
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB", error.message)
  })

app.use(express.json())
app.use(middleware.requestLogger)

app.use("/", campgroundsRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
