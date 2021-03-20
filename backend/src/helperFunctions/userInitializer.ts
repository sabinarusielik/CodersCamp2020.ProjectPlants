const User = require('../models/User');

export async function createUser(username: String, password: String, email: String) {
    const user = new User({
        username,
        password,
        email,
    });
    await user.save();
}
