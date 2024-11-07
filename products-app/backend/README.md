### Folder structure

- Controller - classes handle incoming HTTP requests and define the API endpoints.
- Model - classes mapped to database tables and define the properties and relationships of the application data.
- Repository - classes that deal with data access. These classes typically use an ORM (Object-Relational Mapping) framework or JPA (Java Persistence API) to interact with the database.
- Service - classes that implement business logic. Controllers use these services to perform operations on data.
- src/main/resources - contains non-Java resources like static files, templates, and configuration files.
- src/test - contains all your test classes. Inside this folder there is another folder which is same to src/main/java folder structure. As an example src/test/java/service folder contains test classes for testing the service classes of src/main/java/service classes.
