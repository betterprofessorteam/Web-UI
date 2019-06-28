// class Content{
//     constructor(contentElement){
//         this.contentElementProp=contentElement;
//     }
//     seeContent(){
//         this.contentElementProp.classList.toggle('visible');
//     }
// }


class Tab {
    constructor(tabElement){
        this.element = tabElement;
        this.tabNum = this.element.dataset.tab;
        this.about = document.querySelectorAll(`.about[data-tab="${this.tabNum}"]`);
        this.about= Array.from(this.about).map(aboutItem => new Content(aboutItem));
        this.element.addEventListener("click", () => this.dropContent());
    }

    //function
    dropContent() {
        // this.about.seeContent();
        // let tabs = document.querySelectorAll(".link");
       
        let about = document.querySelectorAll(".about");
        about.forEach(aboutItem =>
            aboutItem.style.display = "none"
        );
        this.about.forEach(aboutItem => aboutItem.seeContent());
    }
}
class Content{
    constructor(contentElement){
        this.contentElementProp = contentElement;
    }
    seeContent(){
        this.contentElementProp.style.display = "flex";
    }
}

let tabs = document.querySelectorAll(".link");
tabs.forEach((tab) => {
    return new Tab(tab)
});