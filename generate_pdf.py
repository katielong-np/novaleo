from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Helvetica", size=12)

with open("guide.md", "r", encoding="utf-8") as f:
    text = f.read()
    
# Basic clean up of markdown formatting for plain text PDF
text = text.replace("**", "").replace("*", "").replace("#", "")
text = text.replace("“", '"').replace("”", '"').replace("‘", "'").replace("’", "'").replace("—", "-").replace("–", "-")

pdf.multi_cell(0, 5, text)
pdf.output("public/what-your-labs-arent-telling-you.pdf")
print("PDF generated successfully.")
