# Project 3 - BRVENDING

## Introduction

## Directory Structure

## Setup

### Install & Update Dependencies

The first time you start the server you may want to make sure you have the dependencies installed, in the right versions. To do so, just go to the terminal and type:

```
$ npm install
```

### Install StandardJS Linter

[StandardJS](https://standardjs.com/) is a JavaScript style guide, linter, and formatter.

#### VSCode Extension

You may want to install [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

> VSCODE `SETTINGS.JSON`:

```
  "javascript.validate.enable": false,
  "standard.enable": true,
  "standard.run": "onType",
  "standard.autoFixOnSave": false,
  "standard.usePackageJson": true
```

_Make sure you don't have duplicate rules!_

### Environment Variables

The next setup step is to create an `Environment Variable` file `.env` in this folder. We have provided a `.env.example` for you with a sample configuration for both **development** and **production** environments.

Make your own copy\_

```
$ cp .env.example .env
```

And customize the sample params to your needs

- mongoURL: "mongodb://localhost/",
- mongoDBName: 'reboot',
- apiKeys : "fakeapikey",
- port : 5000

## Start local Server

You can start your server anytime with:

```
$ npm run dev
```

You should see something like:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.43.142:8080
Hit CTRL-C to stop the server
```

## API ROUTES

Please note that all routes in this API should be called with the `/api` prefix before the endpoint:

```
POST http://localhost:3000/api/auth/signup
```

### AUTHENTICATION ENDPOINTS

| METHOD | URL           | What does it do      |
| ------ | ------------- | -------------------- |
| POST   | `auth/signup` | Create a new account |
| POST   | `auth/login`  | Authenticates a user |

### CLIENTS ENDPOINTS

| METHOD | URL                       | What does it do          |
| ------ | ------------------------- | ------------------------ |
| GET    | `clients`                 | Get All Clients          |
| GET    | `clients/:clientId`       | Get One Client           |
| POST   | `clients`                 | Create One Client        |
| PUT    | `clients/:clientId`       | Update Client            |
| DELETE | `clients/:clientId`       | Delete Client            |
| GET    | `clientId/orders`         | Get All Orders By Client |
| GET    | `clientId/orders/orderId` | Get One Order of Client  |
| DELETE | `clientId/orders/orderId` | Delete Order             |

### ORDER ENDPOINTS

| METHOD | URL               | What does it do  |
| ------ | ----------------- | ---------------- |
| GET    | `orders`          | Get All Orders   |
| GET    | `orders/:orderId` | Get One Order    |
| POST   | `orders`          | Create One Order |
| PUT    | `orders/:orderId` | Update Order     |
| DELETE | `orders/:orderId` | Delete Order     |

### PRODUCTS ENDPOINTS

| METHOD | URL                   | What does it do    |
| ------ | --------------------- | ------------------ |
| GET    | `products`            | Get All Products   |
| GET    | `products/:productId` | Get One Product    |
| POST   | `products`            | Create One Product |
| DELETE | `products/:productId` | Delete Product     |

## MODELS

### COMMERCIAL MODEL

| KEY       | TYPE   | VALIDATIONS                                |
| --------- | ------ | ------------------------------------------ |
| username  | String | required: true                             |
| firstName | String | required: true                             |
| LastName  | String | required: true                             |
| password  | String | required:true                              |
| mail      | String | required:true validator: regular expresion |
| number    | Number | required:true validator: regular expresion |

### PRODUCT MODEL

| KEY      | TYPE   | VALIDATIONS     |
| -------- | ------ | --------------- |
| name     | String | required: true  |
| price    | Number | required: true  |
| category | String | required: true  |
| photoURL | String | required: false |
| stock    | Number | required: false |

### CLIENT MODEL

| KEY            | TYPE     | VALIDATIONS                                         |
| -------------- | -------- | --------------------------------------------------- |
| firstName      | String   | required: true                                      |
| LastName       | Number   | required: true                                      |
| email          | String   | required: false                                     |
| way to pay     | String   | required: true, enum: card or count, default: count |
| opening hours  | String   | required: false                                     |
| zipcode        | Number   | required: true                                      |
| address        | String   | required: true                                      |
| document       | String   | required: true                                      |
| mobile         | Number   | required: true                                      |
| orders         | ObjectId | ref: orders                                         |
| numOrders         | Number | required: false                                            |

### ORDER MODEL

| KEY          | TYPE             | VALIDATIONS                                              |
| ------------ | ---------------- | -------------------------------------------------------- |
| createdAt    | Number           | default: Date.now()                                      |
| toalPrice        | Number           | required: true                                           |
| products     | Array[ObjectsId] | required: true                                           |
| status       | String           | required: true enum: send or not sent, default: not sent |
| order number | Number           | required: true                                           |

Happy coding!
