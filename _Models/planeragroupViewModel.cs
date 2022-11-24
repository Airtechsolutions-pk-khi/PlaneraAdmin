using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlaneraAdmin._Models
{
    public class PlaneraGroupViewModel
    {
        public class NewsEventBLL
        {
            public int NewsEventID { get; set; }
            public string Name { get; set; }
            public string ArabicName { get; set; }
            public string Pagename { get; set; }
            public string ArabicPagename { get; set; }
            public string Description { get; set; }
            public string ArabicDescription { get; set; }
            public string Image { get; set; }
            public Nullable<int> StatusID { get; set; }
            public Nullable<int> DisplayOrder { get; set; }
            public Nullable<int> CompanyID { get; set; }
            public Nullable<DateTime> LastUpdatedDate { get; set; }
        }
    }
}

