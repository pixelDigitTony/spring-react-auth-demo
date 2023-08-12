package uy.anthony.auth.domain.service;

import org.springframework.stereotype.Service;
import uy.anthony.auth.domain.model.User;


public interface UserService {

    User auth(String username, String password) throws Exception;

}
