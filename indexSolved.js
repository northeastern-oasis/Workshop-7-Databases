// Import the Mongo Client for connection
const {MongoClient} = require('mongodb');

async function listDatabases(client) {
	let databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
	
	// this just iterates over the result to print it
    databasesList.databases.forEach(db => console.log('- ' + db.name));
}

// Finds one restaurant that has this name
async function findRestaurantByName(client, name) {
	
	let result = await client.db("sample_restaurants").collection("restaurants")
                        .findOne({ name: name });
	
	console.log(result);
}

// Finds all restaurants that have the given cuisine name 
async function findAllRestaurantsWithCuisine(client, cuisine) {
	let result = await client.db("sample_restaurants").collection("restaurants").find({ cuisine: cuisine });
	
	console.log(result);
}

// Creates a new restaurant for the database
async function createNewRestaurant(client, newRestaurant) {
	const result = await client.db("sample_restaurants").collection("restaurants").insertOne(newRestaurant);
}

async function main() {
	const uri = "YOUR_DATABASE_STRING"
	
	const client = new MongoClient(uri);
	
	try {
		await client.connect();
	
		// Add code here you want to do with the database
		let name = "Happy Garden";
		await findRestaurantByName(client, name);
		
		let cuisine = "Delicatessen";
		await findAllRestaurantsWithCuisine(client, cuisine);
		
		let newRestaurant = {
			name: "Chicken Lou's",
			cuisine: "Tasty",
			borough: "Northeastern"
		}
		
		await createNewRestaurant(client, newRestaurant);
		
		
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
	
}

main();