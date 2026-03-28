package org.isa.apijava.repository;

import org.isa.apijava.entity.Position;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PositionRepository extends JpaRepository<Position, Long> {
    List<Position> findByIdInAndIsActiveTrue(List<Long> ids);
    List<Position> findByIsActiveTrueOrderByCategoryAscNameAsc();
}