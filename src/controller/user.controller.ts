import { userModel, UserDocument } from "../models";
import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose'
import { createUser,findUser,updateUser} from '../services/index'
export const getUser = async (query: FilterQuery<UserDocument>) => {
    return await findUser(query);
}

export const saveUser = async (data: UserDocument) => { 
    return await createUser(data);
}

export const updateUsers = async (query: FilterQuery<UserDocument>, update: FilterQuery<UserDocument>, options: QueryOptions) => { 
    return await updateUser(query, update, options);
}