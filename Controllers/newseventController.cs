
using System.Collections.Generic;
using PlaneraAdmin._Models;
using PlaneraAdmin.BLL._Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace PlaneraAdmin.Controllers
{
    [Route("api/[controller]")]
  
    public class newseventController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        newseventService _service;
      
        public newseventController(IWebHostEnvironment env)
        {
            _service = new newseventService();
            _env = env;
        }


        [HttpGet("all")]
        public List<NewsEventBLL> GetAll()
        {
            return _service.GetAll();
        }
        [HttpGet("allActive/{brandid}")]
        public List<CategoryBLL> GetAllActive(int brandid)
        {
            return _service.GetAllActive(brandid);
        }


        [HttpGet("{id}")]
        public NewsEventBLL Get(int id)
        {
            return _service.Get(id);
        }

        [HttpPost]
        [Route("insert")]
        public int Post([FromBody] NewsEventBLL obj)
        {
            return _service.Insert(obj, _env);
        }

        [HttpPost]
        [Route("update")]
        public int PostUpdate([FromBody] NewsEventBLL obj)
        {
            return _service.Update(obj, _env);
        }


        [HttpPost]
        [Route("delete")]
        public int PostDelete([FromBody] NewsEventBLL obj)
        {
            return _service.Delete(obj);
        }
    }
}
