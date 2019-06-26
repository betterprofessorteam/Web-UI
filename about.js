class Content{
    constructor(contentElement){
        this.contentElementProp=contentElement;
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
    // this.contentElement = document.querySelector(`div.about[data-tab="${this.tabNum}"]`);
    //functions go here! -Ryan
    dropContent(event) {
        let tab = querySelectorAll(".link");
        
    }
}

let tabs = document.querySelectorAll(".link");
tabs.forEach((tab) => {
    return new Tab(tab)
});