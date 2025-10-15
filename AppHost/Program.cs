var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("postgres").WithLifetime(ContainerLifetime.Persistent).WithDataVolume("DevTest").WithPgAdmin();
var postgresdb = postgres.AddDatabase("kenze-events");

var bffapi = builder.AddProject<Projects.BFFPlayground>(name: "bffplayground")
    .WithExternalHttpEndpoints()
    .WithReference(postgresdb)
    .WaitFor(postgresdb);

builder.AddNpmApp("angular", "../aspire-play-ui")
    .WithReference(bffapi)
    .WaitFor(bffapi)
    .WithHttpEndpoint(targetPort: 4200, port: 44880, env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();


builder.Build().Run();