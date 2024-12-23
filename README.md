# CS495 FullStackDevelopment
 
## Architecture
### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application(SPA)
Express is a popular Node.js web application framework used on the server-side. It helps with routing, middleware, and server logic. In a full-stack project, Express is responsible for handling HTTP requests and serving HTML, JSON, or other content to the client.
HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It defines the structure of web content. In frontend development, HTML is used to structure the page's elements, headings, paragraphs, links, forms, and more.
JavaScript is a versatile scripting language used for client-side scripting. It adds interactivity and dynamic behavior to web pages. JavaScript can be used to validate user input, manipulate the DOM (Document Object Model), and perform asynchronous operations, such as making AJAX requests.
SPAs are web applications that load a single HTML page and dynamically update the content as the user interacts with the application. They use JavaScript frameworks like React, Angular, or Vue.js to create seamless and responsive user experiences. SPAs reduce the need for full page reloads and provide a more fluid user interface.
### Why did the backend use a NoSQL MongoDB database?
MongoDB is a NoSQL, document-oriented database that stores data in a flexible, schema-less format called BSON (Binary JSON). In contrast to traditional relational databases, MongoDB is well-suited for projects where data structures are evolving or need to be highly scalable.
Here's why MongoDB was chosen for the backend:
1. Schema Flexibility: MongoDB's flexible schema allows developers to store data without a fixed structure. This is useful in web applications where data requirements may change frequently.
2. Scalability: MongoDB is designed to scale horizontally, making it suitable for handling large amounts of data and high traffic loads.
3. JSON-Like Documents: Data in MongoDB is stored as JSON-like documents, which align well with JavaScript, making it easier to work with data in the full-stack application.
4. Developer-Friendly: MongoDB's queries and operations are intuitive and developer-friendly, making it a suitable choice for agile development.
## Functionality
### How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
JSON (JavaScript Object Notation) and JavaScript are related but serve different purposes:
1. JavaScript is a programming language that provides functionality and interactivity to web applications. It is used for client-side scripting and is capable of performing various tasks, such as manipulating the Document Object Model (DOM), handling user interactions, and making AJAX requests.
2. JSON, on the other hand, is a data interchange format. It is a lightweight, text-based format for representing structured data. JSON is often used to store and exchange data between a server and a client (frontend and backend) in a format that is easy for both humans and machines to read and understand. JSON is a subset of JavaScript's object literal notation but is language-independent and can be used with many programming languages.
JSON plays a crucial role in tying together frontend and backend development in a full-stack application:
1. Data Exchange: JSON is used as a common data format for communication between the frontend and backend. When the frontend needs to request or receive data from the backend (e.g., through AJAX requests or API calls), the data is typically sent or received in JSON format.
2. Serialization and Parsing: On the backend, data is often serialized into JSON format before being sent to the frontend. On the frontend, JSON data received from the backend is parsed and converted into JavaScript objects for further processing.
3. Configuration: JSON is commonly used for configuration files in both frontend and backend development. These configuration files define settings, parameters, and options that are used by the application.
4. APIs: When designing RESTful APIs, JSON is often chosen as the data format for requests and responses. This standardizes the way data is structured and exchanged between the frontend and backend.
### Provide instances in the full stack process where you refactored code to improve functionality and efficiences, and name the benefits that come from reusable user interface(UI) components.
Code refactoring involves restructuring existing code to improve its readability, maintainability, or efficiency without changing its external behavior. In a full-stack development process, refactoring can occur at both the frontend and backend layers. Reusable UI components are beneficial because they promote code reusability and maintainability. For example, in frontend development, you might create reusable components for common UI elements like buttons, forms, or navigation bars. When you need these elements in multiple parts of your application, you can use the same component, reducing code duplication and ensuring consistency in appearance and behavior.
Benefits of reusable UI components include:
1. Code Efficiency: Reusable components save development time by allowing you to use pre-built solutions rather than writing similar code from scratch.
2. Consistency: UI components ensure a consistent look and behavior across the application, reducing the risk of user interface inconsistencies.
3. Easier Maintenance: When changes are needed, you only need to update the component in one place, which simplifies maintenance and reduces the chances of introducing bugs.
4. Scalability: As your application grows, reusable components make it easier to scale and extend the user interface.
## Testing
### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
In a full-stack application, methods, endpoints, and security are key aspects of API testing and play a critical role in ensuring the functionality, reliability, and security of the application. Here's an explanation of these concepts:
Methods:
1. HTTP Methods: Methods refer to the HTTP verbs used in API requests to perform specific actions. The most common HTTP methods are:
2. GET: Used for retrieving data from the server. It should be idempotent, meaning multiple identical requests have the same effect as a single request.
3. POST: Used for creating new resources on the server. It may have side effects, and multiple identical requests may result in different outcomes.
4. PUT: Used for updating existing resources on the server. It should be idempotent.
5. DELETE: Used for removing resources from the server. It should be idempotent.
Endpoints:
1. API Endpoints: Endpoints are specific URLs (Uniform Resource Locators) that define the locations where API requests can be made. Each endpoint corresponds to a particular resource or action in the application. For example:
/api/trips: An endpoint to retrieve a list of trips.
/api/:tripCode: An endpoint to retrieve a specific trip with an specfic ID relating to tripCode.
/api/login: An endpoint to authenticate a user.
/api/register: An endpoint to register a user.
3. RESTful Design: In RESTful API design, endpoints are structured hierarchically and follow a consistent pattern. They typically represent nouns (resources) and use HTTP methods for actions on those resources.
Security:
1. Authentication: Security in a full-stack application involves ensuring that only authorized users can access certain endpoints or perform specific actions. Common authentication mechanisms include username/password, API keys, tokens (e.g., JWT), and OAuth for third-party authorization.
2. Authorization: Once a user is authenticated, authorization mechanisms control what actions they can perform and which resources they can access. Role-based access control (RBAC) and permissions are often used to manage authorization.
3. Data Encryption: Sensitive data, especially during transmission, should be encrypted using protocols like HTTPS to protect it from eavesdropping.
4. Input Validation: APIs should validate user inputs to prevent security vulnerabilities like SQL injection and cross-site scripting (XSS) attacks.
5. Rate Limiting: Rate limiting restricts the number of API requests a user or client can make within a certain timeframe to prevent abuse and potential denial-of-service (DoS) attacks.
6. Cross-Origin Resource Sharing (CORS): CORS policies control which domains are allowed to make requests to your API, enhancing security by preventing unauthorized cross-origin requests.
## Reflection
### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course was helpful toward me reaching my professional goals by giving me the tools and skills necessary to excel at being a Full Stack Developer along with providing me with information to create my own applications.
A list of skills that I haved learned are the following:
The MEAN stack
1. MongoDB
2. Express.js
3. Angular
4. Node.js
Other Tools
1. Postman
2. MongoDB Compass
3. Github
4. CRUD(Create, Read, Update, Delete)
5. NoSQL Database
6. HTML
7. JavaScript
8. Test Based Development
9. Software Development Lifecycle

While I believe these to be all the tools or skills used and or learned I like to say there could be some I am missing and in the interest of keeping myself humble I don't believe myself to be a master in any of these as I believe I have much to learn.
