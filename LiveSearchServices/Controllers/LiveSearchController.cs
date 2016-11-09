using BusinessLayer;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LiveSearchServices.Controllers
{
    [EnableCors("*", "*", "*")]
    public class LiveSearchController : ApiController
    {
        [Route("api/getdata")]
        public List<Speaker> GetSpeakerData()
        {
            SpeakerManager sm = new SpeakerManager();
            return sm.Generatedata();
        }

    }
}
