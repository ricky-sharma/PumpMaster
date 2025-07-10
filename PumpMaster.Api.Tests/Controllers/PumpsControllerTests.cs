using Microsoft.AspNetCore.Mvc;
using Moq;
using PumpMaster.Api.Controllers;
using PumpMaster.Api.Models;
using PumpMaster.Api.Services.Interfaces;

namespace PumpMaster.Api.Tests.Controllers
{
    public class PumpsControllerTests
    {
        private readonly Mock<IPumpService> _mockService;
        private readonly PumpsController _controller;

        public PumpsControllerTests()
        {
            _mockService = new Mock<IPumpService>();
            _controller = new PumpsController(_mockService.Object);
        }

        [Fact]
        public async Task GetPump_ReturnsOk_WhenPumpExists()
        {
            // Arrange
            Pump pump = new Pump { Id = "1", Name = "TestPump" };
            _mockService.Setup(s => s.GetPumpByIdAsync("1"))
                .ReturnsAsync(pump);

            // Act
            var result = await _controller.GetPump("1");

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedPump = Assert.IsType<Pump>(okResult.Value);
            Assert.Equal("TestPump", returnedPump.Name);
        }

        [Fact]
        public async Task GetPump_ReturnsNotFound_WhenPumpDoesNotExist()
        {
            _mockService.Setup(s => s.GetPumpByIdAsync("999"))
                .ReturnsAsync((Pump?)null);

            var result = await _controller.GetPump("999");

            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task GetPumps_ReturnsAllPumps()
        {
            // Arrange
            var pumps = new List<Pump>
            {
                new Pump { Id = "1", Name = "Pump1", Area = "Area1", FlowRate = "10" },
                new Pump { Id = "2", Name = "Pump2", Area = "Area2", FlowRate = "20" }
            };
            _mockService.Setup(s => s.GetAllPumpsAsync())
                .ReturnsAsync(pumps);

            // Act
            var result = await _controller.GetPumps();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedPumps = Assert.IsAssignableFrom<IEnumerable<Pump>>(okResult.Value);
            Assert.Equal(2, returnedPumps.Count());
        }

        [Fact]
        public async Task GetPumps_CallsServiceOnce()
        {
            // Arrange
            _mockService.Setup(s => s.GetAllPumpsAsync())
                .ReturnsAsync(new List<Pump>());

            // Act
            var result = await _controller.GetPumps();

            // Assert
            _mockService.Verify(s => s.GetAllPumpsAsync(), Times.Once);
        }

        [Fact]
        public async Task UpdatePump_CallsServiceWithCorrectParameters()
        {
            // Arrange
            var updatedPump = new Pump { Id = "1", Name = "UpdatedPump" };
            _mockService.Setup(s => s.UpdatePumpAsync("1", updatedPump))
                .ReturnsAsync(updatedPump);

            // Act
            var result = await _controller.UpdatePump("1", updatedPump);

            // Assert
            _mockService.Verify(s => s.UpdatePumpAsync("1", updatedPump), Times.Once);
        }


    }
}
