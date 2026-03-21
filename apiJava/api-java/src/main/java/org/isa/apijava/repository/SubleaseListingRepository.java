package org.isa.apijava.repository;

import org.isa.apijava.entity.SubleaseListing;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SubleaseListingRepository extends JpaRepository<SubleaseListing, UUID> {
}
