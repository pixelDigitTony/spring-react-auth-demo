# Spring React Authentication Demo
This is a demo project for Spring Boot + ReactJS + Session based authentication. This is to show how to implement spring security 6, and storing csrf token in session cookies when authenticating user.

# Features
* Login
* Registration
* Delete user
* Spring Security 6 with session based authentication and CSRF protection

# Prerequisites
* [Java 17.0.8](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
* [Docker (latest version)](https://www.docker.com)
* [Intellij IDEA (or your favorite IDE)](https://www.jetbrains.com/toolbox-app/)
* [Node 14.17.2 or LTS](https://nodejs.org/en)

# Getting Started

This section teaches how to install, run and test the application.

## Installation

1. After cloning the project, change directory into the project directory `spring-react-auth-demo`, and run the command. Make sure you have docker installed and running.
* ```sh
    docker-compose up
    ```
2. wait for the docker containers to be up and running before proceeding to the next step.
3. run the command
* ```bash
    ./mvnw clean install
    ```
4. After waiting for the build to finish, run the application from the main class [AuthApplication.java](src/main/java/uy/anthony/auth/AuthApplication.java). The frontend will be served from the backend server. No need to run dev server for the frontend. You can go to [http://localhost:8181](http://localhost:8181) to see the application running.
   You should then be seeing this page:
    ![login page](img/login-page.png)

## Testing

To test whether csrf protection is on. You can go to [index.http](./index.http) file at the root directory of the project and run a request. If the request is forbidden, then csrf protection is working. If not, then csrf protection is not working. If you want the request to proceed, disable the csrf protection at the security config of the app.

# Packaging
1. To package the application, run the command
* ```sh
    ./mvnw clean install
    ```
2. Wait for the build to finish, then run the command (make sure the postgres container in docker is running)
* ```sh
    java -jar target/spring-react-auth-demo-0.0.1-SNAPSHOT.jar
    ```
    This will run the application in production mode with the front-end bundled in the jar file.

# Other Tools Used

* [Spring Boot v3.1.1](https://spring.io/projects/spring-boot)
* [Spring Security v6.1.1](https://spring.io/projects/spring-security)
* [ReactJS v18.2.0](https://reactjs.org/)
* [Axios v1.4.0](https://axios-http.com/docs/intro)
* [Typescript v5.0.2](https://www.typescriptlang.org)
* [Vite v4.4.5](https://vitejs.dev)
* [FlywayDB 9.16.3](https://flywaydb.org)
* [PostgreSQL:latest (docker image)](https://www.postgresql.org)
* [Material UI](https://mui.com)
* [Material UI Icons](https://mui.com)

# Todo
- [x] implement basic functionality in the back-end
- [x] implement basic functionality in the front-end
- [x] connect front-end and back-end
- [x] Add Spring Security 6 with session based authentication and CSRF protection
- [x] add delete user functionality
- [x] complete readme documentation
- [x] add unit tests
- [x] refactor API calls, and build an API Layer
- [x] add deployment scripts
- [x] add error handling in the front-end for axios calls
# References

* [Using CSRF BREACH protection with JS frameworks](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/exploits.html#_i_am_using_angularjs_or_another_javascript_framework)
* [CSRF token not being read by spring security in v6: stack overflow question](https://stackoverflow.com/questions/74447118/csrf-protection-not-working-with-spring-security-6)
* [React folder architecture](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
* [what is a csrf attack](https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/)
* [Create a spring security login form](https://www.baeldung.com/spring-security-login)
* [Domain Driven Design Architecture (DDD)](https://www.geeksforgeeks.org/domain-driven-design-ddd/)
* [Building an API layer in react](https://semaphoreci.com/blog/api-layer-react)
* [How to version a rest api](https://www.freecodecamp.org/news/how-to-version-a-rest-api/)
* [Handling axios api calls](https://blog.bitsrc.io/api-call-in-react-using-axios-handling-complicated-scenarios-befff1655abc)
* [Build spring react project with maven](https://developer.okta.com/blog/2022/06/17/simple-crud-react-and-spring-boot)
* [GitHub repo for frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)
* [Including react in your spring boot maven build](https://medium.com/@itzgeoff/including-react-in-your-spring-boot-maven-build-ae3b8f8826e)