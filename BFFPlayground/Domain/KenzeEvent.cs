namespace BFFPlayground.Domain;

public class KenzeEvent
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public string Location { get; set; }
    public DateTimeOffset Date { get; set; }    
    
}