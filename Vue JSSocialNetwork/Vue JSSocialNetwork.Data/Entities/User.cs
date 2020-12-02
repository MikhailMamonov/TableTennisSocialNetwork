using Microsoft.AspNetCore.Identity;

namespace VueSocialNetwork.Data.Entities
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PictureUrl { get; set; }
    }
}
