using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BFFPlayground.Migrations
{
    /// <inheritdoc />
    public partial class AddExtraEventFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "KenzeEvents",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "KenzeEvents",
                type: "text",
                nullable: false,
                defaultValue: "SKW");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "KenzeEvents");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "KenzeEvents");
        }
    }
}
