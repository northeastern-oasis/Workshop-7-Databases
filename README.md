# Workshop 7: Hooking Up to a Database

**Workshop External Resources**

  *  Youtube Recording: Coming soon
  *  Slides: [https://docs.google.com/presentation/d/1XRQv-lYrat08F249j63__cTHmwEucDOytbo4RUbyrzY/edit?usp=sharing](https://docs.google.com/presentation/d/1XRQv-lYrat08F249j63__cTHmwEucDOytbo4RUbyrzY/edit?usp=sharing)
  * Kahoot: Coming soon
  * Oasis Starting Guide: [https://github.com/northeastern-oasis/Ultimate-Oasis-Starting-Guide/tree/master/databases](https://github.com/northeastern-oasis/Ultimate-Oasis-Starting-Guide/tree/master/databases)

Congratulations on starting to work with databases! Almost every major application has use for a database at some point, be it to store application user data, posts made in the app, restauraunt ratings, instant messages, and endless more use cases. They truly are essential!

The interactive portion of this workshop will focus on creating and interacting with a MongoDB Atlas cloud database

## Getting Started

This time, we'll be needing to work with and run files on our local system. To get set up with that, you'll need to go through the following steps:

1. (If you don't have it yet) Install Node.js [here](https://nodejs.org/en/). Just choose the LTS version, then go through installer steps.
2. Install Git [here](https://git-scm.com/downloads). Choose your operating system, then go through installer steps.
3. Clone this Github repository into a new folder on your machine (in Terminal or Command Prompt, type `git clone REPO_URL`, where REPO_URL is the clone repository found on the top of this page
4. You're all set! Just have the cloned folder easily accessible and follow along with the workshop to start writing backend code

## During the workshop

We will be creating a cluster/some collections in MongoDB Cloud Atlas. The steps to do that are as follows:

### To set up database

1. Launch database server with local MongoDB community server
	1. Create a cluster
		1. Use default settings for creation
		2. Wait 1-3 mins for process to finish
	2. Add a new user
		1. Go to “Database Access” link under “Security” on left-hand side
		2. Click “Create New User”
			1. Use Password authentication    
			2. Create a new username+password
				1. Make sure you copy/remember this password! You will need it soon
			3. “Database User Privileges” = “Read and write to any database”
			4. Then add user
	3. Add your IP Address
		1. Go to “Network access” link on left-hand side
		2. Click “Add IP Address”
			1. Click “Add Current IP Address”
				1. Because you will be developing on your local machine
	4. Now database is locked down both from a user perspective and an IP perspective

2. Add a new collection
	1. Back in “Clusters” tab, click “Collections” button in your cluster
	2. Click “Load sample dataset”
3. Create the connection for our database
	1. Back in the “Clusters” tab, click the “Connect” button in your newly-created cluster
	2. Driver = Node.js
	3. Version = 3.6 or later
	4. Copy the connection string to the clipboard
4. Now we're ready to code!


### Connecting to the database

We will be making a basic Node.js app where we will connect to our database. Our goal is for you to use this starter code to connect your own backends to your Mongo database (or other databases)

In your cloned repository, open index.js in your favorite IDE/text editor and follow along with the rest of the workshop.

We will be concerned with the basic operations outlined in this page:

[https://docs.mongodb.com/manual/crud/](https://docs.mongodb.com/manual/crud/)


## After the Workshop

Well done finishing the workshop! You now understand the basics of databases and how we can easily create/connect to them in our own applications. Check out the following resources to keep learning:

  *   Read through the MongoDB Docs--they have many resources to keep learning [https://docs.mongodb.com/manual/](https://docs.mongodb.com/manual/)
  *   Check out the Oasis Starting Guide section on frontend development [here](https://github.com/northeastern-oasis/Ultimate-Oasis-Starting-Guide/tree/master/databases)