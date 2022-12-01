using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlaneraAdmin._Models
{
    public class GalleryViewModel
    {
        public class GalleryImageBLL
        {
            public int GalleryID { get; set; }
            public int CompanyID { get; set; }
            public string Title { get; set; }
            public string ArabicTitle { get; set; }
            public string ImagePath { get; set; }
            public int DisplayOrder { get; set; }
            public string Category { get; set; }
            public Nullable<int> StatusID { get; set; }
            public Nullable<DateTime> LastUpdatedDate { get; set; }
        }
    }
}

