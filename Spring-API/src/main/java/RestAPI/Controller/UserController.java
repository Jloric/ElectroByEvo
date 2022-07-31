package RestAPI.Controller;

import RestAPI.DAO.UserRepository;
import RestAPI.DO.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @PostMapping("/login")
    public UserModel login(@RequestParam(required = true,defaultValue ="",name="username")String username,
                           @RequestParam(required = true,defaultValue = "",name = "password")String password){
        return null;
    }
    @PostMapping("/signup")
    public UserModel signup(UserModel user)
    {
        System.err.println("you're siging up ! ....");
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(new UserModel(user.getUsername(),user.getPassword(),user.getEmail()));
    }
}
