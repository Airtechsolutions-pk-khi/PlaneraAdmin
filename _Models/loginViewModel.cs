using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlaneraAdmin._Models
{
    public class loginViewModel
    {
    }

    public class LoginBLL
    {
        public int LoginID { get; set; }
        public string UserName { get; set; }       
        public string Email { get; set; }
        public string Password { get; set; }
       
        public Nullable<int> StatusID { get; set; }
       
    }

}
