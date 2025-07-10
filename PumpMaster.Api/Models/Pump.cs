namespace PumpMaster.Api.Models
{
    public class Pump
    {
        public required string Id { get; set; }
        public required string Name { get; set; }

        public string? Type { get; set; }
        public string? Area { get; set; }
        public string? Latitude { get; set; }
        public string? Longitude { get; set; }

        public string? FlowRate { get; set; }

        public string? Offset { get; set; }

        public string? CurrentPressure { get; set; }

        public string? MinPressure { get; set; }
        public string? MaxPressure { get; set; }
    }
}
