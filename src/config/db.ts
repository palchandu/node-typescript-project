import mongoose, { connect } from "mongoose";

async function connects() {
    return connect('mongodb://localhost:27017/user-mgt')
        .then(() => {
            console.log('Connected to MongoDB');
        }).catch(() => {
            console.log('Failed to connect');
        });
}
export default connects;