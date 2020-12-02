using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using VueSocialNetwork.Data.Entities;

namespace VueSocialNetwork.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> _options) : base(_options)
        {
        }

        public DbSet<Customer> Customers { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (options == null)
        //    {
        //        optionsBuilder.UseSqlServer("Server=DESKTOP-QMSUOKD\\SQLEXPRESS;AttachDbFileName=D:\\BookApi\\backend\\SocialNetwork.mdf; Database=SocialNetwork;Trusted_Connection=Yes;");
        //    }
        //}
    }
}
