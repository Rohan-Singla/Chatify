import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        room_id: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
    }
);

const User = mongoose.model("User", UserSchema);

export default User;
