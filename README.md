
# Cognizant Backend Code Challenge

This project contains an api with REST endpoints for interacting with a database of music album data. Functionality includes basic CRUD, album index, artist albums, popular genres, and popular year queries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

node.js
```
wget -qO- https://deb.nodesource.com/setup_7.x | sudo bash -
sudo apt-get install -y nodejs```

### Running the Project

A step by step series of examples that tell you have to get a development env running

Say what the step will be

Clone the repository.

```
git clone --?url
```
Run the server from the project root directory


```
node server.js
```

## Functionality Tests

The project is hard-coded to run on localhost:3000. Postman (https://www.getpostman.com/) can be used to test the following REST endpoints.

Create a new album

```
PUT http://localhost:3000/albums/
BODY: {album: albumName, artist: artistName, genre: genreDescription, year: ####}
```
Get a list of albums

```
GET http://localhost:3000/albums/
```
Update an album.
Note: id properties are displayed when querying for list of albums.

```
PUT http://localhost:3000/albums/[id]
BODY: {album: albumName, artist: artistName, genre: genreDescription, year: ####}
```
Delete an album.

```
DELETE http://localhost:3000/albums/[id]
```
Get an index of artists

```
GET http://localhost:3000/albums/artists
```
Get all of an artists albums

```
GET http://localhost:3000/albums/albums/[artist]
```
Get genres ranked by number of albums

```
GET http://localhost:3000/albums/genres/
```
Get years ranked by number of albums

```
GET http://localhost:3000/albums/years/
```

## Built With

* [Node.js] https://nodejs.org/en/ - The platform used
* [Express] https://expressjs.com/ - The web framework used
* [Mongoose] https://www.npmjs.com/package/mongoose - package used for interacting with Mongodb
* [Mongodb] https://www.mongodb.com - database platform
* [MLab] https://mlab.com/ - Mongodb hosting through AWS

## Authors

* **Jason Herman**
