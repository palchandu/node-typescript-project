import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose'
import { userModel, UserDocument } from '../models';

export function createUser(input: UserDocument) {
    const password: string = userModel.randomPassword();
    input.password = password;
    return userModel.create(input);
}

export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {
    return userModel.find(query, {}, options);
}

export function updateUser(query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions) {
    return userModel.findOneAndUpdate(query, update, options);
}