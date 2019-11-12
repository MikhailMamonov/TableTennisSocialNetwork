using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class ShopContext : DbContext
    {
        public virtual DbSet<Product> Courses { get; set; }
        public virtual DbSet<Category> Enrollments { get; set; }
    }
}
