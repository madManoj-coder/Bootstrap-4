const cl = console.log;

const not = document.getElementById("not")

const onCheck = (eve) => {
    cl(eve.target)
    eve.target.classList.toggle("fa-xmark")
    eve.target.classList.toggle("fa-bars")
}
not.addEventListener("click", onCheck)


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})