import mongoose, { Schema } from "mongoose";

const RoomSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        room_name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        room_id: {
            type: String,
            unique: true,
            required: true,
        },
        // room_type: {
        //     type: String,
        //     enum: ["public", "private"],
        //     required: true,
        // },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
    }
);

const Room = mongoose.model("Room", RoomSchema);

export default Room;
