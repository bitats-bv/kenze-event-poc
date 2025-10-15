using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BFFPlayground.Infrastructure.Persistence;

public static class ModelBuilderExtensions
{
    internal static ModelBuilder ConfigureEntitiesOfType<TEntity>(this ModelBuilder modelBuilder,
        Action<EntityTypeBuilder> configureAction)
    {
        var entityTypes = modelBuilder
            .Model
            .GetEntityTypes()
            .Where(t => typeof(TEntity).IsAssignableFrom(t.ClrType));

        foreach (var entityType in entityTypes)
        {
            modelBuilder.Entity(entityType.ClrType, configureAction);
        }

        return modelBuilder;
    }

}