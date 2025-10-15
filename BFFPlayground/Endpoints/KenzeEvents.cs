using BFFPlayground.Domain;
using BFFPlayground.Endpoints.contracts;
using BFFPlayground.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BFFPlayground.Endpoints;

internal static class KenzeEvents
{
    public static async Task<IResult> GetAll([FromServices] ApplicationDbContext context)
    {
        var events = await context.KenzeEvents.Select(e => new KenzeEventDto()
            { Id = e.Id, Name = e.Name, Date = e.Date, Location = e.Location, Description = e.Description }).ToListAsync();
        return TypedResults.Ok(events);
    }

    public static async Task<IResult> NewEvent([FromBody] KenzeEvent newEvent, [FromServices] ApplicationDbContext context)
    {
        context.KenzeEvents.Add(newEvent);
        await context.SaveChangesAsync();
        return TypedResults.Ok();
    }

    public static async Task<IResult> DeleteEvent([FromRoute] int eventId, [FromServices] ApplicationDbContext context)
    {
        var eventToDelete = await context.KenzeEvents.SingleAsync(e => e.Id == eventId);
        context.KenzeEvents.Remove(eventToDelete);
        await context.SaveChangesAsync();
        return TypedResults.Ok();
    }
    
    public static async Task<IResult> WillAttend([FromRoute] int eventId, [FromServices] ApplicationDbContext context)
    {
        return TypedResults.Ok();
    }
    
    public static async Task<IResult> WontAttend([FromRoute] int eventId, [FromServices] ApplicationDbContext context)
    {
        return TypedResults.Ok();
    }
}
