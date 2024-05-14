//3

import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true

    },
    body:{
        type: String,
        required: true

    }
},{timestamps:true})

const Post = mongoose.model("Post", PostSchema)

export default Post

//SCHEMA

//We can use mongoose Schema to create a new schema and then use that to create our model and then using that model we can write to our database, so using mongoose we can follow the OOP.

//Schema is like a pattern for our database for example in PHP and MySQL we need to specify the type and some properties for each coloumn for eg the name is going to be a string it needs to be required or it needs to be unique.

//PostSchema takes the pattern that we want for our collection. For eg I want to have a title field for my posts and the type of this field would be a string and it should be filled in so it cannot be empty and required can be set to true. We will also have the body of type String and required:true. 

//We also want the date so we want to have a date for our users posts, we could create a date property ourselves manually and set it up the way we want but we could also use the default timestamp on mongoose and i.e by providing second argument in the parentheses () and it will be an object and in this object we will set timestamps:true

//{timestamps:true} will create a created at and an updated at property for our model.

//This was the schema now we want this into a model using mongoose again so we will create another variable named Post and set this to mongoose.model that takes name for our model so I am going to call it "Post" then the schema which in this case is PostSchema

//So mongoose will create a collection in our db using the parallel version of this "Post" name so if we say post we will have a posts collection, if we say users we will have users and so on and also this "Posts" name will be used when we want to reference one collection within another and we will do that when we get to the users

//Now we will use this Post model to write to our db so basically this Post model is going to accept a title and a body as an object