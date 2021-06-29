const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const image = document.querySelector(".image")
const testimonial = document.querySelector(".testimonial")

const users = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    feedback:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    image: "/images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    feedback:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: "/images/image-john.jpg",
  },
]

let slide = 0
function navigation() {
  if (slide > users.length - 1) {
    slide = 0
  }
  image.innerHTML = ` <img src="${users[slide].image}" alt="Image of Taniya" />`
  testimonial.innerHTML = `<img src="images/pattern-quotes.svg" alt="" />
   <p>
     ${users[slide].feedback}
   </p>
   <span class="name">${users[slide].name}</span
   ><span class="role">${users[slide].role}</span>`
  slide++
}
navigation()
prevBtn.addEventListener("click", navigation)
nextBtn.addEventListener("click", navigation)
