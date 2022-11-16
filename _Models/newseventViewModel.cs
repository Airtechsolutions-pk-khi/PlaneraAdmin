using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlaneraAdmin._Models
{
    public class newseventViewModel
    {
    }

    public class NewsEventBLL
    {
        public int NewsEventID { get; set; }
        public string Name { get; set; }
        public string Pagename { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        
        public int StatusID { get; set; }
     
    }

}
