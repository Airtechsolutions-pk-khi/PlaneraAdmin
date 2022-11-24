
using System.Collections.Generic;
using PlaneraAdmin._Models;
using PlaneraAdmin.BLL._Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using static PlaneraAdmin._Models.PlaneraGroupViewModel;
using static PlaneraAdmin._Models.ServiceViewModel;

namespace PlaneraAdmin.Controllers
{
    [Route("api/[controller]")]
  
    public class PlaneraGroupController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        planeragroupService _service;
      
        public PlaneraGroupController(IWebHostEnvironment env)
        {
            _service = new planeragroupService();
            _env = env;
        }
        //NewsAlert
        [HttpGet("all")]
        public List<NewsEventBLL> GetAll()
        {
            return _service.GetAll();
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
        [Route("updatenews")]
        public int PostUpdate([FromBody] NewsEventBLL obj)
        {
            return _service.Update(obj, _env);
        }
        [HttpPost]
        [Route("deletenews")]
        public int PostDelete([FromBody] NewsEventBLL obj)
        {
            return _service.Delete(obj);
        }
        //NewsAlert
        //Services
        [HttpGet("serviceall")]
        public List<ServiceBLL> GetService()
        {
            return _service.GetService();
        }
        [HttpGet("{getid}")]
        public ServiceBLL GetId(int id)
        {
            return _service.GetService(id);
        }
        [HttpPost]
        [Route("insertservice")]
        public int PostService([FromBody] ServiceBLL obj)
        {
            return _service.InsertService(obj, _env);
        }
        [HttpPost]
        [Route("updateservice")]
        public int UpdateService([FromBody] ServiceBLL obj)
        {
            return _service.UpdateService(obj, _env);
        }
        [HttpPost]
        [Route("deleteservice")]
        public int DeleteService([FromBody] ServiceBLL obj)
        {
            return _service.DeleteService(obj);
        }
        //Services


    }
}
