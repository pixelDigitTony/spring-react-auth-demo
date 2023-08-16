package uy.anthony.auth.application.config;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import uy.anthony.auth.DemoBase;

class SecSecurityConfigTest extends DemoBase {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    void passwordEncoder() {
        String pass = passwordEncoder.encode("123456");
        System.out.println(pass);
    }
}