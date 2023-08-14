package uy.anthony.auth.Impl.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uy.anthony.auth.domain.model.User;
import uy.anthony.auth.domain.repo.UserRepository;
import uy.anthony.auth.domain.service.UserService;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserRepository userRepository;

    @Override
    public User auth(String username, String password) throws Exception {
        Optional<User> user = userRepository.findByUsernameAndPassword(username, password);
        if (user.isEmpty()) {
            throw new Exception("User not found");
        }
        return user.get();
    }

    @Override
    public User register(User user) throws Exception {
        Optional<User> userOptional = userRepository.findByUsername(user.getUsername());
        if (userOptional.isPresent()) {
            throw new Exception("User already exists");
        }
        userRepository.save(user);
        Optional<User> registeredUser = userRepository.findByUsername(user.getUsername());
        if (registeredUser.isEmpty()) {
            throw new Exception("User not registered");
        }
        return registeredUser.get();
    }
}
