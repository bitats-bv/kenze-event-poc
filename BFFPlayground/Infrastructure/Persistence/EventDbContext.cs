using BFFPlayground.Domain;
using BFFPlayground.Infrastructure.Persistence.Configuration;
using Microsoft.EntityFrameworkCore;

namespace BFFPlayground.Infrastructure.Persistence;

internal class EventDbContext(DbContextOptions<EventDbContext> options) : DbContext(options)
{
    public DbSet<KenzeEvent> KenzeEvents { get; set; }
    public DbSet<DynaForm> DynaForms { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(KenzeEventConfiguration).Assembly);
    }
}