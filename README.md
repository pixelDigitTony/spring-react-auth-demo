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

### Backend

1. After cloning the project, change directory into the project directory `spring-react-auth-demo`, and run the command. Make sure you have docker installed and running.
```sh
docker-compose up
```
2. wait for the docker containers to be up and running before proceeding to the next step.
3. run the command
```bash
./mvnw clean install -Dskip
```
4. After everything is finished, run the application from the main class `src/main/java/uy/anthony/auth/AuthApplication.java`

### Frontend
1. change directory to `src/frontend/react-typescript` and run
```sh
npm install
```
2. then run
```sh
npm run dev
```
you can now start using the application.

## Testing

To test whether csrf protection is on. You can go to `index.http` file at the root directory of the project and run a request. If the request is forbidden, then csrf protection is working. If not, then csrf protection is not working. If you want the request to proceed, disable the csrf protection at the security config of the app.

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
- [ ] add unit tests
- [ ] refactor API calls to use axios interceptors
- [ ] add deployment scripts

# References

* [Using CSRF BREACH protection with JS frameworks](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/exploits.html#_i_am_using_angularjs_or_another_javascript_framework)
* [CSRF token not being read by spring security in v6: stack overflow question](https://stackoverflow.com/questions/74447118/csrf-protection-not-working-with-spring-security-6)
* [React folder architecture](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
* [what is a csrf attack](https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/)
* [Create a spring security login form](https://www.baeldung.com/spring-security-login)
* [Domain Driven Design Architecture (DDD)](https://www.geeksforgeeks.org/domain-driven-design-ddd/)