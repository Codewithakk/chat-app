<<<<<<< HEAD
import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://Akshaysingh:eJJC8MxIija0NFPG@projectsofakshay.zlw2xbe.mongodb.net/chatapptest?retryWrites=true&w=majority`);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
=======
import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://Akshaysingh:eJJC8MxIija0NFPG@projectsofakshay.zlw2xbe.mongodb.net/chatapptest?retryWrites=true&w=majority`);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
>>>>>>> origin/main
