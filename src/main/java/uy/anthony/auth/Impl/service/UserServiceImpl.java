package uy.anthony.auth.Impl.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import uy.anthony.auth.domain.model.User;
import uy.anthony.auth.domain.repo.UserRepository;
import uy.anthony.auth.domain.service.UserService;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void register(User user) throws Exception {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Optional<User> userOptional = userRepository.findByUsername(user.getUsername());
        user.setIsAccountNonExpired(true);
        user.setIsAccountNonLocked(true);
        user.setIsCredentialsNonExpired(true);
        user.setIsEnabled(true);
        if (userOptional.isPresent()) {
            throw new Exception("User already exists");
        }
        userRepository.save(user);
        Optional<User> registeredUser = userRepository.findByUsername(user.getUsername());
        if (registeredUser.isEmpty()) {
            throw new Exception("User not registered");
        }
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
