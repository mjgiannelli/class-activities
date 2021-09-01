const { Schema, model, Types } = require('mongoose');

const noteSchema = new Schema(
    {
        noteId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        noteText: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = noteSchema;