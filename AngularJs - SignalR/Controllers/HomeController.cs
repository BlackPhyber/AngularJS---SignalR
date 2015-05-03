using System.Web.Mvc;
using AngularJs___SignalR.Hubs;
using Microsoft.AspNet.SignalR;

namespace AngularJs___SignalR.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var hub = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();

            hub.Clients.All.addMessage("System", "Somebody entered the room!");
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}