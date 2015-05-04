using System.Web.Mvc;
using AngularJs___SignalR.Helpers;

namespace AngularJs___SignalR.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var chatHubHelper = new ChatHubHelper();
            chatHubHelper.Send("System", "Someone visited the HomePage");

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