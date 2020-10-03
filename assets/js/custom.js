
!function($) {
    "use strict";
    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */
    $(window).on('load', function() {
        $('#loadingview').addClass("loaded");
    });

    /*
      navbar section
    */
    $('.navbar-toggler').on('click', function(){
        $(".aside").toggleClass('aside-open');
        $(".ham").toggleClass('active');
        $("body, html").toggleClass('overflow-hidden');
    });
}(window.jQuery);




let allProjects = [
    {
        technology:'reactjs',
        project : {
                title:'Amazon clone',
                description: 'this is clone of the amazon desktop website with login and add to cart functionality made with reactjs ,firebase and state is managed by react context api',
                technology: 'Reactjs, Html, Css, firebase',
                img:"assets/images/amazon.png",
                projectLink:"https://clone-f8ff9.web.app/"
        }
    },
    {
        technology:'reactjs',
        project : {
                title:'Spotify clone ',
                description:'this is the spotify desktop clone with login ann view playlist functionality made with react using context Api for state managment hosted with firebase',
                technology: 'Reactjs, Html, Css, firebase',
                img:"assets/images/spotify.jpg",
                projectLink:"https://spotify-clone-b0859.web.app/"
        }
    },
    {
        technology:'reactjs',
        project : {
                title:'whatsapp clone',
                description:'this is whatsapp desktop copy which has functionality of creating public rooms and send text messages realtime that is stored in mongodb databse ',
                technology: 'Reactjs, Html, Css, firebase, Expressjs, Nodejs, MongoDb, pusherjs',
                img:"assets/images/whatsapp.png",
                projectLink:"https://whatsapp-clone-d0426.web.app/"
        }
    }
]



function showProject(type) {
    let projects = [];
    if ( type == 'all' ) {
        projects = [...allProjects]
        renderProjects(projects);
    }
    
    if (type === 'reactjs') {
        projects = allProjects.filter(el => el.technology === 'reactjs');
        renderProjects(projects);
    }
}
function renderProjects(projects) {
    $(".portfolio__projects").empty()
    let element = '' 
    for (let i = 0; i < projects.length; i++) {
         element += '<div class="portfolio__projectsItem" onclick="openModal('+i+')"><img src="'+projects[i].project.img+'" /><div> '+ projects[i].project.title +' </div></div>';
    }

    $(".portfolio__projects").append(element);

}

showProject('all');

function openModal(selectedIndex){
    const selectedProject = allProjects[selectedIndex];
    console.log('this is the selected project', selectedProject);
    $('.modal').modal();
    $('#modal1').modal('open');

    $("#modal1").empty()
    let project=`<div class="modal__title"> ${selectedProject.project.title} </div> 
			<div class="modal__description"> ${selectedProject.project.description}  </div> 
			<div class="modal__projectElements">
				<div> 
					<i class="lni lni-link"></i>
					Preview : 
					<a href="${selectedProject.project.projectLink}" target="_blank"> ${selectedProject.project.projectLink} </a>
				</div>
				<div> 
                    <i class="lni lni-code"></i>
                    ${selectedProject.project.technology}
				</div>
			</div>
			<div class="modal__project"> 
				<img src="${selectedProject.project.img}" /> 
            </div>`
    $("#modal1").append(project);
}