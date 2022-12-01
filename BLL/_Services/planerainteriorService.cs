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
    public class planerainteriorService : baseService
    {
        planerainteriorDB _service;
        public planerainteriorService()
        {
            _service = new planerainteriorDB();
        }
        //HarmanoRepair Service
        public List<GalleryImageBLL> GetGallery()
        {
            try
            {
                return _service.GetGallery();
            }
            catch (Exception ex)
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
            catch (Exception ex)
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
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int Insert(GalleryImageBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.ImagePath = UploadImage(data.ImagePath, "Gallery", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Insert(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int Update(GalleryImageBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.ImagePath = UploadImage(data.ImagePath, "Gallery", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Update(data);

                return result;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        //Service
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
        public ServiceBLL GetService(int id)
        {
            try
            {
                return _service.GetService(id);
            }
            catch (Exception ex)
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
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int InsertService(ServiceBLL data, IWebHostEnvironment _env)
        {
            try
            {
                data.ImagePath = UploadImage(data.ImagePath, "Service", _env);
                //data.IconImage = UploadImage(data.IconImage, "ServiceIcon", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Insert(data);

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
                data.ImagePath = UploadImage(data.ImagePath, "Service", _env);
                data.LastUpdatedDate = _UTCDateTime_SA();
                var result = _service.Update(data);

                return result;
            }
            catch (Exception ex)
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
            catch (Exception ex)
            {
                return new List<HomePageBLL>();
            }
        }
        public HomePageBLL GetHomeID(int id)
        {
            try
            {
                return _service.GetHomeID(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public int DeleteHome(HomePageBLL data)
        {
            try
            {

                var result = _service.DeleteHome(data);

                return result;
            }
            catch (Exception ex)
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
            catch (Exception ex)
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
            catch (Exception ex)
            {
                return 0;
            }
        }
        //HomePage
    }
}
