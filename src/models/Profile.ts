import { Document, Model, model, Schema } from 'mongoose';
// import { User } from "./User";
// import { Household } from "./Household";
// import { Plants } from "./Plants";

export interface IProfile extends Document {
    // user: User["_id"];
    // household: Household["_id"];
    // plants: Plants["_id"];
    age: number;
    avatar: string;
}

const profileSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    household: {
        type: Schema.Types.ObjectId,
        ref: 'Household',
    },
    plants: {
        type: [Schema.Types.ObjectId],
        ref: 'Plant',
    },
    age: {
        type: Number,
        required: true,
    },
    avatar: {
        type: String,
    },
});

const Profile: Model<Document<IProfile>> = model('Profile', profileSchema);

export default Profile;
