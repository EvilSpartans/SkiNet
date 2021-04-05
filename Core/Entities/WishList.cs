using System;

namespace Core.Entities
{
    public class WishList 
    {
        public string Id { get; set; }
        public string WishListData { get; set; }
        public DateTime lastUpdated { get; set; }
    }
}