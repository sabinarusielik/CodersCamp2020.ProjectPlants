const Profile = require('../models/Profile');

export async function getProfile() {
    const profile = await Profile.find();
    return profile;
}
