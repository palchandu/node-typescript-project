import { Schema, model, Document, Model } from "mongoose";
function generatePassword(length: number, symbols: boolean) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if (symbols) {
        characters += "!@#$%^&*()_+-=[]|,./?";
    }
    var password = "";
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
export interface UserDocument extends Document {
    name: string;
    email: string;
    age: number;
    address?: string;
    password?: string;
}
interface User {
    name: string;
    email: string;
    age: number;
    address?: string;
    password?: string;
}
/** Static method */
interface PasswordModel extends Model<User> {
    randomPassword(): string;
}
const userSchema = new Schema<User, PasswordModel>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    }
})

userSchema.static('randomPassword', function randomPassword() {
    return generatePassword(12, true);
})
userSchema.method('fullInfo', function fullInfo() {
    return 'Name : ' + this.name + ' Age: ' + this.age + ' Email: ' + this.email + 'Address: ' + this.address;
})
const userModel = model<User, PasswordModel>('user', userSchema);
export default userModel;