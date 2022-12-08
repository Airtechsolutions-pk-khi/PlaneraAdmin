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
using static PlaneraAdmin._Models.ServiceViewModel;
using static PlaneraAdmin._Models.HomeViewModel;

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
        public List<ServiceBLL> GetService()
        {
            try
            {
                var lst = new List<ServiceBLL>();
                SqlParameter[] p = new SqlParameter[0];


                _dt = (new DBHelper().GetTableFromSP)("sp_GetService_HrCnt", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        lst = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<ServiceBLL>>();
                    }
                }

                return lst;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public ServiceBLL GetID(int id)
        {
            try
            {
                var _obj = new ServiceBLL();
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", id);
                _dt = (new DBHelper().GetTableFromSP)("sp_GetServiceID_HrCnt", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        _obj = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<ServiceBLL>>().FirstOrDefault();
                        //_obj = _dt.DataTableToList<ServiceBLL>().FirstOrDefault();
                    }
                }
                return _obj;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public int InsertService(ServiceBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[8];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[4] = new SqlParameter("@ImagePath", data.ImagePath);
                p[5] = new SqlParameter("@StatusID", data.StatusID);
                p[6] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[7] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertService_HrCnt", p);

                return rtn;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int UpdateService(ServiceBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[10];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[4] = new SqlParameter("@ImagePath", data.ImagePath);
                p[5] = new SqlParameter("@StatusID", data.StatusID);
                p[6] = new SqlParameter("@CompanyID", data.CompanyID);
                p[7] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[8] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                p[9] = new SqlParameter("@ServiceID", data.ServiceID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateService_HrCnt", p);

                return rtn;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int DeleteService(ServiceBLL data)
        {
            try
            {
                int _obj = 0;
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", data.ServiceID);
                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteService_HrCnt", p);

                return _obj;
            }
            catch (Exception)
            {
                return 0;
            }
        }
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
            catch (Exception)
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
                        _obj = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<GalleryImageBLL>>().FirstOrDefault();
                        //_obj = _dt.DataTableToList<GalleryImageBLL>().FirstOrDefault();
                    }
                }
                return _obj;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public int Insert(GalleryImageBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[7];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@ImagePath", data.ImagePath);
                p[3] = new SqlParameter("@StatusID", data.StatusID);
                p[4] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[5] = new SqlParameter("@Category", data.Category);
                p[6] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertGallery_HrCnt", p);

                return rtn;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int Update(GalleryImageBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[9];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@ImagePath", data.ImagePath);
                p[3] = new SqlParameter("@StatusID", data.StatusID);
                p[4] = new SqlParameter("@CompanyID", data.CompanyID);
                p[5] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[6] = new SqlParameter("@Category", data.Category);
                p[7] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                p[8] = new SqlParameter("@GalleryID", data.GalleryID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateGallery_HrCnt", p);

                return rtn;
            }
            catch (Exception)
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
            catch (Exception)
            {
                return 0;
            }
        }
        //Harmanocontract Gallery
        //HomePage
        public List<HomePageBLL> GetHome()
        {
            try
            {
                var lst = new List<HomePageBLL>();
                SqlParameter[] p = new SqlParameter[0];

                _dt = (new DBHelper().GetTableFromSP)("sp_GetHomeImage_HrCnt", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        lst = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<HomePageBLL>>();
                    }
                }
                return lst;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public HomePageBLL GetHomeID(int id)
        {
            try
            {
                var _obj = new HomePageBLL();
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", id);
                _dt = (new DBHelper().GetTableFromSP)("sp_GetHomeImageID_HrCnt", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        _obj = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<HomePageBLL>>().FirstOrDefault();
                        //_obj = _dt.DataTableToList<HomePageBLL>().FirstOrDefault();
                    }
                }
                return _obj;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public int InsertHome(HomePageBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[8];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[4] = new SqlParameter("@ImagePath", data.ImagePath);
                p[5] = new SqlParameter("@StatusID", data.StatusID);
                p[6] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[7] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertHome_HrCnt", p);

                return rtn;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int UpdateHome(HomePageBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[10];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[4] = new SqlParameter("@ImagePath", data.ImagePath);
                p[5] = new SqlParameter("@StatusID", data.StatusID);
                p[6] = new SqlParameter("@CompanyID", data.CompanyID);
                p[7] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[8] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                p[9] = new SqlParameter("@HomePageID", data.HomePageID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateHome_HrCnt", p);

                return rtn;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int DeleteHome(HomePageBLL data)
        {
            try
            {
                int _obj = 0;
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", data.HomePageID);
                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteHome_HrCnt", p);

                return _obj;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        //HomePage
    }
}