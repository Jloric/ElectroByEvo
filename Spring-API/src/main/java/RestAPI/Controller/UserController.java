package RestAPI.Controller;

import RestAPI.DAO.UserRepository;
import RestAPI.DO.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/login")
    public User login(@RequestParam(required = true,defaultValue ="",name="username")String username,
                      @RequestParam(required = true,defaultValue = "",name = "password")String password){
        return null;
    }
    @GetMapping("/signup")
    @Transactional(rollbackFor = Exception.class)
    public User signup(User user)
    {
        //user.setPassword(bcryptPasswordEncoder);
        return userRepository.save(new User(user.getUsername(),user.getPassword(),user.getEmail()));
    }
}
