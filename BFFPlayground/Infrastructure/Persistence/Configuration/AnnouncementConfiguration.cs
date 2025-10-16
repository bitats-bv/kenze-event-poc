using BFFPlayground.Domain;
using BFFPlayground.Endpoints.contracts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BFFPlayground.Infrastructure.Persistence.Configuration;

public class AnnouncementConfiguration : IEntityTypeConfiguration<Announcement>
{
    public void Configure(EntityTypeBuilder<Announcement> builder)
    {
        builder.HasKey(e => e.Id);
        builder
            .Property(e => e.Id).IsRequired().ValueGeneratedOnAdd();
        builder.Property(e=>e.Title).IsRequired();
        builder.Property(e => e.Description).IsRequired();
        builder.Property(a => a.CreatedAt).IsRequired();
    }
}