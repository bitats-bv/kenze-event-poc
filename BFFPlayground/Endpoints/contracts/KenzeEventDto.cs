namespace BFFPlayground.Endpoints.contracts;

public record KenzeEventDto
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    public required string Location { get; set; }
    public DateTimeOffset Date { get; set; } 
    
    public List<string> Attendandees { get; set; }
    public List<string> Declined { get; set; }
}