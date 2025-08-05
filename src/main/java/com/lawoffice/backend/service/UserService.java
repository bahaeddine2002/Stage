package com.lawoffice.backend.service;

import com.lawoffice.backend.entity.User;
import com.lawoffice.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        // Encode password before saving
        user.setMotDePasseHash(passwordEncoder.encode(user.getMotDePasseHash()));
        return userRepository.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setNom(updatedUser.getNom());
            user.setPrenom(updatedUser.getPrenom());
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setTelephone(updatedUser.getTelephone());

            // Encode password if changed
            if (!updatedUser.getMotDePasseHash().equals(user.getMotDePasseHash())) {
                user.setMotDePasseHash(passwordEncoder.encode(updatedUser.getMotDePasseHash()));
            }

            user.setEstActif(updatedUser.isEstActif());
            user.setDoitChangerMdp(updatedUser.isDoitChangerMdp());
            user.setRole(updatedUser.getRole());
            return userRepository.save(user);
        }).orElseGet(() -> {
            updatedUser.setId(id);
            updatedUser.setMotDePasseHash(passwordEncoder.encode(updatedUser.getMotDePasseHash()));
            return userRepository.save(updatedUser);
        });
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
