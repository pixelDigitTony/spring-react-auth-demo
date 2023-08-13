package uy.anthony.auth.application.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uy.anthony.auth.domain.repo.UserRepository;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/login/auth")
    public ResponseEntity<String> auth(@RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest.username + " " + loginRequest.password);
        return userRepository.findByUsernameAndPassword(loginRequest.username, loginRequest.password)
                .map(user -> ResponseEntity.ok("OK"))
                .orElse(ResponseEntity.badRequest().body("Invalid username or password"));
    }

    public record LoginRequest(String username, String password) {
    }


}
