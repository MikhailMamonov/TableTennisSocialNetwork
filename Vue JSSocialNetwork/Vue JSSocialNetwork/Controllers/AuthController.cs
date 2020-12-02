using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using Vue_JSSocialNetwork.Models;

using Vue_JSSocialNetwork.ViewModels;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Vue_JSSocialNetwork.Auth;
using Microsoft.Extensions.Options;
using Vue_JSSocialNetwork.Helpers;
using Newtonsoft.Json;
using Vue_JSSocialNetwork.ViewModels.Validations;
using VueSocialNetwork.Data;
using VueSocialNetwork.Data.Entities;

namespace Vue_JSSocialNetwork.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private UserManager<User> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;

        private ApplicationDbContext db;

        public AuthController(ApplicationDbContext context, UserManager<User> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
        {


            this.db = context;
            _userManager = userManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;

            //if (!_roleManager.Roles.Any())
            //{
            //    var result = _roleManager.CreateAsync(new IdentityRole { Id = Guid.NewGuid().ToString(), Name = "Admin", }).Result;
            //    result = _roleManager.CreateAsync(new IdentityRole { Id = Guid.NewGuid().ToString(), Name = "User" }).Result;

            //    var user = new User { Name = "admin@abc.asd", Email = "admin@abc.asd", Age = 10, Password = "Admin@123" };
            //    result = _userManager.CreateAsync(user, "Admin@123").Result;
            //    result = _userManager.AddToRoleAsync(user, "Admin").Result;

            //    user = new User { Name = "user@abc.asd", Email = "user@abc.asd", Age = 18, Password="User@123" };
            //    result = _userManager.CreateAsync(user, "User@123").Result;
            //    result = _userManager.AddToRoleAsync(user, "User").Result;
            //}
        }

        // POST api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody] CredentialsViewModel credentials)
        {
            var validator = new CredentialsViewModelValidator();
            var result = validator.Validate(credentials);
            if (!ModelState.IsValid || !result.IsValid)
            {
                return BadRequest(ModelState);
            }

            var identity = await GetClaimsIdentity(credentials.UserName, credentials.Password);
            if (identity == null)
            {
                return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
            }

            var jwt = await Tokens.GenerateJwt(identity, _jwtFactory, credentials.UserName, _jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
            return new OkObjectResult(jwt);
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return await Task.FromResult<ClaimsIdentity>(null);

            // get the user to verifty
            var userToVerify = await _userManager.FindByNameAsync(userName);

            if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

            // check the credentials
            if (await _userManager.CheckPasswordAsync(userToVerify, password))
            {
                return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
            }

            // Credentials are invalid, or account doesn't exist
            return await Task.FromResult<ClaimsIdentity>(null);
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

    }
}
