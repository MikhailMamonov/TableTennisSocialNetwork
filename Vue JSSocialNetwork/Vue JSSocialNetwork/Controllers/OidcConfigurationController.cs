using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vue_JSSocialNetwork.Controllers
{
    public class OidcConfigurationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
