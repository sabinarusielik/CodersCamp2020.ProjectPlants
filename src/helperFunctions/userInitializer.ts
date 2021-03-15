export const initializeUser =()=>{
    createUser('Hardc0re_Plantator', 'qwerty', 'plantator123@gmail.com');
    createUser('Lubie_roslinki', '123456', 'plantslover@gmail.com');
    createUser('ZielonaMama', 'alamakota', 'anna.zielona@interia.pl');
}

const User = require('.././models/User');

async function createUser(
    username: String,
    password: String,
    email: String,
) {
    const user = new User({
        username,
        password,
        email,
    });
    await user.save();
}