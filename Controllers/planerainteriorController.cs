
using System.Collections.Generic;
using PlaneraAdmin._Models;
using PlaneraAdmin.BLL._Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using static PlaneraAdmin._Models.GalleryViewModel;
using static PlaneraAdmin._Models.PlaneraGroupViewModel;

namespace PlaneraAdmin.Controllers
{
    [Route("api/[controller]")]
  
    public class PlaneraInteriorController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        planerainteriorService _service;
      
        public PlaneraInteriorController(IWebHostEnvironment env)
        {
            _service = new planerainteriorService();
            _env = env;
        }
        //Service
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
        [Route("delete")]
        public int PostDelete([FromBody] GalleryImageBLL obj)
        {
            return _service.Delete(obj);
        }
        [HttpPost]
        [Route("insert")]
        public int Post([FromBody] GalleryImageBLL obj)
        {
            return _service.Insert(obj, _env);
        }
        [HttpPost]
        [Route("updatenews")]
        public int PostUpdate([FromBody] GalleryImageBLL obj)
        {
            return _service.Update(obj, _env);
        }
    }
}
