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

// TODO
// Finds all restaurants that have the given cuisine name 
async function findAllRestaurantsWithCuisine(client, cuisine) {
	
	// Let's implement this!
	let result = {}
	
	console.log(result);
}

// TODO
// Creates a new restaurant for the database
async function createNewRestaurant(client, newRestaurant) {
	
	// Let's implement this!
	const result = {}
	
	console.log(`New restaurant created with the following name: ${result.name}`);
}

async function main() {
	const uri = "YOUR_DATABASE_STRING"
	
	const client = new MongoClient(uri);
	
	try {
		await client.connect();
	
		// Add code here you want to do with the database
		let name = "";
		await findRestaurantByName(client, name);
		
		let cuisine = "";
		await findAllRestaurantsWithCuisine(client, cuisine);
		
		let newRestaurant = {

		}
		
		await createNewRestaurant(client, newRestaurant);
		
		
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
	
}

// Just call this main function
main();