package RestAPI.Controller;

import RestAPI.DAO.UserRepository;
import RestAPI.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    @PostMapping("/login")
    public User login(@RequestParam(required = true,defaultValue ="",name="username")String username,
                      @RequestParam(required = true,defaultValue = "",name = "password")String password) throws Exception{
        return null;
    }
    @PostMapping("/signup")
    public User signup(@RequestBody User user)
    {
        System.err.println("you're siging up ! ....");
        System.err.println(user);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(new User(user.getUsername(),user.getPassword()));
    }
    @GetMapping("/all")
    public List<User> getAll(){
        return userRepository.findAll();
    }
}
