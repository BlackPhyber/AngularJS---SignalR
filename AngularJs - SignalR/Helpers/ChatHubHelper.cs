using AngularJs___SignalR.Hubs;
using Microsoft.AspNet.SignalR;

namespace AngularJs___SignalR.Helpers
{
    public class ChatHubHelper : IChatHub
    {
        private static readonly IHubContext Hub;

        static ChatHubHelper()
        {
            Hub = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();
        }

        public void Send(string sender, string message)
        {
            Hub.Clients.All.addMessage(sender, message);
        }
    }
}