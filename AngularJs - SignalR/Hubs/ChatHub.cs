using Microsoft.AspNet.SignalR;

namespace AngularJs___SignalR.Hubs
{
    public interface IChatHub
    {
        void Send(string sender, string message);
    }

    public class ChatHub : Hub, IChatHub
    {
        public void Send(string sender, string message)
        {
            Clients.All.addMessage(sender, message);
        }
    }
}