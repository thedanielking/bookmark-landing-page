// creating data
const data = [
    {
        id: 1,
        title: "Bookmark in one click",
        desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        image: "../images/illustration-features-tab-1.svg"
    },
    {
        id: 2,
        title: "Intelligent search",
        desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: "../images/illustration-features-tab-2.svg"
    },
    {
        id: 3,
        title: "Share your bookmarks",
        desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: "../images/illustration-features-tab-3.svg"
    }
]


// declarations
const tabList = document.querySelectorAll("#tabList li");


tabList.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>{
        tabList.forEach((tab)=>{
            tab.classList.remove("active");
        })

        tab.classList.add("active");
        updateSection(index);
    })
})



const updateSection = (index)=>{
    index += 1;
    data.map((items)=>{
        if(index === items.id){
            let sectionDiv = document.createElement("div");
            sectionDiv.classList.add("section");
            sectionDiv.classList.add("animate-[fadeIn_3s_ease-in-out_forwards]");
            sectionDiv.classList.add("md:justify-center");
            sectionDiv.classList.add("md:flex-row");
            sectionDiv.classList.add("gap-9");
            sectionDiv.classList.add("items-center");
            sectionDiv.classList.add("flex-col");
            sectionDiv.classList.add("flex");

            sectionDiv.innerHTML =
            `<div class="w-48 relative md:w-full">
            <img src="${items.image}" alt="tab${items.id}">
            <div class="bluebackgroundLeft"></div>
          </div>
          <div class="text-center space-y-2 md:text-left md:space-y-4">
            <h2 class="text-2xl font-medium">${items.title}</h2>
            <p class="text-(--clr--grayblue)">${items.desc}</p>
            <button class="hidden md:block bg-(--clr--blue) text-white py-3 px-6 rounded hover:bg-white cursor-pointer hover:text-(--clr--blue) hover:border">More Info</button>
          </div>`
          const articleContainer = document.querySelectorAll(".articleContainer .section")
          const article = document.querySelector(".articleContainer")
          article.replaceChild(sectionDiv, articleContainer[1]);
        }
    })
}



// faq accordion
const accordionBtns = document.querySelectorAll('.faq div button')


accordionBtns .forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const accordionDescription = btn.nextElementSibling
        const openArrow = btn.querySelector("div #open")
        const closeArrow = btn.querySelector('div #close')


        if(accordionDescription.style.maxHeight){
            accordionDescription.style.maxHeight = null
            openArrow.style.display = 'block'
            closeArrow.style.display = 'none'
        } else{
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + "px";
            openArrow.style.display = 'none'
            closeArrow.style.display = 'block'
        }

    })
})




// form manipulation
const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");

const inputContainer = document.querySelector("#inputContainer");

const errorImg = document.querySelector("#inputContainer img");

const errorMessage = document.querySelector("#inputContainer").nextElementSibling;



formElement.addEventListener("submit", e=>{
    e.preventDefault();
    const isValidEmail = /.+@.+\..+/;

    const email = document.querySelector("input").value;

    if(email === ""){
        inputContainer.classList.add("error");
        errorImg.classList.remove("hidden")
        errorMessage.classList.remove("hidden");

    }else if(!isValidEmail.test(email)){
        inputContainer.classList.add("error");
        errorImg.classList.remove("hidden")
        errorMessage.classList.remove("hidden");
    }else{
        inputContainer.classList.remove("error");
        errorImg.classList.add("hidden")
        errorMessage.classList.add("hidden");
    }
    
})


// side nav
const sidenav = document.querySelector("#sideNav");

const menuBtn = document.querySelector("#menuBtn");

const closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", ()=>{
    sidenav.classList.remove("hidden")
})

closeBtn.addEventListener("click", ()=>{
    sidenav.classList.add("hidden")
})













