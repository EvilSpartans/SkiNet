using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IWishListRepository
    {
         Task<CustomerWishList> GetWishListAsync(string wishListId);
         Task<CustomerWishList> UpdateWishListAsync(CustomerWishList wishList);
         Task<bool> DeleteWishListAsync(string wishListId);
    }
}