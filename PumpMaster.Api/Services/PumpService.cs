// File: Services/PumpService.cs

using PumpMaster.Api.Data;
using PumpMaster.Api.Models;
using PumpMaster.Api.Services.Interfaces;

namespace PumpMaster.Api.Services
{
    public class PumpService : IPumpService
    {
        public Task<IEnumerable<Pump>> GetAllPumpsAsync()
        {
            return Task.FromResult(MockPumpData.Pumps.AsEnumerable());
        }

        public Task<Pump?> GetPumpByIdAsync(string id)
        {
            var pump = MockPumpData.Pumps.FirstOrDefault(p => p.Id == id);
            return Task.FromResult(pump);
        }

        public Task<Pump?> UpdatePumpAsync(string id, Pump updatedPump)
        {
            Pump? pump = MockPumpData.Pumps.FirstOrDefault(p => p.Id == id);
            if (pump == null) return Task.FromResult<Pump?>(null);

            pump.Name = updatedPump.Name ?? pump.Name;
            pump.FlowRate = updatedPump.FlowRate;
            pump.Area = updatedPump.Area;

            return Task.FromResult((Pump?)pump);
        }
    }
}
