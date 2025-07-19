import mongoose from "mongoose"
const userSchama = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lasttName: {
            type: String,
            required: true,
        },

        username: {
            type: String,
            required: true,
            unique: true,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        bannerImage: {
            type: String,
            default: "",
        },
        bio: {
            type: String,
            default: "",
            maxLength: 160
        },
        location: {
            type: String,
            default: ""
        },
        followers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        ],
        following: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        ]




    }, { timestamps: true }
);
const User=mongoose.model("User",userSchama);
export default User;