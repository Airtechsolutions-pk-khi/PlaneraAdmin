using BAL.Repositories;
using PlaneraAdmin._Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using static PlaneraAdmin._Models.GalleryViewModel ;
using static PlaneraAdmin._Models.PlaneraGroupViewModel;

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
    }
}
