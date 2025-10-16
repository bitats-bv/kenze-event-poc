using BFFPlayground.Domain;
using BFFPlayground.Kernel;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BFFPlayground.Infrastructure.Persistence;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Announcement> Announcements { get; set; }
    public DbSet<KenzeEvent> KenzeEvents { get; set; }
    public DbSet<DynaForm> DynaForms { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);

        modelBuilder.ConfigureEntitiesOfType<BaseEntityWithId>(configure =>
        {
            configure.Property(nameof(BaseEntityWithId.Id))
                .ValueGeneratedNever();
        });
    }
}
