using Microsoft.AspNet.SignalR;

namespace AngularJs___SignalR.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(string sender, string message)
        {
            Clients.All.addMessage(sender, message);
        }
    }
}