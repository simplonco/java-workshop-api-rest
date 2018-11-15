package co.simplon.avent.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.avent.model.Link;
import co.simplon.avent.repository.LinkRepository;
import co.simplon.avent.repository.UserRepository;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/link")
public class LinkController {

	private LinkRepository linkRepo;
	private UserRepository userRepo;
	
	public LinkController(LinkRepository linkRepo, UserRepository userRepo) {
		this.linkRepo = linkRepo;
		this.userRepo = userRepo;
	}

	@GetMapping
	public List<Link> getDailyLinks() {
		// Filtre par date du jour
		LocalDate today = LocalDate.now();
		return linkRepo.findByDate(today);
	}
	
	@PostMapping
	public Link createLink(@RequestBody Link link) {
		// Récupération de la date du jour
		LocalDate today = LocalDate.now();
		
		// Mise à jour du lien avec la date
		link.setDate(today);

		// Sauvegarde le user du lien et mise à jour du lien
		link.setUser(userRepo.save(link.getUser()));
		
		// Sauvegarde du lien
		return linkRepo.save(link);
	}
}
