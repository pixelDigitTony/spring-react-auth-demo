package uy.anthony.auth.domain.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import uy.anthony.auth.DemoBase;
import uy.anthony.auth.domain.model.User;
import uy.anthony.auth.domain.repo.UserRepository;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest extends DemoBase {

    @Autowired
    private UserService userService;

    @Autowired
    UserRepository userRepository;

    private User user;

    @BeforeEach
    void setUp() {
        user = new User();
    }

    @Test
    @Transactional
    void register() throws Exception {
        user.setUsername("test");
        user.setPassword("test");
        user.setIsEnabled(true);
        user.setIsAccountNonExpired(true);
        user.setIsAccountNonLocked(true);
        user.setIsCredentialsNonExpired(true);
        userService.register(user);
        Optional<User> findResult = userRepository.findByUsername(user.getUsername());
        assertTrue(findResult.isPresent());
        assertEquals(user.getUsername(), findResult.get().getUsername());
    }


}