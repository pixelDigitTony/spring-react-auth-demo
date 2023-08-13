package uy.anthony.auth.application.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uy.anthony.auth.domain.repo.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/login/auth")
    public ResponseEntity<?> auth(@RequestBody LoginRequest loginRequest) {
        return userRepository.findByUsernameAndPassword(loginRequest.username, loginRequest.password)
                .map(user -> ResponseEntity.ok().body(user))
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public record LoginRequest(String username, String password) {
    }


}
