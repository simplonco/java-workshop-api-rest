package co.simplon.avent.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.simplon.avent.model.Link;

@Repository
public interface LinkRepository extends JpaRepository<Link, Long>{ 

	List<Link> findByDate(LocalDate date);

}
