using System;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class WishListRepository : IWishListRepository
    {
       private readonly StoreContext _context;
        public WishListRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<bool> DeleteWishListAsync(string wishlistId)
        {
            var wishlist = await  _context.Set<WishList>().FindAsync(wishlistId);
            if (wishlist == null) return false;
            _context.Remove(wishlist);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<CustomerWishList> GetWishListAsync(string wishlistId)
        {
            var wishlist = await _context.WishLists.FirstOrDefaultAsync(p => p.Id == wishlistId);
            if (wishlist == null) return null;
            return JsonSerializer.Deserialize<CustomerWishList>(wishlist.WishListData);
        }

        public async Task<CustomerWishList> UpdateWishListAsync(CustomerWishList wishlist)
        {
            if (wishlist == null) return null;

            var data = JsonSerializer.Serialize(wishlist);
            var existingwishlist = await _context.WishLists.FirstOrDefaultAsync(p => p.Id == wishlist.Id);
            if (existingwishlist == null) { // add new wishlist
                var newItem = new WishList();
                newItem.Id = wishlist.Id;
                newItem.WishListData = data;
                newItem.lastUpdated = DateTime.Now;
                await _context.WishLists.AddAsync(newItem);
                await _context.SaveChangesAsync();
            } else { // update existing wishlist
                existingwishlist.WishListData = data;
                existingwishlist.lastUpdated = DateTime.Now;
                _context.WishLists.Update(existingwishlist);
                await _context.SaveChangesAsync();
            }
            return wishlist;
        }
    }
}