const Profile = require('.././models/Profile');

export const initializeProfile = () => {
    createProfile(23, 'abc');
    createProfile(25, 'sdgbs');
    createProfile(78, 'zdfvzdfgdfb');
};

export async function createProfile(
    // user: User["_id"],
    // household: Household["_id"],
    // plants: Plants["_id"];
    age: number,
    avatar: string,
) {
    const profile = new Profile({
        // user,
        // household,
        // plants,
        age,
        avatar,
    });
    await profile.save();
}
