

# Angular Storefront Project

This project is a storefront web application built using Angular for the frontend and Node.js with Express for the backend. It includes features such as product management, user authentication, and a responsive user interface.

## Backend Setup

1. Install Node.js.
2. Navigate to the `server` directory.
3. Install dependencies using `npm install`.
4. Start the server using `node server.js`.

## Frontend Setup

1. Navigate to the `frontend` directory.
2. Install Angular CLI if not already installed: `npm install -g @angular/cli`.
3. Install dependencies using `npm install`.
4. Start the development server using `ng serve`.

## Testing

- Ensure both frontend and backend servers are running.
- Access the application at `http://localhost:4200`.

## API Endpoints

### GET /clothes
Retrieve items with pagination support.

### POST /clothes
Add a new item to the store.

### PUT /clothes/:id
Update an existing item in the store.

### DELETE /clothes/:id
Delete an item from the store.

## Angular Service Integration

The frontend uses an Angular service (`ProductsService`) to interact with the backend API endpoints. This service includes methods for:

- Retrieving products with pagination support.
- Adding a new product.
- Editing an existing product.
- Deleting a product.

## Dependencies

- **Express:** Web framework for Node.js.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **Angular CLI:** Command-line interface for Angular development.

## Additional Features

- **Angular Components:** Modular architecture with reusable components.
- **Responsive Design:** Built using Angular Material and other UI libraries for a responsive and user-friendly interface.
- **Mock Database Integration:** Uses a `db.json` file to simulate a database for development and testing purposes.

---

This README provides an overview of the project, setup instructions, API endpoints, and a description of the Angular service integration, without including any specific code snippets.
