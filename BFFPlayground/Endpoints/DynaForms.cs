using BFFPlayground.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;


namespace BFFPlayground.Endpoints;

internal static class DynaForms
{
    public static async Task<IResult> GetAll([FromServices] EventDbContext context)
    {
        var t = context.DynaForms.ToList();
        return TypedResults.Ok(t);
    }

    public static async Task<IResult> Search([FromServices] EventDbContext context, [FromRoute] string jsonName)
    {
        var result = context.DynaForms
            .Where(f => 
                f.Configuration != null && 
                f.Configuration.RootElement.GetProperty("name").GetString().Contains(jsonName)).ToList();

        return Results.Ok(result);


    }
    
}