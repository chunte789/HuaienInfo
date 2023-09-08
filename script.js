
var xhr = new XMLHttpRequest();
var pageText;
xhr.open('GET', 'https://script.google.com/macros/s/AKfycbxKOVvSeD2_dNrb0P9YYecoAt3VonW7Qub1qTp_6xulvpPEJU6cYodKpRc_AasJDHHP/exec', true);
xhr.onload = function() 
{
    if (xhr.status === 200) 
	{
		pageText = xhr.responseText;
        console.log(pageText);
    } 
	else 
	{
        console.error('请求失败。状态码：' + xhr.status);
    }
	xhr.send();
}
var text1[] = pageText.spilt('.');
console.log(text1);
