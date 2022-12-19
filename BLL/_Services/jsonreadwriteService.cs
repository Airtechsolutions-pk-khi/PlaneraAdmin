using BAL.Repositories;
using PlaneraAdmin._Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using static PlaneraAdmin._Models.GalleryViewModel;
using static PlaneraAdmin._Models.ServiceViewModel;
using static PlaneraAdmin._Models.HomeViewModel;

namespace PlaneraAdmin.BLL._Services
{
    public class jsonreadwriteService : baseService
    {
        jsonreadwriteDB _service;
        public jsonreadwriteService()
        {
            _service = new jsonreadwriteDB();
        }
        //HarmanoRepair Service
        public List<GalleryImageBLL> GetGallery()
        {
            try
            {
                return _service.GetGallery();
            }
            catch (Exception)
            {
                return new List<GalleryImageBLL>();
            }
        }
        public GalleryImageBLL Get(int id)
        {
            try
            {
                return _service.Get(id);
            }
            catch (Exception)
            {
                return null;
            }
        }
        public int Delete(GalleryImageBLL data)
        {
            try
            {

                var result = _service.Delete(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int Insert(JsonreadwriteBLL data)
        {
            try
            {
                
                var result = _service.Insert(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int Update(JsonreadwriteBLL data)
        {
            try
            {                
                var result = _service.Update(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public JsonreadwriteBLL GetByKey(string key)
        {
            try
            {
                return _service.GetByKey(key);
            }
            catch (Exception)
            {
                return null;
            }
        }
        //Service
        public List<ServiceBLL> GetService()
        {
            try
            {
                return _service.GetService();
            }
            catch (Exception)
            {
                return new List<ServiceBLL>();
            }
        }
        public ServiceBLL GetService(int id)
        {
            try
            {
                return _service.GetService(id);
            }
            catch (Exception)
            {
                return null;
            }
        }
        public int DeleteService(ServiceBLL data)
        {
            try
            {

                var result = _service.DeleteService(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int InsertService(ServiceBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.ImagePath = UploadImage(data.ImagePath, "Service", _env);
                data.IconImage = UploadImage(data.IconImage, "Service", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Insert(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int UpdateService(ServiceBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.ImagePath = UploadImage(data.ImagePath, "Service", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Update(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        //Service
        //HomePage
        public List<HomePageBLL> GetHome()
        {
            try
            {
                return _service.GetHome();
            }
            catch (Exception)
            {
                return new List<HomePageBLL>();
            }
        }
       
        public int DeleteHome(HomePageBLL data)
        {
            try
            {

                var result = _service.DeleteHome(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int InsertHome(HomePageBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.ImagePath = UploadImage(data.ImagePath, "HomePage", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.InsertHome(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int UpdateHome(HomePageBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.ImagePath = UploadImage(data.ImagePath, "Service", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.UpdateHome(data);

                return result;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        //HomePage
    }
}
