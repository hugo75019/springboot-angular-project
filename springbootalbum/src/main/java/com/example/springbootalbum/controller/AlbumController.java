package com.example.springbootalbum.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootalbum.exception.RessourceNotFoundException;
import com.example.springbootalbum.model.Album;
import com.example.springbootalbum.repository.AlbumRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1") //url standard
public class AlbumController {
	
	@Autowired
	private AlbumRepository albumRepository;
	
	@GetMapping("/albums") //recuperer tout les albums de la collections.
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Album> getAllAlbums(){
		return albumRepository.findAll();
	}
	
	//recuperer un album selon son id
	@GetMapping("/albums/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Album> getAlbumbyId(@PathVariable Long id) {
		Album album = albumRepository.findById(id).orElseThrow(()-> new RessourceNotFoundException("identifiant inconnu"));
		return ResponseEntity.ok(album);
	}
		
	//ajouter un album à la collection.
	@PostMapping("/albums")
	@CrossOrigin(origins = "http://localhost:4200")
	public Album addAlbum(@RequestBody Album album) {
		return albumRepository.save(album);
	}
	
	//modifier un album.
	@PutMapping("/albums/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Album> editAlbum(@PathVariable Long id, @RequestBody Album albuminfos){
		Album album = albumRepository.findById(id).orElseThrow(()-> new RessourceNotFoundException("identifiant inconnu"));
		album.setArtist(albuminfos.getArtist());
		album.setTitle(albuminfos.getTitle());
		album.setGenre(albuminfos.getGenre());
		album.setType(albuminfos.getType());
		Album editedAlbum = albumRepository.save(album);
		return ResponseEntity.ok(editedAlbum);
	}
}
