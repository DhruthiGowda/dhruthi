using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BalForEventMgt;

namespace DalForEventMgt
{
    public class ParticipantDal
    {
        public bool authParticipant(string e="abc@gmail.com",string p="abc")
        {
            SqlConnection cn = new SqlConnection("server=DESKTOP-AT5MMP2\\SQLEXPRESS;Integrated Security=true;database=EventManagement");
            SqlCommand cmd = new SqlCommand("select useremailid,password from participant ", cn);
            cn.Open();
            ParticipantLogin p1 = new ParticipantLogin();
            
            try
            {
                SqlDataReader dr = cmd.ExecuteReader();
                string pwd = "";
                if (dr.HasRows)
                {
                    dr.Read();
                    p1.P_email = Convert.ToString(dr["useremailid"]);
                    p1.P_password = Convert.ToString(dr["password"]);
                    pwd = Convert.ToString(dr["password"]);
                }
                else
                {
                    return false;
                }

                cn.Close();

                if (p == pwd)
                {
                    return true;

                }
                else
                {
                    return false;
                }
                
            }
            catch(Exception ex)
            {
                throw ex;
            }
           
            
        }

    }
}
