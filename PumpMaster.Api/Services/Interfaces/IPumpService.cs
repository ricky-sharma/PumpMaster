using PumpMaster.Api.Models;

namespace PumpMaster.Api.Services.Interfaces
{
    public interface IPumpService
    {
        Task<IEnumerable<Pump>> GetAllPumpsAsync();
        Task<Pump?> GetPumpByIdAsync(string id);
        Task<Pump?> UpdatePumpAsync(string id, Pump updatedPump);
    }
}
