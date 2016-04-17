var bio = {"name": "Michael Toback",
           "role": "Software Engineer",
           "contacts": {
           	  "mobile": "408-206-3775",
           	  "email":"michael.toback@gmail.com",
           	  "github":"https://github.com/mtoback",
           	  "linkedin": "https://www.linkedin.com/in/mtoback",
           	  "twitter": "https://twitter.com/michaeltoback",
           	  "skype": "michaeltoback",
           	  "location": "Saratoga, CA"},
           "welcomeMessage": "Welcome to my interactive resume",
           "skills": ["Java", "Python","SQL","HTML", "JavaScript",
                      "CSS","Patent Prosecution"],
           "biopic": "images/me.jpg",
            "display": function(){
            	$("#header").prepend(HTMLbioPic.replace("%data%",bio.biopic));
            	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
                if ("skills" in bio && bio.skills.length > 0) {
                    $("#header").append(HTMLskillsStart);
                        bio.skills.forEach(function(skill){
                         $("#skills").append(HTMLskills.replace("%data%",skill));
                        });
                }
                var footer = $("#footerContacts");
                for(key in bio.contacts){
                    var value = HTMLFooterListItem.replace("%title%",key).replace("%value%",bio.contacts[key]);
                    footer.append(value);
                }
            }};
var projects = {"project_list": [{"title": "Patent Attorney Website",
                "dates":"2008-2014",
                "description":"Developed my own law website first using dreamweaver, then using PHP, HTML, and JavaScript",
                "location": "San Jose, CA",
                "images":["images/law_practice.png"]},
				{"title": "IsBank",
                "dates":"2009-2010",
                "description":"Demonstrated a workflow joint project with Chordiant and IBM",
                "location": "Istanbul, Turkey",
                "images":["images/isbank.jpg"]},
				{"title": "Ness/Chordiant",
                "dates":"2005-2010",
                "description":"Support Ness Team in Bangalore as Scrum Master, and led team on several projects both there and remote.",
                "location": "Bangalore, India",
                "images":["images/ness.png"]},
				{"title": "Internationalization Workflow",
                "dates":"2014",
                "description":"Worked on an Internationalization Workflow Engine out of VMware's Paris office",
                "location": "Paris, France",
                "images":["images/vmware.png"]}                ],
                "display": function(projects){
                	projects.project_list.forEach(function(project){
                		$("#projects").append(HTMLprojectStart);
                		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
                		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.dates));
                		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.description));
                		project.images.forEach(function(image){
                			$(".project-entry:last").append(HTMLprojectImage.replace("%data%",image));
                		});
                	});
                }
            };

var work = {"jobs": [{
	"title": "Sr Member Tech Staff",
	"employer": "VMware",
	"location": "Palo Alto, CA",
	"dates": "2010-present",
	"url": "http://www.vmware.com",
    "image": "images/vmware.png",
	"description": "Worked in various roles on an internal tools team and product team. Currently working for the VxRail Product team as a Full Stack Developer using Python, Java, CSS, HTML, and Javascript on the UI team. Also responsible for the VM and Physical Appliance deployment tools "
}, {
	"title": "Patent Attorney",
	"employer": "Law Office of Michael Toback",
	"location": "San Jose, CA",
	"dates": "2007-present",
	"url": "http://www.toback-ip.com",
    "image": "images/law_firm.jpg",
	"description": "Licensed to practice before the State of California and USPTO. Prosecute patents on behalf of small companies. Also work with my VMware team to generate patents for VMware"
}, {
	"title": "Sr Software Engineer",
	"employer": "Chordiant",
	"location": "Cupertino, CA",
	"dates": "1999-2010",
	"url": "http://www.chordiant.com",
    "image": "images/ball-63527_640.jpg",
	"description": "Sold to Pegasystems. Developed software using Java for a customer support infrastructure product. Also acted as Scrum Master for two large remote teams."
}, {
	"title": "Software Engineer",
	"employer": "Oceania",
	"location": "Palo Alto, CA",
	"dates": "1996-1999",
	"url": "#",
    "image": "images/heartbeat-163709_640.jpg",
	"description": "No longer in business. Clinical Software startup. Developed code in Java, C++ and C for an electronic medical record. Worked closely with product management and business development to create new products."
}, {
	"title": "Sr Member Tech Staff",
	"employer": "GTE Government Systems",
	"location": "Mountain View, CA",
	"dates": "1984-1996",
	"url": "#",
    "image": "images/fighter-jet-63032_640.jpg",
	"description": "Sold to General Dynamics. Worked on various DSP projects in various roles, including Architect, Team Lead, QE, and Systems Analyst. Also designed courses and trained engineers in software process and DSP."
}, {
	"title": "Electronics Engineer",
	"employer": "LLNL",
	"location": "Livermore, CA",
	"dates": "1978-1984",
    "url": "http://llnl.gov",
    "image": "images/llnl.png",
	"description": "Worked on various projects in the energy and biomedical fields as a developer/Architect, including a dual-laser cell sorter,laser isotope separation, and model nuclear repository at the Nevada Test Site "
}],
    "display": function(work){
         work.jobs.forEach(function(job){
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append("<div><img width=100 src='" + job.image + "'></div><div class='workdata'  >")
	    	jobDescr = work.formatJob(job.employer, job.title, job.location, job.dates, job.url, job.description);
	    	$(".work-entry:last .workdata").append(jobDescr)
        $(".work-entry:last .workdata").append("</div><div class='clearfix'></div>");
    	});
     },
    "formatJob" : function(employer, title, location, dates,  url, description){
    	return HTMLworkEmployer.replace("%data%",employer).replace("%url%",url) + HTMLworkTitle.replace("%data%", title) +
    	       HTMLworkLocation.replace("%data%", location) + HTMLworkDates.replace("%data%", dates) +
    	       HTMLworkDescription.replace("%data%", description);
    }

};
var education = {"schools": [{
	"name": "Carnegie-Mellon University",
	"location": "Pittsburgh, PA",
	"degree": "MSEE/BioEng",
	"majors": ["Biomedical Engineering", "Electrical Engineering"],
	"yearsAttended": 2,
	"dates": "1976-1978",
	"url":"http://www.cmu.edu"
	}, {
	"name": "Rensselaer Polytechnic Institute",
	"location": "Troy, NY",
	"degree": "BS Biomed Eng",
	"majors": ["Biomedical Engineering"],
	"dates": "1973-1976",
	"url": "http://www.rpi.edu"
	}, {
	"name": "William Taft Law School",
	"location": "Santa Ana, CA",
	"yearsAttended": 3,
	"degree": "JD",
	"majors": ["Law"],
	"dates": "2001-2006",
	"url": "http://www.taftu.edu/TLS/index.htm"
	}],
	"online": [{"school": "udemy",
            "title": "Front-End Developer Course",
            "date": "2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"},
            {"school": "udemy",
            "title": "Responsive Images",
            "date": 2016,
            "url": "https://www.udacity.com/course/responsive-images--ud882"}],

    "display": function(schools){
    	for (var index in schools){
    	    $("#education").append(HTMLschoolStart);
    	    $(".education-entry:last").append(HTMLschoolName.replace("%data%",schools[index].name).replace("%url%",schools[index].url));
    	    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",schools[index].degree));
    	    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",schools[index].dates));
    	    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",schools[index].location));
    	    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",schools[index].majors.join()));

    	}
    }
    };
	work.display(work);
	projects.display(projects);
	education.display(education.schools);
	$("#mapDiv").append(googleMap);
	bio.display(bio);