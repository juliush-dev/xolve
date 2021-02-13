export function projectFunctionalities() {
    let projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        let footer = project.querySelector('footer');
        let icon = footer.querySelector('.project-techno span');
        icon.onclick = () => {
            let footerCopy = project.querySelector('.footer-copy');
            let iconCopy;
            if(!footerCopy){
                footerCopy = footer.cloneNode(true);
                iconCopy = footerCopy.querySelector('.project-techno span');
                footerCopy.classList.add('footer-copy');
                iconCopy.innerHTML = "fullscreen_exit";
                footer.style.visibility = 'hidden';
                project.appendChild(footerCopy);

                iconCopy.onclick = () => {
                    footerCopy.remove();
                    footer.style.visibility = 'visible';
                }

            }
        }

    })

}