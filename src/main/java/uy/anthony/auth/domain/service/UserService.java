package uy.anthony.auth.domain.service;

import uy.anthony.auth.domain.model.User;


public interface UserService {

    User auth(String username, String password) throws Exception;

    User register(User user) throws Exception;

}
