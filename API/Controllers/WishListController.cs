using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class WishListController : BaseApiController
    {
        private readonly IWishListRepository _wishlistRepository;
        private readonly IMapper _mapper;
        public WishListController(IWishListRepository wishlistRepository, IMapper mapper)
        {
            _mapper = mapper;
            _wishlistRepository = wishlistRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerWishList>> GetWishListsById(string id)
        {
            var wishlist = await _wishlistRepository.GetWishListAsync(id);

            return Ok(wishlist ?? new CustomerWishList(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerWishList>> UpdateWishList(CustomerWishListDto wishList)
        {
            var customerWishList = _mapper.Map<CustomerWishListDto, CustomerWishList>(wishList);

            var updatedWishLists = await _wishlistRepository.UpdateWishListAsync(customerWishList);

            return Ok(updatedWishLists);
        }

        [HttpDelete]
        public async Task DeleteWishListsAsync(string id)
        {
            await _wishlistRepository.DeleteWishListAsync(id);
        }
    }
}