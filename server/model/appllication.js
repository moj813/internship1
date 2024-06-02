const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    applicantName:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
        enum:["CSE","CE","IT"],
    },
    graduation:{
        type:String,
        required:true,
        enum:["UG","PG"]
    },
    attendance:{
        type:Number,
        require:true,
    },
    paperTitle:{
        type:String,
        required:true,
    },
    conferanceName:{
        type:String,
        required:true,
    },
    consferanceWeb:{
        type:String,
        required:true
    },
    publisherDetails:{
        type:String,
        required:true,
    },
    registrationFees:{
        type:Number,
        required:true,
    },
    indexing:{
        type:String,
        require:true,
        enum:["scoups","web of science"]
    },
    areYouFirstAuthor:{
        type:Boolean,
        required:true,
    },
    firstAuthorName:{
        type:String,
    },
    firstAuthorId:{
        type:String,
    },
    facultyCoAuthor:[{
        type:String,
        required:true,
    }],
    facultyDepartment:{
        type:String,
        required:true,
    },
    facultyInstitute:{
        type:String,
        required:true,
    },
})