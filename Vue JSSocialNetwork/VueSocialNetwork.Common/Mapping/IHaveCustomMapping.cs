﻿using AutoMapper;

namespace VueSocialNetwork.Common.Mapping
{
    public interface IHaveCustomMapping
    {
        void ConfigureMapping(Profile profile);
    }
}
