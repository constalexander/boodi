# Boodi API

Used for making authenticated calls from a private server.

**src/configs**

- API keys
- env vars
- db connection params

**src/controllers**

- receive incoming requests
- handlers for routes
- process them using services
- send responses

**src/middlewares**

- perform operations on incoming requests before they reach route handler
- ie. auth, logging, parsing, error handling

**src/models**

- data models (structure)
- db schemas

**src/routes**

- define routes and related routes
- define the HTTP methods (GET, POST, PUT, PATCH, DELETE)

**src/services**

- business logic
- external services
- reusable functionality
- db queries

**src/utils**

- date formatting
- generate unique IDs
- encryption
- validation

✨🎨
