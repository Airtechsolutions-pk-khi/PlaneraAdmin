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

    public class planerainteriorDB
    {
        public static GalleryImageBLL repo;
        public static DataTable _dt;
        public static DataSet _ds;
        public planerainteriorDB()
        {
            repo = new GalleryImageBLL();
            _dt = new DataTable();
            _ds = new DataSet();
        }
        public List<GalleryImageBLL> GetGallery()
        {
            try
            {
                var lst = new List<GalleryImageBLL>();
                SqlParameter[] p = new SqlParameter[0];
               

                _dt = (new DBHelper().GetTableFromSP)("sp_GetGalleryPlnInt", p);
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
                _dt = (new DBHelper().GetTableFromSP)("sp_GetGalleryID_PlnInt", p);
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
        public int Delete(GalleryImageBLL data)
        {
            try
            {
                int _obj = 0;
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", data.GalleryID);


                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteGallery_PlnInt", p);

                return _obj;
            }
            catch (Exception ex)
            {
                return 0;
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
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertGallery_PlnInt", p);

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

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateGallery_PlnInt", p);

                return rtn;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}