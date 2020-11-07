import * as mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
  hat: {type: String},
  img: {type: String},
  title: {type: String},
  description: {type: String},
  price: {type: Number},
  date: {type: Date},
});

export default MenuSchema;