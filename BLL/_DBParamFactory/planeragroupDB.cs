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
using static PlaneraAdmin._Models.PlaneraGroupViewModel;

namespace BAL.Repositories
{

    public class planeragroupDB
    {
        public static ServiceBLL repo;
        public static DataTable _dt;
        public static DataSet _ds;
        public planeragroupDB()
        {
            repo = new ServiceBLL();
            _dt = new DataTable();
            _ds = new DataSet();
        }
        public List<NewsEventBLL> GetAll()
        {
            try
            {
                var lst = new List<NewsEventBLL>();
                SqlParameter[] p = new SqlParameter[0];


                _dt = (new DBHelper().GetTableFromSP)("sp_GetNewsEvent", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        //lst = _dt.DataTableToList<NewsEventBLL>();
                        lst = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<NewsEventBLL>>();
                        //lst= JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToArray<CategoryBLL>()
                        //lst = _dt.ToList<CategoryBLL>().ToList();
                    }
                }

                return lst;
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
                var lst = new List<ServiceBLL>();
                SqlParameter[] p = new SqlParameter[0];
               

                _dt = (new DBHelper().GetTableFromSP)("sp_GetServicePlnGrp", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        //lst = _dt.DataTableToList<ServiceBLL>();
                        lst = JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<List<ServiceBLL>>();
                    }
                }
           
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public NewsEventBLL Get(int id)
        {
            try
            {
                var _obj = new NewsEventBLL();
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", id);
                

                _dt = (new DBHelper().GetTableFromSP)("sp_GetNewseventID_Admin", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        _obj = _dt.DataTableToList<NewsEventBLL>().FirstOrDefault();
                    }
                }

                return _obj;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
       
        public int Insert(NewsEventBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[9];

                p[0] = new SqlParameter("@Name", data.Name);
                p[1] = new SqlParameter("@ArabicName", data.ArabicName);
                p[2] = new SqlParameter("@PageName", data.Pagename);
                p[3] = new SqlParameter("@Description", data.Description);
                p[4] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[5] = new SqlParameter("@Image", data.Image);
                p[6] = new SqlParameter("@StatusID", data.StatusID);
                p[7] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[8] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertNewsEvent_Admin", p);
              
                return rtn;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int InsertService(ServiceBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[7];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[4] = new SqlParameter("@StatusID", data.StatusID);
                p[5] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[6] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertService_Admin", p);

                return rtn;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int Update(NewsEventBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[11];

                p[0] = new SqlParameter("@Name", data.Name);
                p[1] = new SqlParameter("@ArabicName", data.ArabicName);
                p[2] = new SqlParameter("@PageName", data.Pagename);
                p[3] = new SqlParameter("@Description", data.Description);
                p[4] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[5] = new SqlParameter("@Image", data.Image);
                p[6] = new SqlParameter("@StatusID", data.StatusID);
                p[7] = new SqlParameter("@CompanyID", data.CompanyID);
                p[8] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[9] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                p[10] = new SqlParameter("@NewsEventID", data.NewsEventID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateNewsEvent_Admin", p);

                return rtn;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public int UpdateService(ServiceBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[9];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[6] = new SqlParameter("@StatusID", data.StatusID);
                p[7] = new SqlParameter("@CompanyID", data.CompanyID);
                p[8] = new SqlParameter("@ServiceID", data.ServiceID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateService_Admin", p);

                return rtn;
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
                int _obj = 0;
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", data.NewsEventID);
                

                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteNewsEvent_Admin", p);

                return _obj;
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
                int _obj = 0;
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", data.ServiceID);
                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteService_Admin", p);

                return _obj;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
