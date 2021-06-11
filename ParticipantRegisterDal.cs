using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BalForEventMgt;

namespace DalForEventMgt
{
    public class ParticipantRegisterDal
    {
        public void authreg(Participant p)
        {
            Participant pl = new Participant();
            SqlConnection cn = new SqlConnection("server=DESKTOP-AT5MMP2\\SQLEXPRESS;Integrated Security=true;database=EventManagement");
            //SqlCommand cmd = new SqlCommand("insert into Participant values("p1.P_email","r1.P_password",r1.P_name,r1.P_contactnumber,r1.P_gender,r1.P_city")" , cn);
            SqlCommand cmd = new SqlCommand("insert into Participant values(" + p.P_email + ",'" + p.P_password + "'," + p.P_name + ",'" + p.P_contactnumber + ",' " + p.P_gender + ",'" + p.P_city + " ')", cn);
            cn.Open();

            
                cmd.ExecuteNonQuery();

            cn.Close();
            

        }
    }
}
            

           
           
            
