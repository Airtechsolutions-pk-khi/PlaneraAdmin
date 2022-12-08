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
using System.IO;
using Newtonsoft.Json;

namespace BAL.Repositories
{

    public class jsonreadwriteDB
    {
        public static GalleryImageBLL repo;
        public static DataTable _dt;
        public static DataSet _ds;
        public jsonreadwriteDB()
        {
            repo = new GalleryImageBLL();
            _dt = new DataTable();
            _ds = new DataSet();
        }
        //Gallery
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
            catch (Exception)
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
            catch (Exception)
            {
                return 0;
            }
        }
        public int Insert(JsonreadwriteBLL data)
        {
            
            string newData = "{ 'Key': " + data.Key + ",  'Ar': '" + data.Ar + "',  'En': '" + data.En + "'}";  
            try
            {
                string JsonFile = "./translations.json";
                var json = File.ReadAllText(JsonFile);
                var jsonObj = JObject.Parse(json);
                var contentArrary = jsonObj.GetValue("content") as JArray;
                var newCompany = JObject.Parse(newData);
                contentArrary.Add(newCompany);

                jsonObj["content"] = contentArrary;
                string newJsonResult = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj,
                                       Newtonsoft.Json.Formatting.Indented);
                File.WriteAllText(JsonFile, newJsonResult);
            }
    
            catch (Exception ex)
            {
                return 0;
            }
            return 0;
            
        }
        public int Update(JsonreadwriteBLL data)
        {
            string JsonFile = "./translations.json";
            string json = File.ReadAllText(JsonFile);

            try
            {
                var jObject = JObject.Parse(json);
                JArray experiencesArrary = (JArray)jObject["content"];
                 
               
                if (!data.Key.Equals(""))
                {
                                          
                    foreach (var company in experiencesArrary.Where(obj => obj["Key"].Value<int>() == int.Parse(data.Key)))
                    {
                        company["Ar"] = !string.IsNullOrEmpty(data.Ar) ? data.Ar : "";
                        company["En"] = !string.IsNullOrEmpty(data.En) ? data.En : "";
                    }

                    jObject["content"] = experiencesArrary;
                    string output = Newtonsoft.Json.JsonConvert.SerializeObject(jObject, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText(JsonFile, output);
                }
                else
                {
                    Console.Write("Invalid, Try Again!");
                    
                }
            }
            catch (Exception ex)
            {

                Console.WriteLine("Update Error : " + ex.Message.ToString());
            }

            return 0;
             
        }
        public JsonreadwriteBLL GetByKey(int key)
        {
            try
            {
                string JsonFile = "./translations.json";
                var json = File.ReadAllText(JsonFile);
                
                var _obj = new JsonreadwriteBLL();
                
                dynamic jsonObj = JsonConvert.DeserializeObject(json);

                var jObject = JObject.Parse(json);

                
                JArray contentArrary = (JArray)jObject["content"];

                foreach (var company in contentArrary.Where(obj => obj["Key"].Value<int>() == 1))
                {
                    company["Key"] = !string.IsNullOrEmpty(_obj.Key) ? _obj.Key : "";
                    company["Ar"] = !string.IsNullOrEmpty(_obj.Ar) ? _obj.Ar : "";
                    company["En"] = !string.IsNullOrEmpty(_obj.En) ? _obj.En : "";
                }


                //string id = jsonObj.key.ToString();

                

                return _obj;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        //Gallery
        //Service
        public List<ServiceBLL> GetService()
        {
            try
            {
                var lst = new List<ServiceBLL>();
                SqlParameter[] p = new SqlParameter[0];

                _dt = (new DBHelper().GetTableFromSP)("sp_GetService_PlnInt", p);
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
        public ServiceBLL GetService(int id)
        {
            try
            {
                var _obj = new ServiceBLL();
                SqlParameter[] p = new SqlParameter[1];
                p[0] = new SqlParameter("@id", id);
                _dt = (new DBHelper().GetTableFromSP)("sp_GetServiceID_PlnInt", p);
                if (_dt != null)
                {
                    if (_dt.Rows.Count > 0)
                    {
                        _obj = _dt.DataTableToList<ServiceBLL>().FirstOrDefault();
                    }
                }
                return _obj;
            }
            catch (Exception)
            {
                return null;
            }
        }
        public int Insert(ServiceBLL data)
        {
            try
            {
                int rtn = 0;
                SqlParameter[] p = new SqlParameter[9];

                p[0] = new SqlParameter("@Title", data.Title);
                p[1] = new SqlParameter("@ArabicTitle", data.ArabicTitle);
                p[2] = new SqlParameter("@Description", data.Description);
                p[3] = new SqlParameter("@ArabicDescription", data.ArabicDescription);
                p[4] = new SqlParameter("@ImagePath", data.ImagePath);
                p[5] = new SqlParameter("@IconImage", data.IconImage);
                p[6] = new SqlParameter("@StatusID", data.StatusID);
                p[7] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[8] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertService_PlnInt", p);

                return rtn;
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int Update(ServiceBLL data)
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
                p[6] = new SqlParameter("@CompanyID", data.CompanyID);
                p[7] = new SqlParameter("@DisplayOrder", data.DisplayOrder);
                p[8] = new SqlParameter("@LastUpdatedDate", data.LastUpdatedDate);
                p[9] = new SqlParameter("@ServiceID", data.ServiceID);

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateService_Plnint", p);

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
                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteService_PlnInt", p);

                return _obj;
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
                var lst = new List<HomePageBLL>();
                SqlParameter[] p = new SqlParameter[0];

                _dt = (new DBHelper().GetTableFromSP)("sp_GetHomeImage_PlnInt", p);
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
                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_insertHome_PlnInt", p);

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
                SqlParameter[] p = new SqlParameter[8];

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

                rtn = (new DBHelper().ExecuteNonQueryReturn)("dbo.sp_updateHome_Plnint", p);

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
                _obj = (new DBHelper().ExecuteNonQueryReturn)("sp_DeleteHome_PlnInt", p);

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