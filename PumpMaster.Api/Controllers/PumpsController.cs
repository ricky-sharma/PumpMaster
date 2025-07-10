using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PumpMaster.Api.Models;
using PumpMaster.Api.Services.Interfaces;

namespace PumpMaster.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class PumpsController : ControllerBase
    {
        private readonly IPumpService _pumpService;

        public PumpsController(IPumpService pumpService)
        {
            _pumpService = pumpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetPumps()
        {
            var pumps = await _pumpService.GetAllPumpsAsync();
            return Ok(pumps);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPump(string id)
        {
            var pump = await _pumpService.GetPumpByIdAsync(id);
            if (pump == null) return NotFound();

            return Ok(pump);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePump(string id, [FromBody] Pump updatedPump)
        {
            if (updatedPump == null)
                return BadRequest("Pump data is required.");

            var pump = await _pumpService.UpdatePumpAsync(id, updatedPump);
            if (pump == null) return NotFound();

            return Ok(pump);
        }

    }

}
