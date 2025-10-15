namespace BFFPlayground.Endpoints.contracts;

public record AnnouncementDto
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public string Description { get; set; } = string.Empty;
    public DateTimeOffset CreatedAt { get; set; } 
}