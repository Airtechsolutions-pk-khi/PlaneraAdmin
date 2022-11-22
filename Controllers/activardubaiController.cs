
using System.Collections.Generic;
using PlaneraAdmin._Models;
using PlaneraAdmin.BLL._Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using static PlaneraAdmin._Models.GalleryViewModel;

namespace PlaneraAdmin.Controllers
{
    [Route("api/[controller]")]
  
    public class ActivarDubaiController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        activardubaiService _service;
      
        public ActivarDubaiController(IWebHostEnvironment env)
        {
            _service = new activardubaiService();
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
    }
}
