
using System.Collections.Generic;
using PlaneraAdmin._Models;
using PlaneraAdmin.BLL._Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using static PlaneraAdmin._Models.GalleryViewModel;
using static PlaneraAdmin._Models.ServiceViewModel;
using static PlaneraAdmin._Models.HomeViewModel;

namespace PlaneraAdmin.Controllers
{
    [Route("api/[controller]")]
  
    public class HarmanoContractController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        harmanocontractService _service;
      
        public HarmanoContractController(IWebHostEnvironment env)
        {
            _service = new harmanocontractService();
            _env = env;
        }
        //Gallery
        [HttpGet("all")]
        public List<GalleryImageBLL> GetGallery()
        {
            return _service.GetGallery();
        }
        [HttpGet("{id}")]
        public GalleryImageBLL Get(int id)
        {
            return _service.Get(id);
        }
        [HttpPost]
        [Route("insert")]
        public int PostGallery([FromBody] GalleryImageBLL obj)
        {
            return _service.Insert(obj, _env);
        }
        [HttpPost]
        [Route("update")]
        public int UpdateGallery([FromBody] GalleryImageBLL obj)
        {
            return _service.Update(obj, _env);
        }
        [HttpPost]
        [Route("delete")]
        public int DeleteGallery([FromBody] GalleryImageBLL obj)
        {
            return _service.Delete(obj);
        }
        //Gallery
        //Service
        [HttpGet("serviceall")]
        public List<ServiceBLL> GetService()
        {
            return _service.GetService();
        }
        [HttpGet("{id}")]
        public ServiceBLL GetID(int id)
        {
            return _service.GetID(id);
        }
        [HttpPost]
        [Route("insertservice")]
        public int PostGallery([FromBody] ServiceBLL obj)
        {
            return _service.InsertService(obj, _env);
        }
        [HttpPost]
        [Route("updateservice")]
        public int UpdateGallery([FromBody] ServiceBLL obj)
        {
            return _service.UpdateService(obj, _env);
        }
        [HttpPost]
        [Route("deleteservice")]
        public int DeleteService([FromBody] ServiceBLL obj)
        {
            return _service.DeleteService(obj);
        }
        //Service
        //HomePage
        [HttpGet("homeall")]
        public List<HomePageBLL> GetHome()
        {
            return _service.GetHome();
        }
        [HttpGet("{gethomeid}")]
        public HomePageBLL GetHomeID(int id)
        {
            return _service.GetHomeID(id);
        }
        [HttpPost]
        [Route("inserthome")]
        public int PostHome([FromBody] HomePageBLL obj)
        {
            return _service.InsertHome(obj, _env);
        }
        [HttpPost]
        [Route("updatehome")]
        public int UpdateHome([FromBody] HomePageBLL obj)
        {
            return _service.UpdateHome(obj, _env);
        }
        [HttpPost]
        [Route("deletehome")]
        public int DeleteHome([FromBody] HomePageBLL obj)
        {
            return _service.DeleteHome(obj);
        }
        //HomePage
    }
}
