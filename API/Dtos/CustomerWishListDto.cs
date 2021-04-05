using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class CustomerWishListDto
    {
        [Required]
        public string Id { get; set; }
        public List<WishListItemDto> Items { get; set; }

    }
}