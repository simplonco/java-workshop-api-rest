package co.simplon.avent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.simplon.avent.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
