
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
  
    public class jsonreadwriteController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        jsonreadwriteService _service;
      
        public jsonreadwriteController(IWebHostEnvironment env)
        {
            _service = new jsonreadwriteService();
            _env = env;
        }
        //Gallery
        [HttpGet("all")]
        public List<GalleryImageBLL> GetGallery()
        {
            return _service.GetGallery();
        }
        [HttpGet("gallery/{id}")]
        public GalleryImageBLL Get(int id)
        {
            return _service.Get(id);
        }
        [Route("delete")]
        public int PostDelete([FromBody] GalleryImageBLL obj)
        {
            return _service.Delete(obj);
        }
        [HttpPost]
        [Route("insertjson")]
        public int Post([FromBody] JsonreadwriteBLL obj)
        {
            return _service.Insert(obj);
        }
        [HttpPost]
        [Route("updatejson")]
        public int PostUpdate([FromBody] JsonreadwriteBLL obj)
        {
            return _service.Update(obj);
        }
        [HttpGet("json/{id}")]
        public JsonreadwriteBLL GetKey(int key = 1)
        {
            return _service.GetByKey(key);
        }
        //Gallery
        //Service
        [HttpGet("serviceall")]
        public List<ServiceBLL> GetService()
        {
            return _service.GetService();
        }
        [HttpGet("service/{id}")]
        public ServiceBLL GetService(int id)
        {
            return _service.GetService(id);
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
