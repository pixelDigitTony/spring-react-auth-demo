package uy.anthony.auth.Impl.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import uy.anthony.auth.domain.model.User;
import uy.anthony.auth.domain.repo.UserRepository;
import uy.anthony.auth.domain.service.UserService;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    public UserRepository userRepository;

    @Override
    public User auth(String username, String password) throws Exception {
        return (User) loadUserByUsername(username);
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

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("User not found");
        }
        user.get().setIsEnabled(true);
        user.get().setIsAccountNonExpired(true);
        user.get().setIsAccountNonLocked(true);
        user.get().setIsCredentialsNonExpired(true);
        return user.get();
    }
}
