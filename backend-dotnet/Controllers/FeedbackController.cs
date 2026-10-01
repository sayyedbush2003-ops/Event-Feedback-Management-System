using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend_dotnet.Data;
using backend_dotnet.Models;

namespace backend_dotnet.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FeedbackController : ControllerBase
{
    private readonly AppDbContext _context;

    public FeedbackController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Feedback>>> GetFeedbacks()
    {
        return await _context.Feedbacks.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Feedback>> CreateFeedback(Feedback feedback)
    {
        _context.Feedbacks.Add(feedback);

        await _context.SaveChangesAsync();

        return Ok(feedback);
    }

    
}
