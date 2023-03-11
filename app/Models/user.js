// Author:Riccardo Reali
// Date: 15-02-2023


import mongoose from "mongoose";

import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
     displayName: String,
     username: String,
     emailAddress: String
    },
    {
     timestamps:true,
     collection: 'users'
    });

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);