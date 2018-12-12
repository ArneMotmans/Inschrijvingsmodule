package testBackendReader;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Created by 11502064 on 15/11/2018.
 */

@CrossOrigin
@Repository
public interface HuisdokterRepository extends JpaRepository<Huisdokter, String> {
}
