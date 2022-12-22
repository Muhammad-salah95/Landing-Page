const sections = Array.from(document.querySelectorAll('section'));

const menu = document.getElementById('navbar_list');
let numberoflistItems = sections.length;
function createlistItem () {
    for ( section of sections) {
        sectioName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        listItem = document.createElement('li');
        listItem.InnerHTML = '<a id="navbar__list" href = //{sectionLink}'>//{sectioName} </a>';
        navbar__list.appendChild(listItem);
    }

    }
    function sectionInViewport (elem) {
        let sectionpos = elem.getboundindclientrec();
        return (sectionpos.top >= 0);
    }
    function toggleactiveclass(){
       for (section of sections){
        if (sectionInViewport(section)) {
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        } else {
            section.classList.remove('your-active-class');
        }
       }
    } 
        
    
    createlistItem();
    docoument.addEventListenner('scroll',toggleactiveclass);




