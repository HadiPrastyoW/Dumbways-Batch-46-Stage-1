// class Testimonial {
//     constructor(quote, image) {
//         this._quote = quote
//         this._image = image
//     }

//     get quote() {
//         return this._quote
//     }

//     get image() {
//         return this._image
//     }

//     get html() {
//         return `<div class="testimonial">
//             <img src="${this.image}" class="profile-testimonial" />
//             <p class="quote">"${this.quote}"</p>
//             <p class="author">- ${this.author}</p>
//         </div>`
//     }
// }

// class AuthorTestimonial extends Testimonial {
//     constructor(author, quote, image) {
//         super(quote, image)
//         this._author = author
//     }

//     get author() {
//         return this._author
//     }
// }

// class CompanyTestimonial extends Testimonial {
//     constructor(company, quote, image) {
//         super(quote, image)
//         this._company = company
//     }

//     get author() {
//         return this._company + " Company"
//     }
// }

// const testimonial1 = new AuthorTestimonial("25 HP SAMSUNG TERBARU", "Mantap, keren banget Desainnya", "assets/images/hp.jpg")

// const testimonial2 = new AuthorTestimonial("KONDISI MUDIK LEBARAN 2023", "Macet tak tertahankan", "assets/images/mudik.jpeg")

// const testimonial3 = new CompanyTestimonial("MUDIK GRATIS 2023","Mudik asik gratis coy", "assets/images/tiket.jpeg")

// let testimonialData = [testimonial1, testimonial2, testimonial3]
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].html
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML

const testimonialData = [
    {
        author: "25 HP SAMSUNG TERBARU",
        quote: "Mantap, keren banget desainnya",
        image: "assets/images/hp.jpg",
        rating: 5
    },
    {
        author: "KONDISI MUDIK LEBARAN 2023",
        quote: "Macet tak tertahankan",
        image: "assets/images/mudik.jpeg",
        rating: 1
    },
    {
        author: "MUDIK GRATIS 2023",
        quote: "Mudik asik gratis coy",
        image: "assets/images/TIKET.JPEG",
        rating: 3
    },
    {
        author: "HARGA EMAS NAIK",
        quote: "Mantap, Sekali Nik",
        image: "assets/images/emas.jpg",
        rating: 3
    },
    {
        author: "RIZKY-NAZAR",
        quote: "Ganteng and Coll",
        image: "assets/images/nazar.jpg",
        rating: 5
    },
    {
        author: "RIZKY-NAZAR DAN SYIFA-HADJU",
        quote: "Good Mantap!",
        image: "assets/images/rizky.jpg",
        rating: 4
    },
]


function allTestimonials() {
    let testimonialHTML = '';

    testimonialData.forEach((item) => {
        testimonialHTML += `<div class="testimonial">
                     <img src="${item.image}" class="profile-testimonial" />
                     <p class="quote">"${item.quote}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>`
    })

    document.getElementById('testimonials').innerHTML = testimonialHTML;
}

allTestimonials()


function filterTestimonials(rating) {
    let testimonialHTML = '';

    

    const testimonialFiltered = testimonialData.filter((item) => {
        return item.rating === rating
    })

   

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}