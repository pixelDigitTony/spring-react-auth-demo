# Spring React Authentication Demo
This is a demo project for Spring Boot + ReactJS + Session based authentication. This is to show how to implement spring security 6, and storing csrf token in session cookies when authenticating user.

# Features
* Login
* Registration
* Delete user
* Spring Security 6 with session based authentication and CSRF protection

# Prerequisites
* Java 17.0.8
* Docker 20.10.17
* Intellij IDEA (or your favorite IDE)
* Node 14.17.2
* pnpm 8.6.12

# Getting Started

1. After cloning the project, cd into the project directory, and run the command. Make sure you have docker installed and running.
```sh
docker-compose up
```
2. wait for the docker containers to be up and running before proceeding to the next step.
3. Open the project in your favorite IDE, and run the spring boot application or run the command
```bash
./mvnw clean
./mvnw compile
./mvnw exec:java -Dexec.mainClass="uy.anthony.auth.AuthApplication"
```

# Tools

# Todo
- [x] implement basic functionality in the back-end
- [x] implement basic functionality in the front-end
- [x] connect front-end and back-end
- [x] Add Spring Security 6 with session based authentication and CSRF protection
- [x] add delete user functionality
- [ ] complete readme documentation

# References

* [Using CSRF BREACH protection with JS frameworks](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/exploits.html#_i_am_using_angularjs_or_another_javascript_framework)
* [CSRF token not being read by spring security in v6: stack overflow question](https://stackoverflow.com/questions/74447118/csrf-protection-not-working-with-spring-security-6)
* [React folder architecture](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
* [what is a csrf attack](https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/)