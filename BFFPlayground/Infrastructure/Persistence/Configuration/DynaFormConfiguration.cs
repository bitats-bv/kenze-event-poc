using BFFPlayground.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BFFPlayground.Infrastructure.Persistence.Configuration;

public class DynaFormConfiguration: IEntityTypeConfiguration<DynaForm>
{
    public void Configure(EntityTypeBuilder<DynaForm> builder)
    {
        builder.HasKey(df => df.Id);
        
        builder.Property(df => df.Id).ValueGeneratedOnAdd();
        builder.Property(df => df.Name);
        builder.Property(df => df.Version).HasColumnType("numeric");
        builder.Property(df=>df.Configuration).HasColumnType("jsonb");
    }
}