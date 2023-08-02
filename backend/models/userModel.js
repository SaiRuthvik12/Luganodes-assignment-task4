const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
        type: String,
        default:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    },
    phoneNo: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    walletAddress: { type: String, default: "" },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    else{
        next();
    }
});

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;



