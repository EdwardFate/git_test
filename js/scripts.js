
document.write("<table class='table'>");

var a=1;

for (var i = 0;i<6;i++)
{
    document.write("<tr>");
    for (var j=0;j<8;j++)
    {
        document.write("<td>"+a+"</td>");
        a++;
        if (j==7)
        {
            document.write("</tr>")
        }
    }

}

