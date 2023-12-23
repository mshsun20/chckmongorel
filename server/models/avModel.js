const mongoose = require('mongoose')

const AvSchema = new mongoose.Schema({
    sdt: {
        type: String,
        required: true
    },
    c: {
        type: String,
        required: true
    },
    mn: {
        type: String,
        required: true
    },
    si: {
        type: String,
        required: true
    },
    s: {
        type: String,
        required: true
    },
    p: {
        type: String,
        required: true
    },
    al: {
        type: String,
        required: true
    },
    cr: {
        type: String,
        required: true
    },
    cu: {
        type: String,
        required: true
    },
    ni: {
        type: String,
        required: true
    },
    mo: {
        type: String,
        required: true
    },
    ti: {
        type: String,
        required: true
    },
    nb: {
        type: String,
        required: true
    },
    pb: {
        type: String,
        required: true
    },
    sn: {
        type: String,
        required: true
    },
    b: {
        type: String,
        required: true
    },
    sb: {
        type: String,
        required: true
    },
    v: {
        type: String,
        required: true
    },
    co: {
        type: String,
        required: true
    },
    n: {
        type: String,
        required: true
    },
    fe: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('AV', AvSchema)