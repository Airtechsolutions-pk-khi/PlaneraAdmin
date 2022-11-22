using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlaneraAdmin._Models
{
    public class HarmanoRepairViewModel
    {
        public class ServiceBLL
        {
            public int ServiceID { get; set; }
            public int CompanyID { get; set; }
            public string Title { get; set; }
            public string ArabicTitle { get; set; }
            public string Description { get; set; }
            public string ArabicDescription { get; set; }
            public int StatusID { get; set; }
            public List<ServiceImagesBLL> ImagePath { get; set; }
            public List<ServiceImagesBLL> ImageIcon { get; set; }
        }
        public class ServiceImagesBLL
        {
            public int ServiceImageID { get; set; }
            public int ServiceID { get; set; }
            public string ImageIcon { get; set; }
            public string ImagePath { get; set; }
            public int StatusID { get; set; }
        }
        public class GalleryGroupBLL
        {
            public int GroupID { get; set; }
            public int CompanyID { get; set; }
            public string Name { get; set; }
            public string ArabicName { get; set; }
            public int StatusID { get; set; }
        }
        public class GalleryImageBLL
        {
            public int GroupID { get; set; }
            public int GalleryID { get; set; }
            public int CompanyID { get; set; }
            public string Title { get; set; }
            public string ArabicTitle { get; set; }
            public string ImagePath { get; set; }
            public Nullable<int> StatusID { get; set; }
            public Nullable<DateTime> LastUpdatedDate { get; set; }
        }
    }
}

