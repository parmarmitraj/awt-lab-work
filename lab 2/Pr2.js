const EventEmitter =  require("events");

const eventEmitter = new EventEmitter();

// Object to track event counts
const eventCount = {
    login: 0,
    logout: 0,
    purchase: 0,
    profileUpdate: 0
};

eventEmitter.on("user-login", (username) => {
    eventCount.login++;
    console.log(`User logged in: ${username}`);
});

eventEmitter.on("user-logout", (username) => {
    eventCount.logout++;
    console.log(`User logged out: ${username}`)
})

eventEmitter.on("user-purchase", (username, item) => {
    eventCount.purchase++;
    console.log(`User ${username} purchased ${item}`);
});

eventEmitter.on("profile-update", (username) => {
    eventCount.profileUpdate++;
    console.log(`User ${username} updated profile`);
});

eventEmitter.on("summary", () => {
    console.log("\nEVENT SUMMARY REPORT");
    console.log(`User Login Events: ${eventCount.login}`);
    console.log(`User Logout Events: ${eventCount.logout}`);
    console.log(`User Purchase Events: ${eventCount.purchase}`);
    console.log(`Profile Update Events: ${eventCount.profileUpdate}`);
});

eventEmitter.emit("user-login", "Rahul");
eventEmitter.emit("user-login", "Amit");

eventEmitter.emit("user-purchase", "Rahul", "Laptop");
eventEmitter.emit("user-purchase", "Amit", "Mobile");

eventEmitter.emit("profile-update", "Rahul");

eventEmitter.emit("user-logout", "Rahul");

eventEmitter.emit("summary");