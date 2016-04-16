var bio = {"name": "Michael Toback",
           "role": "Software Engineer",
           "contacts": {
           	  "email":"michael.toback@gmail.com",
           	  "linkedin": "https://www.linkedin.com/in/mtoback",
           	  "skype": "michaeltoback",
           	  "github":"https://github.com/mtoback",
           	  "location": "Saratoga, CA"},
           "pictureURL": "images/me.jpg",
           "welcomeMessage": "Welcome to my interactive resume",
           "skills": ["Java", "Python","SQL","HTML", "JavaScript",
                      "CSS","Patent Prosecution"],
            "displayBio": function(){
            	$("#header").prepend(HTMLbioPic.replace("%data%",bio.pictureURL));
            	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
            	if ("skills" in bio){

            	}
            }};
var projects = {"project_list": [{"title": "Patent Attorney Website",
                "date":2014,
                "description":"Developed my own law website using PHP, HTML, and JavaScript",
                "location": "San Jose, CA",
                "images":["images/law_practice.png"]},
				{"title": "IsBank",
                "date":2009,
                "description":"Demonstrated a workflow joint project with Chordiant and IBM",
                "location": "Istanbul, Turkey",
                "images":["images/fry.jpg"]},
				{"title": "Ness/Chordiant",
                "date":"2005-2010",
                "description":"Support Ness Team in Bangalore as Scrum Master, and led team on several projects both there and remote.",
                "location": "Bangalore, India",
                "images":["images/fry.jpg"]},
				{"title": "Internationalization Workflow",
                "date":2014,
                "description":"Worked on an Internationalization Workflow Engine out of VMware's Paris office",
                "location": "Paris, France",
                "images":["images/fry.jpg"]}                ],
                "display": function(projects){
                	projects.project_list.forEach(function(project){
                		$("#projects").append(HTMLprojectStart);
                		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
                		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.date));
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
	"startDate": 2010,
	"description": "Worked in various roles on an internal tools team and product team. Currently working for the VxRail Product team as a Full Stack Developer using Python, Java, CSS, HTML, and Javascript on the UI team. Also responsible for the VM and Physical Appliance deployment tools "
}, {
	"title": "Patent Attorney",
	"employer": "Law Office of Michael Toback",
	"location": "San Jose, CA",
	"startDate": 2007,
	"description": "Licensed to practice before the State of California and USPTO. Prosecute patents on behalf of small companies. Also work with my VMware team to generate patents for VMware"
}, {
	"title": "Sr Software Engineer",
	"employer": "Chordiant",
	"location": "Cupertino, CA",
	"startDate": 1999,
	"endDate": 2010,
	"description": "Developed software using Java for a customer support infrastructure product. Also acted as Scrum Master for two large remote teams."
}, {
	"title": "Software Engineer",
	"employer": "Oceania",
	"location": "Palo Alto, CA",
	"startDate": 1996,
	"endDate": 1999,
	"description": "Clinical Software startup. Developed code in Java, C++ and C for an electronic medical record. Worked closely with product management and business development to create new products."
}, {
	"title": "Sr Member Tech Staff",
	"employer": "GTE Government Systems",
	"location": "Mountain View, CA",
	"startDate": 1984,
	"endDate": 1996,
	"description": "worked on various DSP projects in various roles, including Architect, Team Lead, QE, and Systems Analyst. Also designed courses and trained engineers in software process and DSP."
}, {
	"title": "Electronics Engineer",
	"employer": "LLNL",
	"location": "Livermore, CA",
	"startDate": 1978,
	"endDate": 1984,
	"description": "Worked on various projects in the energy and biomedical fields as a developer/Architect, including a dual-laser cell sorter,laser isotope separation, and model nuclear repository at the Nevada Test Site "
}],
    "displayWork": function(work){
    	$("#workExperience").append(HTMLworkStart);
         work.jobs.forEach(function(job){
	    	//might not have an endDate!
	    	var endDate = "present";
	    	if ("endDate" in job){
	    		endDate = job.endDate;
	    	}
	    	jobDescr = work.formatJob(job.employer, job.title, job.location, job.startDate, endDate, job.description);
	    	$(".work-entry:last").append(jobDescr)
    	});
     },
    "formatJob" : function(employer, title, location, startDate, endDate, description){
    	return HTMLworkEmployer.replace("%data%",employer) + HTMLworkTitle.replace("%data%", title) +
    	       HTMLworkLocation.replace("%data%", location) + HTMLworkDates.replace("%data%", startDate + "-" + endDate) +
    	       HTMLworkDescription.replace("%data%", description);
    }

};
var education = {"schools": [{
	"school": "Carnegie-Mellon University",
	"yearsAttended": 2,
	"location": "Pittsburgh, PA",
	"degree": "MSEE/BioEng",
	"majors": ["Biomedical Engineering", "Electrical Engineering"],
	"minors": [],
	"graduation": 1978
	}, {
	"school": "Rensselaer Polytechnic Institute",
	"yearsAttended": 3,
	"degree": "BS Biomed Eng",
	"location": "Troy, NY",
	"majors": ["Biomedical Engineering"],
	"minors": ["Electrical Engineering", "Economics"],
	"graduation": 1976
	}, {
	"school": "William Taft Law School",
	"yearsAttended": 3,
	"degree": "JD",
	"location": "Santa Ana, CA",
	"majors": ["Law"],
	"minors": [],
	"graduation": 2007
	}],
	"online": [{"school": "udemy",
            "course": "Front-End Developer Course",
            "yearTaken": 2016,
            "courseURL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"},
            {"school": "udemy",
            "course": "Responsive Images",
            "yearTaken": 2016,
            "courseURL": "https://www.udacity.com/course/responsive-images--ud882"}],

    "format": function(schools){
    	for (var index in schools){
    	    $("#education").append(HTMLschoolStart);
    	    $(".education-entry:last").append(HTMLschoolName.replace("%data%",schools[index].school));
    	    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",schools[index].degree));
    	    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",schools[index].graduation));
    	    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",schools[index].location));
    	    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",schools[index].majors.join()));

    	}
    }
    };
    if ("skills" in bio && bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);
    		bio.skills.forEach(function(skill){
    	     $("#skills").append(HTMLskills.replace("%data%",skill));
    		});
    }
	function inName(nameString){
		var names = nameString.split(" ");
		var firstName = names[0];
		var lastName = names[1];
		firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
		lastName = lastName.toUpperCase();
		return firstName + " " + lastName;
	}
	work.displayWork(work);
	projects.display(projects);
	education.format(education.schools);
	$("#mapDiv").append(googleMap);
	bio.displayBio(bio);