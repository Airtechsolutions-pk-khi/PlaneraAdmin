using BAL.Repositories;
using PlaneraAdmin._Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using static PlaneraAdmin._Models.PlaneraGroupViewModel;

namespace PlaneraAdmin.BLL._Services
{
    public class planeragroupService :baseService
    {
        planeragroupDB _service;
        public planeragroupService()
        {
            _service = new planeragroupDB();
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
        public List<ServiceBLL> GetService()
        {
            try
            {
                return _service.GetService();
            }
            catch (Exception ex)
            {
                return new List<ServiceBLL>();
            }
        }
        public int Insert(NewsEventBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.Image = UploadImage(data.Image, "NewsAlert", _env); 
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Insert(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int InsertService(ServiceBLL data, IWebHostEnvironment _env)
        {
            try
            {
                //data.ImagePath = UploadImage(data.ImagePath, "Service", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.InsertService(data);

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
                data.Image = UploadImage(data.Image, "NewsAlert", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Update(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public int UpdateService(ServiceBLL data, IWebHostEnvironment _env)
        {
            try
            {
                //data.Image = UploadImage(data.Image, "NewsEvent", _env);

                var result = _service.UpdateService(data);

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
        public int DeleteService(ServiceBLL data)
        {
            try
            {

                var result = _service.DeleteService(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

    }
}
