package uy.anthony.auth.domain.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import uy.anthony.auth.DemoBase;
import uy.anthony.auth.domain.model.User;

import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest extends DemoBase {

    @Autowired
    private UserService userService;

    @Test
    void testAuth() throws Exception {
        User user = userService.auth("admin", "123456");
        assertNotNull(user);
        assertEquals("admin", user.getUsername());
    }
}