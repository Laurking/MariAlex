$(function(){
	var counter=-1;
	var count=-1;
	var start=0;
	var end=7;
	var images=['image1','image2','image6','image7'];
	var colors=['red','green','purple','orange','yellow','lime'];

	
	var getWindowWidth=$(window).width();
	if (getWindowWidth<767) {
		$('#menu_icon').click(function(){
		$('#page-header nav ul').toggle();
		});

		// $('main ,footer').click(function(){
		// $('#search-box').hide();
		// $('.connect').children('ul').hide();
		// $('nav ul').hide();
		// });
	}
	else{
		$('#page-header nav ul').show();
	}

	$(window).resize(function(){
		var getWindowWidth=$(window).width();
		if (getWindowWidth<767) {
			$('#page-header nav ul').hide();
				$('#menu_icon').click(function(){
				$('#page-header nav ul').toggle();
			});

			// $('main ,footer').click(function(){
			// 	$('#search-box').hide();
			// 	$('.connect').children('ul').hide();
			// 	$('nav ul').hide();
			// });
		}
		else{
			$('#page-header nav ul').show();

			// $('main ,footer').click(function(){
			// 	$('#search-box').hide();
			// 	$('.connect').children('ul').hide();
			// });
		}

	});


	$('.search button').click(function(){
		$('#search-box').slideToggle('fast');
	});

	$('.connect').click(function(){
		$(this).children('ul').slideToggle('fast');
	});

	// $('main ,footer').click(function(){
	// 	$('#search-box').hide();
	// 	$('.connect').children('ul').hide();
	// 	$('nav ul').hide();
	// });

	setInterval(function () {
		changeColor();
		displayImage();
	}, 5000);
	
	function displayImage(){

		if(count<$('.list li').length-1) {
			count+=1;
		}
		else if (count>=$('.list li').length-1){
			count=0;
		}
		var url="img/"+images[count]+".jpg";
		var listItem=$('.list li')[count];
		$('#main').css('background-image','url('+url+')');
		$(listItem).addClass('active');
		$(listItem).siblings().removeClass('active');

	}
	
	function changeColor(){
		if (counter<colors.length-1) {
			++counter;
		}
		else{
			counter=0;
		}
		var color=colors[counter];
		$('#quick-registration h2').css('background-color',color);
	}

	$(window).scroll(function() {
    	var height = $(window).scrollTop();
    	if(height>90){
        	$('header').css('position','fixed');
    	}
    	else{
    		$('header').css('position','static');
    	}
	});

	$('#programs .programs section').each(function(){
			if ($(this).index()<=5) {
				$(this).slideDown();
			}
			else{
				$(this).hide();
			}
		});

	$('#previous').click(function(){
		
		$('#programs .programs section').each(function(){
			if (end>=4) {
				start-=7;
				end-=7;
			}
			else{
				start=7;
				end=13;
			}
		$(this).slideToggle();
		});
	});
	
	$('#next').click(function(){
		
		$('#programs .programs section').each(function(){
			if (end>=4) {
				start-=7;
				end-=7;
			}
			else{
				start=7;
				end=13;
			}
		$(this).slideToggle();
		});
	});

	$('#page-header nav ul li').click(function(){

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	$('#description p').hover(function(){
		$(this).toggleClass('light');
	});

	function findBackSlashIndex(link){
		for (var i = 0; i < link.length; i++) {
			if (link.charAt(i)=='/') {
				return i;
			}
		};
	}

	function findPeriodIndex(link){
		for (var i = 0; i < link.length; i++) {
			if (link.charAt(i)=='.') {
				return i;
			}
		};
	}

	$('.languageSelection .language').change(function(){
		var language=($('.language').val()).toLowerCase();
		if (language=='english') {
			window.location.href = "index.html";
		}
		else if (language=="french") {
			window.location.href = "french.html";
		}
		else if (language=="anglais") {
			window.location.href = "index.html";
		}
		else if (language=="français") {
			window.location.href = "french.html";
		}

	});

	$('#programs .programs section a').hover(function(){
		var src=$(this).children('img').attr('src');
		var language=src.substring(findBackSlashIndex(src)+1,findPeriodIndex(src));
		var describe=englishDescription(language);
		$('#description p').html(describe);
		$('#description p').append('. <span><a href="#">learn more...</a></span>');
	});

	function englishDescription(language){
		switch(language){
			case "java":
				return "Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere!";
				break;
			case "javascript":
				return "JavaScript is a programming language used to make web pages interactive. It runs on your visitor's computer and doesn't require constant downloads from your website. JavaScript is often used to create polls and quizzes.";
				break;
			case "swift":
				return "Swift is a powerful and intuitive new programming language created by Apple for building iOS and Mac apps. It’s designed to give advanced developers the freedom and capabilities they need to create a new generation of cutting-edge apps. It also opens up a whole new world of possibilities for everyone else. Swift is easy to learn and use — even if you’ve never coded before. So now anyone with an idea can create something incredible.";
				break;
			case "python":
				return "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.";
				break;
			case "php":
				return "PHP is probably the most popular scripting language on the web. It is used to enhance web pages. With PHP, you can do things like create username and password login pages, check details from a form, create forums, picture galleries, surveys, and a whole lot more. If you've come across a web page that ends in PHP, then the author has written some programming code to liven up the plain, old HTML.";
				break;
			case "objectivec":
				return "Objective-C is the primary programming language you use when writing software for OS X and iOS. It’s a superset of the C programming language and provides object-oriented capabilities and a dynamic runtime. Objective-C inherits the syntax, primitive types, and flow control statements of C and adds syntax for defining classes and methods. It also adds language-level support for object graph management and object literals while providing dynamic typing and binding, deferring many responsibilities until runtime";
				break;
			case "c-language":
				return "C is a structured, procedural programming language that has been widely used both for operating systems and applications and that has had a wide following in the academic community. Many versions of UNIX-based operating systems are written in C. C has been standardized as part of the Portable Operating System Interface (POSIX).";
				break;
			case "ruby":
				return "Ruby is a simple but powerful object-oriented programming language (everything in Ruby is an object), created by Yukihiro Matsumoto, who goes by the online name MATZ. Ruby programs are compact, yet readable and maintainable. Ruby offers features such as blocks, iterators, meta-classes and others. It can be used to write servers, to experiment with prototypes, and for everyday programming tasks. Ruby is open source and freely available for both development and deployment";
				break;
			case "c++":
				return "C++ is an object oriented programming (OOP) language, developed by Bjarne Stroustrup, and is an extension of C language. It is therefore possible to code C++ in a \"C style\" or \"object-oriented style.\" In certain scenarios, it can be coded in either way and is thus an effective example of a hybrid language.C++ is a general purpose object oriented programming language. It is considered to be an intermediate level language, as it encapsulates both high and low level language features. Initially, the language was called 'C with classes’ as it had all properties of C language with an additional concept of 'classes’. However, it was renamed to C++ in 1983.";
				break;
			case "csharp":
				return "C# is an elegant and type-safe object-oriented language that enables developers to build a variety of secure and robust applications that run on the .NET Framework. You can use C# to create Windows client applications, XML Web services, distributed components, client-server applications, database applications, and much, much more. Visual C# provides an advanced code editor, convenient user interface designers, integrated debugger, and many other tools to make it easier to develop applications based on the C# language and the .NET Framework.";
				break;
			case "html_css":
				return "HTML, HyperText Markup Language, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images. CSS, or Cascading Style Sheets, is a presentation language created to style the appearance of content—using, for example, fonts or colors.The two languages—HTML and CSS—are independent of one another and should remain that way. CSS should not be written inside of an HTML document and vice versa. As a rule, HTML will always represent content, and CSS will always represent the appearance of that content.";
				break;
			case "jquery":
				return "Query is a lightweight, \"write less, do more\", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code. jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation. The jQuery library contains the following features: HTML/DOM manipulation, CSS manipulation, HTML event methods, Effects and animations, AJAX Utilities";
				break;
			default:
				return "Now, choose the programming language that best meet your needs.";
				break;
		}
	}
});