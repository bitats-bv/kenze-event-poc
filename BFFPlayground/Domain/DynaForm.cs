using System.Text.Json;

namespace BFFPlayground.Domain;

public class DynaForm
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public int Version { get; set; } = 0;
    public JsonDocument? Configuration { get; set; } 
}