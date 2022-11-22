using PlaneraAdmin._Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using WebAPICode.Helpers;
using static PlaneraAdmin._Models.GalleryViewModel;

namespace BAL.Repositories
{

    public class harmanocontractDB
    {
        public static GalleryImageBLL repo;
        public static DataTable _dt;
        public static DataSet _ds;
        public harmanocontractDB()
        {
            repo = new GalleryImageBLL();
            _dt = new DataTable();
            _ds = new DataSet();
        }
        ////Harmanocontract Service
        //public List<ServiceBLL> GetService()
        //{
        //    try
        //    {
        //        var lst = new List<ServiceBLL>();
        //        SqlParameter[] p = new SqlParameter[0];
               

        //        _dt = (new DBHelper().GetTableFromSP)("sp_GetServicePlnGrp", p);
        //        if (_dt != null)
        //        {
        //            if (_dt.Rows.Count > 0)
        //            {
        //                lst = _dt.DataTableToList<ServiceBLL>();
                       
        //                //lst= JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToArray<CategoryBLL>()
        //                //lst = _dt.ToList<CategoryBLL>().ToList();
        //            }
        //        }
           
        //        return lst;
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //    }
        //}
        //public int InsertService(ServiceBLL data)
        //{
        //    try
        //    {
        //        int rtn = 0;
        //        SqlParameter[] p = new SqlParameter[9];

        //        p[0] = new SqlParameter("@Title", data.Title);
        //        p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
        //        p[2] = new SqlParameter("@Description", data.Description);
        //        p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
        //        p[4] = new SqlParameter("@ImagePath", data.ImagePath);
        //        p[5] = new SqlParameter("@ImageIcon", data.ImageIcon);
        //        p[6] = new SqlParameter("@StatusID", data.StatusID);
        //        p[7] = new SqlParameter("@CompanyID", data.CompanyID);
        //        p[8] = new SqlParameter("@ServiceID", data.ServiceID);

        //        rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertService_Admin", p);

        //        return rtn;
        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //    }
        //}
        //public int UpdateService(ServiceBLL data)
        //{
        //    try
        //    {
        //        int rtn = 0;
        //        SqlParameter[] p = new SqlParameter[9];

        //        p[0] = new SqlParameter("@Title", data.Title);
        //        p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
        //        p[2] = new SqlParameter("@Description", data.Description);
        //        p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
        //        p[4] = new SqlParameter("@ImagePath", data.ImagePath);
        //        p[5] = new SqlParameter("@ImageIcon", data.ImageIcon);
        //        p[6] = new SqlParameter("@StatusID", data.StatusID);
        //        p[7] = new SqlParameter("@CompanyID", data.CompanyID);
        //        p[8] = new SqlParameter("@ServiceID", data.ServiceID);

        //        rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateService_Admin", p);

        //        return rtn;
        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //    }
        //}
        //public int DeleteService(ServiceBLL data)
        //{
        //    try
        //    {
        //        int _obj = 0;
        //        SqlParameter[] p = new SqlParameter[1];
        //        p[0] = new SqlParameter("@id", data.ServiceID);
        //        _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteService_Admin", p);

        //        return _obj;
        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //    }
        //}
        ////Harmanocontract Service
        //Harmanocontract Gallery
        public List<GalleryImageBLL> GetGallery()
        {
            try
            {
                var lst = new List<GalleryImageBLL>();
                SqlParameter[] p = new SqlParameter[0];


                _dt = (new DBHelper().GetTableFromSP)("sp_GetGallery_HrCnt", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        lst = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<GalleryImageBLL>>();
                    }
                }
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public GalleryImageBLL Get(int id)
        {
            try
            {
                var _obj = new GalleryImageBLL();
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", id);
                _dt = (new DBHelper().GetTableFromSP)("sp_GetGalleryID_HrCnt", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        _obj = _dt.DataTableToList<GalleryImageBLL>().FirstOrDefault();
                    }
                }
                return _obj;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public int Insert(GalleryImageBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[6];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@ImagePath", data.ImagePath);
                p[3] = new SqlParameter("@StatusID", data.StatusID);
                p[4] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[5] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertGallery_HrCnt", p);

                return rtn;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int Update(GalleryImageBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[8];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@ImagePath", data.ImagePath);
                p[3] = new SqlParameter("@StatusID", data.StatusID);
                p[4] = new SqlParameter("@CompanyID", data.CompanyID);
                p[5] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[6] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                p[7] = new SqlParameter("@GalleryID", data.GalleryID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateGallery_HrCnt", p);

                return rtn;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int Delete(GalleryImageBLL data)
        {
            try
            {
                int _obj = 0;
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", data.GalleryID);
                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteGallery_HrCnt", p);

                return _obj;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        //Harmanocontract Gallery
    }
}