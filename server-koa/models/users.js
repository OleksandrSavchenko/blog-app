import mongoose from 'mongoose';
import crypto from 'crypto'; // module for various cryptographic operations (hash creation)

const userSchema = new mongoose.Schema({
    userName: String,
    email: {
        type: String,
        required: 'Email is required',
        unique: 'Email is already exist'
    },
    passwordHash: String,
    salt: String
}, {
    timestamps: true
});

userSchema.virtual('password')
    .set((password) => {
        this._plainPassword = password;
        if (password) {
            this.salt = crypto.randomBytes(128).toSting('base64');
            this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
        } else {
            this.salt = undefined;
            this.passwordHash = undefined;
        }
    })
    .get(() => {
        return this._plainPassword;
    });

userSchema.methods.checkPassword = (password) => {
    if (!password || !this.passwordHash) {
        return false;
    }

    return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') == this.passwordHash;
};

const User = mongoose.model('User', userSchema);

export default User;