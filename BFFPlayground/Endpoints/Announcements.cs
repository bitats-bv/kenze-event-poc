using BFFPlayground.Domain;
using BFFPlayground.Endpoints.contracts;
using BFFPlayground.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BFFPlayground.Endpoints;

internal static class Announcements
{
    public static async Task<IResult> GetAll([FromServices] ApplicationDbContext context)
    {
        var events = await context.Announcements.Select(e => new AnnouncementDto()
            { Id = e.Id, Title = e.Title, CreatedAt = e.CreatedAt, Description = e.Description }).ToListAsync();
        return TypedResults.Ok(events);
    }

    public static async Task<IResult> NewAnnouncement([FromBody] Announcement announcement, [FromServices] ApplicationDbContext context)
    {
        context.Announcements.Add(announcement);
        await context.SaveChangesAsync();
        return TypedResults.Ok();
    }

    public static async Task<IResult> DeleteAnnouncement([FromRoute] int announcementId, [FromServices] ApplicationDbContext context)
    {
        var eventToDelete = await context.Announcements.SingleAsync(e => e.Id == announcementId);
        context.Announcements.Remove(eventToDelete);
        await context.SaveChangesAsync();
        return TypedResults.Ok();
    }
}