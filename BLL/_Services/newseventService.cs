using BAL.Repositories;
using PlaneraAdmin._Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace PlaneraAdmin.BLL._Services
{
    public class newseventService : baseService
    {
        newseventDB _service;
        public newseventService()
        {
            _service = new newseventDB();
        }

        public List<NewsEventBLL> GetAll()
        {
            try
            {
                return _service.GetAll();
            }
            catch (Exception ex)
            {
                return new List<NewsEventBLL>();
            }
        }
        public List<CategoryBLL> GetAllActive(int brandID)
        {
            try
            {
                return _service.GetAllActive(brandID);
            }
            catch (Exception ex)
            {
                return new List<CategoryBLL>();
            }
        }

        public NewsEventBLL Get(int id)
        {
            try
            {
                return _service.Get(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public int Insert(NewsEventBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.Image = UploadImage(data.Image, "NewsEvent", _env);
                 
                var result = _service.Insert(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public int Update(NewsEventBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.Image = UploadImage(data.Image, "NewsEvent", _env);
                
                var result = _service.Update(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public int Delete(NewsEventBLL data)
        {
            try
            {
                
                var result = _service.Delete(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

    }
}
