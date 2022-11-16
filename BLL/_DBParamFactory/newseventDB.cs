

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

namespace BAL.Repositories
{

    public class newseventDB : baseDB
    {
        public static NewsEventBLL repo;
        public static DataTable _dt;
        public static DataSet _ds;
        public newseventDB()
           : base()
        {
            repo = new NewsEventBLL();
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
                        lst = _dt.DataTableToList<NewsEventBLL>();
                       
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
        public List<CategoryBLL> GetAllActive(int brandID)
        {
            try
            {
                var lst = new List<CategoryBLL>();
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@brandid", brandID);

                _dt = (new DBHelper().GetTableFromSP)("sp_GetCategoryActive", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        lst = _dt.DataTableToList<CategoryBLL>();

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

        public NewsEventBLL Get(int id)
        {
            try
            {
                var _obj = new NewsEventBLL();
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", id);
                

                _dt = (new DBHelper().GetTableFromSP)("sp_GetNewsEventById_Admin", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        _obj = _dt.DataTableToList<NewsEventBLL>().FirstOrDefault();
                        //_obj = JObject.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(_dt)).ToObject<CategoryBLL>();
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
                SqlParameter[] p = new SqlParameter[5];

                p[0] = new SqlParameter("@Name", data.Name);
                p[1] = new SqlParameter("@PageName", data.Pagename);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@Image", data.Image);
              
                p[4] = new SqlParameter("@StatusID", data.StatusID);
              
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertNewsEvent_Admin", p);
              
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
                SqlParameter[] p = new SqlParameter[6];

                p[0] = new SqlParameter("@Name", data.Name);
                p[1] = new SqlParameter("@PageName", data.Pagename);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@Image", data.Image);
                p[4] = new SqlParameter("@StatusID", data.StatusID);
                p[5] = new SqlParameter("@NewsEventID", data.NewsEventID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateNewsEvent_Admin", p);

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
    }
}
