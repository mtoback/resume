var bio = {"name": "Michael Toback",
           "role": "Software Engineer",
           "contactInfo": {
           	  "email":"michael.toback@gmail.com",
           	  "linkedin": "https://www.linkedin.com/in/mtoback",
           	  "skype": "michaeltoback",
           	  "github":"https://github.com/mtoback",
           	  "location": "Saratoga, CA"},
           "pictureURL": "images/me.jpg",
           "welcomeMessage": "Welcome to my interactive resume",
           "skills": ["Java", "Python","SQL","HTML", "JavaScript",
                      "CSS","Patent Prosecution"]};
var project = {"title": "Patent Attorney Website",
                "date":2014,
                "description":"Developed my own law website using PHP, HTML, and JavaScript",
                "images":["images/law_practice.png"]};
var work = [{
	"title": "Sr Member Tech Staff",
	"employer": "VMware",
	"location": "Palo Alto",
	"startDate": 2010,
	"description": "Worked in various roles on an internal tools team and product team. Currently working for the VxRail Product team as a Full Stack Developer using Python, Java, CSS, HTML, and Javascript on the UI team. Also responsible for the VM and Physical Appliance deployment tools "
}, {
	"title": "Patent Attorney",
	"employer": "self",
	"location": "San Jose",
	"startDate": 2007,
	"description": "Licensed to practice before the State of California and USPTO. Prosecute patents on behalf of small companies. Also work with my VMware team to generate patents for VMware"
}, {
	"title": "Sr Software Engineer",
	"employer": "Chordiant",
	"location": "Cupertino",
	"startDate": 1999,
	"endDate": 2010,
	"description": "Developed software using Java for a customer support infrastructure product. Also acted as Scrum Master for two large remote teams."
}, {
	"title": "Software Engineer",
	"employer": "Oceania",
	"location": "Palo Alto",
	"startDate": 1996,
	"endDate": 1999,
	"description": "Clinical Software startup. Developed code in Java, C++ and C for an electronic medical record. Worked closely with product management and business development to create new products."
}, {
	"title": "Sr Member Tech Staff",
	"employer": "GTE Government Systems",
	"location": "Mountain View",
	"startDate": 1984,
	"endDate": 1996,
	"description": "worked on various DSP projects in various roles, including Architect, Team Lead, QE, and Systems Analyst. Also designed courses and trained engineers in software process and DSP."
}, {
	"title": "Electronics Engineer",
	"employer": "LLNL",
	"location": "Livermore",
	"startDate": 1978,
	"endDate": 1984,
	"description": "Worked on various projects in the energy and biomedical fields as a developer/Architect, including a dual-laser cell sorter,laser isotope separation, and model nuclear repository at the Nevada Test Site "
}];
var educationObj = {"schools": [{
	"school": "Carnegie-Mellon University",
	"yearsAttended": 2,
	"city": "Pittsburgh",
	"majors": ["Biomedical Engineering", "Electrical Engineering"],
	"minors": [],
	"graduation": 1978
	}, {
	"school": "Rensselaer Polytechnic Institute",
	"yearsAttended": 3,
	"city": "Troy",
	"majors": ["Biomedical Engineering"],
	"minors": ["Electrical Engineering", "Economics"],
	"graduation": 1976
	}, {
	"school": "William Taft Law School",
	"yearsAttended": 3,
	"city": "Santa Ana",
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
            "courseURL": "https://www.udacity.com/course/responsive-images--ud882"}]};
    function formatJob(employer, title, location, startDate, endDate, description){
    	return HTMLworkEmployer.replace("%data%",employer) + HTMLworkTitle.replace("%data%", title) +
    	       HTMLworkLocation.replace("%data%", location) + HTMLworkDates.replace("%data%", startDate + "-" + endDate) +
    	       HTMLworkDescription.replace("%data%", description);
    }
    if ("skills" in bio && bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);
    		bio.skills.forEach(function(skill){
    	     $("#skills").append(HTMLskills.replace("%data%",skill));
    		});
    }
    $("#workExperience").append(HTMLworkStart);
    work.forEach(function(job){
    	//might not have an endDate!
    	var endDate = "present";
    	if ("endDate" in job){
    		endDate = job.endDate;
    	}
    	jobDescr = formatJob(job.employer, job.title, job.location, job.startDate, endDate, job.description);
    	$(".work-entry:last").append(jobDescr)
    });
	function inName(nameString){
		var names = nameString.split(" ");
		var firstName = names[0];
		var lastName = names[1];
		firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
		lastName = lastName.toUpperCase();
		return firstName + " " + lastName;
	}