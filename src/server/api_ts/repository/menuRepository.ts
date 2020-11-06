import * as mongoose from 'mongoose';
import MenuSchema from "../models/menuSchema";

export default mongoose.model("menu", MenuSchema);