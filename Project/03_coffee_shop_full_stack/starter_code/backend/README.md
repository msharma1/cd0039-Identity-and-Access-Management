<img width="1220" alt="image" src="https://github.com/user-attachments/assets/975ae2b8-5111-4562-a01e-6eed1a4aa251" /># Coffee Shop Backend

## Getting Started

### Installing Dependencies

#### Python 3.7

Follow instructions to install the latest version of python for your platform in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python)

#### Virtual Environment

We recommend working within a virtual environment whenever using Python for projects. This keeps your dependencies for each project separate and organized. Instructions for setting up a virtual environment for your platform can be found in the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the `/backend` directory and running:

```bash
pip install -r requirements.txt
```

This will install all of the required packages we selected within the `requirements.txt` file.

##### Key Dependencies

- [Flask](http://flask.pocoo.org/) is a lightweight backend microservices framework. Flask is required to handle requests and responses.

- [SQLAlchemy](https://www.sqlalchemy.org/) and [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) are libraries to handle the lightweight sqlite database. Since we want you to focus on auth, we handle the heavy lift for you in `./src/database/models.py`. We recommend skimming this code first so you know how to interface with the Drink model.

- [jose](https://python-jose.readthedocs.io/en/latest/) JavaScript Object Signing and Encryption for JWTs. Useful for encoding, decoding, and verifying JWTS.

## Running the server

From within the `./src` directory first ensure you are working using your created virtual environment.

Each time you open a new terminal session, run:

```bash
export FLASK_APP=api.py;
```

To run the server, execute:

```bash
flask run --reload
```

The `--reload` flag will detect file changes and restart the server automatically.

## Tasks

### Setup Auth0

1. Create a new Auth0 Account
2. Select a unique tenant domain
3. Create a new, single page web application
4. Create a new API
   - in API Settings:
     - Enable RBAC
     - Enable Add Permissions in the Access Token
     ![alt text](image.png)
5. Create new API permissions:
   - `get:drinks`
   - `get:drinks-detail`
   - `post:drinks`
   - `patch:drinks`
   - `delete:drinks`
   ![alt text](image-1.png)
6. Create new roles for:
   - Barista
     - can `get:drinks-detail`
     - can `get:drinks`
     ![alt text](image-2.png)
   - Manager
     - can perform all actions
     ![alt text](image-3.png)
     ![alt text](image-4.png)
7. Test your endpoints with [Postman](https://getpostman.com).
   - Register 2 users - assign the Barista role to one and Manager role to the other.
   ![alt text](image-5.png)
   ![alt text](image-6.png)
   ![alt text](image-7.png)
   - Sign into each account and make note of the JWT.

Barista User - 
<img width="1304" alt="image" src="https://github.com/user-attachments/assets/ad5e5542-c69a-4889-a772-2aab71ed6dd9" />

Manager User - 
<img width="1408" alt="image" src="https://github.com/user-attachments/assets/f3472320-e831-46ac-a39c-bfedc45e957f" />
<img width="1279" alt="image" src="https://github.com/user-attachments/assets/af3f9e8d-66dc-4bca-a206-916c27491b93" />

   - Import the postman collection `./starter_code/backend/udacity-fsnd-udaspicelatte.postman_collection.json`
     <img width="1249" alt="image" src="https://github.com/user-attachments/assets/92e7577b-b08e-4cae-bb66-160a44ed30be" />

   - Right-clicking the collection folder for barista and manager, navigate to the authorization tab, and including the JWT in the token field (you should have noted these JWTs).
   - Run the collection and correct any errors.
     
**Barista** user is able to access the GET endpoints - 
GET /drinks
<img width="1274" alt="image" src="https://github.com/user-attachments/assets/11a2bb46-c7f1-4435-a1c0-9e1fdff38da4" />
GET /drinks-detail
<img width="1223" alt="image" src="https://github.com/user-attachments/assets/6c87cf2f-ae7c-4355-8c1b-5d5513224389" />

But **Barista** user is NOT able to get POST, PATCH, and DELETE endpoints - 
POST /drinks
<img width="1220" alt="image" src="https://github.com/user-attachments/assets/5a97302c-c82e-4e4e-9356-a73082beec28" />
PATCH /drinks/1
<img width="1265" alt="image" src="https://github.com/user-attachments/assets/e24d0066-fcd1-4d2f-a242-171d19f782cc" />
DELETE /drinks/1
<img width="1264" alt="image" src="https://github.com/user-attachments/assets/59d35974-5ada-422d-a2ef-62205a0a9fe4" />

     
**Manager** user is able to access the endpoints - 
GET /drinks
<img width="1275" alt="image" src="https://github.com/user-attachments/assets/391b1ab0-40a8-454c-998c-5cee95e849d5" />
GET /drinks-detail
<img width="1267" alt="image" src="https://github.com/user-attachments/assets/cbb39fc2-87d6-44dd-8613-16d55586ea0c" />
POST /drinks
<img width="1223" alt="image" src="https://github.com/user-attachments/assets/602904e4-75b9-4c17-a1e0-90bddf59cb17" />
PATCH /drinks/1
<img width="1205" alt="image" src="https://github.com/user-attachments/assets/60949174-fbf4-4678-b6b5-7a7ceab6e6aa" />
DELETE /drinks/1
<img width="1225" alt="image" src="https://github.com/user-attachments/assets/e5867104-6e22-46fa-86eb-ca519e4d9ec2" />

   - Export the collection overwriting the one we've included so that we have your proper JWTs during review!

### Implement The Server

There are `@TODO` comments throughout the `./backend/src`. We recommend tackling the files in order and from top to bottom:

1. `./src/auth/auth.py`
2. `./src/api.py`
