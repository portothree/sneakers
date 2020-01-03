
# Sneakers
> ### Using React + Redux to develop a pseudo sneaker store.

### [Demo]()

## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server (this project uses create-react-app)

You can add `.env` file in the root folder of project to set environment variables (like PORT to change webserver's port).

### Making requests to the API and changing data

Currently the project is mocking the api data using the [json-server package](https://github.com/typicode/json-server) with the data in the file `sv.json`, if you want to change any product or stock simple edit it.

### Running the fake rest API

- `json-server sv.json -p 3333`


## Functionality overview

The example application is a e-commerce site called "Sneakers". It uses a custom API for all requests.

**General functionality:**

- GET and display paginated lists of products
- Add products to cart
