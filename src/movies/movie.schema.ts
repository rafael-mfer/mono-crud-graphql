import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: {
    type: Number,
    validate: {
      validator: function (val: {
        toString: () => { (): any; new (): any; length: number };
      }) {
        return val.toString().length === 4;
      },
      message: (val: { value: any }) => `${val.value} has to be 4 digits`,
    },
  },
});
