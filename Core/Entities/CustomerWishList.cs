using System.Collections.Generic;

namespace Core.Entities
{
    public class CustomerWishList
    {
          public CustomerWishList()
        {
        }

        public CustomerWishList(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<WishListItem> Items { get; set; } = new List<WishListItem>();

    }
}