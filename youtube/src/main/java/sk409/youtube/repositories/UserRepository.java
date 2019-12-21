package sk409.youtube.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sk409.youtube.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}