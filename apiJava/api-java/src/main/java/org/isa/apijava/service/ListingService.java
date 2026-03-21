package org.isa.apijava.service;

import org.isa.apijava.entity.SubleaseListing;
import org.isa.apijava.repository.SubleaseListingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListingService {


    private final SubleaseListingRepository repo;

    public ListingService(SubleaseListingRepository repo){
        this.repo = repo;
    }

    public List<SubleaseListing> viewAll(){
        return repo.findAll();
    }

}
