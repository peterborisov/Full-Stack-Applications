### Spring boot cheat sheet

- https://www.youtube.com/watch?v=Nv2DERaMx-4
- https://projectlombok.org/features/

### Maven

- Provides Spring Boot support in Apache Maven. It allows you to package executable jar or war archives, run Spring Boot applications, generate build information and start your Spring Boot application

### Annotations - metadata that provides data about a program.

### Application layer

- Presentation - controllers => services
- Service - services => repositories
- Persistence - interaction with DB(Entities, Repositories)

### Beans

- classes that encapsulate many objects into a single object (the bean).
- Spring Bean: Object, which is created, managed and destroyed in Spring Container. We can inject an object into the Spring Container through the metadata(either xml or annotation), which is called inversion of control.
- @Bean - one way
- @Component - other way

### DB

- Spring data JPA(Java Persistence API) - provides a specification for persisting, reading, and managing data from your java object to your relational tables in the database.
- Spring JDBC(Java Database Connectivity) - direct approach provided by the Spring Framework to handle database operations.

### Jackson & JSON

- java obj to json - marshalling
- json to java obj - unmarshalling
