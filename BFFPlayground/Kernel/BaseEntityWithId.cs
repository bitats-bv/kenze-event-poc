using MassTransit;

namespace BFFPlayground.Kernel;

public abstract class BaseEntityWithId 
{
    public Guid Id { get; protected set; }

    protected BaseEntityWithId() : this(NewId.Next().ToGuid())
    {
    }

    protected BaseEntityWithId(Guid id)
    {
        Id = id;
    }
}