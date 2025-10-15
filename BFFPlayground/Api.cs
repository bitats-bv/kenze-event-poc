using BFFPlayground.Endpoints;

namespace BFFPlayground;

internal static class Api
{
    public static IEndpointRouteBuilder MapKenzeEvents(this IEndpointRouteBuilder app)
    {
        var events = app.MapGroup("events");

        events.MapGet("/", KenzeEvents.GetAll).WithName("GetAllKenzeEvents").WithDisplayName("Get all Kenze Events");
        events.MapPost("/", KenzeEvents.NewEvent);
        events.MapDelete("/{eventId}", KenzeEvents.DeleteEvent);
        return app;
    }
    
    public static IEndpointRouteBuilder MapAnnouncements(this IEndpointRouteBuilder app)
    {
        var events = app.MapGroup("events");

        events.MapGet("/", Announcements.GetAll).WithName("GetAllAnnouncements").WithDisplayName("Get all Announcements");
        events.MapPost("/", Announcements.NewAnnouncement);
        events.MapDelete("/{eventId}", Announcements.DeleteAnnouncement);
        return app;
    }
    
    public static IEndpointRouteBuilder MapDynaForms(this IEndpointRouteBuilder app)
    {
        var events = app.MapGroup("dynaform");

        events.MapGet("/", DynaForms.GetAll);
        events.MapGet("/{jsonName}", DynaForms.Search);
        
        return app;
    }
}