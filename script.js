

//header fixed

window.onscroll=function(){
const docScrollTop=document.documentElement.scrollTop;
if(window.innerWidth>991)
{
	if(docScrollTop>100)
	{
		document.querySelector("header").classList.add("fixed")
	}
	else
	{
		document.querySelector("header").classList.remove("fixed")
	}
}
}

// navbar links

const navbar = document.querySelector(".navbar");
a=document.querySelectorAll("a");
console.log(a);