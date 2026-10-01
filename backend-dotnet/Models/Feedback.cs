namespace backend_dotnet.Models;

public class Feedback
{
    public int Id { get; set; }

    public string FullName { get; set; } = "";

    public string Email { get; set; } = "";

    public string Event { get; set; } = "";

    public int Rating { get; set; }

    public string Comments { get; set; } = "";
}