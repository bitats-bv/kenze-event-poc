namespace BFFPlayground.Domain;

public class Announcement
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; } 
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}