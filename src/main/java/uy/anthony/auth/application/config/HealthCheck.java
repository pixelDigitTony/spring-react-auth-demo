package uy.anthony.auth.application.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;
import uy.anthony.auth.domain.model.User;
import uy.anthony.auth.domain.repo.UserRepository;

import java.util.List;

@Component("authHealthCheck")
public class HealthCheck implements HealthIndicator {
    @Autowired
    UserRepository userRepository;

    @Override
    public Health health() {
        List<User> users = userRepository.findAll();
        if(users.isEmpty()){
            return Health.down().withDetail("Can't fetch Users: ", users).build();
        }
        return Health.up().build();
    }
}
