const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});


// Create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
  },
  age: {
      type: Number,
      required: true
    }
});

// Create Model (Collection)
const User = mongoose.model("User", userSchema);

// Add User
app.post("/add-user", async (req, res) => {
    try {
        const { name, age } = req.body;
        
        const newUser = new User({
            name,
            age
        });
        
        await newUser.save();
        
        res.send("User added successfully");
  } catch (error) {
      res.status(500).send(error.message);
    }
});

// Get All Users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});