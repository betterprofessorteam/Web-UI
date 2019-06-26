class Content{
    constructor(contentElement){
        this.contentElementProp=contentElement;
    }
    seeAbout(){
        this.contentElementProp.classList.toggle('.something');
    }
}


class Tab {
    constructor(tabElement){
        this.element = tabElement;
        this.tabNum = this.element.dataset.tab;
        this.about = document.querySelectorAll(`.about[data-tab="${this.tabNum}"]`);
        this.about= Array.from(this.about).map(aboutItem => new Content(aboutItem));
        this.element.addEventListener('click', () => this.dropContent());
    }

    //functions go here! -Ryan
    dropContent(event) {
        let tabs = querySelectorAll(".link");
        let drops = querySelectorAll(".about");
        drops.forEach(drop =>{
            drop.style.display="none"
        });

    }
}

let tabs = document.querySelectorAll(".link");
tabs.forEach((tab) => {
    return new Tab(tab)
});