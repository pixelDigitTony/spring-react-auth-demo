package uy.anthony.auth.domain.service;

import uy.anthony.auth.domain.model.User;


public interface UserService {

    void register(User user) throws Exception;

}
