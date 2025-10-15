using BFFPlayground.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BFFPlayground.Infrastructure.Persistence.Configuration;

public class KenzeEventConfiguration : IEntityTypeConfiguration<KenzeEvent>
{
    public void Configure(EntityTypeBuilder<KenzeEvent> builder)
    {
        builder.HasKey(e => e.Id);
        builder
            .Property(e => e.Id).IsRequired().ValueGeneratedOnAdd();
        builder.Property(e=>e.Name).IsRequired();
        builder.Property(e => e.Location).IsRequired().HasDefaultValue("SKW");
    }
}