class Content{
    constructor(contentElement){
        this.contentElementProp=contentElement;
    }
}


class Tab {
    constructor(tabElement){
        this.element = tabElement;
        this.tabNum = this.element.dataset.tab;
    }
    // this.contentElement = document.querySelector(`div.about[data-tab="${this.tabNum}"]`);
    
}

let tabs = document.querySelectorAll(".link");
tabs.forEach((tab) => {
    return new Tab(tab)
});