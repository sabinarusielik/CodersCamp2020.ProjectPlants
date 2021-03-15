const User = require('.././models/User')

export async function getUser() {
    const user = await User.find();
    return user;
}

export async function getUserByName(name: string) {
    const oneUser = await User.findOne({username: name})
    return oneUser;
}