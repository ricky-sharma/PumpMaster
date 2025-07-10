using PumpMaster.Api.Models;

namespace PumpMaster.Api.Data
{
    public static class MockPumpData
    {
        public static readonly List<Pump> Pumps = new List<Pump>
        {
            new Pump { Id = "1", Name = "Pump A", Type = "Centrifugal", Area = "Area A", Latitude = "-26.6500", Longitude = "152.9600", FlowRate = "120", Offset = "5", CurrentPressure = "45", MinPressure = "30", MaxPressure = "60" },
            new Pump { Id = "2", Name = "Pump B", Type = "Submersible", Area = "Area B", Latitude = "-26.6550", Longitude = "152.9650", FlowRate = "95", Offset = "3", CurrentPressure = "35", MinPressure = "25", MaxPressure = "50" },
            new Pump { Id = "3", Name = "Pump C", Type = "Centrifugal", Area = "Area C", Latitude = "-26.6600", Longitude = "152.9700", FlowRate = "110", Offset = "4", CurrentPressure = "40", MinPressure = "28", MaxPressure = "55" },
            new Pump { Id = "4", Name = "Pump D", Type = "Jet", Area = "Area A", Latitude = "-26.6650", Longitude = "152.9750", FlowRate = "70", Offset = "2", CurrentPressure = "33", MinPressure = "20", MaxPressure = "45" },
            new Pump { Id = "5", Name = "Pump E", Type = "Diaphragm", Area = "Area D", Latitude = "-26.6700", Longitude = "152.9800", FlowRate = "80", Offset = "2", CurrentPressure = "37", MinPressure = "26", MaxPressure = "48" },
            new Pump { Id = "6", Name = "Pump F", Type = "Centrifugal", Area = "Area A", Latitude = "-26.6750", Longitude = "152.9850", FlowRate = "130", Offset = "6", CurrentPressure = "50", MinPressure = "35", MaxPressure = "65" },
            new Pump { Id = "7", Name = "Pump G", Type = "Submersible", Area = "Area E", Latitude = "-26.6800", Longitude = "152.9900", FlowRate = "90", Offset = "3", CurrentPressure = "39", MinPressure = "28", MaxPressure = "50" },
            new Pump { Id = "8", Name = "Pump H", Type = "Jet", Area = "Area F", Latitude = "-26.6850", Longitude = "152.9950", FlowRate = "75", Offset = "4", CurrentPressure = "34", MinPressure = "22", MaxPressure = "46" },
            new Pump { Id = "9", Name = "Pump I", Type = "Centrifugal", Area = "Area C", Latitude = "-26.6900", Longitude = "153.0000", FlowRate = "125", Offset = "5", CurrentPressure = "47", MinPressure = "33", MaxPressure = "60" },
            new Pump { Id = "10", Name = "Pump J", Type = "Diaphragm", Area = "Area G", Latitude = "-26.6950", Longitude = "153.0050", FlowRate = "85", Offset = "2", CurrentPressure = "36", MinPressure = "27", MaxPressure = "49" },
            new Pump { Id = "11", Name = "Pump K", Type = "Centrifugal", Area = "Area B", Latitude = "-26.7000", Longitude = "153.0100", FlowRate = "115", Offset = "4", CurrentPressure = "44", MinPressure = "30", MaxPressure = "58" },
            new Pump { Id = "12", Name = "Pump L", Type = "Submersible", Area = "Area D", Latitude = "-26.7050", Longitude = "153.0150", FlowRate = "92", Offset = "3", CurrentPressure = "38", MinPressure = "26", MaxPressure = "50" },
            new Pump { Id = "13", Name = "Pump M", Type = "Jet", Area = "Area E", Latitude = "-26.7100", Longitude = "153.0200", FlowRate = "78", Offset = "3", CurrentPressure = "32", MinPressure = "21", MaxPressure = "44" },
            new Pump { Id = "14", Name = "Pump N", Type = "Centrifugal", Area = "Area A", Latitude = "-26.7150", Longitude = "153.0250", FlowRate = "122", Offset = "5", CurrentPressure = "48", MinPressure = "34", MaxPressure = "62" },
            new Pump { Id = "15", Name = "Pump O", Type = "Diaphragm", Area = "Area G", Latitude = "-26.7200", Longitude = "153.0300", FlowRate = "82", Offset = "2", CurrentPressure = "35", MinPressure = "25", MaxPressure = "47" },
            new Pump { Id = "16", Name = "Pump P", Type = "Centrifugal", Area = "Area A", Latitude = "-26.7250", Longitude = "153.0350", FlowRate = "118", Offset = "4", CurrentPressure = "42", MinPressure = "31", MaxPressure = "56" },
            new Pump { Id = "17", Name = "Pump Q", Type = "Submersible", Area = "Area H", Latitude = "-26.7300", Longitude = "153.0400", FlowRate = "98", Offset = "3", CurrentPressure = "37", MinPressure = "27", MaxPressure = "49" },
            new Pump { Id = "18", Name = "Pump R", Type = "Jet", Area = "Area A", Latitude = "-26.7350", Longitude = "153.0450", FlowRate = "72", Offset = "2", CurrentPressure = "31", MinPressure = "20", MaxPressure = "42" },
            new Pump { Id = "19", Name = "Pump S", Type = "Centrifugal", Area = "Area B", Latitude = "-26.7400", Longitude = "153.0500", FlowRate = "128", Offset = "6", CurrentPressure = "49", MinPressure = "36", MaxPressure = "63" },
            new Pump { Id = "20", Name = "Pump T", Type = "Diaphragm", Area = "Area A", Latitude = "-26.7450", Longitude = "153.0550", FlowRate = "88", Offset = "3", CurrentPressure = "36", MinPressure = "26", MaxPressure = "48" }
        };
    }
}
